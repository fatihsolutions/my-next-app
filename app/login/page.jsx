import Link from "next/link";


export default function Login() {
    return (
        <>
            <h1 className="text-center">Login</h1>

            <form className="flex flex-col px-3.5">
                <input type="email" className="border" placeholder="Email" />
                <input type="password" className="border" placeholder="Password" />
                <button type="submit">Submit

                </button>
            </form>

            <Link href="/register">Register</Link>

        </>
    )
}