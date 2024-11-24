import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { LOGIN } from "../../features/userSlice";

const Login = () => {

    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    
    const login = async () => {
        try {
            const res = await axios.post(`http://localhost:5050/user/login`, { username, password });
            console.log(res.data);
            if(res.data.success){
                dispatch(LOGIN(res.data));
                sessionStorage.setItem('b-token', res.data.accessToken);
                sessionStorage.setItem('b-ust', res.data.userType);
                navigate(res.data.userType === 1 ? "/dashboard" : "/profile");
                window.location.reload();
            }
            if(!res.data.success){
                alert(res.data?.error?.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleLogin = () => {
        login();
    }
    
    return (
        <div className="flex justify-center items-center w-screen h-screen px-28 py-10 pt-20">
            <div className="flex flex-col justify-center items-center border border-current rounded-md p-6 shadow-2xl">
                <h2 className="text-current text-2xl drop-shadow-sm font-bold">Login</h2>
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
                <div className="flex flex-col mt-5">
                    <span className="text-current text-sm">Password</span>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="text-current text-lg px-2 py-1 rounded border border-current shadow-md bg-[#fff]"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="flex justify-between items-center mt-5 w-full">
                <button className='bg-current px-5 py-2 text-[#fff] rounded shadow-lg hover:bg-hover' onClick={handleLogin}>Login</button>
                <NavLink to={'/register'}>
                    <button className='bg-current px-5 py-2 text-[#fff] rounded shadow-lg hover:bg-hover'>Register</button>    
                </NavLink>
                </div> 
            </div>
        </div>
    )
}

export default Login;