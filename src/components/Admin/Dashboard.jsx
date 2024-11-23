import { useState } from "react";

const Dashboard = () => {

    const [button, setButton] = useState('appointments');

    const renderMain = () => {
        if (button === 'appointments') {
            return (
                <div className="mx-5 my-4 bg-[#fff] w-[80vw] h-full p-5 overflow-scroll">
                    <h1 className="text-current font-bold text-2xl text-center">Appointments</h1>
                    <table className="w-full mt-4">
                        <tr className="border border-current">
                            <th className="text-current border text-lg m-2 text-center">No</th>
                            <th className="text-current border text-lg m-2 text-center">Name</th>
                            <th className="text-current border text-lg m-2 text-center">Date & Time</th>
                            <th className="text-current border text-lg m-2 text-center">Mobile Number</th>
                            <th className="text-current border text-lg m-2 text-center">Service</th>
                        </tr>
                        {/* Data Row */}
                        <tr className="border border-current my-2">
                            <td className="text-current border text-lg text-center m-2">1</td>
                            <td className="text-current border text-lg text-center m-2">Sanjana Butani</td>
                            <td className="text-current border text-lg text-center m-2">2 Dec 2024, 3:00 PM</td>
                            <td className="text-current border text-lg text-center m-2">8562940560</td>
                            <td className="text-current border text-lg text-center m-2">Hair Color, Hair Cut, Hair Wash</td>
                        </tr>
                    </table>
                </div>
            )
        }
        else if(button === 'packages'){
            return(
                <div className="mx-5 my-4 w-[80vw] h-full p-5 overflow-scroll flex flex-col items-center">
                    <h1 className="text-current font-bold drop-shadow-sm text-2xl text-center">Packages</h1>
                    <button className="bg-[#fff] border border-current shadow-lg rounded-full w-32 h-32 mt-4 flex justify-center items-center">
                        <p className="text-current text-3xl">+</p>
                    </button>
                    <p className="text-current text-lg mt-3 drop-shadow-sm">Package Logo</p>
                    <div className="flex flex-col mt-10 w-full px-52 items-center">
                        <div className="flex flex-col w-full">
                            <span className="text-current text-base drop-shadow-md">Package Name</span>
                            <input type="text" name="" id="" className="text-current text-lg py-3 px-4 rounded-md shadow-md" />
                        </div>
                        <div className="flex flex-col w-full mt-5">
                            <span className="text-current text-base drop-shadow-md">Package Price</span>
                            <input type="number" name="" id="" className="text-current text-lg py-3 px-4 rounded-md shadow-md" />
                        </div>
                        <div className="flex flex-col w-full mt-5">
                            <span className="text-current text-base drop-shadow-md">Package Category</span>
                            <input type="text" name="" id="" className="text-current text-lg py-3 px-4 rounded-md shadow-md" />
                        </div>
                        <button className='bg-current px-5 py-3 w-fit text-[#fff] rounded-md mt-10 shadow hover:bg-hover'>Add Package</button>
                    </div>
                </div>
            );
        }
        else if(button === 'offer'){
            return(
                <div className="mx-5 my-4 w-[80vw] h-full p-5 overflow-scroll flex flex-col items-center">
                    <h1 className="text-current font-bold drop-shadow-sm text-2xl text-center">Offer Packages</h1>
                    <button className="bg-[#fff] border border-current shadow-lg rounded-full w-32 h-32 mt-4 flex justify-center items-center">
                        <p className="text-current text-3xl">+</p>
                    </button>
                    <p className="text-current text-lg mt-3 drop-shadow-sm">Package Logo</p>
                    <div className="flex flex-col mt-10 w-full px-52 items-center">
                        <div className="flex flex-col w-full">
                            <span className="text-current text-base drop-shadow-md">Package Name</span>
                            <input type="text" name="" id="" className="text-current text-lg py-3 px-4 rounded-md shadow-md" />
                        </div>
                        <div className="flex flex-col w-full mt-5">
                            <span className="text-current text-base drop-shadow-md">Package Price</span>
                            <input type="number" name="" id="" className="text-current text-lg py-3 px-4 rounded-md shadow-md" />
                        </div>
                        <div className="flex flex-col w-full mt-5">
                            <span className="text-current text-base drop-shadow-md">Package Items</span>
                            <input type="text" name="" id="" className="text-current text-lg py-3 px-4 rounded-md shadow-md" />
                        </div>
                        <button className='bg-current px-5 py-3 w-fit text-[#fff] rounded-md mt-10 shadow hover:bg-hover'>Add Package</button>
                    </div>
                </div>
            );
        }
        else if(button === 'bridal'){
            return(
                <div className="mx-5 my-4 w-[80vw] h-full p-5 overflow-scroll flex flex-col items-center">
                    <h1 className="text-current font-bold drop-shadow-sm text-2xl text-center">Bridal Packages</h1>
                    <button className="bg-[#fff] border border-current shadow-lg rounded-full w-32 h-32 mt-4 flex justify-center items-center">
                        <p className="text-current text-3xl">+</p>
                    </button>
                    <p className="text-current text-lg mt-3 drop-shadow-sm">Package Logo</p>
                    <div className="flex flex-col mt-10 w-full px-52 items-center">
                        <div className="flex flex-col w-full">
                            <span className="text-current text-base drop-shadow-md">Package Name</span>
                            <input type="text" name="" id="" className="text-current text-lg py-3 px-4 rounded-md shadow-md" />
                        </div>
                        <div className="flex flex-col w-full mt-5">
                            <span className="text-current text-base drop-shadow-md">Package Price</span>
                            <input type="number" name="" id="" className="text-current text-lg py-3 px-4 rounded-md shadow-md" />
                        </div>
                        <div className="flex flex-col w-full mt-5">
                            <span className="text-current text-base drop-shadow-md">Package Items</span>
                            <input type="text" name="" id="" className="text-current text-lg py-3 px-4 rounded-md shadow-md" />
                        </div>
                        <button className='bg-current px-5 py-3 w-fit text-[#fff] rounded-md mt-10 shadow hover:bg-hover'>Add Package</button>
                    </div>
                </div>
            );
        }
        else if(button === 'category'){
            return(
                <div className="mx-5 my-4 w-[80vw] h-full p-5 overflow-scroll flex flex-col items-center">
                    <h1 className="text-current font-bold drop-shadow-sm text-2xl text-center">Categories</h1>
                    <button className="bg-[#fff] border border-current shadow-lg rounded-full w-32 h-32 mt-4 flex justify-center items-center">
                        <p className="text-current text-3xl">+</p>
                    </button>
                    <p className="text-current text-lg mt-3 drop-shadow-sm">Package Logo</p>
                    <div className="flex flex-col mt-10 w-full px-52 items-center">
                        <div className="flex flex-col w-full">
                            <span className="text-current text-base drop-shadow-md">Category Name</span>
                            <input type="text" name="" id="" className="text-current text-lg py-3 px-4 rounded-md shadow-md" />
                        </div>
                        {/* <div className="flex flex-col w-full mt-5">
                            <span className="text-current text-base drop-shadow-md">Package Price</span>
                            <input type="number" name="" id="" className="text-current text-lg py-3 px-4 rounded-md shadow-md" />
                        </div>
                        <div className="flex flex-col w-full mt-5">
                            <span className="text-current text-base drop-shadow-md">Package Items</span>
                            <input type="text" name="" id="" className="text-current text-lg py-3 px-4 rounded-md shadow-md" />
                        </div> */}
                        <button className='bg-current px-5 py-3 w-fit text-[#fff] rounded-md mt-10 shadow hover:bg-hover'>Add Package</button>
                    </div>
                </div>
            );
        }
    }

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
                <button className="bg-current text-[#fff] text-xl mt-1 py-3 hover:bg-hover" onClick={() => setButton('offer')}>
                    Offer Packages</button>
                <button className="bg-current text-[#fff] text-xl mt-1 py-3 hover:bg-hover" onClick={() => setButton('bridal')}>
                    Bridal Packages</button>
                <button className="bg-current text-[#fff] text-xl mt-1 py-3 hover:bg-hover" onClick={() => setButton('category')}>
                    Categories
                </button>
                <button className="bg-current text-[#fff] text-xl mt-1 py-3 hover:bg-hover" onClick={() => setButton('')}>
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