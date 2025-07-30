import React from 'react'

const Title = ({title , subTitle, align}) => {
  const alignment = align === 'left'
    ? 'items-start text-left'
    : 'items-center text-center';
  
  return (
    <div className={`flex flex-col justify-center ${alignment}`}>
        <h1 className='font-semibold text-4xl md:text-[40px]'>{title}

        </h1>
        <p className='text-sm mdLtext-base text-gray-500/90 mt-2 max-2-156'>{subTitle}</p>      
    </div>
  )
}

export default Title
