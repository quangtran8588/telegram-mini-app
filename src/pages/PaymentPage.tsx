import { Center, Flex, VStack, Text } from "@chakra-ui/react";

import Transfer from "../components/Transfer";
import AccountInfo from "../components/AccountInfo";
import { useAppContext } from "../hooks/useAppContext";

export default function PaymentPage() {
  const { stage, wallet, amount } = useAppContext();
  return (
    <>
      {stage === 2 && wallet && (
        <Center width="100vw" height="100vh">
          <Flex direction="column" align="center" justify="center">
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

            <AccountInfo />

            <Transfer />
          </Flex>
        </Center>
      )}
    </>
  );
}
