/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

type ITEM = { 
    avatar: string,
    name: string,
    role: string,
    twitter: string,
    telegram: string,
    instagram: string,
    github: string
}

const _members: ITEM[] = [
    { 
        avatar: '/avatar/cryptoSI.png',
        name: 'CryptoSI',
        role: 'Project Manager',
        twitter: 'https://twitter.com/Crypto_SI',
        telegram: 'https://t.me/Crypto_si',
        instagram: 'https://www.instagram.com/cryptosi.eth',
        github: 'https://github.com/Crypto-SI'
    },
    { 
        avatar: '/avatar/me.png',
        name: 'Crypto Dew',
        role: 'Developer',
        twitter: '',
        telegram: 'https://t.me/legendary_crypto_dev',
        instagram: '',
        github: 'https://github.com/venuswhispers'
    },
    { 
        avatar: '/avatar/echo.png',
        name: 'Echko',
        role: 'Business developer',
        twitter: 'https://x.com/Echko420',
        telegram: 'https://t.me/RBMCryptoClash',
        instagram: '',
        github: ''
    },
    { 
        avatar: '/avatar/navigator.png',
        name: 'Financial navigator',
        role: 'Social Media',
        twitter: '',
        telegram: '',
        instagram: 'https://www.instagram.com/financial_navigator',
        github: ''
    },
]


const Roadmap = () => {

    const _renderItem = (_user: ITEM, index: number) => (
        <div key={_user.name} className={`${ index % 2 === 0 && ' md:flex-row-reverse' } flex-col-reverse md:flex-row flex items-center justify-end md:gap-2 lg:gap-5`}>
            <div className="flex flex-col gap-2 justify-center items-center">
                <h2 className="nd:text-xl lg:text-3xl text-center">{_user.name}</h2>
                <h2 className="md:text-[16px] lg:text-xl font-rushda opacity-50 text-center">{_user.role}</h2>
                <div className="flex gap-2">
                    { _user.twitter && <a href={_user.twitter} target="_blank" className="hover:opacity-50 cursor-pointer"><Icon icon="uil:twitter" className="text-2xl"/></a>}
                    { _user.instagram && <a href={_user.instagram} target="_blank" className="hover:opacity-50 cursor-pointer"><Icon icon="ri:instagram-line" className="text-2xl"/></a> }
                    { _user.telegram &&  <a href={_user.telegram} target="_blank" className="hover:opacity-50 cursor-pointer"><Icon icon="teenyicons:telegram-outline" className="text-2xl"/></a> }
                    { _user.github && <a href={_user.github} target="_blank" className="hover:opacity-50 cursor-pointer"><Icon icon="lucide:github" className="text-2xl"/></a> }
                </div>
            </div>
            <div className="p-1 flex-none aspect-square rounded-full bg-[#7db9d1]">
                <Image
                    src={_user.avatar}
                    alt='me'
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='rounded-full aspect-square h-60 w-60 xs:h-60 xs:w-60 md:h-50 lg:h-60 md:lg-50 lg:w-60'
                />
            </div>
        </div>
    )

    

    return (
        <section
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            id="team"
            className="mt-40 mx-2 md:mx-20"
        >
            <div className="">
                <div className="title md:pb-3">
                    <h2 className="md:text-5xl text-3xl text-center text-white">Meet Our Team</h2>
                </div>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-20 text-white relative">
                    { _members.map((_user: ITEM, index: number) => _renderItem (_user, index + 1)) }
                    <div className="absolute h-[90%] aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black -z-10 rounded-full bg-gradient-to-br from-[#B077D9] dark:from-[#120F20] dark:to-blue-400/15 to-[#9677ac]"></div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
