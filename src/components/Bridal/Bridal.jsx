
const Bridal = () => {
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
                <div className='py-36 flex'>
                    <div className='border border-current py-10 px-7 rounded flex flex-col justify-center items-center mx-5 bg-[#fff] drop-shadow-xl'>
                        <div className='rounded-full bg-current p-10 w-40 h-40 flex justify-center items-center -mt-32'>
                            <p className='text-[#fff] text-center'>Premium Package</p>
                        </div>
                        <ul className='mt-4'>
                            <li className='text-gold'>
                                Premium Makeup
                            </li>
                            <li className='text-gold'>
                                Hair Style
                            </li>
                            <li className='text-gold'>
                                Mahendi
                            </li>
                            <li className='text-gold'>
                                Bridal Jwellary
                            </li>
                            <li className='text-gold'>
                                Pre Bridal Premium Therapy
                            </li>
                            <li className='text-gold'>
                                Sider Mackup For 3
                            </li>
                            <li className='text-gold'>
                                Engement Mackup+Hair Style
                            </li>
                        </ul>
                        <div className='flex justify-between items-center w-full mt-7'>
                            <button className='bg-current px-5 py-2 text-[#fff] rounded'>25000₹</button>
                            <button className='bg-current px-5 py-2 text-[#fff] rounded'>Book Now</button>
                        </div>
                    </div>
                    <div className='border border-current py-10 px-7 rounded flex flex-col justify-center items-center mx-5 bg-[#fff] drop-shadow-xl'>
                        <div className='rounded-full bg-current p-10 w-40 h-40 flex justify-center items-center -mt-32'>
                            <p className='text-[#fff] text-center'>Premium Package</p>
                        </div>
                        <ul className='mt-4'>
                            <li className='text-gold'>
                                Premium Makeup
                            </li>
                            <li className='text-gold'>
                                Hair Style
                            </li>
                            <li className='text-gold'>
                                Mahendi
                            </li>
                            <li className='text-gold'>
                                Bridal Jwellary
                            </li>
                            <li className='text-gold'>
                                Pre Bridal Premium Therapy
                            </li>
                            <li className='text-gold'>
                                Sider Mackup For 3
                            </li>
                            <li className='text-gold'>
                                Engement Mackup+Hair Style
                            </li>
                        </ul>
                        <div className='flex justify-between items-center w-full mt-7'>
                            <button className='bg-current px-5 py-2 text-[#fff] rounded'>25000₹</button>
                            <button className='bg-current px-5 py-2 text-[#fff] rounded'>Book Now</button>
                        </div>
                    </div>
                    <div className='border border-current py-10 px-7 rounded flex flex-col justify-center items-center mx-5 bg-[#fff] drop-shadow-xl'>
                        <div className='rounded-full bg-current p-10 w-40 h-40 flex justify-center items-center -mt-32'>
                            <p className='text-[#fff] text-center'>Premium Package</p>
                        </div>
                        <ul className='mt-4'>
                            <li className='text-gold'>
                                Premium Makeup
                            </li>
                            <li className='text-gold'>
                                Hair Style
                            </li>
                            <li className='text-gold'>
                                Mahendi
                            </li>
                            <li className='text-gold'>
                                Bridal Jwellary
                            </li>
                            <li className='text-gold'>
                                Pre Bridal Premium Therapy
                            </li>
                            <li className='text-gold'>
                                Sider Mackup For 3
                            </li>
                            <li className='text-gold'>
                                Engement Mackup+Hair Style
                            </li>
                        </ul>
                        <div className='flex justify-between items-center w-full mt-7'>
                            <button className='bg-current px-5 py-2 text-[#fff] rounded'>25000₹</button>
                            <button className='bg-current px-5 py-2 text-[#fff] rounded'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bridal;