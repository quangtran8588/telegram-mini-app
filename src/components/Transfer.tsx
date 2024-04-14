import { useState } from "react";
import { TransactionButton } from "thirdweb/react";
import { prepareContractCall, toWei } from "thirdweb";
import { contract, paymentReceiver } from "../types";
import { TransactionReceipt } from "thirdweb/dist/types/transaction/types";
import Message from "./Message";

interface Props {
  paymentAmount: number;
  setTxHash: (txHash: string) => void;
  nextStage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Transfer({
  paymentAmount,
  setTxHash,
  nextStage,
}: Props) {
  const [error, setError] = useState<Error>();

  const handleTxConfirmed = (receipt: TransactionReceipt) => {
    setTxHash(receipt.transactionHash);
    nextStage((current) => current + 1);
  };
  const handleTxError = (error: Error) => {
    setError(error);
  };
  return (
    <>
      <TransactionButton
        transaction={() => {
          const tx = prepareContractCall({
            contract,
            method: "function transfer(address to, uint256 amount)",
            params: [paymentReceiver, toWei(paymentAmount.toString())],
          });
          return tx;
        }}
        onTransactionConfirmed={handleTxConfirmed}
        onError={handleTxError}
      >
        Transfer
      </TransactionButton>
      {error && <Message>{error.message}</Message>}
    </>
  );
}
