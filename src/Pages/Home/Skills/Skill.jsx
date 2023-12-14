/* eslint-disable react/prop-types */


const Skill = ({skill}) => {
    return (
        <div className="card  shadow-xl">
        <figure className="px-10 pt-10">
          <img  src={skill.logo} alt="Shoes" className="rounded-xl w-24 h-24" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{skill.name}</h2>
          
        </div>
      </div>
    );
};

export default Skill;