"use client";

import styles from "./about.module.css";
import Layout from "@/components/layout";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function About() {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const biographyRef = useRef(null);
  const titleRef = useRef(null);
  const secondBiographyRef = useRef(null);
  const secondImageRef = useRef(null);
  const stitleRef = useRef(null);
  const thirdBiographyRef = useRef(null);
  const thirdImageRef = useRef(null);
  const thirdtitleRef = useRef(null);

  useEffect(() => {
    // Set up biography texts
    const biographyText1 =
      "I was born in 1991 and I live in Bombay, where I establish my work as a trademark. I coined the term “Immersionism” to describe my style, which I see as a return to the significance of enigmatic beauty. My aesthetic arises from the dynamic of inner beauty. I often say, “My approach to painting has always been quite slow and methodical,” and I demonstrate my ability to complete my works quickly while maintaining remarkable dynamism. My ten-year conflict with realism inspires much of my creative output. I investigate the methods of old masters and apply them to my own in-depth introspective studies. When I first experimented with oil paint, I realized that working quickly—something I had to do because the paint dried slowly—could infuse my strokes with greater energy and dynamism. With this discovery, I combine my thorough understanding of opaque, spontaneous strokes on primed textures with the lightness and speed of oil painting, creating my unique brand of immersionism. Feel free to let me know if you’d like any more changes!";
    const biographyText2 =
      " Immersion is defined by the dictionary as being fully engaged in something. The artist has coined the term Immersionism to describe his style, which reflects his deep engagement with his work. This painting technique features planned textures accentuated by spontaneous, opaque strokes. For Vikrant, the motivation behind his art is more significant than the motifs themselves. Through his paintings, he strives to convey the emotions and experiences that resonate with him, regardless of their origins. His long-standing creative challenge with realism serves as the foundation of his artistic expression. This technique employs acrylic paint, which dries quickly and allows for free-flowing strokes on prepared textures. The result is a dynamic energy that embodies the essence of modern art. One of the most exquisite aspects of this artistic movement is its ability to showcase the richness of oil colors on canvas, revealing the depth and vibrancy of each hue. The most striking feature of this creative movement lies in its application of absorbed oil color to canvas, a hallmark of Vikrant's unique style. Through Immersionism, he invites viewers to experience art as a profound engagement with emotion and creativity. Feel free to let me know if you’d like any further adjustments!";
    const biographyText3 =
      "What is the most noble endeavor that mankind can pursue? Some argue for the study of plants or the design and engineering of unprecedented man-made structures. However, only one endeavor combines these disciplines to create something truly magical: Art. Art has the unique ability to transform the pain and suffering of our lives into beauty. This great beauty becomes a truth that resonates through the centuries, defying time and granting both the artist and their patron a form of immortality. And that, gentlemen, is why art stands as the noblest endeavor. Feel free to let me know if you’d like any further adjustments!";

    // Function to set up biography text
    const setupBiography = (text, ref) => {
      if (ref.current) {
        ref.current.innerHTML = "";
        text.split("\n").forEach((line) => {
          const lineDiv = document.createElement("div");
          lineDiv.innerText = line;
          lineDiv.style.opacity = "0";
          ref.current.appendChild(lineDiv);
        });
      }
    };

    setupBiography(biographyText1, biographyRef);
    setupBiography(biographyText2, secondBiographyRef);
    setupBiography(biographyText3, thirdBiographyRef);

    if (headingRef.current) {
      headingRef.current.innerHTML = "";
      headingRef.current.appendChild(document.createTextNode("About Me"));
    }

    // GSAP Timeline for first container animations
    const tl = gsap.timeline();
    gsap.set(secondImageRef.current, { autoAlpha: 0 });

    tl.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
      .to(secondImageRef.current, { autoAlpha: 1, duration: 0.5, delay: 0.5 })
      .fromTo(
        secondImageRef.current,
        { clipPath: "inset(0% 0% 100% 0%)", autoAlpha: 1 },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1 }
      )
      .to(titleRef.current, { opacity: 1, duration: 0.5 })
      .to(biographyRef.current.children, { opacity: 0, y: -20, duration: 0 })
      .fromTo(
        biographyRef.current.children,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, stagger: 0.3, duration: 0.7 }
      );

    // GSAP Timeline for second container animations
    const tll = gsap.timeline();
    gsap.set(imageRef.current, { autoAlpha: 0 });

    tll
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .to(imageRef.current, { autoAlpha: 1, duration: 0.5, delay: 0.5 })
      .fromTo(
        imageRef.current,
        { clipPath: "inset(0% 0% 100% 0%)", autoAlpha: 1 },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1 }
      )
      .to(stitleRef.current, { opacity: 1, duration: 0.5 })
      .to(secondBiographyRef.current.children, {
        opacity: 0,
        y: -20,
        duration: 0,
      })
      .fromTo(
        secondBiographyRef.current.children,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, stagger: 0.3, duration: 0.7 }
      );

    // GSAP Timeline for third container animations
    const tlll = gsap.timeline();
    gsap.set(imageRef.current, { autoAlpha: 0 });

    tlll
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .to(thirdImageRef.current, { autoAlpha: 1, duration: 0.5, delay: 0.5 })
      .fromTo(
        thirdImageRef.current,
        { clipPath: "inset(0% 0% 100% 0%)", autoAlpha: 1 },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1 }
      )
      .to(thirdtitleRef.current, { opacity: 1, duration: 0.5 })
      .to(thirdBiographyRef.current.children, {
        opacity: 0,
        y: -20,
        duration: 0,
      })
      .fromTo(
        thirdBiographyRef.current.children,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, stagger: 0.3, duration: 0.7 }
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Layout>
      <div className={styles.wrapper}>
          <div className={styles.heading}>
            <h1 ref={headingRef} className={styles.headingtitle}></h1>
          </div>
        <div className={styles.container}>
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
          <div className={styles.sgridContainer}>
            <div className={styles.sbiographyContainer}>
              <h2
                ref={stitleRef}
                style={{ paddingLeft: "160px", marginBottom: "40px" }}
              >
                What is Immersionism:
              </h2>
              <div
                ref={secondBiographyRef}
                style={{
                  whiteSpace: "pre-wrap",
                  textAlign: "justify",
                  fontSize: "1.3rem",
                  paddingLeft: "160px",
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
        <div className={styles.tcontainer}>
          <div className={styles.tgridContainer}>
            <div className={styles.tbiographyContainer}>
              <h2 ref={thirdtitleRef} style={{ marginBottom: "20px" }}>
                Art
              </h2>
              <div className={styles.timageContainer}>
                <Image
                  ref={thirdImageRef}
                  src="/abart.jpeg"
                  alt="Third Biography"
                  width={1200}
                  height={750}
                />
              </div>
              <div
                ref={thirdBiographyRef}
                style={{
                  whiteSpace: "pre-wrap",
                  textAlign: "justify",
                  fontSize: "1.3rem",
                  marginTop: "50px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
