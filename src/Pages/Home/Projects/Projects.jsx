import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Project from "./Project";


const Projects = () => {
 const [projects,setProjects] =useState([]);
    useEffect(()=>{
        axios.get("Projects.json")
        .then(data=>setProjects(data.data))
    },[])
    return (
        <div className="pt-10 bg-slate-200">
               <h1 className="text-4xl font-bold  text-center bg-orange-400 border md:w-96 mx-auto  p-1 text-black">My Recent Projects</h1>
              
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                  {
                projects.map(project=><Project key={project.id} project={project}></Project>)
            }
            
                  </div>
        </div>
    );
};

export default Projects;