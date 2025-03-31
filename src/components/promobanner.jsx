import React from 'react';

export default function PromoBanner({ color = "blue", title = "Promo Title" }) {
    const getBgColor = () => {
        switch (color) {
            case "blue":
                return "bg-blue-900";
            case "yellow":
                return "bg-amber-900";
            case "red":
                return "bg-red-900";
            case "purple":
                return "bg-purple-900";
            default:
                return "bg-blue-900";
        }
    };

    const getAccentColor = () => {
        switch (color) {
            case "blue":
                return "bg-blue-500";
            case "yellow":
                return "bg-amber-500";
            case "red":
                return "bg-red-500";
            case "purple":
                return "bg-purple-500";
            default:
                return "bg-blue-500";
        }
    };

    return (
        <div className={`min-w-[280px] h-32 rounded-lg ${getBgColor()} p-4 flex items-center relative overflow-hidden`}>
            <div className="z-10">
                <h3 className="font-bold text-white text-lg">{title}</h3>
            </div>

            {/* Decorative elements */}
            <div className={`absolute -right-4 -bottom-4 h-16 w-16 rounded-full ${getAccentColor()} opacity-50`}></div>
            <div className={`absolute right-8 top-2 h-8 w-8 rounded-full ${getAccentColor()} opacity-30`}></div>
            <div className={`absolute right-20 bottom-6 h-4 w-4 rounded-full ${getAccentColor()} opacity-20`}></div>
        </div>
    );
}
