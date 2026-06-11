import Link from "next/link";
import { registerAction } from "./action.js";

export default function Register() {
    return (
        <>
            <h1 className="text-center">Register</h1>

            <form action={registerAction} className="flex flex-col px-3.5">

                <label className="flex flex-col"> 
                    Username 
                    <input 
                        type="text" 
                        name="username"
                        className="border" 
                        placeholder="Choose A Username" 
                        required
                    />
                </label>

                <label className="flex flex-col"> 
                    E-mail 
                    <input 
                        type="email" 
                        name="email"
                        className="border" 
                        placeholder="Enter your email" 
                        required
                    />
                </label>

                <label className="flex flex-col"> 
                    Password 
                    <input 
                        type="password" 
                        name="password"
                        className="border" 
                        placeholder="Choose A Password (min 6 characters)" 
                        minLength={6}
                        required
                    />
                </label>

                <button className="my-3 bg-amber-300" type="submit"> 
                    Submit your Registration
                </button>
            </form>

            <p className="text-center">Already have an account?</p> 
            <Link className="underline block text-center" href="/login">Login</Link>
        </>
    )
}
