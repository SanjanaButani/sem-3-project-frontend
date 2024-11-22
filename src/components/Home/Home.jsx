import logo from '../../utils/images/logo_big.png';
import { NavLink } from 'react-router';

const Home = () => {
    return (
       <div className='bg-main py-10'>
            <div className="flex flex-col items-center justify-center mt-20">
                <img src={logo} alt="logo" className='w-40'/>
                <h1 className='inline text-current text-4xl mt-5 drop-shadow-sm'>Welcome to Beauty Parlour</h1>
            </div>
            <div className='flex flex-row px-40 mt-20'>
                {/* Card */}
                <NavLink className='mx-5' to={'/bride'}>
                    <img src={logo} alt="logo" className='w-40 h-auto'/>
                    <p className='text-gold drop-shadow-sm text-center text-lg'>Bridal package</p>
                </NavLink>
                <NavLink className='mx-5' to={'/category/1'}>
                    <img src={logo} alt="logo" className='w-40 h-auto'/>
                    <p className='text-gold drop-shadow-sm text-center text-lg'>Hair package</p>
                </NavLink>
                <div className='mx-5'>
                    <img src={logo} alt="logo" className='w-40 h-auto'/>
                    <p className='text-gold drop-shadow-sm text-center text-lg'>Nail & Art package</p>
                </div>
                <div className='mx-5'>
                    <img src={logo} alt="logo" className='w-40 h-auto'/>
                    <p className='text-gold drop-shadow-sm text-center text-lg'>Cleanup package</p>
                </div>
                <div className='mx-5'>
                    <img src={logo} alt="logo" className='w-40 h-auto'/>
                    <p className='text-gold drop-shadow-sm text-center text-lg'>Threading & Waxing</p>
                </div>
                <div className='mx-5'>
                    <img src={logo} alt="logo" className='w-40 h-auto'/>
                    <p className='text-gold drop-shadow-sm text-center text-lg'>Special Offer</p>
                </div>
            </div>
        </div>
    )
}

export default Home;
