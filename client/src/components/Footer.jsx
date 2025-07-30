import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'motion/react'
import {useNavigate} from 'react-router-dom'
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Footer = () => {
    const navigate = useNavigate();
    const { user } = useAppContext();
  return (
    <motion.div
    initial={{opacity: 0 , y:30 }}
    whileInView={{opacity:1 , y:0}}
    transition={{duration:0.6}}
    className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 texxt-sm text-gray-500'>

            <motion.div
            initial={{opacity: 0 , y:20 }}
            whileInView={{opacity:1 , y:0}}
            transition={{duration: 0.6, delay:0.2}}
            className='flex flex-wrap justify-between items-start gap-8 pb-6 border-borderColor border-b'>
                <div>
                    <motion.img 
                    initial={{opacity: 0  }}
                    whileInView={{opacity:1 }}
                    transition={{delay: 0.3, duration: 0.5}}
                    src={assets.logo} alt="logo" className='h-8 md:h-9' />


                    <motion.p 
                    initial={{opacity: 0  }}
                    whileInView={{opacity:1 }}
                    transition={{delay: 0.4, duration: 0.5}}
                    className='max-w-80 mt-3'>
                        F1 Rental is the premier destination for racing enthusiasts, offering a unique opportunity to experience the thrill of driving championship-winning F1 cars in various cities around the world. Whether you're a seasoned driver or a curious newcomer, our fleet of iconic vehicles awaits your command.
                    </motion.p>
                    <motion.div 
                    initial={{opacity: 0  }}
                    whileInView={{opacity:1 }}
                    transition={{delay: 0.5, duration: 0.5}}
                    className='flex items-center gap-3 mt-6'>
                        {/* Facebook */}
                        <a href="#"> <img src={assets.facebook_logo} className='w-5 h-5' alt="" /></a>
                        {/* Instagram */}
                        <a href="#"> <img src={assets.instagram_logo} className='w-5 h-5' alt="" /></a>
                        {/* Twitter */}
                        <a href="#"> <img src={assets.twitter_logo} className='w-5 h-5' alt="" /></a>    
                        {/* Gmail */}
                        <a href="#"> <img src={assets.gmail_logo} className='w-5 h-5' alt="" /></a>       
                    </motion.div>
                </div>




            <motion.div
                initial={{opacity: 0 ,y:20 }}
                whileInView={{opacity:1 , y:0}}
                transition={{delay: 0.4, duration: 0.6}}
            
            
            className='flex flex-wrap justify-between w-1/2 gap-8'>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:underline">Home</button></li>
                        <li><button onClick={() => { navigate('/cars'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:underline">Browse Cars</button></li>
                        <li><button onClick={() => { if(user) { navigate('/owner/add-car'); window.scrollTo({ top: 0, behavior: 'smooth' }); } else { toast.error('Please login to list your car'); navigate('/login'); } }} className="hover:underline">List Your Car</button></li>
                        <li><button onClick={() => { navigate('/about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:underline">About Us</button></li>

                    </ul>
                </div>



                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><button onClick={() => { navigate('/support'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:underline">Help Center</button></li>
                        <li><button onClick={() => { navigate('/terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:underline">Terms of Service</button></li>
                        <li><button onClick={() => { navigate('/privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:underline">Privacy Policy</button></li>
                        <li><button onClick={() => { navigate('/insurance'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:underline">Insurance</button></li>
                    </ul>
                </div>



                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li>Thessaloniki, Greece</li>
                        <li>+30 2310 000001</li>
                        <li>info@f1rental.com</li>
                        
                    </ul>
                </div>

            </motion.div>
                


                


                

            </motion.div>
            <motion.div 
                initial={{opacity: 0 ,y:10  }}
                whileInView={{opacity:1, y:0 }}
                transition={{delay: 0.6, duration: 0.6}}
            className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} F1 Rental. All rights reserved. This is a dummy webpage it is made FOR EXHIBITION ONLY</p>
                <ul className='flex items-center gap-4'>
                    <li><button onClick={() => { navigate('/privacy'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:underline">Privacy</button></li>
                    <li>|</li>
                    <li><button onClick={() => { navigate('/terms'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:underline">Terms</button></li>
                    <li>|</li>
                    <li><button onClick={() => { navigate('/cookies'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:underline">Cookies</button></li>
                    <li>|</li>
                    <li>Designed by D.Anagnostou</li>
                    </ul>

            </motion.div>
        </motion.div>
  )
}

export default Footer
