import { supabase } from "@/lib/supabase";
import Image from "next/image";
import CountrySelectionCard from "@/components/hero";
import CountrySelector from "@/components/countryselector"
import QuickActions from "@/components/quickactions"
import CurrencyConverter from "@/components/currencyconverter"

export default function Home() {
  const setNewView = async () => {
    const { data, error } = await supabase
      .from("views")
      .insert({
        name: 'random name'
      })

    if (data) console.log(data)
    if (error) console.log(error)



  };



  setNewView();

  return (
    <main className="bg-gray-100 m-0 p-0">
      <CountrySelectionCard />
      <CountrySelector />
      <QuickActions />
      <CurrencyConverter />
      <div>Logged In</div>
    </main>



  );
}
