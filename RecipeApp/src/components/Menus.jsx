import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SpecialDishes from './SpecialDishes'
import Hero from './Hero'


const Menus = () => {
const [menus, setMenus] = useState([])



useEffect(() => {
  const fetchData = async ()=>{
    const API_URL="https://www.themealdb.com/api/json/v1/1/categories.php"
try {
  const response = await axios.get(API_URL)
  console.log("Data==> ",response.data.categories)
  setMenus(response.data.categories)
} catch (error) {

  console.error("Error data: ",error.message)
}
  }
 fetchData()
  
},[])


  return (
    <>
   <Hero/>
  <SpecialDishes SpecialDishes={menus} />

    
    
    </>
  )
}

export default Menus