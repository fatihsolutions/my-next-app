export default function CountrySelectorMin() {

    const TransportSystem = [
        {
            title: "Metro & S - train",
            description: "Fast network in Copenhagen.Runs 24/7 on weekends",
            image: "/train.svg",
            url: "https://dsb.dk"

        },

        {
            title: "Buses"

        }
    ]

    return (
        <div>
            <button className="bg-white border-gray-400 border rounded-2xl">
                <small>DK</small>
                <span>Denmark</span>
            </button>
            <button className=" bg-white border-gray-400 border rounded-2xl">
                <small>NL</small>
                <span>Netherland</span>
            </button>
        </div>
    )
}