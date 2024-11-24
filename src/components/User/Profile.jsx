import { useDispatch } from "react-redux";
import { LOGOUT } from "../../features/userSlice";
import { useNavigate } from "react-router";
import { baseUrl } from "../../api/baseUrl";
import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);

  const fetchUserDetails = async () => {
    try {
      const token = sessionStorage.getItem('b-token');
      const config = {
        method: "get",
        url: `${baseUrl}/user/profile`,
        headers: {
          "authorization": `Bearer ${token}`,
        },
      };
      const res = await axios.request(config);
      if (res.data.success) {
        setUserData(res.data.user);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('b-token');
    sessionStorage.removeItem('b-ust');
    dispatch(LOGOUT);
    navigate('/home');
    window.location.reload();
  }

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div className="h-screen w-screen px-28 flex justify-center items-center">
      <div className="w-full px-20 py-20 bg-[#fff] border border-current rounded-lg shadow-lg flex flex-col justify-center items-center">
        <div className="flex justify-between w-full">
          <p></p>
          <h1 className="text-current text-3xl text-center drop-shadow">My Profile</h1>
          <button className='bg-current px-5 py-2 text-[#fff] rounded shadow-lg hover:bg-hover' onClick={handleLogout}>Logout</button>
        </div>
        <div className="flex justify-between items-center w-full mt-20">
          <p className="basis-1/2 text-current text-lg drop-shadow">Name: </p>
          <p className="basis-1/2 text-current text-lg border border-current rounded px-5 py-1 shadow">{userData && userData.username}</p>
        </div>
        <div className="flex justify-between items-center w-full mt-10">
          <p className="basis-1/2 text-current text-lg drop-shadow">Email: </p>
          <p className="basis-1/2 text-current text-lg border border-current rounded px-5 py-1 shadow">{userData && userData.email}</p>
        </div>
        <div className="flex justify-between items-center w-full mt-10">
          <p className="basis-1/2 text-current text-lg drop-shadow">Mobile: </p>
          <p className="basis-1/2 text-current text-lg border border-current rounded px-5 py-1 shadow">{userData && userData.mobile}</p>
        </div>
        <div className="flex justify-between items-center w-full mt-10">
          <p className="basis-1/2 text-current text-lg drop-shadow">Joined Date: </p>
          <p className="basis-1/2 text-current text-lg border border-current rounded px-5 py-1 shadow">{userData && new Date(userData.createdAt).toDateString()}</p>
        </div>
        {/* <div className="flex justify-between items-start w-full mt-10">
          <p className="basis-1/2 text-current text-lg drop-shadow">Services: </p>
          <p className="basis-1/2 text-current text-lg border border-current rounded px-5 py-1 shadow">Hair Cut, Hair Wash, Hair Color</p>
        </div> */}
      </div>
    </div>
  );
}

export default Profile;