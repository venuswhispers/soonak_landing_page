/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import YouTube from "react-youtube";
import { YOUTUBE_KEY } from "@/constants/config";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLmFN-F-XHywaXw3wKgRvdsLnwU3jgJUH_&maxResults=50&key=AIzaSyDcnP0nUKmPnTl7oPCOWqUr0q6fGq0_4rk';

type ITEM = {
    avatar: string,
    name: string,
    role: string,
    twitter: string,
    telegram: string,
    instagram: string,
    github: string
}

interface IProps {
    onPlay: (title: string, url: string) => void
}

const PlayList = ({ onPlay }: IProps) => {

    const [movies, setMovies] = React.useState<MOVIDE_ITME[]>([]);

    const initialize = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.items);
        // setMovies ()
    }

    console.log(movies)

    React.useEffect(() => {
        initialize();
    }, []);

    return (
        <section
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            id="videos"
            className="mt-40 mx-2 md:mx-20"
        >
            <div className="container">
                <div className="title">
                    <h2 className="md:text-5xl text-3xl text-center text-white">See Our Videos</h2>
                </div>
                <div className="w-[90%] md:w-[80%] mx-auto">
                    <Swiper
                        effect={'cards'}
                        slidesPerView={1}

                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        {
                            movies.map((_movie: MOVIDE_ITME) => (
                                <SwiperSlide key={_movie.snippet.resourceId.videoId + '1'}>
                                    <div className="w-full h-full relative">
                                        <Image
                                            src={_movie.snippet.thumbnails.maxres.url}
                                            alt='me'
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className='aspect-video w-full'
                                        />
                                        <div className="absolute left-0 top-0 w-full h-full p-5 text-black/60">
                                            <div className="bg-white/40 p-2 text-center rounded-lg text-sm md:text-xl lg:text-2xl">{_movie.snippet.title}</div>
                                        </div>
                                        <Icon onClick={() => onPlay(_movie.snippet.title, `https://www.youtube.com/watch?v=${_movie.snippet.resourceId.videoId}`)} icon="logos:youtube-icon" className="absolute left-1/2 top-1/2 text-5xl md:text-8xl -translate-x-1/2 -translate-y-1/2 hover:opacity-60 cursor-pointer" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        {
                            movies.length < 2 &&
                            movies.map((_movie: MOVIDE_ITME) => (
                                <SwiperSlide key={_movie.snippet.resourceId.videoId}>
                                    <div className="w-full h-full relative">
                                        <Image
                                            src={_movie.snippet.thumbnails.maxres.url}
                                            alt='me'
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className='aspect-video w-full'
                                        />
                                        <div className="absolute left-0 top-0 w-full h-full p-5 text-black/60">
                                            <div className="bg-white/40 p-2 text-center rounded-lg text-sm md:text-xl lg:text-2xl">{_movie.snippet.title}</div>
                                        </div>
                                        <Icon onClick={() => onPlay(`https://www.youtube.com/watch?v=${_movie.snippet.resourceId.videoId}`, _movie.snippet.title)} icon="logos:youtube-icon" className="absolute left-1/2 top-1/2 text-5xl md:text-8xl -translate-x-1/2 -translate-y-1/2 hover:opacity-60 cursor-pointer" />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default PlayList;
