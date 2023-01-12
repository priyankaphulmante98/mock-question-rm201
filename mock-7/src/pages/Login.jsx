import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const details = {
  email: "",
  password: "",
};
export default function Login() {
  const [data, setData] = useState(details);
  const navigate = useNavigate();

//   redux
const dispatch=useDispatch()
const d =useSelector(state=>state)
console.log(d,"token")

  let token = JSON.parse(localStorage.getItem("token")) || "";
  if (token) {
    return <Navigate to="/data" />;
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }
  function handleLogin(e) {
    e.preventDefault();
    console.log(data);
    axios.post("https://reqres.in/api/login", data).then((res) => {
      alert(`logged in ${res.data.token}`);
      dispatch({type:"token",payload:res.data.token})
      localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate("/");
    });
  }

  return (
    <>
      <AdminNavbar />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="eve.holt@reqres.in"
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={(e) => handleChange(e)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={(e) => handleLogin(e)}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
