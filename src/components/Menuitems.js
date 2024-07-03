import React from 'react'


const Menuitems = (props) => {
  return (
    <div className='food-item  m-5'>
        <img  className='h-[400px] w-[400px] bg-cover rounded-md' src={props.img} alt=''/>

        <div className='food-about mt-3 ml-2'>
            <h1 className='text-2xl font-bold'>{props.name}</h1>
            <p className='text-justify w-[380px] font-medium'>Lorem ipsum dolor sit  amet consectetur adipisicing amet consectetur adipisicing elit.</p>

        </div>

    </div>
  )
}

export default Menuitems
