import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { PushWallet } from "../services/pushWallet/pushWallet";
import { PostMessageHandler } from "../services/messageHandler/messageHandler";
import { extractStateFromUrl, fetchJwtUsingState } from "../helpers/AuthHelper";
import { useDynamicContext, Wallet } from "@dynamic-labs/sdk-react-core";

// Define the shape of the global state
export type GlobalState = {
  wallet: PushWallet | null;
  dynamicWallet: Wallet | null;
  theme: "light" | "dark";
  user: any;
  isAuthenticated: boolean;
  jwt: string | null;
  walletLoadState: "idle" | "success" | "loading" | "rejected";
  messageSignState: "idle" | "loading" | "rejected";
  externalWalletAppConnectionStatus: "notReceived" | "connected";
};

// Define actions for state management
export type GlobalAction =
  | { type: "INITIALIZE_WALLET"; payload: PushWallet }
  | { type: "SET_DYNAMIC_WALLET"; payload: Wallet }
  | { type: "RESET_WALLET" }
  | { type: "SET_THEME"; payload: "light" | "dark" }
  | { type: "SET_USER"; payload: any }
  | { type: "SET_AUTHENTICATED"; payload: boolean }
  | { type: "SET_JWT"; payload: string }
  | { type: "SET_WALLET_LOAD_STATE"; payload: GlobalState["walletLoadState"] }
  | { type: "RESET_AUTHENTICATED" }
  | { type: "RESET_USER" }
  | { type: "SET_MESSAGE_SIGN_LOAD_STATE" }
  | { type: "SET_MESSAGE_SIGN_REJECT_STATE" }
  | {
      type: "SET_EXTERNAL_WALLET_APP_CONNECTION_STATUS";
      payload: GlobalState["externalWalletAppConnectionStatus"];
    }
  | { type: "RESET_MESSAGE_SIGN" };

// Initial state
const initialState: GlobalState = {
  wallet: null,
  dynamicWallet: null,
  theme: "light",
  user: null,
  isAuthenticated: false,
  jwt: null,
  walletLoadState: "idle",
  messageSignState: "idle",
  externalWalletAppConnectionStatus: "notReceived",
};

// Reducer function to manage state transitions
function globalReducer(state: GlobalState, action: GlobalAction): GlobalState {
  switch (action.type) {
    case "INITIALIZE_WALLET":
      return {
        ...state,
        wallet: action.payload,
      };
    case "SET_DYNAMIC_WALLET":
      return {
        ...state,
        dynamicWallet: action.payload,
      };
    case "RESET_WALLET":
      return {
        ...state,
        wallet: null,
        walletLoadState: "idle",
        dynamicWallet: null,
      };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_AUTHENTICATED":
      return { ...state, isAuthenticated: action.payload };
    case "SET_JWT":
      return { ...state, jwt: action.payload };
    case "SET_WALLET_LOAD_STATE":
      return { ...state, walletLoadState: action.payload };
    case "RESET_AUTHENTICATED":
      return {
        ...state,
        isAuthenticated: false,
        walletLoadState: "idle",
        wallet: null,
        dynamicWallet: null,
        jwt: null,
      };
    case "RESET_USER":
      return {
        ...state,
        user: null,
        walletLoadState: "idle",
        dynamicWallet: null,
        wallet: null,
        jwt: null,
      };
    case "RESET_MESSAGE_SIGN":
      return {
        ...state,
        messageSignState: "idle",
      };
    case "SET_MESSAGE_SIGN_LOAD_STATE":
      return {
        ...state,
        messageSignState: "loading",
      };
    case "SET_MESSAGE_SIGN_REJECT_STATE":
      return {
        ...state,
        messageSignState: "rejected",
      };
    case "SET_EXTERNAL_WALLET_APP_CONNECTION_STATUS":
      return { ...state, externalWalletAppConnectionStatus: action.payload };
    default:
      return state;
  }
}

// Create context
const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<GlobalAction>;
}>({
  state: initialState,
  dispatch: () => null, // Placeholder function for initial context
});

// Custom hook to use the GlobalContext
export function useGlobalState() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return context;
}

// Provider component to wrap around your app
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const { primaryWallet, sdkHasLoaded } = useDynamicContext();

  const stateParam = extractStateFromUrl();

  const storedToken = sessionStorage.getItem("jwt");
  /* This hook handles the logic for listening to the app connection requests for push wallet */
  // useEffect(() => {
  //   if (state.wallet) {
  //     new PostMessageHandler(
  //       undefined,
  //       state.wallet,
  //       () => dispatch({ type: "INITIALIZE_WALLET", payload: state.wallet }),
  //       dispatch
  //     );
  //   } else {
  //     new PostMessageHandler(undefined, undefined, () => {}, dispatch);
  //   }
  // }, [state.wallet]);

  // /* This hook handles the logic for listening to the app connection requests for external wallet*/
  // useEffect(() => {
  //   if (!state?.wallet && primaryWallet) {
  //     new PostMessageHandler(primaryWallet, undefined, () => {}, dispatch);
  //   } else {
  //     new PostMessageHandler(undefined, undefined, () => {}, dispatch);
  //   }
  // }, [primaryWallet]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        dispatch({ type: "SET_WALLET_LOAD_STATE", payload: "loading" });

        console.log("State Param", stateParam);

        // This condition is valid for social login and email for redirection during login
        if (stateParam) {
          const jwtToken = await fetchJwtUsingState({
            stateParam,
          });

          sessionStorage.setItem("jwt", jwtToken);

          dispatch({ type: "SET_JWT", payload: jwtToken });

          const url = new URL(window.location.href);

          url.searchParams.delete("state");

          window.history.replaceState({}, document.title, url.toString());

          dispatch({ type: "SET_WALLET_LOAD_STATE", payload: "success" });
        }

        // This condition is valid for social login and email for during reload
        if (storedToken) {
          dispatch({ type: "SET_JWT", payload: storedToken });

          dispatch({ type: "SET_WALLET_LOAD_STATE", payload: "success" });
        }

        // This condition is valid for continue with wallet for during login and reload
        if (primaryWallet) {
          dispatch({ type: "SET_WALLET_LOAD_STATE", payload: "success" });
          dispatch({ type: "SET_DYNAMIC_WALLET", payload: primaryWallet });
        }

        if (!stateParam && !storedToken && !primaryWallet && sdkHasLoaded) {
          dispatch({ type: "SET_WALLET_LOAD_STATE", payload: "rejected" });
        }
      } catch (error) {
        dispatch({ type: "SET_WALLET_LOAD_STATE", payload: "rejected" });
        console.error("Error creating wallet:", error);
        throw error;
      }
    };

    fetchUser();
  }, [stateParam, storedToken, primaryWallet, sdkHasLoaded]);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
