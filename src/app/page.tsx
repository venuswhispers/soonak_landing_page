"use client"
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { IconCloudDemo } from "@/components/share/iconsCircle";
import Globe from "@/components/magicui/globe";
import Tokenomics from "@/components/main/tokenomics";
import { useTheme } from "next-themes";
import AOS from "aos";
import FAQ from "@/components/main/faq";
import Roadmap from "@/components/main/roadmap";

export default function Home() {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    AOS.init();
  }, []);

  // return (
  //   <main className="dark:bg-[#0C111E] pt-20">
  //     <div className="grid grid-cols-1 relative md:grid-cols-2 mx-5 lg:mx-20 md:mx-20 xl:mx-40 items-center">
  //       <div className="dark:text-white text-lg leading-6 lg:text-xl xl:text-2xl lg:leading-10">
  //         <h1 className="font-extrabold mb-5 text-3xl md:text-5xl">
  //           MEET RICHY SOONAK
  //         </h1>
  //         <p className="text-justify">
  //           At Richy Soonak, we’re not just another meme coin – we’re the Ministry of Silly Coins! Harnessing the whimsical power of Solana, we bring you a crypto experience so absurd, it should come with a laugh track. Our jolly good team of blockchain boffins will guide you through this madcap adventure, ensuring you navigate the meme coin carnival with the grace of a British bulldog in a bowler hat. Ready for a financial farce? Dive into the Richy Soonak revolution today – Richy wants to send people to Rwanda, we want to send Richy to the moon.
  //         </p>
  //       </div>
  //       <div className="relative flex justify-center">
  //         <Icon icon="arcticons:hauk" className="absolute right-0 dark:text-white w-[60px] lg:w-[100px] xl:w-[150px] h-auto" />
  //         <Image
  //           src='/logo-left.png'
  //           alt='asdf'
  //           sizes='100vw'
  //           height={0}
  //           width={0}
  //           className='rounded-full w-3/4 md:w-full lg:w-3/4 xl:w-2/3'
  //         />
  //       </div>
  //       {/* <div className="opacity-5 absolute w-[90%] top-0"><IconCloudDemo/></div> */}
  //     </div>
  //     {/* <Globe /> */}
  //     <div className="w-full flex justify-center"><Tokenomics/></div>

  //   </main>
  // );

  return (
    <main className="dark:bg-[#01095A] bg-[#9e9faa]">
      <div className="bg-[url('/back_light.jpg')] bg-[length:1000px] bg-no-repeat dark:bg-[url('/back_dark.jpg')] md:bg-cover w-full h-[600px] md:h-screen md:bg-left bg-main flex justify-end items-center">
        <div className="hidden md:block md:w-1/2 text-green-800 dark:text-white text-lg leading-6 lg:text-xl xl:text-2xl lg:leading-10 pr-20 !font-cat">
          <h1 className="mb-5 md:text-3xl lg:text-5xl">
            MEET RICHY SOONAK
          </h1>
          <p className="text-justify">
            At Richy Soonak, we’re not just another meme coin – we&apos;re the Ministry of Silly Coins! Harnessing the whimsical power of Solana, we bring you a crypto experience so absurd, it should come with a laugh track. Our jolly good team of blockchain boffins will guide you through this madcap adventure, ensuring you navigate the meme coin carnival with the grace of a British bulldog in a bowler hat. Ready for a financial farce? Dive into the Richy Soonak revolution today – Richy wants to send people to Rwanda, we want to send Richy to the moon.
          </p>
        </div>
      </div>
      <div className="mt-10 md:hidden dark:text-white text-lg leading-6 lg:text-xl xl:text-2xl lg:leading-10 px-5 !font-cat">
        <h1 className="mb-5 text-center text-3xl">
          MEET RICHY SOONAK
        </h1>
        <p
          className="text-justify"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          At Richy Soonak, we’re not just another meme coin – we&apos;re the Ministry of Silly Coins! Harnessing the whimsical power of Solana, we bring you a crypto experience so absurd, it should come with a laugh track. Our jolly good team of blockchain boffins will guide you through this madcap adventure, ensuring you navigate the meme coin carnival with the grace of a British bulldog in a bowler hat. Ready for a financial farce? Dive into the Richy Soonak revolution today – Richy wants to send people to Rwanda, we want to send Richy to the moon.
        </p>
      </div>
      <Tokenomics/>

      <Roadmap />

      {/* <div className="text-center mt-[300px]">
        <h1 className="text-white text-5xl">STAKING IS</h1>
        <h1 className="text-[#F69A3A] text-7xl mt-3 tracking-[20px]">COMING</h1>
        <h1 className="text-[#F69A3A] text-7xl mt-3 tracking-[20px]">SOON</h1>
      </div> */}

      <div 
        id="joinus" 
        className="!font-sans text-center w-full mt-[50px] md:mt-[200px]"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-once="true" 
      >
        <h2 className="text-2xl md:text-5xl text-yellow-300">Join Our Community</h2>
        <h3 className="!font-sans text-2xl font-bold dark:text-white text-white mt-10">
          Connect with fellow DeFi farmers and cultivate collective growth in a harmonious ecosystem.
        </h3>
        <div className="flex justify-center gap-5 !font-sans font-bold text-sm  sm:text-2xl mt-10">
          <a href="https://x.com/RichySoonak" target="_blank" className="bg-[#FBBE25] p-5 rounded-lg flex gap-2 items-center justify-center">
            Twitter&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon icon="akar-icons:twitter-fill" className="text-xl sm:text-4xl"/>
          </a>
          <a href="https://t.me/richysoonak" target="_blank" className="bg-[#FBBE25] p-5 rounded-lg flex gap-2 items-center justify-center">
            Telegram
            <Icon icon="teenyicons:telegram-outline" className="text-xl sm:text-4xl"/>
          </a>
        </div>
      </div>


      <div 
        id="howtobuy" 
        className="!font-sans text-center w-full mt-[50px] md:mt-[200px]"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <h2 className="text-2xl md:text-5xl text-yellow-300">How To Buy</h2>
        {/* <a href="https://www.youtube.com/watch?v=To6mgsB2VPo" target="_blank" className="!font-sans text-2xl font-bold dark:text-white text-white block mt-10 underline">
          Visit our Tutorial to buy $soonak
        </a> */}
        <div className="w-full px-5 relative p-1 py-10 brounded-2xl flex items-center justify-center">
          <Image 
            src={"/how.png"} 
            height={0}
            width={0}
            sizes="100vw"
            alt="how to buy"
            className="rounded-xl aspect-video w-full md:w-2/3 lg:w-1/2" 
          />
          <div className="flex justify-center items-center absolute aspect-[3/1] rounded-2xl bg-[#00000079] p-2 md:p-5">
            <a href="https://www.youtube.com/watch?v=To6mgsB2VPo" target="_blank" className="flex items-center justify-center">
              <Icon icon="fluent:play-12-regular" className="text-7xl text-white cursor-pointer opacity-60 hover:opacity-100"/>
            </a>
          </div>
        </div>
      </div>

      <div className="md:mt-[150px]">
        <FAQ/>
      </div>

      <div 
        className="grid grid-cols-1 md:grid-cols-2 w-full text-center justify-center px-2 md:px-10 lg:px-40 items-center mt-[50px] md:mt-[150px] gap-10"
      
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl text-yellow-200">Dashboard, Yield Strategy and Analytics</h1>
          <p className="!font-sans mt-10 font-bold text-2xl md:text-4xl text-white ">Our community is building an expansive decentralized trading platform for the future of finance. Join us!</p>
          <div className="flex gap-1 pt-2 justify-center md:justify-start">
            <a href="https://x.com/RichySoonak" target="_blank" className="bg-[#FBBE25] p-5 rounded-lg flex gap-2 items-center justify-center">
              <Icon icon="akar-icons:twitter-fill" className="text-xl sm:text-4xl"/>
            </a>
            <a href="https://discord.gg/Vp9mR8gP" target="_blank" className="bg-[#FBBE25] p-5 rounded-lg flex gap-2 items-center justify-center">
              <Icon icon="ri:discord-line" className="text-xl sm:text-4xl"/>
            </a>
            <a href="https://github.com/Richy-Soonak" target="_blank" className="bg-[#FBBE25] p-5 rounded-lg flex gap-2 items-center justify-center">
              <Icon icon="ri:github-fill" className="text-xl sm:text-4xl"/>
            </a>
          </div>
        </div>
        <div className="w-full pl-0 lg:pl-40 flex justify-center">
          <Image 
            src={'/earth.svg'}
            width={0}
            height={0}
            alt="a"
            sizes="100vw"
            className="w-2/3 md:w-full aspect-square"
          />
        </div>
      </div>
      <div className="text-center text-white mt-[50px] text-lg sm:text-2xl py-10">Copyright © 2023 CHOPSUI. All rights reserved</div>
    </main>
  );
}
