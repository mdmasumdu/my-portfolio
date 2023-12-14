import { Link, NavLink } from "react-router-dom";
import logo  from "../../assets/lg2-removebg-preview.png"

const Navbar = () => {

    const links =<>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/">About</NavLink>
    <NavLink to="/">Sevice</NavLink>
    <NavLink to="/">Blogs</NavLink>
  
    </>
    return (
        <div className="navbar bg-slate-200 shadow-2xl p-5 text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {links}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl"><img className="w-24" src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 font-bold text-xl">
             {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Contact ME</a>
        </div>
      </div>
    );
};

export default Navbar;