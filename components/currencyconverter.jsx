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
                if (!response.ok) throw new Error('Kon wisselkoers niet ophalen');
                
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
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-center text-2xl font-bold mb-6 text-gray-800">
                Currency Converter
            </h3>

            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                {/* Van valuta */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bedrag
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            min="0"
                            step="0.01"
                        />
                        <select
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Omgerekend
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={convertedAmount || ''}
                            readOnly
                            placeholder="0.00"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        />
                        <select
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="DKK">DKK (kr)</option>
                            <option value="EUR">EUR (€)</option>
                        </select>
                    </div>
                </div>

                {/* Wisselkoers info */}
                {exchangeRate && !loading && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                        <p className="font-medium">
                            1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
                        </p>
                        {lastUpdated && (
                            <p className="text-xs mt-1">
                                Last time updated: {lastUpdated.toLocaleDateString('nl-NL')}
                            </p>
                        )}
                    </div>
                )}

                {loading && (
                    <div className="text-center text-gray-500">
                        Wisselkoers laden...
                    </div>
                )}
            </div>
        </div>
    );
}
