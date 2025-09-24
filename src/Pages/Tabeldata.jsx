import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Menu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/menu");
        setData(res.data);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const konfirmasi = window.confirm("Yakin ingin menghapus data ini?");
    if (!konfirmasi) return;

    try {
      await axios.delete(`http://localhost:5000/menu/${id}`);
      alert("Data berhasil dihapus");
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Gagal menghapus data:", err);
      alert("Gagal menghapus data");
    }
  };

  if (loading) return <p className="text-gray-600">Loading...</p>;

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-200 text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">No</th>
            <th className="px-4 py-2 border">Makanan</th>
            <th className="px-4 py-2 border">Paket</th>
            <th className="px-4 py-2 border">Harga</th>
            <th className="px-4 py-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{item.makanan}</td>
                <td className="px-4 py-2 border">{item.paket}</td>
                <td className="px-4 py-2 border">{item.harga}</td>
                <td className="px-4 py-2 border space-x-2">
                  <button
                    onClick={() => navigate(`/edit/${item.id}`)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4 text-gray-500">
                Tidak ada data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

function Tabeldata() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Daftar Menu</h2>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Tambah Data
        </button>
      </div>
      <Menu />
    </div>
  );
}

export default Tabeldata;
