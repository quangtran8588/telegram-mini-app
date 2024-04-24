import { useState } from "react";
import { ThirdwebProvider } from "thirdweb/react";
import { Wallet } from "thirdweb/wallets";
import { Container } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

import HomePage from "./pages/HomePage";
import ConnectPage from "./pages/ConnectPage";
import PaymentPage from "./pages/PaymentPage";
import ResultPage from "./pages/ResultPage";
import { AppContext } from "./hooks/useAppContext";

export default function App() {
  const [amount, setAmount] = useState<number>(0);
  const [stage, setStage] = useState<number>(0);
  const [wallet, setWallet] = useState<Wallet | undefined>(undefined);
  const [txHash, setTxHash] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [file, setFile] = useState<File>();

  const handleSetAmount = (paymentAmount: number) => {
    setAmount(paymentAmount);
  };

  const handleSetWallet = (connectedWallet: Wallet) => {
    setWallet(connectedWallet);
  };

  const handleSetTxHash = (hash: string) => {
    setTxHash(hash);
  };

  const handleSetFile = (uploadedFile: File) => {
    setFile(uploadedFile);
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

  const contextValue = {
    isMobile: isMobile,
    amount: amount,
    onSetAmount: handleSetAmount,
    stage: stage,
    onSetStage: setStage,
    wallet: wallet,
    onSetWallet: handleSetWallet,
    txHash: txHash,
    onSetTxHash: handleSetTxHash,
    file: file,
    onSetFile: handleSetFile,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Container centerContent>
        <HomePage />
        <ThirdwebProvider>
          <ConnectPage />
          <PaymentPage />
          <ResultPage onReset={handleReset} />
        </ThirdwebProvider>
      </Container>
    </AppContext.Provider>
  );
}
