"use client"; // Add this directive to make it a client-side component

import React, { useState, useEffect } from 'react';

const depositData = [
    { email: "s***@gmail.com", amount: "1.246", currency: "BTC" },
    { email: "t***@yahoo.com", amount: "0.737", currency: "ETH" },
    { email: "r***@gmail.com", amount: "532", currency: "USDT" },
];

const withdrawalData = [
    { email: "h***@yahoo.com", amount: "0.533", currency: "BTC" },
    { email: "p***@gmail.com", amount: "612", currency: "USDT" },
    { email: "g***@yahoo.com", amount: "1.25", currency: "ETH" },
];

export default function LiveFeed() {
    const [deposits, setDeposits] = useState(depositData);
    const [withdrawals, setWithdrawals] = useState(withdrawalData);

    // Simulate live updates
    useEffect(() => {
        const interval = setInterval(() => {
            setDeposits((prevDeposits) => {
                const randomIndex = Math.floor(Math.random() * prevDeposits.length);
                const newDeposits = [...prevDeposits];
                newDeposits[randomIndex] = {
                    ...newDeposits[randomIndex],
                    amount: (Number.parseFloat(newDeposits[randomIndex].amount) + Math.random() * 0.1).toFixed(3),
                };
                return newDeposits;
            });

            setWithdrawals((prevWithdrawals) => {
                const randomWithdrawalIndex = Math.floor(Math.random() * prevWithdrawals.length);
                const newWithdrawals = [...prevWithdrawals];
                newWithdrawals[randomWithdrawalIndex] = {
                    ...newWithdrawals[randomWithdrawalIndex],
                    amount: (Number.parseFloat(newWithdrawals[randomWithdrawalIndex].amount) + Math.random() * 0.1).toFixed(3),
                };
                return newWithdrawals;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-4">
            <div>
                <div className="inline-block bg-muted text-xs font-medium px-3 py-1 rounded-full mb-2">
                    Live Deposits
                </div>
                <div className="flex flex-wrap gap-4">
                    {deposits.map((deposit, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="text-sm">{deposit.email}</span>
                            <div className="flex items-center gap-1 bg-green-500/10 text-green-500 px-2 py-1 rounded-full text-xs">
                                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                <span>{deposit.amount}</span>
                                <span className="text-muted-foreground">{deposit.currency}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="inline-block bg-muted text-xs font-medium px-3 py-1 rounded-full mb-2">
                    Live Withdraws
                </div>
                <div className="flex flex-wrap gap-4">
                    {withdrawals.map((withdrawal, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="text-sm">{withdrawal.email}</span>
                            <div className="flex items-center gap-1 bg-red-500/10 text-red-500 px-2 py-1 rounded-full text-xs">
                                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                                <span>{withdrawal.amount}</span>
                                <span className="text-muted-foreground">{withdrawal.currency}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
