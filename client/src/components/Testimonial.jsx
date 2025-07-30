import React from 'react'
import { assets } from '../assets/assets';
import Title from './Title';
import {motion} from 'motion/react'
const Testimonial = () => {

    const testimonials = [
        {   name: "Lance Stroll", 
            location: "Athens, Greece", 
            image: assets.testimonial_image_1,
            rating: 5,  
            testimonial: "I tried the Mercedes-AMG W11 EQ Performance 2020 car . I wish my dad had bought Mercedes , I would be 7 times World Champion by now! Great job to the Rental Team, they even had faster pit stop times than my crew" },
        
            {   name: "Mark Webber", 
            location: "Thessaloniki, Greece",
            image: assets.testimonial_image_2, 
            rating: 4,
            testimonial: "I rented the Red Bull Racing RB9 2013, that is not what the team gave me when I was racing back then. Either Rental team has the wrong car or Redbull rob me of a World Championship. Either way great service the car was a rocketship!!" },
       
            {   name: "Charles Leclerc", 
            location: "Alexandroupoli, Greece", 
            image: assets.testimonial_image_3, 
            rating: 5,
            testimonial: "I tried the Ferrari F2004. Finally a Ferrari that is actually fast !!! I wish F1 Rental could give me this car for all year long so I can win a World Championship!! Amazing experience , also I had an incident , but insurance covered it!" }
    ];



  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            
        <Title title="What Our Customers Say" subTitle="Discover why all racing drivers choose F1 Rental for their racing experience, all around the world."/>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-18">

                {testimonials.map((testimonial, index) => (
                    <motion.div 
                    initial={{opacity:0 , y:40}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:0.6, delay:index *0.2, easy: 'easeOut'}}
                    viewport={{once:true , amount:0.3}}
                    key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">



                        <div className="flex items-center gap-3">
                            <img className="w-20 h-20 rounded-full" 
                            src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                               <img
                                key={index}
                                src={assets.star_icon}
                                alt="star_icon"
                                    className={`w-4 h-4 ${index < testimonial.rating ? '' : 'opacity-30'}`}
                                />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial
