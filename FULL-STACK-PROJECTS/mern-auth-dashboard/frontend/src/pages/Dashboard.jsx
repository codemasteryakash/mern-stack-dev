import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#05060f] text-white">

      {/* ===== Header ===== */}
      <header className="w-full flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-lg">
        <h1 className="text-xl font-bold tracking-wide text-amber-400">
          MyDashboard
        </h1>

        <Link
          to="/login"
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black font-semibold hover:opacity-90 transition"
        >
          Login
        </Link>
      </header>

      {/* ===== Main Content ===== */}
      <main className="flex items-center justify-center h-[calc(100vh-72px)]">
        <h2 className="text-3xl font-bold">
          🎉 Welcome to Dashboard
        </h2>
      </main>

    </div>
  );
};

export default Dashboard;
