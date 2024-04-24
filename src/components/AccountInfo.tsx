import { Box } from "@chakra-ui/react";

import AccountWallet from "./AccountWallet";
import BalanceList from "./BalanceList";
import { useAppContext } from "../hooks/useAppContext";

export default function AccountInfo() {
  const { wallet } = useAppContext();
  return (
    <Box mt="20px" mb="50px">
      <AccountWallet address={wallet?.getAccount()?.address as string} />
      <BalanceList />
    </Box>
  );
}
