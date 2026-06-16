import Link from "next/link"

export default function TransportNL() {
    const transportSystem = [
        {
            title: "NS Trains",
            description: "Fast intercity and regional trains connecting cities across the Netherlands.",
            image: "/train.svg",
            url: "https://www.ns.nl",
        },

        {
            title: "Buses",
            description: "Local and regional bus services. Ideal for reaching suburbs and smaller towns.",
            image: "/bus.svg",
            url: "https://9292.nl",
        },

        {
            title: "Trams & Metro",
            description: "Efficient urban transport in Amsterdam, Rotterdam, The Hague and Utrecht.",
            image: "/tram.svg",
            url: "https://www.gvb.nl",
        },
    ];


    return (
        <section className="mt-4 px-4">
            {transportSystem.map((item) =>
                <Link className="flex gap-4 px-2.5 bg-white mb-2 rounded-lg" href={item.url} key={item.url}>
                    <img src={item.image} alt="" />
                    <div className="flex flex-col items-center"><h4>{item.title}</h4>
                        <p>{item.description}</p></div>

                </Link>


            )
            }

        </section >

    )


}