import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Tambahdata () {
    const [formData, setFormData] = useState({
        makanan:'',
        pesanan: '',
        harga: '',
      });

       const [loading, setLoading] = useState(true);
       const navigate = useNavigate();
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const response = await axios.post("http://localhost:5000/menu", formData);

    console.log('Respon server:', response.data);
    alert('Pesanan berhasil!');

    setFormData({
      makanan: "",
      pesanan: "",
      harga: ""
    });

    navigate("/w"); // setelah daftar, arahkan ke login
  } catch (error) {
    console.error("Error saat menambahkan data:", error);
    alert("Gagal menambahkan data.");
  } finally {
    setLoading(false);
  }
};

  
  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="mr-12 bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Pesan Makanan</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nama">
                    Makanan
                </label>
                <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="makanan"
                type="text"
                name="makanan"
                value={formData.makanan}
                onChange={handleChange}
                placeholder=""
                required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Alamat">
                    Pesanan


                    
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="pesanan"
                    type="text"
                    name="pesanan"
                    value={formData.pesanan}
                    onChange={handleChange}
                    placeholder=""
                    required
                    />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 shadow" htmlFor="Alamat">
                    Total harga
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="harga"
                    type="text"
                    name="harga"
                    value={formData.harga}
                    onChange={handleChange}
                    placeholder=""
                    required
                    />
            </div>
            <div className="flex flex-col-2 items-center space-y-3 gap-37">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              
                Pesan
              </button>
            <Link
              to="/l"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
            >
              Kembali
            </Link>
            </div>
        </form>
      </div>
    </div>
  )
}


export default Tambahdata