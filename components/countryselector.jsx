export default function CountrySelector() {
    return (
        <section className="flex flex-col gap-2.5">
            <button className="p-6 flex items-center gap-6 rounded-2xl bg-white mx-3">
                <span className="text-4xl">DK</span>
                <div><h2>Denmark</h2>
                    <p className="text-slate-500">Copenhagen & Beyond</p>
                </div>



            </button>
            <button className="p-6 flex items-center gap-6 rounded-2xl bg-white mx-3">
                <span className="text-4xl">NL</span>
                <div><h2>Netherland</h2>
                    <p className="text-slate-500">Amsterdam, Rotterdam & beyond</p>
                </div>



            </button>

        </section>
    )
}