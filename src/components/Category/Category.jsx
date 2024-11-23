import { useParams } from "react-router";

const Category = () => {

    let params = useParams();
    console.log(params.categoryId);
    
    return (
        <div className="px-28 py-10 pt-28">
            <div className="header flex flex-col justify-center items-center">
                <img src={require('../../utils/images/logo_big.png')} alt="header" />
                <h2 className="text-current text-center text-xl mt-3">Hair Package</h2>
            </div>
            <div className="flex flex-wrap flex-1 mt-16">
                <div className="border border-current rounded-md bg-[#fff] py-5 px-7 min-w-80 flex flex-col justify-center items-center shadow-lg mx-10 my-16">
                    <img 
                        src={require('../../utils/images/hair_cut.png')} 
                        alt="header"
                        className="w-36 h-auto rounded-full -mt-24"
                    />
                    <p className="text-center text-gold font-bold mt-5 text-lg">
                        Hair Cut
                    </p>
                    <div className="flex justify-between mt-6 w-full">
                        <button className='bg-current px-3 py-2 text-[#fff] rounded mr-2 shadow'>25000₹</button>
                        <button className='bg-current px-3 py-2 text-[#fff] rounded ml-2 shadow'>Book Now</button>
                    </div>
                </div>
                <div className="border border-current rounded-md bg-[#fff] py-5 px-7 min-w-80 flex flex-col justify-center items-center shadow-lg mx-10 my-16">
                    <img 
                        src={require('../../utils/images/hair_cut.png')} 
                        alt="header"
                        className="w-36 h-auto rounded-full -mt-24"
                    />
                    <p className="text-center text-gold font-bold mt-5 text-lg">
                        Hair Cut
                    </p>
                    <div className="flex justify-between mt-6 w-full">
                        <button className='bg-current px-3 py-2 text-[#fff] rounded mr-2 shadow'>25000₹</button>
                        <button className='bg-current px-3 py-2 text-[#fff] rounded ml-2 shadow'>Book Now</button>
                    </div>
                </div>
                <div className="border border-current rounded-md bg-[#fff] py-5 px-7 min-w-80 flex flex-col justify-center items-center shadow-lg mx-10 my-16">
                    <img 
                        src={require('../../utils/images/hair_cut.png')} 
                        alt="header"
                        className="w-36 h-auto rounded-full -mt-24"
                    />
                    <p className="text-center text-gold font-bold mt-5 text-lg">
                        Hair Cut
                    </p>
                    <div className="flex justify-between mt-6 w-full">
                        <button className='bg-current px-3 py-2 text-[#fff] rounded mr-2 shadow'>25000₹</button>
                        <button className='bg-current px-3 py-2 text-[#fff] rounded ml-2 shadow'>Book Now</button>
                    </div>
                </div>
                <div className="border border-current rounded-md bg-[#fff] py-5 px-7 min-w-80 flex flex-col justify-center items-center shadow-lg mx-10 my-16">
                    <img 
                        src={require('../../utils/images/hair_cut.png')} 
                        alt="header"
                        className="w-36 h-auto rounded-full -mt-24"
                    />
                    <p className="text-center text-gold font-bold mt-5 text-lg">
                        Hair Cut
                    </p>
                    <div className="flex justify-between mt-6 w-full">
                        <button className='bg-current px-3 py-2 text-[#fff] rounded mr-2 shadow'>25000₹</button>
                        <button className='bg-current px-3 py-2 text-[#fff] rounded ml-2 shadow'>Book Now</button>
                    </div>
                </div>
                <div className="border border-current rounded-md bg-[#fff] py-5 px-7 min-w-80 flex flex-col justify-center items-center shadow-lg mx-10 my-16">
                    <img 
                        src={require('../../utils/images/hair_cut.png')} 
                        alt="header"
                        className="w-36 h-auto rounded-full -mt-24"
                    />
                    <p className="text-center text-gold font-bold mt-5 text-lg">
                        Hair Cut
                    </p>
                    <div className="flex justify-between mt-6 w-full">
                        <button className='bg-current px-3 py-2 text-[#fff] rounded mr-2 shadow'>25000₹</button>
                        <button className='bg-current px-3 py-2 text-[#fff] rounded ml-2 shadow'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;