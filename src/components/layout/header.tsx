"use client"
import React from 'react';
import ThemeSwitcher from '../share/themeSwitcher';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';

const Header = () => {
    return (
        <>
            <div className='fixed top-0 flex gap-2 py-1 items-center justify-between w-full px-5 dark:bg-[#131b2e] bg-[#d0d0d8] backdrop-filter backdrop-blur-[10px] z-50'>
                <h1 className='text-sm font-bold dark:text-white truncate'>RICHY SOONAK</h1>
                <div className='flex gap-2 items-center'>
                    <a href='https://github.com/Richy-Soonak' target='_blank'><Icon icon="ri:github-fill" className='text-xl dark:text-white cursor-pointer hover:opacity-70'/></a>
                    <a href='https://x.com/RichySoonak' target='_blank'><Icon icon="uim:twitter" className=' text-xl dark:text-white cursor-pointer hover:opacity-70'/></a>
                    <a href='https://t.me/richysoonak' target='_blank'><Icon icon="mingcute:telegram-fill" className=' text-xl dark:text-white cursor-pointer hover:opacity-70'/></a>
                    <a href='https://discord.gg/Vp9mR8gP' target='_blank'><Icon icon="ri:discord-line" className=' text-xl dark:text-white cursor-pointer hover:opacity-70'/></a>
                    <ThemeSwitcher/>
                </div>
            </div>

            <div className='mt-8 py-1 px-5 dark:bg-[#0C111E] flex justify-between'>
                <Image
                    src='/logo.png'
                    alt='asdf'
                    sizes='100vw'
                    height={60}
                    width={60}
                    className='rounded-full'
                />
                <div className='flex justify-center items-center'>
                    <a href='https://raydium.io/swap/?inputMint=H218TQViAXsSqwCLnf7L41zewUTRmdN1r4neLtjBXYXS&outputMint=sol' target='_blank' className='rounded-xl bg-blue-600 px-5 py-3 text-white hover:text-black'>BUY NOW</a>
                </div>
            </div>
        </>
    )
}

export default Header;