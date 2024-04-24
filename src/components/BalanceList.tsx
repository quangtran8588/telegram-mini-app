import { Grid } from "@chakra-ui/react";

import { TokenInfo, tokens } from "../tokens";
import Balance from "./Balance";
import { useAppContext } from "../hooks/useAppContext";

export default function BalanceList() {
  const { wallet } = useAppContext();
  const chainId = wallet?.getChain()?.id;
  const tokenList = tokens[chainId as keyof typeof tokens];

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={1} mt="10px">
      {tokenList.map((tokenInfo: TokenInfo) => (
        <Balance
          address={wallet?.getAccount()?.address as string}
          token={tokenInfo}
          key={tokenInfo.address}
        />
      ))}
    </Grid>
  );
}
