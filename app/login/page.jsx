import Link from "next/link";
import loginAction from "@/app/login/action"


export default function Login() {
    return (
        <>
            <h1 className="text-center">Login</h1>

<<<<<<< HEAD
            <form className="flex flex-col px-3.5">
                
                <input type="email" className="border" placeholder="Email" />
                <input type="password" className="border" placeholder="Password" />
=======
            <form action={loginAction} className="flex flex-col px-3.5">
                <input type="email" className="border" name="email" placeholder="Email" />
                <input type="password" className="border" name="password" placeholder="Password" />
>>>>>>> 6ab1fcf87d2922ac79baf2fec1efe23c638921c0
                <button type="submit">Submit

                </button>
            </form>

            <Link href="/register">Register</Link>

        </>
    )
}