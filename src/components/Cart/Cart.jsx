import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_CART, REMOVE_FROM_CART } from "../../features/cartSlice";
import { baseUrl } from "../../api/baseUrl";
import axios from "axios";

const Cart = () => {

    const cartState = useSelector(state => state.cart);

    const dispatch = useDispatch();
    
    const [date, setDate] = useState('');
    const [cart, setCart] = useState(cartState.items);

    const handleRemoveFromCart = (id) => {
        dispatch(REMOVE_FROM_CART({ id }));
    };
    
    const renderCartItems = cart && cart.map(cartItem => (
        <div className="bg-[#fff] w-full flex justify-between px-12 py-5 rounded-md my-10 relative" key={cartItem.id}>
            <button className="absolute left-4 top-6 text-lg text-[#fff] bg-current h-4 w-4 rounded-full flex justify-center items-center" onClick={() => handleRemoveFromCart(cartItem.id)}>-</button>
            <p className="text-current text-lg uppercase basis-1/2">{cartItem.name}</p>
            <p className="text-current font-bold text-lg ml-80 basis-1/12">|</p>
            <p className="text-current text-lg uppercase basis-1/5 text-right">{cartItem.price} ₹</p>
        </div>
    ));
    
    const handleSubmit = async () => {
        const token = sessionStorage.getItem('b-token');
        const config = {
            method: "post",
            url: `${baseUrl}/user/appointment/new`,
            headers: { 
                "authorization": `Bearer ${token}`,
            },
            data: { date, services: cart },
        };
        const res = await axios.request(config);
        if(res.data.success){
            alert(res.data.message);
            dispatch(CLEAR_CART());
        }
    }
    
    useEffect(() => {
        setCart(cartState.items);
    }, [cartState]);
    
    return (
        <div className="pt-28 px-32">
            <h1 className="text-center text-current text-3xl">My Bookings</h1>
            <div className="py-10">
                <div className="bg-current w-full flex justify-between px-12 py-5 rounded-md">
                    <p className="text-[#fff] text-lg uppercase basis-1/2">Item</p>
                    <p className="text-[#fff] font-bold text-lg ml-80 basis-1/12">|</p>
                    <p className="text-[#fff] text-lg uppercase basis-1/5 text-right">Total</p>
                </div>
                {renderCartItems}
                <div className="bg-main2 w-full flex justify-between px-12 py-5 rounded-md my-10 relative">
                    <p className="text-current text-lg uppercase basis-1/2">Total</p>
                    <p className="text-current font-bold text-lg ml-80 basis-1/12">|</p>
                    <p className="text-current text-lg uppercase basis-1/5 text-right">{cartState.totalPrice} ₹</p>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-current text-lg">Time</p>
                    <input
                        type="datetime-local"
                        name="date"
                        id="date"
                        className="text-current text-lg"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </div>
                <button className='bg-current px-10 py-4 text-[#fff] rounded uppercase' onClick={handleSubmit}>Book Appointment</button>
            </div>
        </div>
    )
}

export default Cart;