"use client"
import { useState } from "react";
import Transport from "../../components/transport/transportselect";
import TransportNL from "../../components/transport/transportselect-nl";
export default function CountrySelectorMin() {

    const [country, setCountry] = useState("DK")


    return (

        <>
            <div className="text-center mt-4 flex justify-center gap-4">
                <button onClick={() => setCountry("DK")} className="bg-white border-gray-400 border rounded-2xl px-4 py-2">
                    <small>DK</small>
                    <span>Denmark</span>
                </button>
                <button onClick={() => setCountry("NL")} className=" bg-white border-gray-400 border rounded-2xl px-1">
                    <small>NL</small>
                    <span>Netherlands</span>
                </button>
            </div>
            {country === "DK" && <Transport />}
            {country === "NL" && <TransportNL />}

        </>
    )
}

