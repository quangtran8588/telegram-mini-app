import { Image, Center } from "@chakra-ui/react";

import UploadPhoto from "../components/UploadPhoto";
import Logo from "../components/Logo/Logo";
import { useAppContext } from "../hooks/useAppContext";

export default function HomePage() {
  const { stage } = useAppContext();

  return (
    <>
      {stage === 0 && (
        <Center width="100vw" height="100vh" flexDirection="column">
          <Image
            src="images/animelizer.gif"
            boxSize="250px"
            objectFit="contain"
          ></Image>

          <Center mb="50px">
            <Logo width="200px" height="100px" />
          </Center>

          <UploadPhoto />
        </Center>
      )}
    </>
  );
}
