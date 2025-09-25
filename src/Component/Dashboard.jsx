
import { useNavigate } from "react-router-dom";


const Menu = () => {
 
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-200 text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Makanan</th>
            <th className="px-4 py-2 border">Minuman</th>
            <th className="px-4 py-2 border">Combo</th>
            <th className="px-4 py-2 border">Harga</th>
          </tr>
        </thead>
        <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border">Nasi goreng</td>
                <td className="px-4 py-2 border">Es teh</td>
                <td className="px-4 py-2 border">Kerupuk</td>
                <td className="px-4 py-2 border">13Rb</td>
              </tr>       
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border">Mia ayam</td>
                <td className="px-4 py-2 border">Jasjus jeruk</td>
                <td className="px-4 py-2 border">Tempe</td>
                <td className="px-4 py-2 border">15Rb</td>
              </tr>       
        </tbody>
      </table>
    </div>
  );
};

function Dashboard() {
 const navigate = useNavigate();
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-blue-600 text-center">DASHBOARD</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-sm text-gray-600 mb-2">Total Pendaftar</div>
          <div className="text-2xl font-bold text-green-600">120</div>
        </div>
         <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-sm text-gray-600 mb-2">Sangat puas</div>
          <div className="text-2xl font-bold text-yellow-300">90-0</div>
        </div>
         <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="text-sm text-gray-600 mb-2">Tidak puas</div>
          <div className="text-2xl font-bold text-red-600">4</div>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-center">Daftar Menu</h2>
         <button
          onClick={() => navigate("/Y")}
          className="px-4 py-2 mt-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Tambah Data
        </button>
      </div>
      <Menu />
    </div>
  );
}

export default Dashboard;
