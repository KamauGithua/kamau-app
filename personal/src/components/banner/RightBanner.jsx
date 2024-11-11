import React from 'react'
import { bannerImg } from '../../assets'

const RightBanner = () => {

return (
    <div className='w-1/2 flex justify-center items-center relative'>
    <img
      className='
        max-w-full 
        h-auto 
        z-10 
        rounded-full 
        border-4 
        border-transparent 
        hover:border-red-600 
        transition 
        duration-500 
        ease-in-out 
        transform 
        hover:scale-110 
        object-cover 
        lg:w-[350px] 
        lg:h-[450px] 
        md:w-[300px] 
        md:h-[400px] 
        sm:w-[250px] 
        sm:h-[350px]'
      src={bannerImg}
      alt="bannerImg"
  />
  </div>
  
  )
}

export default RightBanner
