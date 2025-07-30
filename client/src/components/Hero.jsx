import React, { useState } from 'react'
import main_car from '../assets/RB 20.jpg';
import { assets, cityList } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import {motion} from 'motion/react'
const Hero = () => {

    const [pickupLocation, setPickupLocation] = useState('');

    const {pickupDate, setPickupDate, returnDate, setReturnDate, navigate} = useAppContext()

    const handleSearch = (e)=>{
      e.preventDefault()
      navigate('/cars?pickupLocation=' + pickupLocation + '&pickupDate=' +pickupDate + '&returnDate=' +returnDate)
    }

  return (
    <motion.div 
    initial={{ opacity: 0}}
    animate={{y:0, opacity: 1}}
    transition={{duration: 0.8}}
    className='h-screen flex flex-col itmes-center justify-center gap-10 bg-light text-center'>
      
    <motion.h1  initial={{y:50, opacity: 0}} animate={{y:0, opacity: 1}} transition={{duration: 0.8, delay: 0.2}}
    className='text-4xl md:text-5xl font-semibold text-center mb-2'>
  F1 Winning Championship Cars for Rent
</motion.h1>

<motion.form 
initial={{scale: 0.95, opacity: 0,y:50}}
animate={{scale: 1, y:0, opacity: 1}}
transition={{duration: 0.6,delay:0.4}}
onSubmit={handleSearch}
  className='
    flex flex-col md:flex-row items-start md:items-center justify-between 
    p-6 rounded-lg md:rounded-full w-full max-w-[500px] md:max-w-[800px] 
    bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)] mx-auto
  '
>
  <div className='flex flex-col md:flex-row items-start md:items-center gap-10 w-full justify-center'>
    <div className='flex flex-col items-start gap-2'>
        <select required value={pickupLocation} onChange={(e)=> setPickupLocation(e.target.value)}> 
            <option value="">Pickup Location</option>
            {cityList.map((city) => <option key={city} value={city}>{city}
            </option>)} 
        </select> 
                <p className='px-1 text-sm text-gray-500'>{pickupLocation ?
                 pickupLocation: 'Please select location'}</p>
    </div>
    <div className='flex flex-col items-start gap-2'>
        <label htmlFor='pickup-date'>Pick-up Date</label>
        <input value={pickupDate} onChange={e=>setPickupDate(e.target.value)} type="date" id='pickup-date' min={new Date().toISOString().
            split('T')[0]} className='text-sm text-gray-500' required /> 
    </div>
     <div className='flex flex-col items-start gap-2'>
        <label htmlFor='Return Date'>Return Date</label>
        <input value={returnDate} onChange={e=>setReturnDate(e.target.value)} type="date" id='return-date' min={new Date().toISOString().
            split('T')[0]} className='text-sm text-gray-500'  /> 
    </div>
    <motion.button 
    whileHover={{scale:1.2}}
    whileTap={{scale:1.1}}
    className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'>
        <img src={assets.search_icon} alt="search_icon" className='brightness-300' />
        Search</motion.button>
  </div>
  
</motion.form>

<motion.img 
initial={{y:100, opacity:0}}
animate={{y:0, opacity:1}}
transition={{duration: 0.8,delay:0.6}}

  src={main_car} 
  alt=" main car" 
  className="max-h-[400px] max-w-full object-contain mx-auto " 
/>

    </motion.div>
  )
}

export default Hero
