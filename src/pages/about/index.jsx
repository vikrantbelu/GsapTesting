'use client';

import styles from './about.module.css';
import Layout from '@/components/layout';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function About() {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const biographyRef = useRef(null);
  const titleRef = useRef(null);
  const secondBiographyRef = useRef(null); // Reference for the second biography
  const secondImageRef = useRef(null); // Reference for the second image

  useEffect(() => {
    const biographyText1 = `
Born in 1991, Vikrant is a resident of Bombay and works as a trademark for his art. He coined the term “Immersionism,” which he describes as a return to the significance of enigmatic beauty. His aesthetic arises from the dynamic nature of inner beauty.
  
“My approach to painting has always been quite slow and methodical,” he states, demonstrating his ability to complete one of his works quickly while maintaining an impressive dynamism. His decade-long conflict with realism has inspired much of his creative output.Vikrant explored the methods of old masters and applied them to his own in-depth introspective study.
  
When he first experimented with oil paint, he realized that working quickly, something he felt compelled to do due to the slow drying time, could infuse his strokes with greater energy and dynamism. With the discovery of oil, he combined his thorough understanding of opaque, spontaneous strokes on primed textures with the light and quick techniques of oil painting, ultimately creating his unique brand of Immersionism.

    `; 
    const biographyText2 = `
Immersionism: A Deep Dive into Artistic Engagement
Immersion is defined by the dictionary as being fully engaged in something. This concept resonates deeply with Vikrant's work, as his paintings reflect his in-depth reflections while he immerses himself in the creative process. This unique style has been aptly termed "Immersionism" by the artist.

The Essence of Immersionism
In Vikrant's approach, planned textures are accentuated with spontaneous, opaque strokes. For him, the motivation behind any artwork is more significant than the motifs themselves. Through his paintings, he seeks to convey emotions and experiences that impact him, regardless of their origin.

A Creative Challenge with Realism
A long-standing creative challenge with realism serves as the foundation of Vikrant’s artistic ability. His technique employs acrylic paint, which dries quickly and allows for free-flowing strokes on prepared textures. This method not only demonstrates energy but also embodies the essence of modern artistic expression.

The Beauty of Oil Colors
One of the most exquisite aspects of this artistic movement is its ability to provide a closer look at oil colors on canvas. Vikrant's innovative approach to applying absorbed oil color to canvas is what distinguishes this style and sets it apart in the contemporary art scene.

Immersionism represents a striking fusion of technique and emotional depth, showcasing Vikrant's unique perspective on art and creativity.
    `; // Second biography text

    if (headingRef.current) {
      headingRef.current.innerHTML = '';
      headingRef.current.appendChild(document.createTextNode("About Me"));
    }

    // Function to set up biography text
    const setupBiography = (text, ref) => {
      if (ref.current) {
        ref.current.innerHTML = '';
        const lines = text.split('\n');
        lines.forEach(line => {
          const lineDiv = document.createElement('div');
          lineDiv.innerText = line;
          lineDiv.style.opacity = '0';
          ref.current.appendChild(lineDiv);
        });
      }
    };

    setupBiography(biographyText1, biographyRef);
    setupBiography(biographyText2, secondBiographyRef);

    const tl = gsap.timeline();

    gsap.set(imageRef.current, { autoAlpha: 0 });
    gsap.set(secondImageRef.current, { autoAlpha: 0 });

    // First container animations
    tl.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 })
      .to(imageRef.current, { autoAlpha: 1, duration: 0.5, delay: 0.5 })
      .fromTo(imageRef.current, { clipPath: "inset(0% 0% 100% 0%)", autoAlpha: 1 }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1 })
      .to(titleRef.current, { opacity: 1, duration: 0.5 })
      .to(biographyRef.current.children, { opacity: 0, y: -20, duration: 0 })
      .fromTo(biographyRef.current.children, { opacity: 0, x: -50 }, { opacity: 1, x: 0, stagger: 0.3, duration: 0.7 });

    // Second container animations (triggered on scroll)
    window.addEventListener('scroll', () => {
      if (secondBiographyRef.current && secondImageRef.current) {
        const rect = secondBiographyRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          gsap.to(secondImageRef.current, { autoAlpha: 1 });
          gsap.fromTo(secondBiographyRef.current.children,
            { opacity: 0 },
            { opacity: 1, stagger: 0.3 });
        }
      }
    });

    return () => {
      tl.kill();
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1 ref={headingRef} className={styles.headingtitle}></h1>
        </div>

        <div className={styles.gridContainer}>
          <div className={styles.imageContainer}>
            <Image
              ref={imageRef}
              src="/self.jpeg"
              alt="About Me"
              width={500}
              height={650}
            />
          </div>
          <div className={styles.biographyContainer}>
            <h2 ref={titleRef}>Biography:</h2>
            <div
              ref={biographyRef}
              style={{
                whiteSpace: "pre-wrap",
                textAlign: "justify",
                fontSize: "1.5rem",
                paddingRight: "20px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.scontainer}>
        {/* Second Biography Container */}
        <div className={styles.sgridContainer}>
          <div className={styles.sbiographyContainer}>
            <h2>What is Immersionism: </h2>

            <div
              ref={secondBiographyRef}
              style={{
                whiteSpace: "pre-wrap",
                textAlign: "justify",
                fontSize: "1.3rem",
                paddingLeft: "110px",
              }}
            ></div>
          </div>
          <div className={styles.simageContainer}>
            <Image
              ref={secondImageRef}
              src="/abimmer.jpeg"
              alt="Second Biography"
              width={700}
              height={750}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}