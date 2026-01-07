import { useState } from 'react'
import { Link } from "react-router-dom";

const Register = () => {

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const registerHandler = async (e) => {
    e.preventDefault();

    const { name, email, password } = input;

    if (!name || !email || !password) {
      setMessage({
        text: "⚠️ Please fill all fields!",
        type: "error"
      });
      return;
    }
    try {
      const res = await ("https://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
      });
      const data = body.JSON();
    } catch (error) {
      console.log("Error", error);

    }
    setMessage({
      text: "✅ Successfully Registered!",
      type: "success"
    });

    // setTimeout(() => {
    //   alert("Thank you for registering");
    // }, 300);
  };

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-6 hover:shadow-amber-500/20 transition-all duration-300 w-[360px]">

        <h2 className="text-2xl font-bold tracking-wide text-white text-center py-2">
          Register Form
        </h2>

        <form onSubmit={registerHandler} className='flex flex-col gap-4'>

          <input
            type="text"
            name='name'
            placeholder="Name"
            value={input.name}
            onChange={inputHandler}
            className="w-full px-3 py-2 rounded-xl bg-gray-900/80 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
          />

          <input
            type="email"
            name='email'
            placeholder="Email"
            value={input.email}
            onChange={inputHandler}
            className="w-full px-3 py-2 rounded-xl bg-gray-900/80 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
          />

          <input
            type="password"
            name='password'
            placeholder="Password"
            value={input.password}
            onChange={inputHandler}
            className="w-full px-3 py-2 rounded-xl bg-gray-900/80 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"
          />

          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold tracking-wide hover:scale-[1.02] hover:shadow-amber-500/30 transition mt-2"
          >
            Register
          </button>

          <p className="text-sm text-gray-300 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-amber-400 hover:underline">
              Login
            </Link>
          </p>

          {message.text && (
            <p className={`text-sm font-medium p-2 rounded-lg transition ${message.type === 'error'
              ? 'text-red-400 bg-red-500/10'
              : 'text-green-400 bg-green-500/10'
              }`}>
              {message.text}
            </p>
          )}

        </form>
      </div>
    </div>
  )
}

export default Register;
