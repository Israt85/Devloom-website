import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
       <div className="flex justify-center items-center">

        <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      <NavLink to='/'><li>Home</li></NavLink>
       <NavLink to='/portfolio'> <li>Portfolio</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
        <NavLink to='/blog'><li>blog</li></NavLink>
        <li>EN</li>
      </ul>
    </div>
  </div>
  <div className="w-full mx-auto lg:block hidden border-t-4 relative border-[#262F68] h-[60px]">
  </div>
        <div className="w-[600px] lg:block hidden absolute top-0 mx-auto bg-[#262F68] rounded-bl-full rounded-br-full h-[60px]">
    <ul className="text-white flex justify-evenly my-3 items-center ">
        <NavLink to='/'><li>Home</li></NavLink>
       <NavLink to='/portfolio'> <li>Portfolio</li></NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
        <NavLink to='/blog'><li>blog</li></NavLink>
        <li>EN</li>
    </ul>
</div>



       </div>
    );
};

export default Navbar;