import { Center, Flex, Text, VStack } from "@chakra-ui/react";

import ConnectWallet from "../components/ConnectWallet";
import { useAppContext } from "../hooks/useAppContext";

export default function ConnectPage() {
  const { stage, amount } = useAppContext();
  return (
    <>
      {stage === 1 && amount !== 0 && (
        <Center width="100vw" height="100vh">
          <Flex direction="column" align="center" justify="center">
            <VStack spacing="50px">
              <VStack spacing="10px">
                <Text
                  bgGradient="linear(to-l, #7928CA, #FF0080)"
                  bgClip="text"
                  fontSize="m"
                  fontWeight="extrabold"
                >
                  Your payment amount
                </Text>
                <Text
                  bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
                  bgClip="text"
                  fontSize="xl"
                  fontWeight="extrabold"
                >
                  {amount}
                </Text>
              </VStack>

              <ConnectWallet />
            </VStack>
          </Flex>
        </Center>
      )}
    </>
  );
}
