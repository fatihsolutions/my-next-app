"use server"

import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default async function loginAction(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    const { error } =
        await supabase.auth.signInWithPassword({
            email,
            password,
        });

    if (error) {
        return {
            error: "Invalid email or password",
        };
    }

    redirect("/");}