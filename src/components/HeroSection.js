import React from "react";
import Navbar from "./Navbar";
import Image1 from "../assests/Image1.svg";
import { MdPermContactCalendar } from "react-icons/md";
import tilt from "../assests/Tilt.svg"
import TopDeals from "./TopDeals";
import { HashLink as Link } from "react-router-hash-link";

const HeroSection = () => {
  return (
    <div className="bg-[#0032FF]    lg:h-[90%] xl:h-[100%] sm:h-[75%] flex flex-col font-inter  overflow-hidden">
      <Navbar />
      <div>

      <div className="flex z-10 flex-col-reverse lg:flex-row xl:flex-row lg:w-full md:flex-row sm:flex-row overflow-y-hidden ml-[10px] mt-[60px] lg:mt-[80px] lg:gap-[110px] md:gap-[50px] md:mt-20  lg:h-[500px] ">
        <img src={Image1} className="lg:w-[50%] z-10 lg:h-[500px] h-[300px] sm:w-[57%] "  />
        <div className="flex flex-col gap-[72px] lg:gap-y-[60px] md:gap-[42px] w-[425px] lg:w-[495px] md:w-[420px] h-[348px] my-auto sm:gap-[30px]">
          <div>
            <div className="lg:w-[50%] md:w-[50%] w-[34%] sm:w-[67%] h-[35px] flex font-poppins rounded-3xl items-center  bg-white text-[#2300FF]">
              <p className="lg:w-[166px]   items-center mx-auto lg:mx-auto md:mx-auto lg:text-[22px] md:text-[17px]   font-bold leading-8">
                Find your clinic
              </p>
            </div>

            <h1 className="lg:text-[40px] xl:text-[40px] text-[40px] md:text-[30px] h-[88px] text-white lg:leading-[60px] md:leading-[45px] sm:leading-[36px] sm:text-[28px]">
              Connecting Patients with Nearby Doctors
            </h1>
          </div>

          <div className="h-[51px] lg:text-[24px] text-[19px] text-white font-poppins">
            Effortlessly book consultations with nearby doctors through{" "}
            <span className=" italic leading-[36px] font-bold text-yellow-400 ">
              {" "}
              Clinic Khojo{" "}
            </span>
          </div>
          <div className="flex bg-[#FA0808] items-center gap-[10px] hover:scale-105 transition-all cursor-pointer duration-300 h-[46px] w-[169px]  rounded-[8px] py-[8px] px-[12px] justify-between drop-shadow-md sm:mt-4">
            <button className=" font-poppins text-[20px]  text-white">
            <Link to="#Contact" smooth> Contact us </Link> 
            </button>
            <MdPermContactCalendar color="white" size={24} />
          </div>

        </div>
      </div>
      <div className=" ">
        <img className="w-[100%]   mb-8 -mt-[40px] md:-mt-24 xl:-mt-[10rem]  lg:-mt-[10rem] sm:-mt-[98px]  " src={tilt}  />
      </div>
      </div>
    </div>
  );
  
};

export default HeroSection;
