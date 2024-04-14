import { Wallet } from "thirdweb/wallets";
import { TokenInfo, tokens } from "../tokens";
import Balance from "./Balance";

interface Props {
  wallet: Wallet;
}

export default function BalanceList({ wallet }: Props) {
  const chainId = wallet?.getChain()?.id;
  const tokenList = tokens[chainId as keyof typeof tokens];

  return (
    <div className="balance-list">
      {tokenList.map((tokenInfo: TokenInfo) => (
        <Balance
          address={wallet?.getAccount()?.address as string}
          token={tokenInfo}
          key={tokenInfo.address}
        />
      ))}
    </div>
  );
}
