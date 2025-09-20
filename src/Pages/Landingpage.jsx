import React from 'react';
import { Link } from 'react-router-dom';
import gbrb from '../../public/Binus3.jpg';

const Landingpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-blue-600 overflow-y-auto">
      <div className="flex flex-col items-center justify-center text-center text-white py-16">
        <img 
          src={gbrb} 
          alt="L" 
          className="mx-auto w-32 h-32 mb-6 rounded-full shadow-lg"
        />

        <h1 className="text-4xl font-bold mb-4">
          Selamat Datang <br /> SMK Bina Nusantara
        </h1>
        <p className="mb-6 text-lg">Penerimaan Peserta Didik Baru</p>

        <Link to="/M">
          <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition">
            Daftar
          </button>
        </Link>
      </div>
      <div className="text-center text-lg py-12">
        <h3 className="uppercase text-white font-bold text-2xl mb-8">
          Jurusan
        </h3>

        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto px-4">
          <div className="p-4 border-2 border-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-white">TKJ</h2>
            <p className="text-white">Belajar komputer, jaringan, dan internet.</p>
          </div>

          <div className="p-4 border-2 border-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-white">TSM</h2>
            <p className="text-white">Belajar mesin dan perawatan sepeda motor.</p>
          </div>

          <div className="p-4 border-2 border-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-white">AKL</h2>
            <p className="text-white">Belajar keuangan, pencatatan, dan laporan uang.</p>
          </div>

          <div className="p-4 border-2 border-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-white">TB</h2>
            <p className="text-white">Belajar membuat, mendesain, dan menjahit pakaian.</p>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
