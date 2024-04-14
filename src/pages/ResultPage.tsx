import { Wallet } from "thirdweb/wallets";
import { useDisconnect } from "thirdweb/react";
import Message from "../components/Message";
import { Button } from "@mui/material";
import AccountInfo from "../components/AccountInfo";

interface Props {
  stage: number;
  wallet?: Wallet;
  txHash: string;
  onReset: () => void;
}
const binanceUrl = `https://testnet.bscscan.com/tx`;

export default function ResultPage({ stage, wallet, txHash, onReset }: Props) {
  const { disconnect } = useDisconnect();
  const txUrl = binanceUrl + "/" + txHash;
  const shortUrl = txUrl.slice(0, 41) + "..." + txUrl.slice(-5);

  const handleOnClick = () => {
    if (wallet) disconnect(wallet);
    onReset();
  };
  return (
    <div className="result-page">
      {stage === 3 && wallet && (
        <>
          <Message>
            Tx Receipt: <a href={txUrl}>{shortUrl}</a>
          </Message>
          <AccountInfo wallet={wallet} />
          <Button onClick={handleOnClick}>Done</Button>
        </>
      )}
    </div>
  );
}
