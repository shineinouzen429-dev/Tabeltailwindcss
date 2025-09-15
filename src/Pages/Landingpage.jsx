import React from 'react';
import { Link } from 'react-router-dom';
import gbr1 from '../../public/binus1.jpg';
import gbr2 from '../../public/binus2.jpg';



const Landingpage = () => {
  return (
    <div className="flex flex-col min-h-screen h-14 bg-linear-to-t from-sky-500 to-indigo-500">
        <div className='ml-114'>
            <h1 className='flex font-bold text-6xl text-gray-900 dark:text-white'>Selamat datang</h1>
        </div >
        <div className='flex w-3xl rounded-lg text-center ml-70'>
            <h2 className='flex text-xl font-semibold mb-10'> <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum saepe cum quae, enim eaque magnam aliquid accusantium, neque quis quisquam sapiente ipsa ratione nam maiores suscipit reprehenderit unde libero fugit.
                </h2>
        </div>
        <div>
            <img src={gbr1} alt="" className='ml-70'/>
        </div>
        <div className='ml-110'>
              <img src={gbr2} alt="" />
        </div>
    </div>
  );
};

export default Landingpage;