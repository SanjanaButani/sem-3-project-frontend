import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../features/userSlice";
import { useNavigate } from "react-router";
import axios from "axios";
import { baseUrl } from '../../api/baseUrl';
import AddPackage from "./AddPackage";
import Categories from "./Categories";

const Dashboard = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [button, setButton] = useState('appointments');
    const [data, setData] = useState(null); // Package
    const [categoriesData, setCategoriesData] = useState(null);
    const [category, setCategory] = useState('');
    const [appointments, setAppointments] = useState(null);

    const fetchPackages = async () => {
        try {
            const res = await axios.get(`${baseUrl}/admin/package/all`);
            setData(res.data.packages);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    
    const fetchAppointments = async () => {
        try {
            const res = await axios.get(`${baseUrl}/admin//appointments/all`);
            setAppointments(res.data.appointments);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const fetchCategories = async () => {
        try {
            const res = await axios.get(`${baseUrl}/admin/category/all`);
            setCategoriesData(res.data.categories);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDeletePackage = async (id) => {
        try {
            const confirmation = window.confirm('Are you sure want to delete?');
            if (confirmation) {
                const res = await axios.delete(`${baseUrl}/admin/package/delete/${id}`);
                if (res.data.success) window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handleDeleteCategory = async (id) => {
        try {
            const confirmation = window.confirm('Are you sure want to delete?');
            if (confirmation) {
                const res = await axios.delete(`${baseUrl}/admin/category/delete/${id}`);
                if (res.data.success) window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
    }

    const renderPackages = () => {
        const filteredPackages = data?.filter(
            (packageItem) => category === '' || packageItem.category === category
        );
        if (!filteredPackages || filteredPackages.length === 0) {
            return (
                <div className="border border-current rounded-md bg-[#fff] py-5 px-7 min-w-80 max-w-96 flex flex-col justify-center items-center shadow-lg mx-5 my-16">
                    <p>NO Packages!</p>
                </div>
            );
        }
        return filteredPackages.map((packageItem) => (
            <div
                key={packageItem._id}
                className="border border-current rounded-md bg-[#fff] py-5 px-7 min-w-80 max-w-96 flex flex-col justify-center items-center shadow-lg mx-5 my-16"
            >
                {packageItem.image ? (
                    <img
                        src={`${baseUrl}/${packageItem.image}`}
                        alt="header"
                        className="w-36 h-36 rounded-full -mt-24 object-cover"
                    />
                ) : (
                    <div className="bg-[#fff] text-[#fff] border border-current shadow-lg rounded-full w-32 h-32 -mt-20 flex justify-center items-center hover:cursor-pointer z-0 hover:shadow-none"></div>
                )}
                <p className="text-center text-gold font-bold mt-5 mb-3 text-lg">
                    {packageItem.name}
                </p>
                {packageItem.items &&
                    packageItem.items.map((item, id) => (
                        <p className="text-current text-md text-left w-full" key={id}>
                            - {item}
                        </p>
                    ))}
                <div className="flex justify-between mt-5 w-full">
                    <button className="bg-current px-3 py-2 text-[#fff] rounded mr-2 shadow">
                        {packageItem.price} ₹
                    </button>
                    <button
                        className="bg-current px-3 py-2 text-[#fff] rounded ml-2 shadow w-28"
                        onClick={() => handleDeletePackage(packageItem._id)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        ));
    };

    const renderCategories = categoriesData && categoriesData.map(dataItem => (
        <div key={dataItem._id} className="border border-current rounded-md bg-[#fff] py-5 px-7 min-w-80 max-w-96 flex flex-col justify-center items-center shadow-lg mx-5 my-16">
            {
                dataItem.image ?
                    <img
                        src={`${baseUrl}/${dataItem.image}`}
                        alt="header"
                        className="w-36 h-36 rounded-full -mt-24 object-cover"
                    />
                    :
                    <div className="bg-[#fff] text-[#fff] border border-current shadow-lg rounded-full w-32 h-32 -mt-20 flex justify-center items-center hover:cursor-pointer z-0 hover:shadow-none"></div>
            }
            <p className="text-center text-gold font-bold mt-5 text-lg">
                {dataItem.name}
            </p>
            <div className="flex justify-between mt-3 w-full">
                <button className='bg-current px-3 py-2 text-[#fff] rounded ml-2 shadow w-28'>Edit</button>
                <button className='bg-current px-3 py-2 text-[#fff] rounded ml-2 shadow w-28' onClick={() => handleDeleteCategory(dataItem._id)}>Remove</button>
            </div>
        </div>
    ));

    const renderCategoriesDropDown = categoriesData && categoriesData.map((cat) => {
        return (
            <option value={cat._id} key={cat._id}>{cat.name}</option>
        );
    });
    
    const renderMain = () => {
        if (button === 'appointments') {
            return (
                <div className="mx-5 my-4 bg-[#fff] w-[80vw] h-full p-5 overflow-scroll">
                    <h1 className="text-current font-bold text-2xl text-center">Appointments</h1>
                    <table className="w-full mt-4">
                        <thead>
                            <tr className="border border-current">
                                <th className="text-current border text-lg m-2 text-center">No</th>
                                <th className="text-current border text-lg m-2 text-center">Name</th>
                                <th className="text-current border text-lg m-2 text-center">Date & Time</th>
                                <th className="text-current border text-lg m-2 text-center">Mobile Number</th>
                                <th className="text-current border text-lg m-2 text-center">Service</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Data Row */}
                            {/* <tr className="border border-current my-2">
                                <td className="text-current border text-lg text-center m-2">1</td>
                                <td className="text-current border text-lg text-center m-2">Sanjana Butani</td>
                                <td className="text-current border text-lg text-center m-2">2 Dec 2024, 3:00 PM</td>
                                <td className="text-current border text-lg text-center m-2">8562940560</td>
                                <td className="text-current border text-lg text-center m-2">Hair Color, Hair Cut, Hair Wash</td>
                            </tr> */}
                            {appointments && appointments.map((ap, index) => (
                                <tr className="border border-current my-2" key={index}>
                                    <td className="text-current border text-lg text-center m-2">{++index}</td>
                                    <td className="text-current border text-lg text-center m-2">{ap.createdBy.username}</td>
                                    <td className="text-current border text-lg text-center m-2">{new Date(ap.date).toDateString()}</td>
                                    <td className="text-current border text-lg text-center m-2">{ap.createdBy.mobile}</td>
                                    <td className="text-current border text-lg text-center m-2">
                                        {ap.services.map(service => service.name )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }
        else if (button === 'addpackages') {
            return (
                <AddPackage
                    setButton={setButton}
                    categories={categoriesData}
                />
            );
        }
        else if (button === 'packages') {
            return (
                <div className="mx-5 my-4 w-[80vw] h-full p-5 overflow-scroll flex items-start justify-start flex-wrap">
                    <div className="px-10 flex justify-between w-full">
                        <h1 className="text-current font-bold drop-shadow-sm text-2xl text-center">Packages</h1>
                        <select name="category" id="" value={category} onChange={e => setCategory(e.target.value)} className="text-current text-lg py-3 px-4 rounded-md shadow-md">
                            <option value={""} disabled>Select an option</option>
                            {renderCategoriesDropDown}
                        </select>
                        <button className='bg-current px-5 py-2 text-[#fff] rounded shadow-lg hover:bg-hover' onClick={() => setButton('addpackages')}>Add Package</button>
                    </div>
                    <div className="mt-14 w-full flex flex-wrap items-start justify-start">
                        {renderPackages()}
                    </div>
                </div>
            );
        }
        else if (button === 'category') {
            return (
                <Categories
                    setButton={setButton}
                />
            );
        }
        else if (button === 'categories') {
            return (
                <div className="mx-5 my-4 w-[80vw] h-full p-5 overflow-scroll flex items-center flex-wrap">
                    <div className="px-10 flex justify-between w-full">
                        <h1 className="text-current font-bold drop-shadow-sm text-2xl text-center">Categories</h1>
                        <button className='bg-current px-5 py-2 text-[#fff] rounded shadow-lg hover:bg-hover' onClick={() => setButton('category')}>Add Category</button>
                    </div>
                    <div className="mt-14 w-full flex flex-wrap">
                        {renderCategories}
                    </div>
                </div>
            );
        }
    }

    const handleLogout = () => {
        const confirm = window.confirm('Are you sure want to logout?');
        if (confirm) {
            sessionStorage.removeItem('b-token');
            sessionStorage.removeItem('b-ust');
            dispatch(LOGOUT);
            navigate('/home');
            window.location.reload();
        }
    }

    useEffect(() => {
        fetchPackages();
        fetchCategories();
        fetchAppointments();
    }, []);

    return (
        <div className="w-screen h-screen pt-20 flex">
            {/* Sidebar */}
            <div className="bg-[#fff] h-full flex flex-col w-60">
                <button className="bg-current text-[#fff] text-xl mt-1 py-3 hover:bg-hover" onClick={() => setButton('appointments')}>
                    Appointments
                </button>
                <button className="bg-current text-[#fff] text-xl mt-1 py-3 hover:bg-hover" onClick={() => setButton('packages')}>
                    Packages
                </button>
                <button className="bg-current text-[#fff] text-xl mt-1 py-3 hover:bg-hover" onClick={() => setButton('categories')}>
                    Categories
                </button>
                <button className="bg-current text-[#fff] text-xl mt-1 py-3 hover:bg-hover" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <div className="main flex justify-center items-center">
                {renderMain()}
            </div>
        </div>
    )
}

export default Dashboard;