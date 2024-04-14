import { useState } from "react";
import { ThirdwebProvider } from "thirdweb/react";
import { Wallet } from "thirdweb/wallets";

import HomePage from "./pages/HomePage";
import ConnectPage from "./pages/ConnectPage";
import PaymentPage from "./pages/PaymentPage";
import ResultPage from "./pages/ResultPage";
import "./App.css";

export default function App() {
  const [amount, setAmount] = useState<number>(0);
  const [stage, setStage] = useState<number>(0);
  const [wallet, setWallet] = useState<Wallet | undefined>(undefined);
  const [txHash, setTxHash] = useState<string>("");

  const handleSetAmount = (paymentAmount: number) => {
    setAmount(paymentAmount);
  };

  const handleSetWallet = (connectedWallet: Wallet) => {
    setWallet(connectedWallet);
  };

  const handleSetTxHash = (hash: string) => {
    setTxHash(hash);
  };

  const handleReset = () => {
    setStage((current) => current - current);
    async function disconnect() {
      await wallet?.disconnect();
    }
    disconnect();
    setAmount((currentAmt) => currentAmt - currentAmt);
    setTxHash("");
    setWallet(undefined);
  };

  return (
    <div className="mini-app">
      <HomePage
        stage={stage}
        handleSetAmount={handleSetAmount}
        nextStage={setStage}
      />
      <ThirdwebProvider>
        <ConnectPage
          stage={stage}
          amount={amount}
          handleSetWallet={handleSetWallet}
          nextStage={setStage}
        />
        <PaymentPage
          stage={stage}
          amount={amount}
          wallet={wallet}
          setTxHash={handleSetTxHash}
          nextStage={setStage}
        />
        <ResultPage
          stage={stage}
          wallet={wallet}
          txHash={txHash}
          onReset={handleReset}
        />
      </ThirdwebProvider>
    </div>
  );
}
