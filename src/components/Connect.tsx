import { useConnect } from "thirdweb/react";
import { Wallet, createWallet, injectedProvider } from "thirdweb/wallets";
import { BinanceTestnet } from "@thirdweb-dev/chains";

import { client } from "../types";

interface Props {
  onSetWallet: (wallet: Wallet) => void;
  nextStage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Connect({ onSetWallet, nextStage }: Props) {
  const { connect, isConnecting, error } = useConnect();

  const handleConnectWallet = async () => {
    const wallet = await connect(async () => {
      const metamask = createWallet("io.metamask"); // pass the wallet id

      // if user has metamask installed, connect to it
      if (injectedProvider("io.metamask")) {
        await metamask.connect({ client });
      }

      // open wallet connect modal so user can scan the QR code and connect
      else {
        await metamask.connect({
          client,
          walletConnect: { showQrModal: true },
        });
      }

      if (metamask?.getChain()?.id !== BinanceTestnet.chainId)
        await metamask.switchChain({
          id: BinanceTestnet.chainId,
          rpc: BinanceTestnet.rpc[1],
        });

      // return the wallet
      return metamask;
    });

    if (wallet) {
      onSetWallet(wallet);
      nextStage((current) => current + 1);
    }
  };

  return (
    <>
      <button
        onClick={handleConnectWallet}
        disabled={isConnecting ? true : false}
      >
        {isConnecting ? "Connecting ..." : "Connect"}
      </button>
      {error ? `${error}` : ""}
    </>
  );
}
