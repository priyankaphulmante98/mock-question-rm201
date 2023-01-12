import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate=useNavigate()
  return (
    <Flex
      justifyContent={"space-around"}
      bg="lightGrey"
      p={"1rem 0"}
      fontWeight="bold"
    >
      <Link to="/">
        <Box>Home</Box>
      </Link>
      <Link to="/data">
        <Box>Data Page</Box>
      </Link>
      <Link to="/report">
        <Box>Report Page</Box>
      </Link>
      <Link to="/login">
        <Box>Login Page</Box>
      </Link>

      <Button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login")
          
        }}
      >
        Logout
      </Button>
    </Flex>
  );
}

export default AdminNavbar;
