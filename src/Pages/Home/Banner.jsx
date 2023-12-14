import { Link } from "react-router-dom";
import img from "../../assets/life.jpg"
import { FaFacebookSquare,FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";


const Banner = () => {
    return (
        <div className="flex">

            <div className="flex-1 flex  items-center justify-center flex-col ">
            <div className="space-y-3 w-2/3">
                <h1>Hi, there</h1>
                <h1>I am <span className="text-orange-400">MD MASUM</span></h1>
                <p >I am a professional web developer. I am a passionate web developer on a mission to create engaging and user-friendly digital experiences. I would like to see myself as a dedicated web developer who is working efficiently in any situation learning new technolgies, facing challeges everyday.</p>

                <p className="flex gap-3 text-xl">
                    <span><Link to="https://www.facebook.com/masumshahriars/"><FaFacebookSquare></FaFacebookSquare></Link></span>
                    <span><Link to="https://www.linkedin.com/in/mdmasumdu/"><IoLogoLinkedin></IoLogoLinkedin></Link></span>
                    <span><Link to="https://github.com/mdmasumdu"><FaGithub></FaGithub></Link></span>
                    <span><Link to="https://www.instagram.com/"><FaInstagramSquare></FaInstagramSquare></Link></span>
                  
                
                </p>
            
                    <button className="btn bg-slate-200 text-black mr-5">Hire Me</button>
                    <button className="btn bg-slate-200 text-black">Download CV</button>
                </div>

            </div>

            <div className="flex-1">
                <img  src={img} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;