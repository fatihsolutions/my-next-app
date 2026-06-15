import Link from "next/link";
import loginAction from "@/app/login/action";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-8 w-full max-w-md">

                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
                    Welcome Back
                </h1>

                <form action={loginAction} className="flex flex-col gap-4">

                    <label className="flex flex-col gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        E-mail
                        <input
                            type="email"
                            name="email"
                            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                            placeholder="Enter your email"
                            required
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Password
                        <input
                            type="password"
                            name="password"
                            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                            placeholder="Enter your password"
                            required
                        />
                    </label>

                    <button
                        type="submit"
                        className="mt-2 bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 rounded-lg transition cursor-pointer"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
                    Don't have an account yet?{" "}
                    <Link href="/register" className="text-amber-500 font-medium hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}
