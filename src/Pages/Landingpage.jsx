import React from 'react';
import { Link } from 'react-router-dom';
import gbrb from '../../public/Binus3.jpg'


const Landingpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-500 to-blue-600">
      <div className="text-center text-white max-w-md">
        <img 
          src={gbrb} 
          alt="Logo Sekolah" 
          className="mx-auto w-32 h-32 mb-6 rounded-full shadow-lg"
        />

        <h1 className="text-4xl font-bold mb-4">Selamat Datang<br /> SMK Bina nusantara</h1>
        <p className="mb-6 text-lg">Penerimaan Peserta Didik Baru</p>

        <Link to="/M">
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
           Daftar
          </button>
        </Link>
      </div>
   <div className="text-white text-center mt-10 text-lg min-h-screen justify-between">
         <h3 className='text-1g font-bold'>
            Jurusan
         </h3>
         

 <div classname="grid grid-cols-2 gap-4 mt-6 w-full max-w-lg">
  <div classname="p-4 border rounded-lg shadow-md">
    <h2 class="text-lg font-bold mb-2">TKJ</h2>
    <p class="text-gray-700">Belajar komputer dan jaringan.</p>
  </div>
  <div class="p-4 border rounded-lg shadow-md">
    <h2 class="text-lg font-bold mb-2">TSM</h2>
    <p class="text-gray-700">Belajar coding & software.</p>
  </div>
  <div class="p-4 border rounded-lg shadow-md">
    <h2 class="text-lg font-bold mb-2">AKL</h2>
    <p class="text-gray-700">Belajar desain & multimedia.</p>
  </div>

  <div class="p-4 border rounded-lg shadow-md col-start-2">
    <h2 class="text-lg font-bold mb-2">TB</h2>
    <p class="text-gray-700">Belajar desain & multimedia.</p>
  </div>  
</div>
</div>
    </div>
  );
};

export default Landingpage;