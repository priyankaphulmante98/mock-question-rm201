import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import dog from "../images/download.jpg";
import { useDispatch, useSelector } from "react-redux";

function DataPage() {
//   const [data, setdata] = useState([]);
  const [sort, setSort] = useState("asc");
  const [filter, setFilter] = useState("");
  const [title, settitle] = useState("");
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  const dispatch=useDispatch()
  const data = useSelector(state=>state.dogs)
//   console.log(dogsarr,"afdfs")

  function getdogs() {
    axios(
      `https://json-data-2yj8.onrender.com/dogs?${title}=${filter}&_sort=age&_order=${sort}`
    ).then((res) => {
        // setdata(res.data)
        dispatch({type:"datafetch",payload:res.data})
    })
  }
  function Seraching(q) {
    if (ref.current) {
      clearTimeout(ref.current);
    }
    ref.current = setTimeout(() => {
      axios(`https://json-data-2yj8.onrender.com/dogs?q=${q}`).then((res) =>
       {
        // setdata(res.data)
        dispatch({type:"datafetch",payload:res.data})
       }
      );
    }, 1000);
  }


  function handleDelete(id){
    axios.delete(`https://json-data-2yj8.onrender.com/dogs/${id}`).then(res=>getdogs())

  }

  useEffect(() => {
    getdogs();
  }, [sort, filter]);
  useEffect(() => {
    Seraching(search);
  }, [search]);
  return (
    <div>
      <AdminNavbar />
      <Flex gap={"1rem"} m="1rem auto">
        <Select
          placeholder="Sort By Age"
          w={"30%"}
          onChange={(e) => setSort(e.target.value ? e.target.value : "asc")}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
        <Select
          placeholder="Filter By Gender"
          w={"30%"}
          onChange={(e) => {
            setFilter(e.target.value);
            settitle("gender");
          }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
      </Flex>
      <Box>
        <Input
          type="text"
          placeholder="search here"
          onChange={(e) => setSearch(e.target.value)}
          w="50%"
          m="2rem"
        />
      </Box>

      <SimpleGrid
        w={"90%"}
        m={"auto"}
        columns={{ lg: 4, md: "3", base: "1", sm: 1 }}
        spacing="20px"
      >
        {data?.map((e) => (
          <Box>
            <Image src={dog} w="200px" />
            <Text>name : {e.name}</Text>
            <Text>age : {e.age}</Text>
            <Text>Gender : {e.gender}</Text>
            <Text>Place : {e.place}</Text>
<Button onClick={()=>handleDelete(e.id)}> delete</Button>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default DataPage;
