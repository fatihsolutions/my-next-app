"use server"

import { supabase } from "@/lib/supabase";

export default async function loginAction(formData) {
    const { email, password } = Object.fromEntries(formData);
    // do database sh*t
    const { data, error } =
        await supabase.auth.signInWithPassword({
            email,
            password,
        });
    console.log(data, error)
}
