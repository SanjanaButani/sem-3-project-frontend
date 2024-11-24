import axios from 'axios';
import { baseUrl } from '../../api/baseUrl';
import { useEffect, useState } from 'react';

const Bridal = () => {

    const [packages, setPackages] = useState(null); 
    
    const fetchPackages = async () => {
        try {
            const res = await axios.get(`${baseUrl}/admin/package/6743590676756ede8f9aa464`);
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
                <button className='bg-current px-3 py-2 text-[#fff] rounded ml-2 shadow'>Book Now</button>
            </div>
        </div>
    ));
    
    useEffect(() => {
        fetchPackages();
    }, []);
    
    return (
        <div className='bg-main pt-28 py-10 flex flex-col justify-center items-center px-36 scroll-smooth'>
            <h2 className="text-current text-2xl text-center font-bold">
                Bridal Portfolio
            </h2>
            <a className="text-lg text-center mt-7" href='#portfolio'>
                Our Portfolio
            </a>
            <p className="text-gold text-lg text-center mt-7 w-2/4">
                Look Special on your Wedding with Top Makeup Artists in India. Book the best bridal makeup package from top & verified bridal makeup artists in All Over India.
            </p>
            <p className="text-current text-lg font-bold text-center mt-5">
                Bridal Mackup/Party Mackup/Birthday Mackup/Fuction Mackup
            </p>
            <div className="images flex mt-20">
                <img src={require('../../utils/images/bridal_1.png')} alt="portfolio" className='mx-5' />
                <img src={require('../../utils/images/bridal_2.png')} alt="portfolio" className='mx-5' />
                <img src={require('../../utils/images/bridal_3.png')} alt="portfolio" className='mx-5' />
                <img src={require('../../utils/images/bridal_4.png')} alt="portfolio" className='mx-5' />
            </div>
            <div>
                <h2 className="text-current text-2xl text-center font-bold mt-20 drop-shadow-sm" id='portfolio'>Bridal Package</h2>
                <div className='py-10 pt-16 flex'>
                    {renderPackages}
                </div>
            </div>
        </div>
    )
}

export default Bridal;