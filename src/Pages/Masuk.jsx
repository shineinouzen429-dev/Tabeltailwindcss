import { useState } from "react";
import { Link } from "react-router-dom";
import gambar from '../../public/Binus1.jpg';
import Bsamping from '../../public/BinusD.jpg'

function Masuk () {
    const [formData, setFormData] = useState({
        name:'',
        Alamat: '',
        TglL: '',
        Nayah:'',
        Nibu:'',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
    e.preventDefault(); //# supaya pas refreh ra default
    console.log('Pendaftaran:', formData); //#ge nampil data from me neng consol
    alert('Simulasi Pendaftaran Berhasil!');
  };

  return (
    <div className="flex justify-end items-center min-h-screen bg-linear-to-t f+rom-sky-500 to-indigo-500">
      <img src={Bsamping} alt="S" className="w-full max-w-3xl mx-auto rounded-lg shadow-lg "/>
      <div className="mr-28 bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <img src={gambar} alt="Binus" />
        <h1 className="text-2xl font-bold text-center mb-6">Daftar</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nama">
                    Nama
                </label>
                <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=""
                required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Alamat">
                    Alamat
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Alamat"
                    type="text"
                    name="Alamat"
                    value={formData.Alamat}
                    onChange={handleChange}
                    placeholder=""
                    required
                    />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="TglL">
                    Tgl Lahir
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="TglL"
                    type="text"
                    name="TglL"
                    value={formData.TglL}
                    onChange={handleChange}
                    placeholder=""
                    required
                    />
            </div>
             <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nama ayah">
                    Nama ayah
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Nayah"
                    type="text"
                    name="Nayah"
                    value={formData.Nayah}
                    onChange={handleChange}
                    placeholder=""
                    required
                    />
            </div>
             <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nama ibu">
                    Nama ibu
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Nibu"
                    type="text"
                    name="Nibu"
                    value={formData.Nibu}
                    onChange={handleChange}
                    placeholder=""
                    required
                    />
            </div>
            <div className="flex flex-col items-center space-y-3">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Daftar
              </button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Masuk