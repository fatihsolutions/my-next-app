'use server'

import { supabase } from "@/lib/supabase";
import { redirect } from 'next/navigation'

export async function registerAction(formData) {
  const username = formData.get('username')
  const email = formData.get('email')
  const password = formData.get('password')

  console.log('Registratie poging:', { username, email })

  // Direct naar database schrijven
  const { data, error } = await supabase
    .from('users')
    .insert({
      username: username,
      email: email,
      password: password,
      country_id: 1
    })
    .select()

  console.log('Insert result:', { data, error })

  if (error) {
    console.error('Database error:', error)
    return { error: error.message }
  }

  console.log('Success! Data inserted:', data)
  redirect('/login')
}
