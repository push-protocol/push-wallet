export enum WALLET_TO_APP_ACTION {
  AUTH_STATUS = "authStatus",
  IS_LOGGED_IN = "isLoggedIn",

  APP_CONNECTION_REJECTED = "appConnectionRejected",
  APP_CONNECTION_SUCCESS = "appConnectionSuccess",

  IS_LOGGED_OUT = "loggedOut",
}

export enum APP_TO_WALLET_ACTION {
  NEW_CONNECTION_REQUEST = "newConnectionRequest",
  SIGN_MESSAGE = "signMessage",
}
