import { useRef, useState } from "react";
import { Box, Input, Stack, keyframes } from "@chakra-ui/react";
import { useAppContext } from "../hooks/useAppContext";

function genRandomAmount(): number {
  return Number((Math.random() * 1000 + 50).toFixed(2));
}

const shakeAnimation = keyframes`
  10%, 90% {
    transform: translated3d(-3px, 0, 0)
  }
  20%, 80% {
    transform: translated3d(3px, 0, 0)
  }
  30%, 50%, 70% {
    transform: translate3d(-6px, 0, 0)
  }
  40%, 60% {
    transform: translated3d(6px, 0, 0)
  }
`;

const hoverEffect = {
  opacity: 1,
  borderColor: "red.300",
  color: "red.100",
  boxShadow: "linear(to-r, red.500, yellow.500)",
  animation: `${shakeAnimation} infinite 0.5s`,
};

export default function UploadPhoto() {
  const { isMobile, onSetFile, onSetAmount, onSetStage } = useAppContext();
  const [isHovered, setIsHovered] = useState(false);
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  //  set mocking payment amount
  const paymentAmount: number = genRandomAmount();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    //  do something with uploaded files
    onSetFile(e.target.files[0]);
    onSetAmount(paymentAmount);
    onSetStage((current) => current + 1);
  };

  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsHovered(false);
  };

  return (
    <Stack>
      <Box
        as="button"
        bg={`url(${
          isMobile
            ? "./images/fire-flames.gif"
            : isHovered
            ? "./images/fire-flames.gif"
            : "./images/chemistry-fire.gif"
        })`}
        w="auto"
        h="auto"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        border="1px solid transparent"
        borderRadius="15px"
        cursor="pointer"
        padding="8px 16px"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={isMobile ? { ...hoverEffect } : {}}
        _hover={{ ...hoverEffect }}
      >
        {isHovered ? "Click Me" : "Upload File"}
      </Box>
      <Input
        type="file"
        onChange={handleFileUpload}
        ref={hiddenFileInput}
        hidden
      ></Input>
    </Stack>
  );
}
