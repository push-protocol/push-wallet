import { FC } from "react";
import BlockiesSvg from "blockies-react-svg";
import {
  Asterisk,
  Box,
  Copy,
  Cube,
  Dropdown,
  HoverableSVG,
  Link,
  Lock,
  Logout,
  Menu,
  MenuItem,
  PushLogo,
  Settings,
  Text,
} from "../../../blocks";
import { centerMaskWalletAddress } from "../../../common";
import { useGlobalState } from "../../../context/GlobalContext";

export type WalletProfileProps = {};

const WalletProfile: FC<WalletProfileProps> = () => {
  const { state } = useGlobalState();
  const parsedWallet = state?.wallet?.signerAccount.split(':')[2];
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
      width="-webkit-fill-available"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        width="-webkit-fill-available"
      >
        <PushLogo height={48} width={48} />
        <Box display="flex" gap="spacing-xxs">
          <HoverableSVG icon={<Lock size={24} color="icon-primary" />} />
          <Dropdown
            overlay={
              <Menu>
                <MenuItem label="Linked Accounts" />
                <MenuItem label="App Permissions" icon={<Cube />} />
                <MenuItem label="Passkeys" />
                <MenuItem label="Secret Recovery Phrase" icon={<Asterisk />} />
                <MenuItem label="Log Out" icon={<Logout />} />
              </Menu>
            }
          >
            <Settings size={24} color="icon-primary" />
          </Dropdown>
        </Box>
      </Box>
      <Box
        width="56px"
        height="56px"
        borderRadius="radius-xl"
        overflow="hidden"
        alignSelf="center"
      >
        <BlockiesSvg address={parsedWallet} />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Text variant="bl-semibold">Push Wallet</Text>
        <Box display="flex" gap="spacing-xxxs">
          <Text variant="bes-semibold" color="text-tertiary">
            {centerMaskWalletAddress(
              parsedWallet
            )}
          </Text>
          <Copy color="icon-tertiary" />
        </Box>
      </Box>
    </Box>
  );
};

export { WalletProfile };
