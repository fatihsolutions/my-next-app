import Link from "next/link";

const quickactions = [
    {
        image: "/train.svg",
        imaget: "/dsb.png",
        title: "Transport Apps",
        desc: "trains buses & tickets"
    },
    {
        image: "/mobile.svg",
        title: "Essential Apps",
        desc: "Must-have student apps"
    },
    {
        image: "/local_cafe.svg",
        title: "Student Life",
        desc: "Housing, food & culture"
    },
    {
        image: "/check_box.svg",
        title: "First Week",
        desc: "Survival checklist"
    },


]
export default function QuickActions() {

    return (
        <section className="grid grid-cols-2 gap-4 px-4 mx-4 mt-4">
            {quickactions.map((item) => (
                <Link href="/transport" className="flex flex-col py-4 px-4 rounded-2xl bg-white border-2
                 border-transparent transition-all duration-200 hover:border-blue-500 hover:shadow-lg hover:scale-105
                focus:outline-none focus:ring-4 focus:ring-blue-200"
                    key={item.title}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-4" />

                    <h2>{item.title}</h2>

                    <p>{item.desc}</p>
                    <img src="{item.imaget}" alt="" />

                </Link>


            ))}
        </section>

    );

}