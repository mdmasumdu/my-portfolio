import img1 from "../../../assets/front-view-stacked-books-graduation-cap-ladders-education-day_prev_ui.png"

const Education = () => {
    return (
      <section className=" bg-slate-200 pt-10">

<h1 className="text-4xl font-bold  text-center bg-orange-400 border md:w-1/2 mx-auto mb-10 text-black p-1">My Experience and Education</h1>

          <div className="flex flex-col text-black md:flex-row-reverse">
     

          <div className="flex-1 flex flex-col justify-center ml-10">

                <div className="border-l border-black pl-3">
                <h1> <span className="text-xl font-bold">1 year + progamming Experience</span></h1>
                <h1>Completed Project: <span className="text-xl font-bold">8+</span></h1>
                <h1>Freelance Project: <span className="text-xl font-bold">5+</span></h1>
               
                </div>
                <div className="border-l border-black pl-3 mt-5 ">
                <h1> <span className="text-xl font-bold">Complete Web Development Course </span></h1>
                <h1>Programming Hero</h1>
                <h1>from July-2023 - Dec-2023</h1>
               
                </div>

                <div className="border-l border-black pl-3 mt-5 mb-5">
                <h1><span className="text-xl font-bold">Bachelor of Social Science </span></h1>
                <h1>Major: Department of Political Science</h1>
                <h1>Institute: University of Dhaka</h1>
                <h1>Status:Currently studing</h1>
                </div>

                <div className="border-l border-black pl-3">
                <h1><span className="text-xl font-bold">Higher Secondary School </span></h1>
                <h1>Institute: Gafargaon Govt. College</h1>
                <h1>GPA-5</h1>
                </div>
               

            </div>



   <div className="flex-1 flex justify-center">
    <img className="w-1/2" src={img1} alt="" />
   </div>
   
     
 </div>
      </section>
    );
};

export default Education;