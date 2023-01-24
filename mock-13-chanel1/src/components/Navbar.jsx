
import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Flex justify={"space-around"} bg={"teal"} h={"50px"} p={"20px"} color={"white"} fontSize={"18px"}>
         
          <Link to="/"><Text>Products</Text></Link>
          <Link to="/wishlist"><Text>Wishlist</Text></Link>
        </Flex>
  )
}

export default Navbar