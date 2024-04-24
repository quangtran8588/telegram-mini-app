import { useState } from "react";
import { TransactionButton } from "thirdweb/react";
import { prepareContractCall, toWei } from "thirdweb";
import { TransactionReceipt } from "thirdweb/dist/types/transaction/types";

import { contract, paymentReceiver } from "../types";
import { Stack, Text } from "@chakra-ui/react";
import { useAppContext } from "../hooks/useAppContext";

export default function Transfer() {
  const [error, setError] = useState<Error>();
  const { onSetTxHash, onSetStage, amount } = useAppContext();

  const handleTxConfirmed = (receipt: TransactionReceipt) => {
    onSetTxHash(receipt.transactionHash);
    onSetStage((current) => current + 1);
  };
  const handleTxError = (error: Error) => {
    setError(error);
  };
  return (
    <Stack>
      <TransactionButton
        transaction={() => {
          const tx = prepareContractCall({
            contract,
            method: "function transfer(address to, uint256 amount)",
            params: [paymentReceiver, toWei(amount.toString())],
          });
          return tx;
        }}
        onTransactionConfirmed={handleTxConfirmed}
        onError={handleTxError}
      >
        Transfer
      </TransactionButton>
      {error && <Text>{error.message}</Text>}
    </Stack>
  );
}
