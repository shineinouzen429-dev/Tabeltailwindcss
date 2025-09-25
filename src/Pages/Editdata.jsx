import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function EditData() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        makanan: "",
        pesanan: "",
        harga: "",
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/menu/${id}`);
            const data = Array.isArray(res.data) ? res.data[0]
            : res.data;
            setFormData(data)
        } catch (err) {
            console.error("Gagal mengambil data:", err);
            alert("Gagal mengambil data!");
        } finally {
            setLoading(false);
        }
    }

        fetchData();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/menu/${id}`, formData);
                alert("Data berhasil diubah Anjay");
                navigate("/w")
        } catch (err) {
            console.error("Gagal mengupdate data:", err);
            alert("Gagal mengupdate data!");
        }
    };

    if (loading) return <p className="text-center mt-10">Loading data</p>
    
    return (
     <div className="container mx-auto p-4 max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">
            Edit Data
        </h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
             <div className="mb-4">
                <label htmlFor="makanan">Makanan: </label>
                <input
                  id="makanan"
                  name="makanan"
                  type="text"
                  value={formData.makanan}
                  onChange={handleChange}
                />
               </div>
              <div className="mb-4">
                <label htmlFor="pesanan">Pesanan: </label>
                <input
                  id="pesanan"
                  name="pesanan"
                  type="text"
                  value={formData.pesanan}
                  onChange={handleChange}
                />
               </div>
              <div className="mb-4">
                <label htmlFor="harga">Harga: </label>
                <input
                  id="harga"
                  name="harga"
                  type="text"
                  value={formData.harga}
                  onChange={handleChange}
                />
             </div>
            <div className="flex items-center justify-between">
                <button 
                type="submit"
                className="bg-green-500 hover:bg-green-950 text-white
                font-bold py-2 px-4 rounded"
                >
                    Update data
                </button>
                <button 
                type="button"
                onClick={() => navigate(-1)}
                className="bg-gray-500 hover:bg-gray-700 text-white
                font-bold py-2 px-4 rounded"
                >
                    Kembali 
                </button>
            </div>
        </form>
     </div>   
    )
}
export default EditData