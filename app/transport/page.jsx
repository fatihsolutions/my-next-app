import CountrySelectorMin from "../../components/transport/countryselectormin";
import TicketsCards from "../../components/transport/Tickets";
import Mistake from "../../components/transport/mistake";

export default function TransportPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      
      {/* Header */}
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Public Transport
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Everything you need to get around
        </p>
      </div>

      {/* Content (BELANGRIJK: 1 spacing system) */}
      <div className="p-4 space-y-4">
        
        <CountrySelectorMin />
        <TicketsCards />
        <Mistake />

      </div>
    </div>
  );
}