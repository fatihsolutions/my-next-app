import Link from "next/link"

export default function Transport() {

    const TransportSystem = [
        {
            title: "Metro & S - train",
            description: "Fast network in Copenhagen.Runs 24/7 on weekends",
            image: "/train.svg",
            url: "https://m.dk/da/"

        },

        {
            title: "Buses",
            description: "Covers entire city and suburbs. Check route 5C for Students!",
            image: "/bus.svg",
            url: "https://moviatrafik.dk/"

        },

        {
            title: "Regional Trains (DSB)",
            description: "Connect cities across Denmark. Book via DSB app",
            image: "/train.svg",
            url: "https://dsb.dk"
        }
    ]


    return (
        <section className="mt-4 px-4">
            {TransportSystem.map((item) =>
                <Link className="flex gap-4 px-2.5 bg-white mb-2 rounded-lg  border-2 border-transparent
                    transition-all duration-200
                    focus:outline-none
                    focus:ring-4
                     focus:ring-blue-200" href={item.url} key={item.url}>
                    <img src={item.image} alt="" />
                    <div className="flex flex-col items-center"><h4>{item.title}</h4>
                        <p>{item.description}</p></div>

                </Link>


            )
            }

        </section >

    )


}