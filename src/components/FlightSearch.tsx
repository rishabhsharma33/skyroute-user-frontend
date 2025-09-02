import { useState } from "react";
import { Calendar, MapPin, Users, ArrowRightLeft, Shield } from "lucide-react";

const tripTypes = [
  { value: "one-way", label: "One Way" },
  { value: "round-trip", label: "Round Trip" },
  { value: "multi-city", label: "Multi City" },
];

const fareTypes = [
  { value: "regular", label: "Regular", desc: "Regular fares", highlight: true },
  { value: "student", label: "Student", desc: "Extra discounts/baggage" },
  { value: "senior", label: "Senior Citizen", desc: "Up to ₹ 600 off" },
  { value: "armed", label: "Armed Forces", desc: "Up to ₹ 600 off" },
  { value: "doctor", label: "Doctor and Nurses", desc: "Up to ₹ 600 off" },
];

const travelersOptions = [
  { value: "1-economy", label: "1 Traveller, Economy" },
  { value: "1-premium", label: "1 Traveller, Premium Economy" },
  { value: "1-business", label: "1 Traveller, Business" },
  { value: "2-economy", label: "2 Travellers, Economy" },
];

const FlightSearch = () => {
  const [tripType, setTripType] = useState("one-way");
  const [from, setFrom] = useState("Delhi");
  const [to, setTo] = useState("Bengaluru");
  const [departureDate, setDepartureDate] = useState("3 Sep'25");
  const [returnDate, setReturnDate] = useState("");
  const [travelers, setTravelers] = useState("1-economy");
  const [fareType, setFareType] = useState("regular");
  const [flightProtection, setFlightProtection] = useState(false);

  const swapCities = () => {
    setFrom(to);
    setTo(from);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 rounded-xl shadow-lg bg-white">
      {/* Trip Type Selection */}
      <div className="mb-6">
        <div className="flex gap-6">
          {tripTypes.map((type) => (
            <label className="flex items-center space-x-2 cursor-pointer" key={type.value}>
              <input
                type="radio"
                name="tripType"
                value={type.value}
                checked={tripType === type.value}
                onChange={() => setTripType(type.value)}
              />
              <span className="font-medium">{type.label}</span>
            </label>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Book International and Domestic Flights
        </p>
      </div>

      {/* Search Fields */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        {/* From */}
        <div className="relative">
          <label htmlFor="from" className="text-sm font-medium mb-2 block">
            From
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              id="from"
              value={from}
              onChange={e => setFrom(e.target.value)}
              className="pl-10 h-12 w-full rounded border border-gray-300 focus:outline-primary"
              placeholder="Delhi"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            DEL, Delhi Airport India
          </p>
        </div>
        {/* Swap Button */}
        <div className="flex items-end justify-center pb-4">
          <button
            type="button"
            onClick={swapCities}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <ArrowRightLeft className="w-4 h-4 text-gray-400" />
          </button>
        </div>

        {/* To */}
        <div className="relative">
          <label htmlFor="to" className="text-sm font-medium mb-2 block">
            To
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              id="to"
              value={to}
              onChange={e => setTo(e.target.value)}
              className="pl-10 h-12 w-full rounded border border-gray-300 focus:outline-primary"
              placeholder="Bengaluru"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">
            BLR, Bengaluru International Airport
          </p>
        </div>

        {/* Departure Date */}
        <div className="relative">
          <label htmlFor="departure" className="text-sm font-medium mb-2 block">
            Departure
          </label>
          <button
            type="button"
            className="w-full h-12 flex items-center px-4 rounded border border-gray-300 bg-white text-left"
          >
            <Calendar className="mr-2 h-4 w-4" />
            <div>
              <div className="font-medium">{departureDate}</div>
              <div className="text-xs text-gray-500">Wednesday</div>
            </div>
          </button>
        </div>

        {/* Return Date */}
        <div className="relative">
          <label htmlFor="return" className="text-sm font-medium mb-2 block">
            Return
          </label>
          {tripType === "round-trip" || tripType === "multi-city" ? (
            <button
              type="button"
              className="w-full h-12 flex items-center px-4 rounded border border-gray-300 bg-white text-left"
            >
              <Calendar className="mr-2 h-4 w-4" />
              {returnDate || "Select return date"}
            </button>
          ) : (
            <button
              type="button"
              className="w-full h-12 text-gray-400 border border-dashed border-gray-300 rounded"
            >
              Tap to add a return date for bigger discounts
            </button>
          )}
        </div>
      </div>

      {/* Travelers and Class */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm font-medium mb-2 block">
            Travellers & Class
          </label>
          <select
            className="h-12 w-full rounded border border-gray-300 px-3"
            value={travelers}
            onChange={e => setTravelers(e.target.value)}
          >
            {travelersOptions.map(opt => (
              <option value={opt.value} key={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="flex items-center mt-1 text-xs text-gray-500">
            <Users className="mr-2 h-4 w-4" />
            {travelersOptions.find(opt => opt.value === travelers)?.label.split(", ")[1] || "Economy/Premium Economy"}
          </div>
        </div>
      </div>

      {/* Special Fare Options */}
      <div className="mb-6">
        <label className="text-sm font-medium mb-3 block">
          Select a special fare
        </label>
        <div className="flex items-start gap-2 mb-4">
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-medium">
            EXTRA SAVINGS
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {fareTypes.map((fare) => (
            <label
              key={fare.value}
              className={`flex items-center space-x-2 p-3 border rounded-lg cursor-pointer ${
                fare.highlight
                  ? "border-blue-700 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="fareType"
                value={fare.value}
                checked={fareType === fare.value}
                onChange={() => setFareType(fare.value)}
              />
              <div>
                <span className={`font-medium ${fare.highlight ? "text-blue-700" : ""}`}>
                  {fare.label}
                </span>
                <p className="text-xs text-gray-500">{fare.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Flight Delay Protection */}
      <div className="flex items-start gap-3 mb-6 p-4 bg-gray-100 rounded-lg">
        <input
          id="flight-protection"
          type="checkbox"
          checked={flightProtection}
          onChange={e => setFlightProtection(e.target.checked)}
          className="mt-1"
        />
        <div className="flex-1">
          <label htmlFor="flight-protection" className="font-medium flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Add Flight Delay Protection
          </label>
          <p className="text-sm text-gray-500 mt-1">
            Get compensation for delays of 1 hour or more{" "}
            <button className="text-blue-700 underline bg-transparent border-none p-0" type="button">
              View Details
            </button>
          </p>
        </div>
      </div>

      {/* Search Button */}
      <button
        className="w-full h-14 text-lg font-semibold rounded bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white transition"
        type="submit"
      >
        SEARCH
      </button>
    </div>
  );
};

export default FlightSearch;