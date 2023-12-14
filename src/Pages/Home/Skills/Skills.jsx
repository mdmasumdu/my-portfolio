import axios from "axios";
import { useEffect, useState } from "react";
import Skill from "./Skill";


const Skills = () => {
const [skills,setskills]=useState([])
  useEffect(()=>{
    axios.get('Logo.json')
    .then(data=>setskills(data.data))
  },[])
    return (
        <div className=" bg-slate-300 pt-10 p-5">
          <h1 className="text-4xl font-bold  text-center bg-orange-400 border w-96 mx-auto">MY Skills</h1>

               <div className="grid grid-cols-5 gap-5 text-black">
               {
                    skills.map(skill=><Skill key={skill.id} skill={skill}></Skill>)
                   }
               </div>
            
        </div>
    );
};

export default Skills;