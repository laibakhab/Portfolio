import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div >
      <div className=" mt-20  flex  justify-around gap-y-14 ">
       <Image
          src="/Images/image2.jpg"
          alt="photo"
          width={300}
          height={1}
          className=" rounded-full ml-[20%]  "
        /> 
        <div />
        <div className="text- mr-40 mb-5">
          <h2 className="text-6xl text-left gap-y-4 ml-[20%] font-bold mt-10  text-yellow-600">
            {" "}
            Hello <br />I am <br />
            Laiba Asif
          </h2>

          <div className="ml-[10%] flex gap-14 mt-12">
            <button className="text-xl p-3 border-2 w-40 rounded-2xl hover:text-yellow-200 border-yellow-600">
              <Link href="#">About me</Link>
            </button>
            <button className="text-xl p-3 w-40 border-2 rounded-2xl hover:text-yellow-200 border-yellow-600 text-left">
              <Link href="#">Contact me</Link>
            </button>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default Hero;
