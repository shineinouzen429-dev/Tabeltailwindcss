import { useState } from "react"

function Sidnav () {
    const [open, setOpen] = useState(false);
    return(
        <div className="flex">
            <div className={` fixed top-0 h-full w-60 bg-gray-800 text-white
            ${open ? "translate-0" : "-translate-x-full"}
            transition-transform duration-300 ease-in-out md:translate-x-0`}>

                <div className="text-xl font-bold mb-8 text-center bg-gray-700 py-4 shadow-lg">Binus</div>

                <nav classname="space-y-3">
                    <a href="/" className="block py-3 px-3 rounded hover:bg-blue-600 text-2xl">Dashboard</a>
                    <a href="/w" className="block py-3 px-3 rounded hover:bg-blue-600 text-2xl">Tabel Data</a>
                    <a href="Z" className="block py-2 px-3 rounded hover:bg-blue-600 text-2xl">Profil</a>
                </nav>

                <div className=""></div>
            </div>
        </div>
    )
}


export default Sidnav