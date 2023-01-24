import { Box, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([])
    let wishData = JSON.parse(localStorage.getItem('wishlist')) || []

    function getData() {
        setWishlist(wishData);
    }
    useEffect(() => {
        setWishlist(wishlist)

    }, [])
    // console.log(wishlist)
    useEffect(() => {
        getData()
    }, [wishlist?.length])
    return (
        <div>
              <SimpleGrid columns={{ lg: 4, md: 2, sm: 1, base: 1 }} justifyContent={"Center"} alignItems={"center"} gap={6}  >
                {wishData?.map((e) => {
                    return (

                        <GridItem w="auto" h="auto" p={"1rem"} border={"1px solid black"} key={e.id} alignItems={"center"}>
                            <Image
                               src={e.image} 
                            />
                            <Text fontWeight={"bold"}>{e.title}</Text>
                            <Text >{e.category}</Text>
                            <Text>{e.brand}</Text>
                            <Text fontWeight={"bold"}> $ {e.price}</Text>

                        </GridItem>

                    );
                })}
            </SimpleGrid>
        </div >
    )
}

export default Wishlist