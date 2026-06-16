import Link from "next/link"

export default function TicketsCards() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="mb-5 text-3xl font-bold text-gray-900">
        Tickets & Cards
      </h1>

      <div className="mb-4 flex rounded-3xl bg-white p-5 shadow">
        <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
          <span className="text-2xl"></span>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            DOT Tickets
          </h2>

          <p className="text-gray-600">
            Main app for Copenhagen transport. Buy tickets, check zones.
          </p>
        </div>
      </div>

      <div className="mb-4 flex rounded-3xl bg-white p-5 shadow">
        <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
          <span className="text-2xl"></span>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Rejsekort
          </h2>

          <p className="text-gray-600">
            Rechargeable card for frequent travelers. Cheaper per trip.
          </p>
        </div>
      </div>

      <div className="flex rounded-3xl bg-white p-5 shadow">
        <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
          <span className="text-2xl"></span>
        </div>

        <div>
          <h2 className="mb-2 text-xl font-semibold text-gray-900">
            Zone System
          </h2>

          <p className="text-gray-600">
            Travel cost based on zones crossed. Copenhagen center is Zone 1-2.
          </p>
        </div>
      </div>
    </div>
  );
}