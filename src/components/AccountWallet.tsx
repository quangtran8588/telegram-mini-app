import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Message from "./Message";

interface Props {
  address: string;
}

export default function AccountWallet({ address }: Props) {
  const shortAddr = address.slice(0, 5) + "..." + address.slice(-5);
  return (
    <div className="account-wallet">
      <AccountBalanceWalletIcon />
      <Message className="account-address">{shortAddr}</Message>
    </div>
  );
}
