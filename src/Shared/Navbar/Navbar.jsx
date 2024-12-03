import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
       <div className="flex justify-center items-center">
 <div className="w-full mx-auto border-t-4 relative border-[#262F68] h-[60px]">
        </div>
        <div className="w-[600px] absolute top-0 mx-auto bg-[#262F68] rounded-bl-full rounded-br-full h-[60px]">
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