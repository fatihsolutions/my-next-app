import Link from "next/link";
import loginAction from "@/app/login/action"


export default function Login() {
    return (
        <>
            <h1 className="text-center">Login</h1>

            <form action={loginAction} className="flex flex-col px-3.5">
                <input type="email" className="border" name="email" placeholder="Email" />
                <input type="password" className="border" name="password" placeholder="Password" />
                <button type="submit">Submit

                </button>
            </form>

            <Link href="/register">Register</Link>

        </>
    )
}