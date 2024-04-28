import { IconButton, keyframes } from "@chakra-ui/react";
import { FaAngleDoubleLeft } from "react-icons/fa";

interface Props {
  action: () => void;
}

const moveLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(1px);
  }
  30% {
    opacity: 0.1;
    transform: translateX(1px);
  }
  60% {
    opacity: 0.1;
    transform: translateX(0px);
  }
  80% {
    opacity: 0.1;
    transform: translateX(-1px);
  }
  100% {
    opacity: 0;
    transform: translateX(-2px);
  }
`;

const hover = keyframes`
  0% {
    opacity: 0.5;
    transform: translateX(2px);
  }
  30% {
    opacity: 0.5;
    transform: translateX(1px);
  }
  60% {
    opacity: 1;
    transform: translateX(0px);
  }
  80% {
    opacity: 0.5;
    transform: translateX(-1px);
  }
  100% {
    opacity: 0.5;
    transform: translateX(-2px);
  }
`;

const iconButtonProps = {
  variant: "ghost",
  bgGradient: "linear(to-l, #7928CA, #FF0080)",
  "aria-label": "Back",
  icon: <FaAngleDoubleLeft />,
  size: "xl",
  animation: `${moveLeft} 1s infinite`,
  _hover: { animation: `${hover} 1s infinite` },
};

export default function Back({ action }: Props) {
  return <IconButton {...iconButtonProps} onClick={action} />;
}
