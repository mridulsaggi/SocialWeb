import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios"
import { Context } from '../main.jsx'
// import img1 from "./doctor.png"
import toast from "react-hot-toast"
// import Logout from './Logout'
// import Marquee from "react-fast-marquee";
const Login = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const { isauthenticated, setisauthenticated,setloading,loading } = useContext(Context);

    const submithandler = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5000/login", {
                email, password
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            // console.log(data);
            toast.success(`Loggedin successfully :)`);
            setisauthenticated(true)
        }
        catch (error) {
            setisauthenticated(false)
            console.log(error.response.data.error);
            toast.error(error.response.data.error)
        }
        
    }
    if (isauthenticated) {
        return <Navigate to={"/"} />
    }
    return (
        <>
            <div className="main flex w-[70%] h-[90vh] my-[2rem] mx-auto">
                <div className="imgsection relative w-[30%]">
                    <h1 className='absolute text-2xl font-bold top-[1rem] left-[1rem]'>SocialX</h1>
                    <img className='h-full' src="https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?ga=GA1.1.320508142.1722584958&semt=ais_hybrid" alt="" />
                    {/* <h1 className='absolute bottom-[3rem] w-[70%] left-[3rem] font-serif text-[1.1rem] text-white'>Empowering Healthcare Thorugh Ai-Driven Adverse Event Detection</h1> */}
                </div>
                <div className="formsection flex flex-col w-[70%] p-[4rem]">
                    <div className="heading bg-red">
                        <h1 className='text-3xl font-bold font-serif'>Revolutionalise Parsing of Social Media Feeds with AI-Powered Analysis</h1>
                        <h6 className='text-[1.2rem] font-serif'>Genearte screenshot of the posts, messages, timeline, friend list, following, followers, account info</h6>
                    </div>
                    <div className="form p-[4rem]">
                        <form onSubmit={submithandler}>
                            <div className="sub">
                                <p className='font-bold my-[0.5rem]'>EMAIL ID</p>
                                <input className='mb-[1rem] border-solid border-2 border-black w-[100%] rounded-md h-[2rem]' type="email" placeholder='email id' value={email} onChange={(e) => { setemail(e.target.value) }} />
                            </div>
                            <div className="sub relative">
                                <p className='font-bold my-[0.5rem]'>PASSWORD</p>
                                <input className='border-solid border-2 border-black w-[100%] rounded-md h-[2rem]' type="password" placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                            </div>
                            <button className='bg-[#0184BC] text-white mt-[2rem] w-full h-[2rem] rounded-lg text-[1rem]' >Login </button>
                            </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login