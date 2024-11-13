import { PlusSquareIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { ImDownload2 } from "react-icons/im";
import { Link } from "react-router-dom";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, #2fc900, #5b0979)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product store</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/"}>
            <Button>
              <Icon as={ImDownload2} />
            </Button>
          </Link>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Navbar;
