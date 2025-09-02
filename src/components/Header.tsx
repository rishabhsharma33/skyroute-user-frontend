import { Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="p-2 bg-blue-700 rounded-lg">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">FlightBook</span>
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
          <button
            type="button"
            className="bg-transparent h-auto px-2 py-1 rounded text-blue-700 font-medium transition"
          >
            Flights
          </button>
          <button
            type="button"
            className="bg-transparent h-auto px-2 py-1 rounded text-gray-500 font-medium hover:text-blue-700 transition"
          >
            Hotels
          </button>
          <button
            type="button"
            className="bg-transparent h-auto px-2 py-1 rounded text-gray-500 font-medium hover:text-blue-700 transition"
          >
            Support
          </button>
        </nav>

        {/* Right side: Login & Signup */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            className="px-4 py-2 rounded text-gray-700 font-medium hover:text-blue-700 transition"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-blue-700 text-white font-medium hover:bg-blue-800 transition"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="bg-transparent md:hidden rounded p-2 hover:bg-gray-100"
          aria-label="Open Menu"
        >
          <span className="sr-only">Menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
