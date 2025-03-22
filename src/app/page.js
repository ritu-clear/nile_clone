import React from "react";
import Image from "next/image";
import Link from "next/link";

import Banner from '../component/Banner';
import ColTwoGrid from '../component/ColTwoGrid';
import CardTwoGrid from '../component/CardTwoGrid';
import SecondCta from "@/component/SecondCta";
import Footer from "@/component/Footer";
const Home = () =>  {
  return (
    <>
  <Banner/>
   <ColTwoGrid/>
   <CardTwoGrid/>
   <SecondCta/>
   <Footer/>
    </>
   
  );
}
export default Home;
