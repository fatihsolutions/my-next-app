'use client'
import { useState } from "react";

export default function CountrySelector() {
    const [selectedCard, setSelectedCard] = useState(null);


    return (
        <section className="flex flex-col gap-2.5">
            <button onClick={() => setSelectedCard("dk")} className="focus:outline outline-blue-500 p-6 flex items-center gap-6 rounded-2xl bg-white mx-3">
                <span className="text-4xl">DK</span>
                <div><h2>Denmark</h2>
                    <p className="text-slate-500">Copenhagen & Beyond</p>
                </div>



            </button>
            <button onClick={() => setSelectedCard("nl")

            } className="focus:outline outline-blue-500 p-6 flex items-center gap-6 rounded-2xl bg-white mx-3">
                <span className="text-4xl">NL</span>
                <div><h2>Netherland</h2>
                    <p className="text-slate-500">Amsterdam, Rotterdam & beyond</p>
                </div>



            </button>

        </section>
    )
}


