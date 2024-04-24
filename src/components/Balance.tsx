import {
  Card,
  CardBody,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

import { TokenInfo } from "../tokens";
import useBalance from "../hooks/useBalance";

interface Props {
  address: string;
  token: TokenInfo;
}

const defaultIcon =
  "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png";

function humanize(x: number) {
  return x.toFixed(4).replace(/\.?0*$/, "");
}

export default function Balance({ address, token }: Props) {
  const balance = useBalance(address, token);

  return (
    <Card variant="elevated" width="150px">
      <CardBody pt="10px" pb="1px" pl="10px" pr="10px">
        <Grid
          templateColumns="repeat(5, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap={1}
        >
          <GridItem rowSpan={1} colSpan={8}>
            <HStack
              justifyContent="center"
              borderStyle="dashed"
              borderBottomWidth="1px"
              pb="5px"
              spacing="10px"
            >
              <Image
                boxSize="25px"
                objectFit="cover"
                src={token.icon ? token.icon : defaultIcon}
                alt={token.symbol}
              />
              <Text fontSize="sm">{token.symbol}</Text>
            </HStack>
          </GridItem>
          <GridItem rowSpan={1} colSpan={8} textAlign="center">
            <Text fontSize="sm">{humanize(balance)}</Text>
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
}
