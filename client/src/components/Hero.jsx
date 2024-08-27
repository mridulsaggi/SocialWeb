import React from 'react'
import { Link } from 'react-router-dom'
// import img1 from "./fontmain.jpg"
const Hero = () => {
    return (
        <>
            <div className="hero bg-[#F3F3F3] min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://media.istockphoto.com/id/1457066641/vector/social-media-network-concept-3d-icons-flying-over-smartphone-on-hand-drawn-sketch-doodle.jpg?s=612x612&w=0&k=20&c=q48kGCbGSq_jNo7-HNfxTXbyG-m2PH0G433djSstBJA="
                        className="max-w-sm " />
                    <div>
                        <h1 className="text-5xl font-bold font-serif">Automated Social Media Parsing for Efficient Investigations.</h1>
                        <p className="py-6 w-[70%] text-2xl font-serif">
                        Streamline the examination of social media accounts with our automated tool. Capture and document evidence with precision.
                        </p>
                        <Link to="/login" className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
