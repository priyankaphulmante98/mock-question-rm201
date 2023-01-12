import { Button, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <VStack p={"5rem"} w="50%" m="5rem auto" borderRadius={"1rem"}
    alignItems="center" justifyContent={"center"} border="1px solid grey">
      <Link to="/login"><Button>ADMIN Section</Button></Link>
      <Link to="/user"><Button>User Section</Button></Link>
    </VStack>
  );
}

export default Home;
