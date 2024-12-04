import { FC, useEffect, useState } from "react";
import { Box, Info } from "../../blocks";
import {
  BoxLayout,
  ContentLayout,
  PushWalletLoadingContent,
  WalletSkeletonScreen,
  WalletReconstructionErrorContent,
  DrawerWrapper,
  ErrorContent,
  LoadingContent,
} from "../../common";
import { WalletProfile } from "./components/WalletProfile";
import { WalletTabs } from "./components/WalletTabs";
import api from "../../services/api";
import { PushWallet } from "../../services/pushWallet/pushWallet";
import { APP_ROUTES, ENV } from "../../constants";
import secrets from "secrets.js-grempe";
import { useGlobalState } from "../../context/GlobalContext";
import {
  useAuthenticateConnectedUser,
  useDynamicContext,
} from "@dynamic-labs/sdk-react-core";
import { getWalletlist } from "./Wallet.utils";
import { WalletListType } from "./Wallet.types";
import { AppConnections } from "../../common/components/AppConnections";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../context/AppContext";

export type WalletProps = {};

const Wallet: FC<WalletProps> = () => {
  const { state, dispatch } = useGlobalState();
  const [createAccountLoading, setCreateAccountLoading] = useState(true);
  const [error, setError] = useState("");
  const {
    state: { externalWalletAuthState },
    dispatch: appDispatch,
  } = useAppState();
  const { primaryWallet,setShowAuthFlow } = useDynamicContext();
  const { authenticateUser, isAuthenticating } = useAuthenticateConnectedUser();
  const [showCreateNewWalletModal, setShowCreateNewWalletModal] =
    useState(false);
  const [selectedWallet, setSelectedWallet] = useState<WalletListType>();

  const navigate = useNavigate();

  const createWalletAndGenerateMnemonic = async (userId: string) => {
    try {
      setCreateAccountLoading(true);
      const instance = await PushWallet.signUp(
        import.meta.env.VITE_APP_ENV as ENV
      );

      const mnemonicHex = Buffer.from(instance.mnemonic).toString("hex");
      const shares = secrets.share(mnemonicHex, 3, 2);

      await api.post(`/mnemonic-share/${userId}`, { share: shares[0] });
      localStorage.setItem(`mnemonicShare2:${userId}`, shares[1]);
      await instance.storeMnemonicShareAsEncryptedTx(
        userId,
        shares[2],
        instance.mnemonic
      );
      await instance.registerPushAccount();

      dispatch({ type: "INITIALIZE_WALLET", payload: instance });

      console.info("Wallet created and mnemonic split into shares", { userId });
    } catch (err) {
      console.error("Error creating wallet:", err);
      // // When the user rejects the creation of new wallet, redirect the user back to auth with error
      // setError("Failed to create wallet. Please try again.");
      // navigate(APP_ROUTES.AUTH)
      throw err;
    } finally {
      setCreateAccountLoading(false);
    }
  };

  const reconstructWallet = async (share1: string, share2: string) => {
    try {
      setCreateAccountLoading(true);
      const mnemonicHex = secrets.combine([share1, share2]);
      const mnemonic = Buffer.from(mnemonicHex, "hex").toString();
      const instance = await PushWallet.logInWithMnemonic(
        mnemonic,
        import.meta.env.VITE_APP_ENV as ENV
      );

      dispatch({ type: "INITIALIZE_WALLET", payload: instance });

      console.info("Wallet reconstructed successfully");
    } catch (err) {
      console.log("Error in reconstructing wallet", err);
      console.error("Error reconstructing wallet:", err);
      setError("Failed to reconstruct wallet. Please try again.");
      throw err;
    } finally {
      setCreateAccountLoading(false);
    }
  };

  const fetchUserProfile = async (token: string) => {
    try {
      setCreateAccountLoading(true);
      const response = await api.get("/auth/user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const userId = response.data.id;
      dispatch({ type: "SET_USER", payload: response.data });
      dispatch({ type: "SET_AUTHENTICATED", payload: true });

      if (!state.wallet) {
        let share1, share2, share3;

        // Try share1 + share2 combination first
        try {
          const mnemonicShareResponse = await api.get(
            `/mnemonic-share/${userId}`
          );
          share1 = mnemonicShareResponse.data.share;
          share2 = localStorage.getItem(`mnemonicShare2:${userId}`);

          if (share1 && share2) {
            console.info("Reconstructing wallet with share1 and share2", {
              userId,
            });
            await reconstructWallet(share1, share2);
            return;
          }
        } catch (error) {
          console.debug("Share1 not available", {
            userId,
            error: (error as Error).message,
          });
        }

        // Try combinations with share3 if needed
        if (!share1 || !share2) {
          try {
            share3 = await PushWallet.retrieveMnemonicShareFromTx(
              import.meta.env.VITE_APP_ENV as ENV,
              userId
            );

            if (share1 && share3) {
              console.info("Reconstructing wallet with share1 and share3", {
                userId,
              });
              await reconstructWallet(share1, share3);
              return;
            }

            if (share2 && share3) {
              console.info("Reconstructing wallet with share2 and share3", {
                userId,
              });
              await reconstructWallet(share2, share3);
              return;
            }
          } catch (error) {
            console.debug("Share3 not available", {
              userId,
              error: (error as Error).message,
            });
          }
        }

        // Only single or no share is found directly ask user if they want to create a new wallet or go back
        const hasAnyShare = share1 || share2 || share3;
        console.log("Only single share is present", hasAnyShare);
        if (hasAnyShare) {
          setShowCreateNewWalletModal(true);
          return;
        }

        console.info("Creating new wallet", {
          userId,
          availableShares: {
            share1: !!share1,
            share2: !!share2,
            share3: !!share3,
          },
        });

        await createWalletAndGenerateMnemonic(userId);
      }
    } catch (err) {
      console.error("Error fetching user profile:", err);
      setError("Failed to fetch user profile. Please try again.");
      handleResetAndRedirectUser();
      throw err;
    } finally {
      setCreateAccountLoading(false);
    }
  };

  useEffect(() => {
    const initializeProfile = async () => {
      try {
        if (state.jwt) {
          setCreateAccountLoading(true);

          await fetchUserProfile(state.jwt);
        } 
        // else if (!primaryWallet) navigate(APP_ROUTES.AUTH);
        /* We don't need to fetch push user as of now when user continues with wallet
         This function fetches the already created push wallet */

        // let pushWallet;
        // const signer = await PushSigner.initialize(primaryWallet, "DYNAMIC");

        // pushWallet = await PushWallet.loginWithWallet(
        //   signer,
        //   config.APP_ENV as ENV
        // );

        // if (pushWallet)
        //   dispatch({ type: "INITIALIZE_WALLET", payload: pushWallet });
        // else {
        //   console.log(
        //     "Could not find user in wallet.tsx file after push wallet"
        //   );
        // }
      } catch (err) {
        console.error("Error initializing profile:", err);
        setError("Failed to initialize profile");
        handleResetAndRedirectUser();
      } finally {
        setCreateAccountLoading(false);
      }
    };

    initializeProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [primaryWallet]);

  const handleCreateNewWallet = async () => {
    try {
      await createWalletAndGenerateMnemonic(state.user.id);
    } catch (error) {
      console.log("Error in creating new Wallet", error);
      handleResetAndRedirectUser();
    } finally {
      setShowCreateNewWalletModal(false);
    }
  };

  const handleResetAndRedirectUser = () => {
    sessionStorage.removeItem("jwt");
    dispatch({ type: "RESET_AUTHENTICATED" });
    dispatch({ type: "RESET_USER" });
    localStorage.clear();
    navigate(APP_ROUTES.AUTH);
  };

  useEffect(() => {
    if (state?.wallet?.attachedAccounts.length)
      setSelectedWallet(
        getWalletlist(state?.wallet?.attachedAccounts, state.wallet)[0]
      );
  }, [state?.wallet?.attachedAccounts]);

  useEffect(() => {
    (async()=>{

   
    if (primaryWallet && !primaryWallet.isAuthenticated) {
      await authenticateUser();
      setTimeout(()=>{
        if(externalWalletAuthState === 'loading')
        {
          console.debug('after 10 seocnds',externalWalletAuthState)
          setShowAuthFlow(false);
          // appDispatch({ type: "SET_EXTERNAL_WALLET_TIMEOUT_STATE" });
        
        }
       
      },5000)
     
      // const startTime = Date.now();
      console.debug("Started timeout logic");
  
      // // Define the monitoring logic
      // const authenticateAndMonitor = async () => {
  
      //   const checkAuthInterval = setInterval(() => {
      //     const timePassed = Date.now() - startTime;
  
      //     console.debug("Time passed:", timePassed);
  
      //     if (externalWalletAuthState === "loading" && timePassed >= 10000) {
      //       console.debug("10 seconds passed; dispatching timeout state");
      //       appDispatch({ type: "SET_EXTERNAL_WALLET_TIMEOUT_STATE" });
      //       clearInterval(checkAuthInterval);
      //     }
  
      //     if (externalWalletAuthState === "success") {
      //       console.debug("Authentication succeeded; stopping interval");
      //       clearInterval(checkAuthInterval);
      //     }
      //   }, 500); // Check every 500ms
      //   await authenticateUser(); // Trigger authentication

      //   return () => clearInterval(checkAuthInterval); // Cleanup the interval
      // };
  
      // const cleanupPromise = authenticateAndMonitor();
  
      // return () => {
      //   cleanupPromise.then(cleanupFn => {
      //     if (typeof cleanupFn === "function") cleanupFn();
      //   });
      // };
    }
  })();
  }, [primaryWallet?.isAuthenticated]); // Minimal dependencies
  
  

  const showAppConnectionContainer = state?.wallet?.appConnections.some(
    (cx) => cx.isPending === true
  );

  if (createAccountLoading)
    return <WalletSkeletonScreen content={<PushWalletLoadingContent />} />;

  if (showCreateNewWalletModal)
    return (
      <WalletSkeletonScreen
        content={
          <WalletReconstructionErrorContent
            onSuccess={handleCreateNewWallet}
            onError={handleResetAndRedirectUser}
          />
        }
      />
    );

  return (
    <ContentLayout>
      <BoxLayout>
        <Box
          flexDirection="column"
          display="flex"
          width="376px"
          padding="spacing-md"
          gap="spacing-sm"
          position="relative"
        >
          {showAppConnectionContainer && (
            <AppConnections
              selectedWallet={selectedWallet}
              appConnection={
                state.wallet.appConnections[
                  state.wallet.appConnections.length - 1
                ]
              }
            />
          )}
          <WalletProfile selectedWallet={selectedWallet} />
          <WalletTabs
            walletList={getWalletlist(
              state?.wallet?.attachedAccounts,
              state.wallet
            )}
            selectedWallet={selectedWallet}
            setSelectedWallet={setSelectedWallet}
          />
          {/* {!state?.wallet && primaryWallet && (
            <CreateAccount
              isLoading={createAccountLoading}
              setIsLoading={setCreateAccountLoading}
            />
          )} */}
          {externalWalletAuthState === "loading" && (
            <DrawerWrapper>
              <LoadingContent
                title="Sign to verify"
                subTitle="Allow the site to connect and continue"
                onClose={() =>
                  appDispatch({ type: "SET_EXTERNAL_WALLET_REJECT_STATE" })
                }
              />
            </DrawerWrapper>
          )}
          {externalWalletAuthState === "rejected" && (
            <DrawerWrapper>
              <ErrorContent
                icon={<Info size={32} color="icon-state-danger-subtle" />}
                title="Could not verify"
                subTitle="Please try connecting again"
                onRetry={() => authenticateUser()}
                onClose={() => navigate(APP_ROUTES.AUTH)}
                note="Closing this window will log you out."
              />
            </DrawerWrapper>
          )}
          {externalWalletAuthState === "timeout" && (
            <DrawerWrapper>
              <ErrorContent
                icon={<Info size={32} color="icon-state-danger-subtle" />}
                title="Connection timed out"
                subTitle="Please try connecting again"
                onRetry={() => authenticateUser()}
                onClose={() => navigate(APP_ROUTES.AUTH)}
                note="Closing this window will log you out."
              />
            </DrawerWrapper>
          )}
        </Box>
      </BoxLayout>
    </ContentLayout>
  );
};

export { Wallet };
