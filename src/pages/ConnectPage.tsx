import { Wallet } from "thirdweb/wallets";
import ConnectWallet from "../components/ConnectWallet";
import Message from "../components/Message";

interface Props {
  stage: number;
  amount: number;
  handleSetWallet: (wallet: Wallet) => void;
  nextStage: React.Dispatch<React.SetStateAction<number>>;
}

export default function ConnectPage({
  stage,
  amount,
  handleSetWallet,
  nextStage,
}: Props) {
  return (
    <div>
      {stage === 1 && amount !== 0 && (
        <>
          <Message>Your payment amount: {amount}</Message>
          <ConnectWallet onSetWallet={handleSetWallet} nextStage={nextStage} />
        </>
      )}
    </div>
  );
}
