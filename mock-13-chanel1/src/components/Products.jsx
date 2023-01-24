import React from 'react'
import axios from "axios"
import { useEffect } from 'react';
import {
    Select,
    HStack,
    Image,
    Text,
    Box,
    Grid,
    GridItem,
    SimpleGrid,
    Center,
    Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Products() {
    const [data, setData] = useState({});
    const [filterBy, setFilterBy] = useState("");
    const [sortBy, setSortBy] = useState("price");
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState("asc");
  

    const navigate = useNavigate()
        const perPage = 12;  
    const totalPages = Math.ceil(data.length/perPage)
    let end = page * perPage
    let start = end - perPage


    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []

    
    async function GetProducts({  filterBy, sortBy, order, page }) {

        let res = await axios.get(
            `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=${perPage}&filter=${filterBy}&sort=${sortBy}&order=${order}&page=${page}`
        );
        // console.log(res);


        setData(res.data);
    }
    //   console.log(data);

    useEffect(() => {
        GetProducts({  filterBy, sortBy, order, page });
    }, [ filterBy, sortBy, order, page]);

     function AddToWishList(e) {
        
     
        wishlist.push(e)
            localStorage.setItem('wishlist', JSON.stringify(wishlist))

            alert("data added")
            navigate('/wishlist')
     }

    return (
        <Box as='center'>
            <Box m={"2rem 0"}>
                <HStack spacing={3}>
                    <Select variant="outline" placeholder="filterBy" onChange={(e) => setFilterBy(e.target.value)}>
                    <option value="kids">kids</option>
                        <option value="men">men</option>
                        <option value="women">women</option>
                        <option value="homedecor">homedecor</option>
                    </Select>

                    <Select variant="flushed" placeholder="orderOfSort" onChange={(e) => setOrder(e.target.value)}>
                        <option value="asc">ASC</option>
                        <option value="desc">DESC</option>
                    </Select>
                  


                </HStack>
                <Box>
                    <Button onClick={()=>setPage(page-1)} disabled={page===1}>PREV</Button>
                    <Button>{page}</Button>
                    <Button onClick={()=>setPage(page+1)} disabled={page===totalPages}>NEXT</Button>



                </Box>
            </Box>


            <SimpleGrid columns={{ lg: 4, md: 2, sm: 1, base: 1 }} justifyContent={"Center"} alignItems={"center"} gap={6}  >
                {data.data?.map((e) => {
                    return (
                            <GridItem w="auto" h="auto" p={"1rem"} border={"1px solid black"} key={e.id}>
                            <Image src={e.image}/>
                            <Text fontWeight={"bold"}>{e.title}</Text>
                            <Text >{e.category}</Text>
                            <Text>{e.brand}</Text>
                            <Text fontWeight={"bold"}> $ {e.price}</Text>
                            <Button bg={"teal"} color={"white"} onClick={() => AddToWishList(e)}>Wishlist</Button>

                        </GridItem>

                    );
                })}
            </SimpleGrid>
        </Box>
    );
}

export default Products
