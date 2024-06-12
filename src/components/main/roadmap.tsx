/* eslint-disable @next/next/no-img-element */
import React from "react";

const Roadmap = () => {

    return (
        <section id="roadmap" className="mt-32 mx-2 md:mx-20">
            <div className="">
                <div className="title">
                    <h2 className="md:text-6xl text-3xl text-center text-white">Roadmap</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 text-white">
                    <div className="donut-chart-bg dark:bg-[#D95617] bg-[#000237a4] p-5 pt-10">
                        <h2 className="text-2xl">Phase 1</h2>
                        <div className="text-lg mt-5">
                            <h3 className="text-xl">- Fair Launch</h3>
                        </div>
                        <div className="text-lg mt-5">
                            <h3 className="text-xl">- DEX Listing</h3>
                        </div>
                        <div className="text-lg mt-5">
                            <h3 className="text-xl">- Youtube Marketing</h3>
                        </div>
                        <div className="text-lg mt-5">
                            <h3 className="text-xl">- Social Marketing</h3>
                        </div>
                    </div>
                    <div className="donut-chart-bg dark:bg-[#D95617] bg-[#000237a4] p-5 pt-10">
                        <h2 className="text-2xl">Phase 2</h2>
                        <div className="text-lg mt-5">
                            <h3 className="text-xl">- AIRDROP</h3>
                                There will be an airdrop of newly created Keyer Stammer tokens to the holders of Soonak Coin - The snapshot date will be the 5th July
                        </div>
                        <div className="text-lg mt-5">
                            <h3 className="text-xl">- Centralised Exchange Listing</h3>
                            Soonak will be added to centralised exchanges very soon, watch this space for more info!
                        </div>
                    </div>
                    <div className="donut-chart-bg dark:bg-[#D95617] bg-[#000237a4] p-5 pt-10">
                        <h2 className="text-2xl">Phase 3</h2>
                        <div className="text-lg mt-5">
                            <h3 className="text-xl">- MEME Wars</h3>
                            Following the Airdrops and centralised exchange listings, SOONAK will launch its own NFT collection, designed by a top Solana MEME house - RAID BOSS MEDIA
                        </div>
                    </div>
                    <div className="donut-chart-bg dark:bg-[#D95617] bg-[#000237a4] p-5 pt-10">
                        <h2 className="text-2xl">Phase 4</h2>
                        <div className="text-lg mt-5">
                            <h3 className="text-xl">- Regular video updates from the team</h3>
                            The SOONAK team will be releasing regular video updates to allow the community to know whats being worked on and what will come in the future.
                        </div>
                        <div className="text-lg mt-5">
                            <h3 className="text-xl">- SOONAK NFTs</h3>
                            Following the Airdrops and centralised exchange listings, SOONAK will launch its own NFT collection, designed by a top Solana MEME house - RAID BOSS MEDIA
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
