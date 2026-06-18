import Link from "next/link";

export default function Mistake() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
          <span className="text-white font-bold text-xl">!</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Common Mistakes
        </h2>
      </div>

      {/* Content Box */}
      <div className="bg-orange-50 dark:bg-orange-950 border-2 border-orange-200 dark:border-orange-800 rounded-2xl p-6">
        <ul className="space-y-3">
          <li className="text-orange-900 dark:text-orange-100">
            <span className="mr-2">•</span>
            Not validating Rejsekort when entering/exiting
          </li>

          <li className="text-orange-900 dark:text-orange-100">
            <span className="mr-2">•</span>
            Buying wrong zone tickets
          </li>

          <li className="text-orange-900 dark:text-orange-100">
            <span className="mr-2">•</span>
            Missing night bus (last metro ~1 AM weekdays)
          </li>
        </ul>
      </div>
    </div>
  );
}