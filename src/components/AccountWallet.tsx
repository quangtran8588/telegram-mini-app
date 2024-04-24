import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Card, CardBody, Flex, Text } from "@chakra-ui/react";

interface Props {
  address: string;
}

export default function AccountWallet({ address }: Props) {
  const shortAddr = address.slice(0, 12) + "..." + address.slice(-5);
  return (
    <Card variant="elevated">
      <CardBody pt="10px" pb="10px">
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap="10px"
        >
          <AccountBalanceWalletIcon />
          <Text
            bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
            bgClip="text"
            fontSize="md"
            fontWeight="extrabold"
          >
            {shortAddr}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
}
