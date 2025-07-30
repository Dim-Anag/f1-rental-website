import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast';
import { cityList } from '../../assets/assets'



const AddCar = () => {

  const {axios, currency} = useAppContext()


  
  const [image, setImage] =useState(null)
  const [car,setCar] = useState({
    brand: '',
    model: '',
    year: 0,
    pricePerDay: 0,
    category: '',
    fuel_type: '',
    race_wins: 0,
    weight: 0,
    horsepower: 0,
    engine_type:'',
    location: '',
    driver: '',
    description: '',
    features: ''
  })

  const [isLoading, setIsLoading] = useState(false)

  const onSubmitHandler = async (e)=>{
    e.preventDefault()
    if(isLoading) return null

    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append('image', image)
      formData.append('carData',JSON.stringify(car))

      const {data} = await axios.post('/api/owner/add-car', formData)
      
      if(data.success){
        toast.success(data.message)
        setImage(null)
        setCar({
          brand: '',
          model: '',
          year: 0,
          pricePerDay: 0,
          category: '',
          fuel_type: '',
          race_wins: 0,
          weight: 0,
          horsepower: 0,
          engine_type:'',
          location: '',
          driver: '',
          description: '',
          features: ''
        })
      } else{
        toast.error(data.message)
      }
    } catch (error) {
        toast.error(error.message)
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <div className='px-4 py-10 md:px-10 flex-1'>
      <Title title="Add New Car" subTitle="Fill in details to list a new car for booking, including pricing , availability and car specifications."/>

      <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>

        {/* Car Image*/}
        <div className='flex items-center gap-2 w-full'>
          <label htmlFor="car-image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 rounded cursor-pointer'/>
            <input type="file" id='car-image' accept="image/*" hidden onChange={e=> setImage(e.target.files[0])}/>
          </label>
          <p className='text-sm text-gray-500'>Upload a picture of your car</p>
        </div>


        {/* car brand and model */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='flex flex-col w-full'>
            <label > Brand</label>
            <input type="text" placeholder="e.g Mercedes , McLaren , RedBull..." required
            className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.brand} onChange={e=> setCar({...car, brand:e.target.value})}/>
          </div>
          <div className='flex flex-col w-full'>
            <label > Model</label>
            <input type="text" placeholder="e.g W11 , RB9 , R25..." required
            className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.model} onChange={e=> setCar({...car, model:e.target.value})}/>
          </div>
        </div>


        {/* year and price and category */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <div className='flex flex-col w-full'>
            <label > Year</label>
            <input type="number" placeholder="2008" required
            className='px-3 py-2 mt-1  border border-borderColor rounded-md outline-none ' value={car.year} onChange={e=> setCar({...car, year:e.target.value})}/>
          </div>
          <div className='flex flex-col w-full'>
            <label > Daily Price ({currency})</label>
            <input type="number" placeholder="9000" required
            className='px-3 py-2 mt-1   border border-borderColor rounded-md outline-none' value={car.pricePerDay} onChange={e=> setCar({...car, pricePerDay:e.target.value})}/>
          </div>
          <div className='flex flex-col w-full'>
            <label > Category</label>
          <select onChange={e=> setCar({...car,category: e.target.value})} value={car.category} className='px-3 py-2 mt-1   border border-borderColor rounded-md outline-none'>
            <option value="">Select a category</option>
            <option value="F1">F1</option>
            <option value="F2">F2</option>
          </select>
          </div>
        </div>

        {/* car transmisision , fuel type , race wins */ }
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {/* Driver */}
            <div className='flex flex-col w-full'>
              <label>Driver</label>
                <input
                type="text"
                placeholder="e.g Lewis Hamilton, Max Verstappen..."
                required
                className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
                value={car.driver}
                onChange={e => setCar({ ...car, driver: e.target.value })}
              />
            </div>
          <div className='flex flex-col w-full'>
            <label > Fuel Type</label>
            <input type="text" placeholder="Shell Fuel, Elf,Mobil 1 ..." required
            className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.fuel_type} onChange={e=> setCar({...car, fuel_type:e.target.value})}/>
          </div>
          <div className='flex flex-col w-full'>
            <label > Race wins</label>
            <input type="number" placeholder="10" required
            className='px-3 py-2 mt-1  border border-borderColor rounded-md outline-none ' value={car.race_wins} onChange={e=> setCar({...car, race_wins:e.target.value})}/>
          </div>
        </div>
        {/* car weight , horsepower , engine */ }
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        <div className='flex flex-col w-full'>
            <label > Car weight </label>
            <input type="number" placeholder="500" required
            className='px-3 py-2 mt-1   border border-borderColor rounded-md outline-none' value={car.weight} onChange={e=> setCar({...car, weight:e.target.value})}/>
          </div>
          <div className='flex flex-col w-full'>
            <label > Horsepower </label>
            <input type="number" placeholder="890" required
            className='px-3 py-2 mt-1   border border-borderColor rounded-md outline-none' value={car.horsepower} onChange={e=> setCar({...car, horsepower:e.target.value})}/>
          </div>
          <div className='flex flex-col w-full'>
            <label > Engine</label>
            <input type="text" placeholder="2.4L Renault 90° V8..." required
            className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.engine_type} onChange={e=> setCar({...car, engine_type:e.target.value})}/>
          </div>
        </div>

            
            
            {/* Location */}
              <div className='flex flex-col w-full'>
                <label>Location</label>
                    <select
                      onChange={e => setCar({ ...car, location: e.target.value })}
                      value={car.location}
                      className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
                    >
                    <option value="">Select a location</option>
                      {cityList.map(city => (
                    <option key={city} value={city}>{city}</option>
                    ))}
                    </select>
            </div>


         

        {/* car description */}
          <div className='flex flex-col w-full'>
            <label > Description </label>
            <textarea rows={5} placeholder="A F1 race winning machine designed by Chief Technical Officer Adrian Newey, achieving multiple race wins , with Max Verstappen and Checo Perez as drivers at the 2021 World Championship. " required
            className='px-3 py-2 mt-1   border border-borderColor rounded-md outline-none' 
            value={car.description} onChange={e=> setCar({...car, description:e.target.value})}> </textarea>
          </div>

        {/* car features */}
          <div className='flex flex-col w-full'>
            <label>Features</label>
            <textarea
              rows={7}
              placeholder={
                [
                "Engine: Honda RA121/E, 3.5 L (214 cu in), 60° V12 NA longitudinally mounted",
                "Transmission: Weismann/McLaren Transverse 6-speed manual",
                "Weight: 505kg (1.113 lb)",
                "Top Speed: 333 km/h (207 mph)",
                "Horsepower: 725 hp (540.6 kW) @ 13,500 rpm",
                "Fuel: Shell",
                "Tires: Goodyear"
                ].join('\n')
}
              required
              className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
              value={car.features}
              onChange={e => setCar({ ...car, features: e.target.value })}
  />
</div>

          <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white
          rounded-md font-medium w-max cursor-pointer'>
            <img src={assets.tick_icon} alt="" />
            {isLoading ? 'Listing...' : 'List your Car'}
          </button>



        
      </form>
      
    </div>
  )
}

export default AddCar
