import { FC, useState } from "react";
import { Box, Tabs } from "../../../blocks";
import { WalletActivityList } from "./WalletActivityList";

import { MyWallets } from "./MyWallets";
import { useGlobalState } from "../../../context/GlobalContext";
import { WalletListType } from "../Wallet.types";
import { LoadingPage } from "../../../pages/LoadingPage";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export type WalletTabsProps = {
  walletList: WalletListType[];
  selectedWallet: WalletListType;
  setSelectedWallet: React.Dispatch<React.SetStateAction<WalletListType>>;
  isLoading: boolean;
};

const WalletTabs: FC<WalletTabsProps> = ({
  walletList,
  selectedWallet,
  setSelectedWallet,
  isLoading,
}) => {
  const [activeTab, setActiveTab] = useState("activity");
  const { state } = useGlobalState();
  const { primaryWallet } = useDynamicContext();


  console.log("LOADING----", isLoading);
  return (
    <Box height="340px">
      {isLoading ? (
        <LoadingPage isLoading={isLoading} />
      ) : (
        <Tabs
          items={[
            {
              label: "Activity",
              key: "activity",
              children: (
                <WalletActivityList
                  address={selectedWallet?.fullAddress || primaryWallet?.address}
                />
              ),
            },
            ...(state.wallet
              ? [
                  {
                    label: "My Wallets",
                    key: "wallets",
                    children: (
                      <MyWallets
                        walletList={walletList}
                        setSelectedWallet={setSelectedWallet}
                        selectedWallet={selectedWallet}
                      />
                    ),
                  },
                ]
              : []),
          ]}
          activeKey={activeTab}
          onChange={(activeKey) => setActiveTab(activeKey)}
        />
      )}
    </Box>
  );
};

export { WalletTabs };