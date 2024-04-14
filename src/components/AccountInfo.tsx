import { Wallet } from "thirdweb/wallets";
import AccountWallet from "./AccountWallet";
import BalanceList from "./BalanceList";

interface Props {
  wallet: Wallet;
}

export default function AccountInfo({ wallet }: Props) {
  return (
    <div className="account-info">
      <AccountWallet address={wallet.getAccount()?.address as string} />
      <BalanceList wallet={wallet} />
    </div>
  );
}
