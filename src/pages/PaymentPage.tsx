import { Flex, VStack, Text, Stack, Box } from "@chakra-ui/react";
import { useDisconnect } from "thirdweb/react";

import Transfer from "../components/Transfer";
import AccountInfo from "../components/AccountInfo";
import { useAppContext } from "../hooks/useAppContext";
import Back from "../components/Back";
import { useSwipeable } from "react-swipeable";

export default function PaymentPage() {
  const { isMobile, stage, wallet, amount, onSetWallet, onSetStage } =
    useAppContext();
  const { disconnect } = useDisconnect();

  const goBack = () => {
    if (wallet) disconnect(wallet);
    onSetWallet(undefined);
    onSetStage((current) => current - 1);
  };

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => {
      if (isMobile) goBack();
    },
  });

  return (
    <>
      {stage === 2 && wallet && (
        <Stack
          width="100vw"
          height="100vh"
          flexDirection="row"
          align="center"
          {...swipeHandlers}
        >
          {!isMobile && (
            <Box boxSize="50px">
              <Back action={goBack} />
            </Box>
          )}

          <Flex direction="column" align="center" justify="center" flex="1">
            <VStack spacing="10px">
              <Text
                bgClip="text"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
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
        </Stack>
      )}
    </>
  );
}
