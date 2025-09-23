import { Link } from "react-router-dom";
import App from "../App";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  

   

    
  };

  return (
    <div className="flex items-center justify-center min-h-screen h-14 bg-linear-to-t from-sky-500 to-indigo-500">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6">ログイン</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Email">
                     電子メール
                </label>
                <input 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" 電子メール"
                required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Password">
                     パスワード
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    value={formData}
                    onChange={handleChange}
                    placeholder="パスワードを入力してください"
                    required
                    />
            </div>
            <div className="flex flex-col items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                入力
              </button>
              <Link to="/Register" className="inline-block align-baseline text-black opacity-50 font-bold text-sm text-shadow-blue-500 hover:text-blue-800">
              もうアカウントを持っていますか？今から登録してください
              </Link>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Login