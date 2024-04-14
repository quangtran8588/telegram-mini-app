import { ConnectButton } from "thirdweb/react";
import { Wallet, createWallet } from "thirdweb/wallets";
import { client, chain, appMetadata } from "../types";

interface Props {
  onSetWallet: (wallet: Wallet) => void;
  nextStage: React.Dispatch<React.SetStateAction<number>>;
}

const wallets = [createWallet("io.metamask"), createWallet("walletConnect")];

export default function ConnectWallet({ onSetWallet, nextStage }: Props) {
  const handleConnect = (connectedWallet: Wallet) => {
    onSetWallet(connectedWallet);
    nextStage((current) => current + 1);
  };

  return (
    <div className="connect-wallet-btn">
      <ConnectButton
        appMetadata={appMetadata}
        client={client}
        wallets={wallets}
        onConnect={handleConnect}
        autoConnect={false}
        chain={chain}
      />
    </div>
  );
}
