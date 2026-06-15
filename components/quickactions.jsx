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
                <Link href="" className="focus:outline outline-green-500 flex flex-col py-4 bg-white px-4 rounded-2xl"
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