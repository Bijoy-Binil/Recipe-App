import React, { useEffect } from 'react'

const SpecialDishes = ({SpecialDishes}) => {
    console.log("Menus==>",SpecialDishes);
   let maxSpecialDishes=10
  return (
    <>
   <div className="container mx-auto flex flex-col items-center text-center px-6 py-16">
  <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-gray-900 dark:text-white">
    Our <span className="text-amber-400 ">Special Dishes</span> Dishes
  </h2>
  
  <p className="mt-6 max-w-3xl text-lg  leading-relaxed text-white">
    Indulge in flavors that awaken your senses. Each dish is crafted with passion,
    bringing together the finest ingredients and timeless recipes. From savory delights
    to sweet temptations, every bite is a celebration of taste and tradition.
  </p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
   
  {SpecialDishes.map((SpecialDish, index) => {
     if (index<maxSpecialDishes){
 return <div key={index}>
    <div
      key={index}
      className="bg-gray-400 rounded-xl shadow-lg overflow-hidden w-70  hover:scale-105 hover:cursor-pointer transform transition duration-300"
    >
     
      <img
        className="w-full  object-cover"
        src={SpecialDish.strCategoryThumb}
        alt={SpecialDish.strCategory}
      />

    
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-700">
          {SpecialDish.strCategory}
        </h3>
        <p className="mt-2 font-semibold text-sm text-gray-900 line-clamp-2">
          {SpecialDish.strCategoryDescription || "A delicious dish full of flavor and tradition."}
        </p>
      </div>
    </div>
    </div>
     }
   
})}
</div>



</div>

    
    
    
    </>
  )
}

export default SpecialDishes