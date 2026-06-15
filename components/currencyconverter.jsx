"use client"

import { useState, useEffect } from 'react';

export default function CurrencyConverter() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('EUR');
    const [toCurrency, setToCurrency] = useState('DKK');
    const [exchangeRate, setExchangeRate] = useState(null);
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);

    // Haal de wisselkoers op
    useEffect(() => {
        const fetchExchangeRate = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
                );
                if (!response.ok) throw new Error('Could not fetch exchange rate');
                
                const data = await response.json();
                setExchangeRate(data.rates[toCurrency]);
                setLastUpdated(new Date(data.date));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchExchangeRate();
    }, [fromCurrency, toCurrency]);

    // Bereken de omgerekende waarde
    useEffect(() => {
        if (amount && exchangeRate) {
            setConvertedAmount((parseFloat(amount) * exchangeRate).toFixed(2));
        } else {
            setConvertedAmount(null);
        }
    }, [amount, exchangeRate]);

    // Wissel de valuta's om
    const handleSwapCurrencies = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    return (
        <div className="w-full max-w-2xl mx-auto mt-8 p-4 sm:p-6 md:p-8 bg-yellow-400 dark:bg-yellow-500 rounded-3xl shadow-lg transition-colors">
            <h3 className="text-center text-2xl sm:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-900">
                Currency Converter
            </h3>

            {error && (
                <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-2xl">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                {/* Van valuta */}
                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-gray-900 mb-2">
                        Bedrag
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            min="0"
                            step="0.01"
                        />
                        <select
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                            <option value="EUR">EUR (€)</option>
                            <option value="DKK">DKK (kr)</option>
                        </select>
                    </div>
                </div>

                {/* Wissel knop */}
                <div className="flex justify-center">
                    <button
                        onClick={handleSwapCurrencies}
                        className="p-2 bg-blue-500 dark:bg-blue-600 text-white rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
                        aria-label="Wissel valuta's"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                            />
                        </svg>
                    </button>
                </div>

                {/* Naar valuta */}
                <div>
                    <label className="block text-sm font-medium text-gray-900 dark:text-gray-900 mb-2">
                        Omgerekend
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="text"
                            value={convertedAmount || ''}
                            readOnly
                            placeholder="0.00"
                            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-2xl bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
                        />
                        <select
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                            <option value="DKK">DKK (kr)</option>
                            <option value="EUR">EUR (€)</option>
                        </select>
                    </div>
                </div>

                {/* Wisselkoers info */}
                {exchangeRate && !loading && (
                    <div className="mt-4 p-4 bg-gray-900/80 dark:bg-gray-900 rounded-2xl text-sm text-white dark:text-gray-300">
                        <p className="font-medium">
                            1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
                        </p>
                        {lastUpdated && (
                            <p className="text-xs mt-1 opacity-80">
                                Last updated: {lastUpdated.toLocaleDateString('en-US')}
                            </p>
                        )}
                    </div>
                )}

                {loading && (
                    <div className="text-center text-gray-900 dark:text-gray-900">
                        Loading exchange rate...
                    </div>
                )}
            </div>
        </div>
    );
}
