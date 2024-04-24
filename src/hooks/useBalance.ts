import { useEffect, useState } from "react";
import { GetWalletBalanceOptions, getWalletBalance } from "thirdweb/wallets";

import { TokenInfo, zeroAddress } from "../tokens";
import { chain, client } from "../types";

export default function useBalance(address: string, token: TokenInfo) : number {
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const options: GetWalletBalanceOptions = {
      address: address,
      client: client,
      chain: chain,
      tokenAddress: token.address !== zeroAddress ? token.address : "",
    };

    async function getBalance() {
      const result = await getWalletBalance(options);
      setBalance(Number(result.displayValue));
    }

    getBalance();
  }, [address, token.address]);

  return balance;
}