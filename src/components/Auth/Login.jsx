import { NavLink } from "react-router";

const Login = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen px-28 py-10 pt-20">
            <div className="flex flex-col justify-center items-center border border-current rounded-md p-6 shadow-2xl">
                <h2 className="text-current text-2xl drop-shadow-sm font-bold">Login</h2>
                <div className="flex flex-col mt-6">
                    <span className="text-current text-sm">Username</span>
                    <input type="text" name="" id="" className="text-current text-lg px-2 py-1 rounded border border-current shadow-md bg-[#fff]"/>
                </div>
                <div className="flex flex-col mt-5">
                    <span className="text-current text-sm">Password</span>
                    <input type="password" name="" id="" className="text-current text-lg px-2 py-1 rounded border border-current shadow-md bg-[#fff]"/>
                </div>
                <div className="flex justify-between items-center mt-5 w-full">
                <button className='bg-current px-5 py-2 text-[#fff] rounded shadow-lg hover:bg-hover'>Login</button>
                <NavLink to={'/register'}>
                    <button className='bg-current px-5 py-2 text-[#fff] rounded shadow-lg hover:bg-hover'>Register</button>    
                </NavLink>
                </div> 
            </div>
        </div>
    )
}

export default Login;