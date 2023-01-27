import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Home() {
    const [data, setData] = useState([])

   async function getData(){
    let res= await fetch(`https://dummyjson.com/products/categories`)
    let data = res.json()
    // console.log(data)
    setData(data)
    }

  useEffect(() => {
       getData()
  }, [])

  return (

    <div id="container">


      
    </div>
  )
}

export default Home
