import { NavLink } from "react-router";

import logo from '../../utils/images/logo.png';

const Navbar = () => {
  return (
    <nav>
        <div className="bg-[#fff] z-50 flex justify-between px-20 py-2 shadow-md fixed w-full" role="navigation">
            <div className='flex items-center justify-center'>
                <img src={logo} alt="Logo" />
                <h1 className="text-3xl font-bold text-current inline m-0 ml-3">
                    Beauty Parlour
                </h1>
            </div>
            <ul className='flex'>
                <li className='mx-2 flex justify-center items-center'><NavLink to="/home" className='text-lg font-medium text-current hover:underline'>Home</NavLink></li>
                <li className='mx-2 flex justify-center items-center'><NavLink to="/bride" className='text-lg font-medium text-current hover:underline'>Bride</NavLink></li>
                <li className='mx-2 flex justify-center items-center'><NavLink to="/appointment" className='text-lg font-medium text-current hover:underline'>Appointment</NavLink></li>
                <li className='mx-2 flex justify-center items-center'><NavLink to="/login" className='text-lg font-medium text-current hover:underline'>Login</NavLink></li>
                <li className='mx-2 flex justify-center items-center'><NavLink to="/cart" className='text-lg font-medium text-current hover:underline'>My Booking</NavLink></li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;