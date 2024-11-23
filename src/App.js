import './App.css';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import User from './components/User/User';
import Appointment from './components/User/Appointment';
import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home';
import Bridal from './components/Bridal/Bridal';
import Category from './components/Category/Category';
import Cart from './components/Cart/Cart';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { useState } from 'react';
import Dashboard from './components/Admin/Dashboard';

const App = () => {

  const [ isLoggedIn, setIsLoggedIn ] = useState(true);
  
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
        <Route path='appointment' element={isLoggedIn ? <Appointment /> : <Login />} />
        <Route path='dashboard' element={isLoggedIn ? <Dashboard /> : <Login />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
