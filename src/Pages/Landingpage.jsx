import React from 'react';
import { Link } from 'react-router-dom';
import gbrb from '../../public/Binus3.jpg'


const Landingpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
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
    </div>
  );
};

export default Landingpage;