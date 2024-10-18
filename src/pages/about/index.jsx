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
    const biographyText1 = "Born in 1991, Vikrant ...";
    const biographyText2 = "Immersionism: A Deep Dive ...";
    const biographyText3 = "Art is peace ...";

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
    </Layout>
  );
}
