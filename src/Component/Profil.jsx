import React from "react";
import ppp from "../../public/Hai.jpg"
import amba1 from "../../public/aMBA1.jpg"
import amba2 from "../../public/Amba2.jpg"
import amba3 from "../../public/Amba3.jpg"

function Profil() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Profil Pengguna</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
        
        <img
          src={ppp}
          alt=""
          className="w-32 h-32 rounded-full border"
        />

        
        <div>
          <p className="text-2xl font-bold">Ayyas Abdullah</p>
          <p className="text-gray-600">Fullstack Developer</p>
          <p className="text-gray-600">ayyas@example.com</p>
          <p className="text-gray-600">Jakarta, Indonesia</p>
        </div>
      </div>

      
      <div className="mt-6 bg-gray-200 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Tentang Saya</h3>
        <p className="text-gray-700 leading-relaxed">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, autem cumque?
         Vero voluptatem vel neque sed tempore repellendus error minus. Libero, earum 
         tenetur? Nihil autem omnis ea alias dolorum recusandae.
        </p>
      </div>
      <div className="mt-7 bg-gray-100 p-6 rounded-lg">
        <h4>Info Tambahan</h4>
        <p>Anggrek Mekar Pontianak, Kapal Karam, Bumbu Kacang Khas Kebumen, Lumpur LapinBludo kutuk-blukutuk,
           Puding Pak Hambali, Agar-agar Mas Rehan Usluk-usluk, Agar-agar Khas Grobongan, Kereta Argo Ngawi Ges Gejes,
            Steak Wagyu Impor Aseli Tiongkok, Lato-lato Khas Mojokerto, Kapal Kargo Banyuwangi,
             Buah Khuldi Asli Samarinda, Piscok Lumer Asli Probolinggo, Bandung Lautan Api, Rudal Jawa Siap Hantam Israel
             , Yanto Pasuruan Gempa Bumi, Gendang Klutuk Sunda Taktuktaktuk, Fuad 12 Nyapu di Kebun Raya Bogor,</p>
      </div>
      <div className="flex space-x-5 justify-center mt-6">
        <img src={amba1} alt="" className="w-70 object-cover rounded-full"/>
        <img src={amba2} alt="" className="w-70 object-cover"  style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}/>
        <img src={amba3} alt="" className="w-70 object-cover"/>
      </div>
    </div>
  );
}

export default Profil;
