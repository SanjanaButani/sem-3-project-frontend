
const Cart = () => {
    return (
        <div className="pt-28 px-32">
            <h1 className="text-center text-current text-3xl">My Bookings</h1>
            <div className="py-10">
                <div className="bg-current w-full flex justify-between px-12 py-5 rounded-md">
                    <p className="text-[#fff] text-lg uppercase basis-1/2">Item</p>
                    <p className="text-[#fff] font-bold text-lg ml-80 basis-1/12">|</p>
                    <p className="text-[#fff] text-lg uppercase basis-1/5 text-right">Total</p>
                </div>
                <div className="bg-[#fff] w-full flex justify-between px-12 py-5 rounded-md my-10 relative">
                    <button className="absolute left-4 top-6 text-lg text-[#fff] bg-current h-4 w-4 rounded-full flex justify-center items-center">-</button>
                    <p className="text-current text-lg uppercase basis-1/2">Hair Cut</p>
                    <p className="text-current font-bold text-lg ml-80 basis-1/12">|</p>
                    <p className="text-current text-lg uppercase basis-1/5 text-right">800</p>
                </div>
                <div className="bg-[#fff] w-full flex justify-between px-12 py-5 rounded-md my-10 relative">
                    <button className="absolute left-4 top-6 text-lg text-[#fff] bg-current h-4 w-4 rounded-full flex justify-center items-center">-</button>
                    <p className="text-current text-lg uppercase basis-1/2">Hair color</p>
                    <p className="text-current font-bold text-lg ml-80 basis-1/12">|</p>
                    <p className="text-current text-lg uppercase basis-1/5 text-right">1600</p>
                </div>
                <div className="bg-main2 w-full flex justify-between px-12 py-5 rounded-md my-10 relative">
                    <p className="text-current text-lg uppercase basis-1/2">Total</p>
                    <p className="text-current font-bold text-lg ml-80 basis-1/12">|</p>
                    <p className="text-current text-lg uppercase basis-1/5 text-right">2400</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-current text-lg">Time</p>
                    <input type="datetime-local" name="" id="" className="text-current text-lg" />
                </div>
                <button className='bg-current px-10 py-4 text-[#fff] rounded uppercase'>Book Appointment</button>
            </div>
        </div>
    )
}

export default Cart;