import { Box, Flex, Stack, Text, VStack } from "@chakra-ui/react";

import ConnectWallet from "../components/ConnectWallet";
import { useAppContext } from "../hooks/useAppContext";
import Back from "../components/Back";
import { useSwipeable } from "react-swipeable";

export default function ConnectPage() {
  const { isMobile, stage, amount, onSetFile, onSetAmount, onSetStage } =
    useAppContext();

  const goBack = () => {
    onSetFile(undefined);
    onSetAmount(0);
    onSetStage((current) => current - 1);
  };

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => {
      if (isMobile) goBack();
    },
  });

  return (
    <>
      {stage === 1 && amount !== 0 && (
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
            <VStack spacing="50px">
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

              <ConnectWallet />
            </VStack>
          </Flex>
        </Stack>
      )}
    </>
  );
}
