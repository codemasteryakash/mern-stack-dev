import { useState } from 'react'
import { Link } from "react-router-dom";

const Login = () => {

  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState({
    text: "",
    type: ""
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const loginHandler = (e) => {
    e.preventDefault();

    const { email, password } = input;

    if (!email || !password) {
      setMessage({
        text: "⚠️ Please fill all fields!",
        type: "error"
      });
      return;
    }

    if (!email.includes("@")) {
      setMessage({
        text: "❌ Invalid email address",
        type: "error"
      });
      return;
    }

    if (password.length < 6) {
      setMessage({
        text: "❌ Password must be at least 6 characters",
        type: "error"
      });
      return;
    }

    setMessage({
      text: "✅ Login successful!",
      type: "success"
    });
  };

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-6 hover:shadow-amber-500/20 transition-all duration-300 w-[360px]">

        <h2 className="text-2xl font-bold tracking-wide text-white text-center py-2">
          Login Form
        </h2>

        <form onSubmit={loginHandler} className="flex flex-col gap-3">

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={input.email}
            onChange={inputHandler}
            className="w-full px-3 py-2 rounded-xl bg-gray-900/80 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={input.password}
            onChange={inputHandler}
            className="w-full px-3 py-2 rounded-xl bg-gray-900/80 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
          />

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold tracking-wide hover:scale-[1.02] hover:shadow-amber-500/30 transition mt-2"
          >
            Login
          </button>

          {message.text && (
            <p className={`text-sm font-medium p-2 rounded-lg transition ${
              message.type === 'error'
                ? 'text-red-400 bg-red-500/10'
                : 'text-green-400 bg-green-500/10'
            }`}>
              {message.text}
            </p>
          )}

          <p className="text-sm text-gray-300 text-center mt-2">
            Don’t have an account?{" "}
            <Link to="/register" className="text-amber-400 hover:underline">
              Register
            </Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Login;
