import React from "react";
import { Wallet } from "thirdweb/wallets";
import Message from "../components/Message";
import Transfer from "../components/Transfer";
import AccountInfo from "../components/AccountInfo";

interface Props {
  stage: number;
  wallet?: Wallet;
  amount: number;
  setTxHash: (txHash: string) => void;
  nextStage: React.Dispatch<React.SetStateAction<number>>;
}

export default function PaymentPage({
  stage,
  wallet,
  amount,
  setTxHash,
  nextStage,
}: Props) {
  return (
    <div className="payment-page">
      {stage === 2 && wallet && (
        <>
          <Message>Your payment amount: {amount}</Message>
          <AccountInfo wallet={wallet} />
          <Transfer
            paymentAmount={amount}
            setTxHash={setTxHash}
            nextStage={nextStage}
          />
        </>
      )}
    </div>
  );
}
