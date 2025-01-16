import React, { useEffect } from "react";
import {
  useDynamicContext,
  useWalletOptions,
} from "@dynamic-labs/sdk-react-core";
import { Box, Spinner, Text } from "blocks";
import { APP_TO_APP_ACTION } from "common";

const PhantomRedirect = () => {
  const { walletOptions, selectWalletOption } = useWalletOptions();

  const { primaryWallet } = useDynamicContext();

  useEffect(() => {
    if (walletOptions) {
      selectWalletOption("phantom");
      if (primaryWallet) {
        window.opener?.postMessage(
          {
            type: APP_TO_APP_ACTION.PHANTOM_SUCCESS,
            state: "Connection Successful",
          },
          window.location.origin
        );

        window.close();
      }
    }
  }, [primaryWallet, walletOptions]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap="spacing-sm"
      height="100vh"
      width="100vh"
      backgroundColor="surface-secondary"
    >
      <Text variant="bl-semibold">Connecting to Phantom Wallet...</Text>
      <Spinner variant="primary" size="medium" />
    </Box>
  );
};

export { PhantomRedirect };
