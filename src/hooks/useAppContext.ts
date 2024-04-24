import { createContext, useContext } from "react";
import { Wallet } from "thirdweb/wallets";

export interface AppContextObject {
  isMobile: boolean;

  amount: number;
  onSetAmount: (amount: number) => void;

  stage: number;
  onSetStage: React.Dispatch<React.SetStateAction<number>>;

  wallet?: Wallet;
  onSetWallet: (connectedWallet: Wallet) => void;

  txHash: string;
  onSetTxHash: (txHash: string) => void;

  file?: File;
  onSetFile: (uploadedFile: File) => void;
}

export const AppContext = createContext<AppContextObject | undefined>(
  undefined
);

export function useAppContext() {
  const context = useContext(AppContext) as AppContextObject;

  return context;
}
