import { ConnectButton } from "thirdweb/react";
import { Wallet, createWallet } from "thirdweb/wallets";

import { client, chain, appMetadata } from "../types";
import { useAppContext } from "../hooks/useAppContext";

const MetaMask = createWallet("io.metamask");
const WalletConnect = createWallet("walletConnect");

export default function ConnectWallet() {
  const { isMobile, onSetWallet, onSetStage } = useAppContext();

  let wallets: Wallet[];
  if (!isMobile) {
    wallets = [MetaMask, WalletConnect];
  } else {
    wallets = [WalletConnect];
  }

  const handleConnect = (connectedWallet: Wallet) => {
    onSetWallet(connectedWallet);
    onSetStage((current) => current + 1);
  };

  return (
    <ConnectButton
      appMetadata={appMetadata}
      client={client}
      wallets={wallets}
      onConnect={handleConnect}
      autoConnect={false}
      chain={chain}
    />
  );
}
