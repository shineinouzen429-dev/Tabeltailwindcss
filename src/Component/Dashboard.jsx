import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Dashboard() {
  const [siswa, setSiswa] = useState ([]);
  const [loading, setLoading] = useState ([true]);
    const navigate = useNavigate();

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/siswa");
        setSiswa(response.data);
      } catch (error) {
        console.error("Gagal ambil data siswa:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
    
        await axios.delete(`http://localhost:5000/siswa/${id}`);

        setSiswa((prev) => prev.filter((item) => item.id !== id));

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } catch (err) {
        console.error("Gagal menghapus data:", err);
        Swal.fire({
          title: "Error!",
          text: "Terjadi kesalahan saat menghapus data.",
          icon: "error",
          confirmButtonText: "OK"
        });
      }
    }
  });
};

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        DASHBOARD
      </h1>

    
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="p-4 shadow rounded text-center">
          <h2>Total Pendaftar</h2>
          <p className="text-green-600 text-2xl font-bold">
            {siswa.length}
          </p>
        </div>
        <div className="p-4 shadow rounded text-center">
          <h2>Sangat Puas</h2>
          <p className="text-blue-600 text-2xl font-bold">90</p>
        </div>
        <div className="p-4 shadow rounded text-center">
          <h2>Tidak Puas</h2>
          <p className="text-red-600 text-2xl font-bold">4</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Daftar Siswa</h2>
       <button
  onClick={() => navigate("/a")}
  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
>
  Tambah Data
</button>
      </div>
      <table className="table-auto w-full border border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">No</th>
            <th className="border px-4 py-2">Nama</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Jurusan</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {siswa.map((item, index) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{item.nama}</td>
              <td className="border px-4 py-2">{item.email}</td>
              <td className="border px-4 py-2">{item.jurusan}</td>
               <td className="px-4 py-2 border space-x-2">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                  >
                    Hapus
                  </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
