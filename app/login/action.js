"use server"
import { cookies } from "next/headers";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

export default async function loginAction(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    // Zoek gebruiker in database
    const { data, error } = await supabase
        .from('users') // Je table naam
        .select('*')
        .eq('email', email)
        .eq('password', password)
        .single();

    console.log('Login result:', data, error)

    if (!error && data) {
        const cookieStore = await cookies()
        cookieStore.set("user", JSON.stringify(data))
        redirect("/")
    } else {
        console.error('Login error:', error || 'Invalid credentials')
        return { error: 'Invalid email or password' }
    }
}