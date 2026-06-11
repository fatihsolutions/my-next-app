"use server"
import { cookies } from "next/headers";

import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

export default async function loginAction(formData) {
    const { email, password } = Object.fromEntries(formData);
    // do database sh*t
    const { data, error } =
        await supabase.auth.signInWithPassword({
            email,
            password,
        });
    console.log(data, error)
    if (!error) {
        const cookieStore = await cookies()
        cookieStore.set("user", JSON.stringify(data))
        redirect("/")

    }
}




