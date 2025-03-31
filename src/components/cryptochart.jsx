"use client"; // Add this directive to make it a client-side component

import { useState, useEffect, useRef } from "react";

const Cryptochart = () => {
    const canvasRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        const width = canvas.width;
        const height = canvas.height;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Generate random data points
        const points = 20;
        const data = Array.from({ length: points }, () => Math.random() * 0.5 + 0.25);

        // Draw chart
        ctx.beginPath();
        ctx.moveTo(0, height - height * data[0]);

        for (let i = 1; i < points; i++) {
            const x = (width / (points - 1)) * i;
            const y = height - height * data[i];
            ctx.lineTo(x, y);
        }

        // Line style
        ctx.strokeStyle = "#10b981";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Fill area under the line
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        // Create gradient fill
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, "rgba(16, 185, 129, 0.2)");
        gradient.addColorStop(1, "rgba(16, 185, 129, 0)");
        ctx.fillStyle = gradient;
        ctx.fill();
    }, [isHovered]);

    return (
        <div
            className="bg-card rounded-lg p-4 border border-border"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex items-center justify-between mb-4">
                <div className="h-8 w-8 rounded-full bg-muted"></div>
                <span className="text-xs text-muted-foreground">24H</span>
            </div>
            <div className="mb-2">
                <h3 className="font-medium">USD</h3>
            </div>
            <div className="h-24">
                <canvas ref={canvasRef} width={200} height={100} className="w-full h-full"></canvas>
            </div>
        </div>
    );
};

export default Cryptochart;
