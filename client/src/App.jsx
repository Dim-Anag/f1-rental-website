import React, {useState} from 'react';
import Navbar from './components/Navbar';
import {useLocation, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import Cars from './pages/Cars';
import MyBookings from './pages/MyBookings';
import Footer from './components/Footer';
import Layout from './pages/owner/Layout';
import Dashboard from './pages/owner/Dashboard';
import AddCar from './pages/owner/AddCar';
import ManageCars from './pages/owner/ManageCars';
import ManageBookings from './pages/owner/ManageBookings';
import Login from './components/Login';
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext';
import AboutUs from './pages/AboutUs';
import HelpCenter from './pages/HelpCenter';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Insurance from './pages/Insurance';
import Cookies from './pages/Cookies';



const App = () => {


  const {showLogin} = useAppContext()
  const isOwnerPath = useLocation().pathname.startsWith('/owner');



  return (
    <>
    <Toaster />
      {showLogin && <Login/>}
      
      
      {!isOwnerPath && <Navbar />}



      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-details/:id' element={<CarDetails />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='my-bookings' element={<MyBookings />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/support" element={<HelpCenter />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/insurance" element={<Insurance />} />
         <Route path="/cookies" element={<Cookies />} />



        <Route path='/owner' element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path='add-car' element={<AddCar />}/>
          <Route path='manage-cars' element={<ManageCars />}/>
          <Route path='manage-bookings' element={<ManageBookings />}/>
        </Route>

      </Routes>

      {!isOwnerPath && <Footer />}
      


    </>

    );
    };

    export default App