import React from 'react';

const Home = () => {
  return (
    <div className='home mt-1'>
      <div className='home-image relative'>
        <img src='/images/banner.jpeg' alt=''/>

        <div className="home-text absolute">
        <h1 className='heading text-5xl '>Welcome to my website</h1>
        <p className='about  text-2xl mt-2'>Lorem ipsum dolor sit amet consectetur.</p>
        <button className=' button rounded-lg mt-28 bg-slate-500 p-3 text-xl font-medium hover:font-bold hover:bg-slate-700'>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;