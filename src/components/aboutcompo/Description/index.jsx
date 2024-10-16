import React, { useLayoutEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

const phrases = [`Biography:
Born in 1991, Vikrant is a Bombay resident and worker as a trademark for his work. He created the phrase “Immersionism.” this style according to Vikrant, is a return to the importance of enigmas beauty. His own aesthetic arising from the inner beauty’s dynamic. “My approach to painting has always been quite slow and methodical.” He said simply, demonstrating is ability to complete one of his works quickly and with amazing dynamic. 
His ten-year old conflict with realism served as the inspiration for much of his creativity output. He investigated the old master’s method and applied them to his own in depth introspective study.
When he initially whacked with oil paint, he realised that working quickly something he was obliged to do since the paint was drying slowly could give his stroke greater energy and, consequently, more dynamism with discovery of oil, he was able to combine his thorough understanding of the opaque, spontaneous strokes of primed textures with the “light” and quick method of oil painting to create his own unique brand of immersionism.

Definition:
Immersion is defined by the dictionary as being fully engaged in something. Because the painting depicts the artist’s in depth reflections as he immerses himself in the work, this style has termed as Immersionism by the artist. The planned texture is accentuated with spontaneous, opaque strokes. 
For him the motivation behind anything is more important than the motifs itself. Through his painting, he attempts to convey the things that affect his regardless of the cause. A long standing creative challenge with realism is painting form the foundation of Vikrant’s creative ability. This paining technique uses acrylic paint that dries quickly and opaque, free-flowing strokes with prepared texture. It also demonstrates energy which is the cornerstone of modern fashion. The most exquisite aspect of this artistic movement is that it provides a closer look at the oil colours on canvas. That’s how he created this artistic movement style.
This creative movements is the most striking feature is the way it applies absorbed oil color to canvas, which is how the artist formed this particular style.

Art:
What is most noble endeavour mankind can pressure? Others have made the case for the study of plants, the design and engineering of man-made structures, the kind of which the world has never seen before. But only one can endeavour combines these disciplines to make something magical. Only Art can take the pain and suffering of our lives and turn it into beauty. Great beauty is a truth that echoes through the centuries defying time. Giving the artist and his patron a kind of immortality. And that, gentleman in why art is the noblest endeavour`]

export default function Description() {

  return (
    <div className={styles.description} >
        {
            phrases.map( (phrase, index) => {
                return <AnimatedText key={index}>{phrase}</AnimatedText>
            })
        }
    </div>
  )
}

function AnimatedText({children}) {
    const text = useRef(null);
    useLayoutEffect(()=> {
        gsap.registerPlugin(ScrollTrigger);
        gsap.set(text.current, { opacity: 0, left: "-200px" }); 
        const animation = gsap.to(text.current, {
            scrollTrigger: {
                trigger: text.current,
                start: "0px bottom", 
                end: "bottom+=400px bottom", 
                scrub: true,
            },
            opacity: 1, 
            left: "0px", 
            ease: "power3.out",
        });
        return () => {
            animation.scrollTrigger.kill(); 
        };
    },[])

    return(
        <p ref={text}>
            {children}
        </p>
    )
}