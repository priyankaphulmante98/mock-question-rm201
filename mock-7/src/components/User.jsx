import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const details = {
  name: "",
  age: 0,
  gender: "",
  place: "",
};
export default function User() {
  const [data, setData] = useState(details);
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: name == "age" ? Number(value) : value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    axios.post("https://json-data-2yj8.onrender.com/dogs", data).then((res) => {
      alert("dog is added");
      navigate("/");
    });
  }

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Dog A’Fair
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Dog Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Dog Age</FormLabel>
                  <Input
                    type="number"
                    name="age"
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl isRequired>
              <FormLabel>Gender </FormLabel>
              <Input
                type="text"
                name="gender"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Place</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  name="place"
                  onChange={(e) => handleChange(e)}
                />
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={(e) => handleSubmit(e)}
              >
                Add Dog
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
