import CTAButton from "./Button"
import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"



 function Modal({setModal}) {
   
    const [formData, setFormData] = useState({
      email1: "",
      email2: "",
      Name1: "",
      Name2: "",
      code:" ",
    })
  
    const [showPassword, setShowPassword] = useState(false)
  
    const { email1,email2,Name1,Name2,code } = formData
  
    const handleOnChange = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }))
    }
  
    const handleOnSubmit = (e) => {
      e.preventDefault()
      
    }
  
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
        <p className="text-2xl font-semibold text-richblack-5">
          Refer & Earn
        </p>
      
        <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col gap-y-4"
    >
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
        Refree Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email1"
          value={email1}
          onChange={handleOnChange}
          placeholder="Enter email address"
          className="form-style w-full"
        />
      </label>
      <label className="w-full">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Refrel Email Address <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="email2"
          value={email2}
          onChange={handleOnChange}
          placeholder="Enter email address"
          className="form-style w-full"
        />
      </label>
      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Refral Full Name <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="Name1"
          value={Name1}
          onChange={handleOnChange}
          placeholder="Enter Password"
          className="form-style w-full !pr-10"
        />

      </label>
      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
        Refree Full Name <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="Name2"
          value={Name2}
          onChange={handleOnChange}
          placeholder="Enter Password"
          className="form-style w-full !pr-10"
        />

      </label>
      <label className="relative">
        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
          Refral code <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="text"
          name="code"
          value={code}
          onChange={handleOnChange}
          placeholder="Enter Password"
          className="form-style w-full !pr-10"
        />

      </label>
     
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
      >
        Submit
      </button>
    </form>

        <div className="flex items-center gap-x-4">
       
          <button
            className="cursor-pointer rounded-md mt-4 bg-richblack-200 mx-auto py-[8px] px-[20px] font-semibold text-richblack-900"
            onClick={()=>setModal(0)}
          >
            {"Cencel"}
          </button>
        </div>
      </div>
    </div>
  )
}
export default Modal