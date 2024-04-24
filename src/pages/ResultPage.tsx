import { useDisconnect } from "thirdweb/react";
import { Button, Center, Flex, Link, Text, VStack } from "@chakra-ui/react";

import AccountInfo from "../components/AccountInfo";
import { useAppContext } from "../hooks/useAppContext";
import { chain } from "../types";

interface Props {
  onReset: () => void;
}

export default function ResultPage({ onReset }: Props) {
  const { wallet, txHash, stage } = useAppContext();
  const { disconnect } = useDisconnect();
  const txUrl = chain.url + "/tx/" + txHash;
  const shortUrl = txUrl.slice(0, 37) + "...";

  const handleOnClick = () => {
    if (wallet) disconnect(wallet);
    onReset();
  };
  return (
    <>
      {stage === 3 && wallet && (
        <Center width="100vw" height="100vh">
          <Flex direction="column" align="center" justify="center">
            <VStack mb="50px">
              <Text
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="md"
                fontWeight="extrabold"
              >
                Tx Receipt:
              </Text>

              <Link
                href={txUrl}
                isExternal
                bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
                bgClip="text"
                fontSize="md"
                fontWeight="extrabold"
                noOfLines={2}
              >
                {shortUrl}
              </Link>
            </VStack>

            <AccountInfo />
            <Button onClick={handleOnClick}>Done</Button>
          </Flex>
        </Center>
      )}
    </>
  );
}
