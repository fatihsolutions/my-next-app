"use client";
import { useState } from "react";
import Transport from "../../components/transport/transportselect";
import TransportNL from "../../components/transport/transportselect-nl";

export default function CountrySelectorMin() {
  const [country, setCountry] = useState("DK");

  return (
    <div className="bg-gray-100 dark:bg-gray-900 ">
      <div className="p-4">
        {/* Buttons */}
        <div className="flex justify-center gap-3 mb-4">
          <button
            onClick={() => setCountry("DK")}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-2xl px-4 py-2 flex flex-col items-center leading-tight"
          >
            <small className="text-xs">DK</small>
            <span className="text-sm font-medium">Denmark</span>
          </button>

          <button
            onClick={() => setCountry("NL")}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-2xl px-4 py-2 flex flex-col items-center leading-tight"
          >
            <small className="text-xs">NL</small>
            <span className="text-sm font-medium">Netherlands</span>
          </button>
        </div>

        {/* Content */}
        <div>
          {country === "DK" && <Transport />}
          {country === "NL" && <TransportNL />}
        </div>
      </div>
    </div>
  );
}