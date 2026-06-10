import Link from "next/link";

export default function Register() {
    return (
        <>
            <h1 className="text-center">Register</h1>

            <form className="flex flex-col px-3.5">

                <label className="flex flex-col"> E-mail <input type="email" className="border" placeholder="Choose A Username" /></label>
                <label className="flex flex-col"> Password <input type="password" className="border" placeholder="Choose A Password" /></label>
                <button className="my-3 bg-amber-300" type="submit"> Submit your Registration

                </button>
            </form>
            <p className="text-center">Already have an account?</p> <Link className="underline block text-center" href="/login">Login</Link>


        </>
    )
}