import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const SignupForm = ({setIsLoggedIn}) => {

    const navigate =useNavigate();



    const [formData, setFormData] =useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        
    })

    const [showPassword, setShowPassword] = useState(false);
    const [accountType, setAccountType] =useState("student");
    const [showConfirmPassword, setshowConfirmPassword] =useState(false);

    function changeHandler(event){
        
        setFormData((prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
        
            }



            function submitHandler(event){
               event.preventDefault();
              if(formData.password !==formData.confirmPassword){
                toast.error("Password do not match");
                return;
              } 

              setIsLoggedIn(true);
              toast.success("Account Created")

              const accountData={
...formData
              };

const finalData ={
    ...accountData,
    accountType
}


              console.log("printing Final account data ")
              console.log(finalData);

navigate("/dashboard");
            }
  return (
    <div>
        {/* student - instructor tab  */}


        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max '>
            <button
            className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5": "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
             onClick={()=>setAccountType("student")}>
                Student
            </button>
            <button
             className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5": "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
             onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
            </div>

            <form onSubmit={submitHandler}>

{/* first name last  */}
            <div className='flex justify-between mt-[20px]'>
            <label>
    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]  ">
        First Name <sup className="text-pink-200 ">*</sup>
    </p>
    <input 
    required
    type="text" 
        name="firstName"
        onChange={changeHandler}
        placeholder="Enter First Name"
        value={formData.firstName}
        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b"
    />
</label>


<label>
    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
        Last Name <sup className="text-pink-200 ">*</sup>
    </p>
    <input 
    required
    type="text" 
        name="lastName"
        onChange={changeHandler}
        placeholder="Enter last Name"
        value={formData.lastName}
        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b"
    />
</label>
            </div>


{/* email address*/}
            <label>
    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] mt-[20px] ">
        Email  Address <sup className="text-pink-200 ">*</sup>
    </p>
    <input 
    required
    type="email" 
        name="email"
        onChange={changeHandler}
        placeholder="Enter Email Address"
        value={formData.email}
        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b"
    />
</label>


{/* create a password confirm password  */}


<div className='flex justify-between mt-[20px]'>
    
<label className='relative'>
    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
        Create Password  <sup className="text-pink-200 ">*</sup>
    </p>
    <input 
    required
    type={showPassword ? ("text") : ("password")}
        name="password"
        onChange={changeHandler}
        placeholder="Enter password"
        value={formData.password}
        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b"
    />
    <span 
     className="absolute right-3 top-[38px] cursor-pointer "
    onClick={() => setShowPassword((prev) =>!prev)}>
    {showPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
 </span>
</label>

<label className='relative'>
    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ">
        Confirm Password  <sup className="text-pink-200 ">*</sup>
    </p>
    <input 
    required
    type={showConfirmPassword ? ("text") : ("password")}
        name="confirmPassword"
        onChange={changeHandler}
        placeholder="Confirm password"
        value={formData.confirmPassword}
        className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  border-b"
    />
    <span
     className="absolute right-3 top-[38px] cursor-pointer "
     onClick={() => setshowConfirmPassword((prev) =>!prev)}>
    {setshowConfirmPassword ? (<AiOutlineEyeInvisible  fontSize={24} fill="#AFB2BF"/>):(<AiOutlineEye  fontSize={24} fill="#AFB2BF"/>)}
 </span>
</label>


</div>


<button
 className=" bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full"
 >Create Account</button>

        

            </form>

    </div>
  )
}

export default SignupForm;
