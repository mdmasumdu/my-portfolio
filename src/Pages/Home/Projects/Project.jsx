/* eslint-disable react/prop-types */
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const Project = ({project}) => {
    return (
        <div className="text-black shadow-2xl rounded-lg p-5">
            <img className="w-3/4" src={project.image} alt="" />
            <h1 className="text-xl font-bold">{project.name}</h1>
            <p className="h-32">{project.description}</p>
           <div className="flex flex-wrap gap-5">
           <Link to={`${project.live_link}`}><button className="btn bg-slate-200 text-black hover:bg-blue-500">Visit Site <FiArrowUpRight></FiArrowUpRight></button></Link>
            <Link  to={`${project.code_link}`}><button className="btn bg-slate-200 text-black">Client Side Repo<FiArrowUpRight></FiArrowUpRight></button></Link>
            {
                project?.server_link ? <Link to={`${project.server_link}`}><button className="btn bg-slate-200 text-black">Server Side Repo<FiArrowUpRight></FiArrowUpRight></button></Link> : ""
            }
           </div>
            
        </div>
    );
};

export default Project;