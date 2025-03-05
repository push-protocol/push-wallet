import { FC } from "react";
import {
  BackpackIcon,
  BitGetWalletIcon,
  BnbIcon,
  BraveIcon,
  Coin98Icon,
  CoinbaseIcon,
  ExodusIcon,
  FlowIcon,
  GlowIcon,
  MagicEdenIcon,
  MathWalletIcon,
  MetaMaskIcon,
  NightlyIcon,
  OkxIcon,
  OneKeyIcon,
  PhantomIcon,
  RabbyIcon,
  RainbowIcon,
  SafeIcon,
  SequenceIcon,
  SolflareIcon,
  TrustIcon,
  UnisatIcon,
  UnstoppableIcon,
  WalletConnectIcon,
  ZeroDevIcon,
} from "@dynamic-labs/iconic";
import {
  Arbitrum,
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

export const walletCategories: WalletCategoriesType[] = [
  {
    value: "ethereum",
    label: "Connect Ethereum Wallet",
    icon: <Ethereum width={24} height={24} />,
  },
  {
    value: "solana",
    label: "Connect Solana Wallet",
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
  brave: <BraveIcon />,
  coin98sol: <Coin98Icon />,
  coin98: <Coin98Icon />,
  exodussol: <ExodusIcon />,
  glow: <GlowIcon />,
  magicedensol: <MagicEdenIcon />,
  mathwalletsol: <MathWalletIcon />,
  mathwallet: <MathWalletIcon />,
  nightlysol: <NightlyIcon />,
  okxsolana: <OkxIcon />,
  onekeysol: <OneKeyIcon />,
  onekey: <OneKeyIcon />,
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
  bravesol: <BraveIcon />,
  coinbase: <CoinbaseIcon />,
  zerion: <ZeroDevIcon />,
  rabby: <RabbyIcon />,
  walletconnect: <WalletConnectIcon />,
  magiceden: <MagicEdenIcon />,
  flowwallet: <FlowIcon />,
  unstoppable: <UnstoppableIcon />,
  backpack: <BackpackIcon />,
  sequence: <SequenceIcon />,
};
