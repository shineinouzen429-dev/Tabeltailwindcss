import React from "react";
import PP from "../../public/PP.jpg"

function Profil() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Profil Pengguna</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
        
        <img
          src={PP}
          alt=""
          className="w-32 h-32 rounded-full border"
        />

        
        <div>
          <p className="text-2xl font-bold">Ayyas Abdullah</p>
          <p className="text-gray-600">Fullstack Developer</p>
          <p className="text-gray-600">📧 ayyas@example.com</p>
          <p className="text-gray-600">📍 Jakarta, Indonesia</p>
        </div>
      </div>

      
      <div className="mt-6 bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Tentang Saya</h3>
        <p className="text-gray-700 leading-relaxed">
          Halo 👋, saya Ayyas Abdullah. Seorang dokter yang suka
          bedah orang sembarangan, terutama usus, lambung, dan ginjal.
          Senang membangun organ tubuh yang absurd dan keren.
        </p>
      </div>
    </div>
  );
}

export default Profil;
