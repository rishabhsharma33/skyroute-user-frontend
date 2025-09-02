import { Plane } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-700 rounded-lg">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">FlightBook</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            type="button"
            className="bg-transparent h-auto px-2 py-1 rounded text-gray-900 font-medium hover:text-blue-700 transition"
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

        {/* Mobile menu button */}
        <button
          type="button"
          className="bg-transparent md:hidden rounded p-2 hover:bg-gray-100"
          aria-label="Open Menu"
        >
          <span className="sr-only">Menu</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;