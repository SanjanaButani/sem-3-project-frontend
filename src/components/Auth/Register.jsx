import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router";
import { baseUrl } from '../../api/baseUrl';
import { REGISTER } from "../../features/userSlice";
import { useDispatch } from "react-redux";

const Register = () => {
    
    const dispatch = useDispatch();
    
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ mobile, setMobile ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');

    const register = async () => {
        try {
            const res = await axios.post(`${baseUrl}/user/new-user`, {
                username, email, password, mobile
            });
            console.log(res.data);
            if(res.data.success){
                dispatch(REGISTER(res.data));
                sessionStorage.setItem('b-token', res.data.accessToken);
                sessionStorage.setItem('b-ust', res.data.userType);
                window.location.reload();
            }
            if(!res.data.success){
                alert(res.data?.error?.message);
            }
        } catch (err) {
           console.log(err);
        }
    }
    
    const handleRegister = () => {
        register();
    }
    
    return (
        <div className="flex justify-center items-center w-screen h-screen px-28 py-10 pt-20">
            <div className="flex flex-col justify-center items-center border border-current rounded-md p-6 shadow-2xl">
                <h2 className="text-current text-2xl drop-shadow-sm font-bold">Register</h2>
                <div className="flex flex-col mt-6">
                    <span className="text-current text-sm">Username</span>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        className="text-current text-lg px-2 py-1 rounded border border-current shadow-md bg-[#fff]"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col mt-6">
                    <span className="text-current text-sm">Email</span>
                    <input 
                        type="email"
                        name="email"
                        id="email"
                        className="text-current text-lg px-2 py-1 rounded border border-current shadow-md bg-[#fff]"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col mt-6">
                    <span className="text-current text-sm">Mobile</span>
                    <input 
                        type="number"
                        name="mobile"
                        id="mobile"
                        className="text-current text-lg px-2 py-1 rounded border border-current shadow-md bg-[#fff]"
                        value={mobile}
                        onChange={e => setMobile(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col mt-5">
                    <span className="text-current text-sm">Password</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="text-current text-lg px-2 py-1 rounded border border-current shadow-md bg-[#fff]"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col mt-5">
                    <span className="text-current text-sm">Confirm Password</span>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="text-current text-lg px-2 py-1 rounded border border-current shadow-md bg-[#fff]"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex justify-between items-center mt-5 w-full">
                <button className='bg-current px-5 py-2 text-[#fff] rounded shadow-lg hover:bg-hover' onClick={handleRegister}>Register</button>
                <NavLink to={'/login'}>
                    <button className='bg-current px-5 py-2 text-[#fff] rounded shadow-lg hover:bg-hover'>Login</button>    
                </NavLink>
                </div> 
            </div>
        </div>
    )
}

export default Register;