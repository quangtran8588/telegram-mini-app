import { useEffect, useState } from "react";
import { GetWalletBalanceOptions, getWalletBalance } from "thirdweb/wallets";
import { chain, client } from "../types";
import { zeroAddress, TokenInfo } from "../tokens";

interface Props {
  address: string;
  token: TokenInfo;
}

const defaultIcon =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png";

function humanize(x: number) {
  return x.toFixed(4).replace(/\.?0*$/, "");
}

export default function Balance({ address, token }: Props) {
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

  return (
    <div className="balance">
      <img src={token.icon ? token.icon : defaultIcon} alt={token.symbol} />
      <span>{humanize(balance)}</span>
      <span>{token.symbol}</span>
    </div>
  );
}
