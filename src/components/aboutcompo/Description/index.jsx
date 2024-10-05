import React, { useLayoutEffect, useRef } from 'react'
import styles from './style.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default function Description() {
    const phrases = ["Los Flamencos National Reserve", "is a nature reserve located", "in the commune of San Pedro de Atacama", "The reserve covers a total area", "of 740 square kilometres (290 sq mi)"]

    return (
        <div className={styles.description}>
            {
                phrases.map((phrase, index) => {
                    return <AnimatedText key={index}>{phrase}</AnimatedText>
                } )
            }
        </div>
    )
}

function AnimatedText({ children }) {

    const text = useRef(null);

    useLayoutEffect(()=> {
        gsap.registerPlugin(ScrollTrigger);
        gsap.set(text.current, { opacity: 0, left: "-200px" }); // Start slightly below and invisible
        const animation = gsap.to(text.current, {
            scrollTrigger: {
                trigger: text.current,
                start: "0px bottom", // Start when the top of the text hits the bottom of the viewport
                end: "bottom+=400px bottom", // End when the bottom of the text hits the top of the viewport
                scrub: true,
            },
            opacity: 1, // Animate to full opacity
            left: "0px", // Move to original position
            ease: "power3.out",
        });
        return () => {
            animation.scrollTrigger.kill(); // Clean up on unmount
        };
    },[])
    return(
        <p ref={text}>
            {children}
        </p>
    )
}