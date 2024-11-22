import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';
import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home';
import Bridal from './components/Bridal/Bridal';
import Category from './components/Category/Category';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='user' element={<User />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='home' element={<Home />} />
        <Route path='bride' element={<Bridal />} />
        <Route path='cart' element={<Cart />} />
        <Route path="category/:categoryId" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
