import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Dashboard() {
  const [siswa, setSiswa] = useState ([]);
  const [loading, setLoading] = useState (true);
  const navigate = useNavigate();
  const [diterima, setDiterima] = useState(0);
  const [tidakditerima, setTidakditerima] = useState(0);
  const updateCounts = (data) => {
  const diterimaCount = data.filter(s => s.status === "diterima").length;
  const tidakCount = data.filter(s => s.status === "tidak").length;
  setDiterima(diterimaCount);
  setTidakditerima(tidakCount);
};




useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/siswa");
      setSiswa(response.data);
      updateCounts(response.data);
    } catch (error) {
      console.error("Gagal ambil data siswa:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, []);


  const handleStatus = (id, status) => {
  if (status === "diterima") {
    setDiterima((prev) => prev + 1);
  } else {
    setTidakditerima((prev) => prev + 1);
  }

  const selected = siswa.find((s) => s.id === id);

  axios
    .put(`http://localhost:5000/siswa/${id}`, {
      ...selected,
      status,
    })
    .then(() => {
      setSiswa((prev) =>
        prev.map((s) =>
          s.id === id ? { ...s, status } : s
        )
      );
      Swal.fire("Data berhasil diupdate!", `Siswa ${status}`, "success");
    })
    .catch((err) => console.error("Gagal update status:", err));
};

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

        const newData = siswa.filter((item) => item.id !== id);
        setSiswa(newData);
        updateCounts(newData); 
        Swal.fire({
          title: "Deleted!",
          text: "Data siswa berhasil dihapus.",
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
          <h2>Diterima</h2>
          <p className="text-blue-600 text-2xl font-bold">{diterima}</p>
        </div>
        <div className="p-4 shadow rounded text-center">
          <h2>Tidak diterima</h2>
          <p className="text-red-600 text-2xl font-bold">{tidakditerima}</p>
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
            <th className="border W-12 text-center">No</th>
            <th className="border px- py-2">Nama</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Jurusan</th>
            <th className="border px-4 py-2">Enter text</th>
          </tr>
        </thead>
        <tbody>
          {siswa.map((item, index) => (
            <tr key={item.id}>
              <td className="border W-12 text-center">{index + 1}</td>
              <td className="border px-4 py-2">{item.nama}</td>
              <td className="border px-4 py-2">{item.email}</td>
              <td className="border px-4 py-2">{item.jurusan}</td>
              <td className="border px-4 py-2 text-center space-x-2">
            {item.status === "diterima" ? (
                <button
                  className="bg-blue-400 text-white px-3 py-1 rounded cursor-not-allowed"
                  disabled
                >
                Diterima
                </button>
                ) : item.status === "tidak" ? (
                <>
                <button
                  className="bg-red-400 text-white px-3 py-1 rounded cursor-not-allowed"
                  disabled
               >
                Tidak Diterima
               </button>
             <button
               onClick={() => handleDelete(item.id)}
               className="bg-gray-500 hover:bg-gray-700 text-white px-3 py-1 rounded ml-2"
             >
                Hapus
              </button>
                  </>
               ) : (
             <>
              <button
               onClick={() => handleStatus(item.id, "diterima")}
               className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded"
             >
              Diterima
              </button>
            <button
             onClick={() => handleStatus(item.id, "tidak")}
             className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
          >
              Tidak Diterima
            </button>
         </>
             )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
