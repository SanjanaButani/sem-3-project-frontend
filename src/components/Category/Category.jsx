import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseUrl } from "../../api/baseUrl";
import { ADD_TO_CART } from "../../features/cartSlice";
import { useDispatch } from "react-redux";

const Category = () => {

    let params = useParams();
    const dispatch = useDispatch();

    const [categoriesData, setCategoriesData] = useState(null);
    const [packages, setPackages] = useState(null);

    const handleAddToCart = (item) => {
        dispatch(ADD_TO_CART({ id: item._id, name: item.name, price: item.price, quantity: 1 }));
    };
    
    const fetchCategoryData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/admin/category/${params.categoryId}`);
            setCategoriesData(res.data.category);
        } catch (err) {
            console.log(err);
        }
    }

    const fetchPackages = async () => {
        try {
            const res = await axios.get(`${baseUrl}/admin/package/${params.categoryId}`);
            setPackages(res.data.packages);
        } catch (err) {
            console.log(err);
        }
    }

    const renderPackages = packages && packages.map(packageItem => (
        <div key={packageItem._id} className="border border-current rounded-md bg-[#fff] py-5 px-5 w-80 max-w-96 flex flex-col justify-center items-center shadow-lg mx-10 my-16">
            <img
                src={packageItem.image ? `${baseUrl}/${packageItem.image}` : require('../../utils/images/hair_cut.png')}
                alt="header"
                className="w-36 h-36 rounded-full -mt-24 object-cover"
            />
            <p className="text-center text-gold font-bold my-5 text-lg">
                {packageItem.name}
            </p>
            {packageItem.items &&
                    packageItem.items.map((item, id) => (
                        <p className="text-current text-md text-left w-full" key={id}>
                            - {item}
                        </p>
                    ))}
            <div className="flex justify-between mt-6 w-full">
                <button className='bg-current px-3 py-2 text-[#fff] rounded mr-2 shadow'>{packageItem.price} ₹</button>
                <button className='bg-current px-3 py-2 text-[#fff] rounded ml-2 shadow' onClick={() => handleAddToCart(packageItem)}>Book Now</button>
            </div>
        </div>
    ));
    
    useEffect(() => {
        fetchCategoryData();
        fetchPackages();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="px-28 py-10 pt-28">
            <div className="header flex flex-col justify-center items-center">
                <img
                    src={categoriesData ? `${baseUrl}/${categoriesData.image}` : require('../../utils/images/logo_big.png')}
                    alt="header"
                    className="w-40 h-40 rounded-full object-cover"
                />
                <h2 className="text-current text-center text-xl mt-3">{categoriesData && categoriesData.name}</h2>
            </div>
            <div className="flex flex-wrap flex-1 mt-16">
                {renderPackages}
            </div>
        </div>
    )
}

export default Category;