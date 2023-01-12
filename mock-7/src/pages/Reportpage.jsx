import { Box ,Text} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

function Reportpage() {
  const [data, setdata] = useState([]);
  const [fmale,setfmale]=useState(0)
  const [avg,setavg]=useState(0)
  function getdogs() {
    axios(`https://json-data-2yj8.onrender.com/dogs`).then((res) =>{

    let fmale=res?.data?.filter((e)=>e.gender=='female')
    let sum =res?.data?.reduce((ac,e)=>ac+Number(e.age),0)
    // console.log(fmale.length,sum)
    setfmale(fmale.length)
    setavg(Math.floor(sum/res.data.length))

    setdata(res.data)

    }




   
    );
  }

  useEffect(() => {
    getdogs();
  }, []);
  return (
    <div>
      <AdminNavbar />
      <Box w={"50%"} m="1rem auto">
        <Text fontWeight={"semibold"}>Total number of dogs attending. : {data.length}</Text>
        <Text fontWeight={"semibold"}>Number of female dogs : {fmale}</Text>
        <Text fontWeight={"semibold"}>Number of Male dogs attending. : {data.length-fmale}</Text>
        <Text fontWeight={"semibold"}>Average age group of dogs attending. {avg}</Text>
      </Box>
    </div>
  );
}

export default Reportpage;
