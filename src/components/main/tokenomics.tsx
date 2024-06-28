/* eslint-disable @next/next/no-img-element */
import React from "react";

const Tokenomics = () => {
    const chart = React.useRef<HTMLCanvasElement>(null);

    const [progress, setProgress] = React.useState<number>(95);

    React.useEffect(() => {
        if (!chart.current) return;
        const ctx: CanvasRenderingContext2D = chart.current.getContext("2d") as CanvasRenderingContext2D;
        const centerX = chart.current.width / 2;
        const centerY = chart.current.height / 2;
        const radius = 175; // Adjust the radius
        const strokeWidth = 60; // Adjust the stroke width
        const borderThickness = 2; // Adjust the border thickness
        const parts = [90, 10]; // Adjust the values
        const total = parts.reduce((acc, val) => acc + val, 0);
        const gap = 0.05; // Adjust the gap between parts
        const colors = [
            "#EFB1EA", //pink
            "#F15A29", // orange
            // "#662A75", //violet
            // "#3E2274", //blue
            // "#D1B4FF", //light gray
            // "#42C7E8", //sky
            // "#C56D74", // dark orange
            // "#CB0A16", //red
            // "#42C7E8", //sky
        ]; // Updated colors array

        let startAngle = -Math.PI / 2;
        for (let i = 0; i < parts.length; i++) {
            const percentage = parts[i] / total;
            const endAngle = startAngle + 2 * Math.PI * percentage;

            // Draw the border for each part
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, endAngle - gap);
            ctx.lineWidth = strokeWidth + borderThickness * 5; // Adjust border thickness
            ctx.strokeStyle = "#2D2D2D"; // Adjust border color
            ctx.stroke();

            // Draw the donut part
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, startAngle, endAngle - gap);
            ctx.lineWidth = strokeWidth;
            const partColor = colors[i];
            ctx.strokeStyle = partColor;
            ctx.stroke();

            startAngle = endAngle;
        }
    }, [progress]);

    return (
        <section className="mt-20 mx-2 md:mx-20">
            <div className="">
                <div className="title">
                    <h2 className="md:text-6xl text-3xl text-center text-white">TOKENOMICS</h2>
                </div>
                <div className="donut-chart-bg bg-[#D95617]">
                    <div className="donut-chart-ui items-center">
                        <div>
                            <ul id="legendLeft">
                                <li>
                                    <span className="text-4xl font-extrabold font-snow text-white number">10%</span>
                                    <span className="text-4xl font-extrabold font-snow text-white">Dev Wallet</span>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="donut"
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="200"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true"
                        >
                            <div className="canvas-logo">
                                <img src="/logo.png" className="w-40 aspect-square rounded-full" alt="" />
                            </div>
                            <canvas ref={chart} id="donutChart" width="512" height="512"></canvas>
                        </div>
                        <div
                            className="right-list"
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="200"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true"
                        >
                            <ul id="legendRight">
                                <li>
                                    <span className="text-4xl font-extrabold font-snow text-white text-center number">90%</span>
                                    <span className="text-4xl font-extrabold font-snow text-white text-center">Locked Liquidity</span>
                                    <span onClick={() => window.open('https://solscan.io/account/EsBiDt8LKDb24ZQpfb7MWj1RCBD7ewKCjt9xEXMyMCyD', '_blank')} className="font-bold text-white text-center mt-5 font-sans text-lg break-all cursor-pointer underline">EsBiDt8LKDb...xEXMyMCyD</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="chart-bottom-content"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-delay="200"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    >
                        <ul>
                            <li key='symbol'>Symbol: SOONAK</li>
                            <li key='Supply'>Supply: 1 billion</li>
                            <li key='Network'>Network: SOLANA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tokenomics;
