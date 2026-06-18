import Link from 'next/link';
import React from 'react';

export default function TicketsCards() {
  return (
    <div className="bg-gray-100 p-4">

      {/* Header (smaller) */}

      <h1 className="mb-4 text-2xl font-semibold text-gray-900">
        Tickets & Cards
      </h1>

      {/* Card 1 */}
      <a
        href="https://dinoffentligetransport.dk/en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="mb-3 flex cursor-pointer rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md">
          <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
            <span className="text-lg">🎫</span>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-gray-900">
              DOT Tickets
            </h2>
            <p className="text-sm text-gray-600">
              Main app for Copenhagen transport. Buy tickets, check zones.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <a
          href="https://www.rejsekort.dk/"
          target="_blank"
          rel="noopener noreferrer"
        ></a>

        <div className="mb-3 flex rounded-2xl bg-white p-4 shadow-sm">
          <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
            <span className="text-lg">💳</span>
          </div>

          <div>
            <h2 className="mb-1 text-base font-semibold text-gray-900">
              Rejsekort
            </h2>
            <p className="text-sm text-gray-600">
              Rechargeable card for frequent travelers. Cheaper per trip.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <a
          href="https://ruter.no/en/about-our-tickets/zones-and-zone-maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex cursor-pointer rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md">
            <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
              <span className="text-lg">🗺️</span>
            </div>

            <div>
              <h2 className="mb-1 text-base font-semibold text-gray-900">
                Zone System
              </h2>
              <p className="text-sm text-gray-600">
                Travel cost based on zones crossed. Copenhagen center is Zone 1-2.
              </p>
            </div>
          </div>

        </div >
        );
}