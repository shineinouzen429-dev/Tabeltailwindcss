import { useState } from "react";
import { Link } from "react-router-dom";
import gambar from '../../public/Binus1.jpg';
import Bsamping from '../../public/BinusD.jpg'

function Register () {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register data:', formData);
    alert('Simulasi Pendaftaran Berhasil!');
  };

  return (
    <div className="flex justify-end items-center min-h-screen h-14 bg-linear-to-t from-sky-500 to-indigo-500">
      <img src={Bsamping} alt="S" className=" w-140 mr-35"/>
      <div className="mr-28 bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <img src={gambar} alt="Binus" />
        <h1 className="text-2xl font-bold text-center mb-6">ログイン</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nama">
                    Nama
                </label>
                <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="nama"
                type="text"
                name="nama"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukan nama"
                required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                    Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan email"
                    required
                    />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Password">
                    Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    value={formData}
                    onChange={handleChange}
                    placeholder="Masukkan password"
                    required
                    />
            </div>
            <div className="flex flex-col items-center space-y-3">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Masuk
              </button>
              <Link to="/Login" className="inline-block align-baseline text-black opacity-50 font-bold text-sm text-shadow-blue-500 hover:text-blue-800">
               Tidak punya akun? daftar
              </Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Register