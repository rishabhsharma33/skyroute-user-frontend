import { Plane } from "lucide-react";
import { Link } from "react-router-dom";

const MinimalHeader = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 bg-blue-700 rounded-lg">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">FlightBook</span>
        </Link>
      </div>
    </header>
  );
};

export default MinimalHeader;
