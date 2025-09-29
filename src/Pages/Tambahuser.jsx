import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Tambahuser () {
    const [formData, setFormData] = useState({
        nama:'',
        email: '',
        jurusan: '',
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
    const response = await axios.post("http://localhost:5000/siswa", formData);

    console.log('Respon server:', response.data);
    Swal.fire({
  title: "Yatta, Berhasil",
  icon: "success",
  draggable: true
});

    setFormData({
      nama: "",
      email: "",
      jurusan: ""
    }); 

    navigate("/"); 
  } catch (error) {
    console.error("Error saat menambahkan data:", error);
   Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
});
  } finally {
    setLoading(false);
  }
};


  
  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="mr-12 bg-white p-8 rounded-lg shadow-2xl w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Daftar siswa</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nama">
                    Nama
                </label>
                <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="nama"
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder=""
                required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    required
                    />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 shadow" htmlFor="Alamat">
                    Jurusan
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="jurusan"
                    type="text"
                    name="jurusan"
                    value={formData.jurusan}
                    onChange={handleChange}
                    placeholder=""
                    required
                    />
            </div>
            <div className="flex flex-col-2 items-center space-y-3 gap-37">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              
                Tambah
              </button>
            <Link
              to="/"
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


export default Tambahuser