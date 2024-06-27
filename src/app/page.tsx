"use client"
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Tokenomics from "@/components/main/tokenomics";
import { useTheme } from "next-themes";
import AOS from "aos";
import ReactPlayer from "react-player";
import FAQ from "@/components/main/faq";
import Roadmap from "@/components/main/roadmap";
import Team from "@/components/main/team";
import PlayList from "@/components/main/playlist";


export default function Home() {
  const { theme, setTheme } = useTheme();
  const [showPlayer, setShowPlayer] = React.useState<boolean>(false);
  const [movie, setMovie] = React.useState<{ title: string, url: string }>({title: '', url: ''});

  const showMovie = (title: string, url: string) => {
    setMovie ({ title, url });
    setShowPlayer (true);
  }

  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="dark:bg-[#0d0a1cfa] bg-[#a35ed4d2]">
      <div className="bg-[url('/back_light.jpg')] bg-[length:1000px] bg-no-repeat dark:bg-[url('/back_dark.jpg')] md:bg-cover w-full h-[600px] md:h-screen md:bg-left bg-main flex justify-end items-center">
        <div className="hidden md:block md:w-1/2 text-green-800 dark:text-white text-2xl leading-6 lg:text-3xl xl:text-4xl lg:leading-10 pr-20">
          <h1 className="mb-5 md:text-4xl lg:text-6xl font-snow font-bold">
            MEET RICHY SOONAK
          </h1>
          <p className="text-justify font-rushda">
            At Richy Soonak, we&apos;re not just another meme coin – we&apos;re the Ministry of Silly Coins! Harnessing the whimsical power of Solana, we bring you a crypto experience so absurd, it should come with a laugh track. Our jolly good team of blockchain boffins will guide you through this madcap adventure, ensuring you navigate the meme coin carnival with the grace of a British bulldog in a bowler hat. Ready for a financial farce? Dive into the Richy Soonak revolution today – Richy wants to send people to Rwanda, we want to send Richy to the moon.
          </p>
        </div>
      </div>
      <div className="mt-10 md:hidden dark:text-white text-2xl leading-10 lg:text-3xl xl:text-4xl lg:leading-10 px-3">
        <h1 className="mb-5 text-center text-3xl md:text-4xl lg:text-6xl font-snow font-extrabold">
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
      <Tokenomics />
      <Roadmap />

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
            <span className="hidden md:inline">Twitter&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Icon icon="akar-icons:twitter-fill" className="text-xl sm:text-4xl" />
          </a>
          <a href="https://t.me/richysoonak" target="_blank" className="bg-[#FBBE25] p-5 rounded-lg flex gap-2 items-center justify-center">
            <span className="hidden md:inline">Telegram</span>
            <Icon icon="teenyicons:telegram-outline" className="text-xl sm:text-4xl" />
          </a>
          <a href="https://www.tiktok.com/@richysoonakcoin" target="_blank" className="bg-[#FBBE25] p-5 rounded-lg flex gap-2 items-center justify-center">
            <span className="hidden md:inline">Tiktok&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Icon icon="simple-icons:tiktok" className="text-xl sm:text-4xl" />
          </a>
        </div>
      </div>

      <Team/>


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
        <div className="w-full mt-20 min-h-[200px] px-5 relative rounded-2xl flex items-center justify-center">
          <Image
            src={"/how.png"}
            height={0}
            width={0}
            sizes="100vw"
            alt="how to buy"
            className="rounded-xl w-full md:w-2/3 lg:w-1/2 aspect-video"
          />
          <div className="flex justify-center items-center absolute w-2/3 md:w-1/2 lg:w-1/4 aspect-[3/1] rounded-2xl bg-[#00000079] px-[2.5%] py-[2.5%]">
            <Icon onClick={() => showMovie('How to Buy', 'https://www.youtube.com/watch?v=To6mgsB2VPo')} icon="fluent:play-12-regular" className="w-1/2 h-full text-white cursor-pointer opacity-60 hover:opacity-100" />
            <a href="https://www.youtube.com/watch?v=To6mgsB2VPo" target="_blank" className="w-1/2 h-full flex items-center justify-center">
              <Icon icon="humbleicons:external-link" className="w-1/2 h-full text-white cursor-pointer opacity-60 hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>

      {
        showPlayer &&
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
          <div onClick={() => setShowPlayer(false)} className="fixed top-0 left-0 right-0 bottom-0 bg-[#000000a2]"></div>
          <div className="flex justify-center w-full">
            <div className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
              <div className="absolute right-1 top-1 -z-1 w-[200px] h-20 rounded-2xl bg-[#ec4040]"></div>
              <div className="w-full flex flex-col rounded-2xl h-full clip bg-[#1F193E] px-6 pt-10 pb-2 rounded-tr-[55px] border-b border-white]">
                <ReactPlayer
                  controls
                  url={movie.url}
                  playing={true}
                  width='100%'
                  className="rounded-xl w-full aspect-video"
                />
                <h1 className="text-white text-[16px] mt-2">
                  {movie.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      }
      
      <PlayList onPlay={showMovie}/>

      <div className="">
        <FAQ />
      </div>
    </main>
  );
}


