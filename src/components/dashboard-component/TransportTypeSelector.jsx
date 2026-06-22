"use client";

import { FaBus, FaTrain, FaShip, FaPlane } from "react-icons/fa";

const transportOptions = [
  {
    name: "Bus",
    icon: FaBus,
  },
  {
    name: "Train",
    icon: FaTrain,
  },
  {
    name: "Launch",
    icon: FaShip,
  },
  {
    name: "Plane",
    icon: FaPlane,
  },
];

const TransportTypeSelector = ({value,onChange,}) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {transportOptions.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.name}
            type="button"
            onClick={() => onChange(item.name)}
            className={`rounded-2xl border p-5 transition-all ${
              value === item.name
                ? "border-cyan-400 bg-cyan-500/10"
                : "border-cyan-500/20 bg-[#0D1B2A] hover:border-cyan-400/50"
            }`}
          >
            <Icon
              size={28}
              className={`mx-auto mb-3 ${
                value === item.name
                  ? "text-cyan-400"
                  : "text-gray-400"
              }`}
            />

            <p
              className={`font-medium ${
                value === item.name
                  ? "text-cyan-400"
                  : "text-white"
              }`}
            >
              {item.name}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default TransportTypeSelector;