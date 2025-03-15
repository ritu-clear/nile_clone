import React from 'react';
import Image from "next/image";
import Link from "next/link"; 
import Button from './Button';
const Banner = () => {
  
  return (
    
<section className="hero-banner pt-10 relative min-h-[300px]" >
<div className="bg-img absolute left-0 top-0 w-full h-full">
<Image
              src={"/images/bg_desk.jpg"}
              width={16}
              height={13}
              loading="eager"
              alt="Hero pattern Image"
              className="h-full w-full object-cover "
/></div>
<div className="container">
<div className="flex row grid-cols-[58%_42%] gap-24 items-end ">


<div className='px-10px  mb-[40px] '>

<p className='leading-[1.5] text-[14px] uppercase text-[#ff0092] font-bold flex flex-wrap my-[20px]'>
<span className='mr-[10px]'>
<Image
              src={"/images/line_gradient.png"}
              width={16}
              height={13}
              loading="eager"
              alt="Hero pattern Image"
              className="h-full w-full object-contain "
            />
</span>
     THE NEW WIRED AND WIRELESS LAN
</p>
<h1 className='leading-[1.1] text-[50px] uppercase text-[white]'>Natively Secure, Perfectly Autonomous, Delivered as a Service</h1>
</div>
<div className='px-10px  mb-[40px] '>
  <p className=' leading-[1.5] text-[14px] uppercase text-[#ffffff] my-[20px]'>
  Imagine a network that instantly prevents ransomware attacks, 
  continuously monitors and tunes its performance, and automates 
  management. A new wired and wireless LAN is here and its smarter, 
  safer, and more seamless than ever. 
  </p>
    
<Button type = {'primary-pink-transparent'}  text={'link more'}/ >
</div>
</div>
</div>
</section>
    
  )
}

export default Banner;