import { FC } from "react";
import {
  ArbitrumMonotone,
  BnbMonotone,
  Ethereum,
  EthereumMonotone,
  IconProps,
  OptimismMonotone,
  PolygonMonotone,
  PushMonotone,
  Solana,
  SolanaMonotone,
} from "../blocks";
import { WalletCategoriesType } from "./Common.types";
import {
  BackpackIcon,
  BitGetWalletIcon,
  BnbIcon,
  BraveIcon,
  Coin98Icon,
  CoinbaseIcon,
  ExodusIcon,
  GlowIcon,
  MagicEdenIcon,
  MathWalletIcon,
  MetaMaskIcon,
  NightlyIcon,
  OkxIcon,
  OneKeyIcon,
  PhantomIcon,
  RainbowIcon,
  SafeIcon,
  SolflareIcon,
  TrustIcon,
  UnisatIcon,
  ZeroDevIcon,
} from "@dynamic-labs/iconic";

export const walletCategories: WalletCategoriesType[] = [
  {
    value: "ethereum",
    label: "Link Ethereum Wallet",
    icon: <Ethereum width={24} height={24} />,
  },
  {
    value: "solana",
    label: "Link Solana Wallet",
    icon: <Solana width={24} height={24} />,
  },
];

export const CHAIN_LOGO: {
  [x: number | string]: FC<IconProps>;
} = {
  1: EthereumMonotone,
  11155111: EthereumMonotone,
  137: PolygonMonotone,
  80002: PolygonMonotone,
  97: BnbMonotone,
  56: BnbMonotone,
  42161: ArbitrumMonotone,
  421614: ArbitrumMonotone,
  11155420: OptimismMonotone,
  10: OptimismMonotone,
  2442: PolygonMonotone,
  1101: PolygonMonotone,
  "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp": SolanaMonotone,
  devnet: PushMonotone,
};

export const WALLETS_LOGO = {
  coinbasesolana: <CoinbaseIcon />,
  backpacksol: <BackpackIcon />,
  solflare: <SolflareIcon />,
  bitgetwalletsol: <BitGetWalletIcon />,
  bravesol: <BraveIcon />,
  coin98sol: <Coin98Icon />,
  exodussol: <ExodusIcon />,
  glow: <GlowIcon />,
  magicedensol: <MagicEdenIcon />,
  mathwalletsol: <MathWalletIcon />,
  nightlysol: <NightlyIcon />,
  okxsolana: <OkxIcon />,
  onekeysol: <OneKeyIcon />,
  phantom: <PhantomIcon />,
  exodus: <ExodusIcon />,
  metamask: <MetaMaskIcon />,
  okxwallet: <OkxIcon />,
  bitgetwallet: <BitGetWalletIcon />,
  trust: <TrustIcon />,
  binance: <BnbIcon />,
  uniswap: <UnisatIcon />,
  safepal: <SafeIcon />,
  rainbow: <RainbowIcon />,
  // bybitwallet:<BitPayIcon/>,
  // tokenPocket:<ImTokenWallet/>,
  zerion: <ZeroDevIcon />,
  // cryptocom:<CryptoIcon/>,
  magiceden: <MagicEdenIcon />,
  backpack: <BackpackIcon />,
  // fireblocks:<FireblocksIcon/>,
  // onekeywallet: <OneKeyIcon/>,
};
