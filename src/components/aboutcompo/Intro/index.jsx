'use client';
import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Index() {

    const backgroundImage = useRef(null);
    const introImage = useRef(null);
    const homeHeader = useRef(null);

    useLayoutEffect(()=> {
        gsap.registerPlugin(ScrollTrigger);
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: homeHeader.current,
                scrub: true,
                start: "top top", 
                end: "bottom top",
            }
        })
        timeline
            .from(backgroundImage.current, { clipPath: `inset(15%)`, duration: 1 })
            .to(backgroundImage.current, { clipPath: `inset(0%)`, duration: 1 }, "<")
            .to(introImage.current, { height: "200px", duration: 1 }, 0);
    },[])

    return (
        <div ref={homeHeader} className={styles.homeHeader}>
            <div className={styles.backgroundImage} ref={backgroundImage}>
                <Image 
                    src={'/aboutpageimages/background.jpg'}
                    fill={true}
                    alt="background image"
                    priority={true}
                />
            </div>
            <div className={styles.intro}>
                    <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                        <Image
                            src={'/aboutpageimages/intro.jpg'}
                            alt="intro image"
                            fill={true} 
                            priority={true}
                        />
                    </div>
                    <h1 data-scroll data-scroll-speed="0.7">About me</h1>
            </div>
        </div>
    )
}