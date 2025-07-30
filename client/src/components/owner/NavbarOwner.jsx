import React from 'react'
import { assets,  } from '../../assets/assets'  //dummyUserData
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const NavbarOwner = () => {

    const {user} = useAppContext()         //const user = dummyUserData;
  

  return (
    <div className='flex items-center justify-between px=6 md:px-10
    py-4 text-gray-500 border-b border-borderColor
    relative transition-all'>
        
    <Link to='/' className='flex items-center gap-2'>
    <img src={assets.logo} alt="" className='h-7' />
    <h1 className='text-lg font-semibold text-grey-500'>F1 Rental</h1>
    </Link>

    <p>Welcome, {user?.name || "Owner"}</p>


    </div>
  )
}

export default NavbarOwner
