import { createContext, useContext } from "react";
import { Wallet } from "thirdweb/wallets";

export interface AppContextObject {
  isMobile: boolean;

  amount: number;
  onSetAmount: React.Dispatch<React.SetStateAction<number>>;

  stage: number;
  onSetStage: React.Dispatch<React.SetStateAction<number>>;

  wallet?: Wallet;
  onSetWallet: React.Dispatch<React.SetStateAction<Wallet | undefined>>;

  txHash: string;
  onSetTxHash: React.Dispatch<React.SetStateAction<string>>;

  file?: File;
  onSetFile: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export const AppContext = createContext<AppContextObject | undefined>(
  undefined
);

export function useAppContext() {
  const context = useContext(AppContext) as AppContextObject;

  return context;
}
