// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
import HighlightText from "./HIghlightText"
import Modal from "./Modal"
import { useState } from "react"

// Component Imports
import CTAButton from "./Button"

function Home() {
  const [Modall,setModal]=useState(0);
  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}
        <Link to={"/signup"}>
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Referrer</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        {/* Heading */}
        <div className="text-center text-4xl font-semibold">
          Empower Your Future with
          <HighlightText text={"Refer & Earn"} />
        </div>

        {/* Sub Heading */}
        <div className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
        welcome to accredian, your gateway to premier online 
        program from India's top universities, tailored for carrer success. 
        Let's Learn & Earn Get a chance to win up-to  <HighlightText text={"RS. 15,000"} />
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-row gap-7">
        <button onClick={()=>setModal(1)}>
            Refer Now
            </button>
        </div>

        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

      
      </div>

      {/* Section 2 */}
      {/* <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
      
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
             
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
      
          </div>

       
        </div>
      </div> */}

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"> 
       
      </div>

      
      {Modall&& <Modal setModal={setModal}/>}
    </div>
    
  )

}

export default Home
