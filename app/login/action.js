"use server"
import { cookies } from "next/headers";

import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

export default async function loginAction(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const { error } =
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




