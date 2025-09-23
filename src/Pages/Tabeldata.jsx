import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Tabeldata() {
    const Menu = () => {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(true);
        const Navigate = useNavigate();

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
                await axios.delete(`http:/localhost:5000/menu/${id}`);
                alert("Data berhasil dihapus");
                setData((prev) => prev.filter((item) => item.id !== id)); // cek apakah backend pakai "id"
            } catch (err) {
                console.error("Gagal menghapus data:", err);
                alert("Gagal menghapus data");
            }
        };

        if (loading) return <p>Loading...</p>;

        return (
            <div>
                {data.map((item) => (
                    <div key={item.id}>
                        <p>{item.nama}</p>
                        <button onClick={() => handleDelete(item.id)}>Hapus</button>
                    </div>
                ))}
            </div>
        );
    };
};

export default Tabeldata;