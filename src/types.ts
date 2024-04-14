import { createThirdwebClient, getContract } from "thirdweb";

const chain = {
  id: import.meta.env.VITE_BNB_CHAIN_ID,
  rpc: import.meta.env.VITE_BNB_RPC,
};
const client = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID,
  secretKey: import.meta.env.VITE_THIRDWEB_SECRET_KEY,
});

const contract = getContract({
  client,
  chain,
  address: import.meta.env.VITE_EVM_PAYMENT_TOKEN,
});

const appMetadata = {
  name: "KIP EVM Telegram Payment Mini App",
  url: import.meta.env.VITE_URL,
  description:
    "KIP Protocol: Telegram mini app to make a payment on EVM networks",
};

const paymentToken = import.meta.env.VITE_EVM_PAYMENT_TOKEN;
const paymentReceiver = import.meta.env.VITE_EVM_PAYMENT_RECEIVER;

export { chain, client, contract, paymentToken, paymentReceiver, appMetadata };
