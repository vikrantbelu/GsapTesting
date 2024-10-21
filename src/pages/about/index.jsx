"use client";

import styles from "./about.module.css";
import Layout from "@/components/layout";
// import { useEffect, useRef } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
export default function About() {
  //   return <Layout></Layout>;
  //   return <Layout></Layout>;

  return (
    <Layout title="About Me">
      <div className={styles.about}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h1>About Me</h1>
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.imageContainer}>
              <Image
                className={styles.img}
                src="/self.jpeg"
                alt="About Me"
                width={500}
                height={650}
              />
            </div>
           
            <div className={styles.biographyContainer}>
              <h2>Biography:</h2>
              <p>
              Hello! I&apos;m Vikrant, a passionate artist born in 1991 and currently thriving in the vibrant city of Mumbai (Bombay). My journey in the art world has led me to develop a unique artistic identity that I proudly call &ldquo;Immersionism.&ldquo; This term encapsulates my belief in the profound significance of enigmatic beauty, a concept that resonates deeply within my work.
              </p>
              <br />
              <h3>My Artistic Philosophy</h3>
              <p>
              Art is not just a profession for me; it&apos;s a way of life. I approach painting with a blend of meticulous thought and spontaneous energy. As I often express, &ldquo;My approach to painting has always been quite slow and methodical.&ldquo; This philosophy allows me to create pieces that are not only dynamic but also rich in depth and meaning. My decade-long exploration of realism has fueled my creative spirit, pushing me to delve into the techniques of old masters while infusing my own introspective insights.
              </p>
              <br />
              <h3>The Magic of Oil Painting</h3>
              <p>
              My first encounter with oil paint was transformative. I realized that the slow drying time, which initially felt like a challenge, actually presented an opportunity. By embracing a quicker application, I discovered how to infuse my strokes with vibrant energy and life. This revelation allowed me to merge my understanding of opaque, spontaneous strokes on primed textures with the fluidity and luminosity of oil painting. The result? A distinctive style that embodies Immersionism—an art form that invites viewers to experience beauty on a deeper level.
              </p>
              <h3>Let&apos;s Connect!</h3>
              <p>
              I am always eager to share my journey and collaborate with fellow art enthusiasts. Whether you&apos;re an art lover, collector, or someone simply curious about the world of creativity, I invite you to connect with me. Together, let&apos;s explore the enchanting realm of art and the stories it can tell!
                </p>
              <br />
            </div>
          </div>
        </div>
        <div className={styles.scontainer}>
          <h2 className={styles.sheading}>What is Immersionism:</h2>
          <br />
          {/* <br /> */}
          <div className={styles.sgridContainer}>
            <div className={styles.sbiographyContainer}>
              <p>
                <b>Immersionism: A Deep Dive into Artistic Engagement</b>
                <br />
                Immersion is defined by the dictionary as being fully engaged in
                something. This concept resonates deeply with Vikrant&apos;s
                work, as his paintings reflect his in-depth reflections while he
                immerses himself in the creative process. This unique style has
                been aptly termed &ldquo;Immersionism&ldquo; by the artist.
              </p>
              <br />
              <p>
                <b>The Essence of Immersionism</b>
                <br />
                In Vikrant&apos;s approach, planned textures are accentuated
                with spontaneous, opaque strokes. For him, the motivation behind
                any artwork is more significant than the motifs themselves.
                Through his paintings, he seeks to convey emotions and
                experiences that impact him, regardless of their origin.
              </p>
              <br />
              <p>
                <b>A Creative Challenge with Realism</b>
                <br />A long-standing creative challenge with realism serves as
                the foundation of Vikrant&apos;s artistic ability. His technique
                employs acrylic paint, which dries quickly and allows for
                free-flowing strokes on prepared textures. This method not only
                demonstrates energy but also embodies the essence of modern
                artistic expression.
              </p>
              <br />
              <p>
                <b>The Beauty of Oil Colors</b>
                <br />
                One of the most exquisite aspects of this artistic movement is
                its ability to provide a closer look at oil colors on canvas.
                Vikrant&apos;s innovative approach to applying absorbed oil
                color to canvas is what distinguishes this style and sets it
                apart in the contemporary art scene.
              </p>
              <br />
              <p>
                Immersionism represents a striking fusion of technique and
                emotional depth, showcasing Vikrant&apos;s unique perspective on
                art and creativity.
              </p>
            </div>
            <div className={styles.simageContainer}>
              <Link href="/categories/Immersionism" passHref>
                <Image
                  className={styles.secimage}
                  src="/abimmer.jpeg"
                  alt="Second Biography"
                  width={700}
                  height={750}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.tcontainer}>
          <div className={styles.tgridContainer}>
              <h2>Art</h2>
            <div className={styles.tbiographyContainer}>
              <div className={styles.timageContainer}>
                <Image
                  className={styles.timage}
                  src="/aboutpageimages/coll.jpg"
                  alt="Third Biography"
                  width={740}
                  height={640}
                />
              </div>
              <div className={styles.tcontent}>
                <p>
                  <b>The Noblest Endeavor of Mankind: The Power of Art</b>
                  <br />
                  What is the most noble endeavor mankind can pursue? Many have
                  argued for the study of plants, the design and engineering of
                  unprecedented man-made structures, and innovations that
                  reshape our world. However, only one endeavor combines these
                  disciplines to create something truly magical: Art.
                </p>
                <br />
                <p>
                  <b>Transforming Pain into Beauty</b>
                  <br />
                  Art has the unique ability to take the pain and suffering of
                  our lives and transform it into beauty. It serves as a
                  powerful medium through which emotions are expressed, stories
                  are told, and experiences are shared. Great beauty is a truth
                  that resonates through the centuries, defying the constraints
                  of time and space.
                </p>
                <br />
                <p>
                  <b>Immortality Through Creation</b>
                  <br />
                  This profound connection between art and humanity grants both
                  the artist and their patrons a form of immortality. Through
                  their creations, they leave a lasting legacy that continues to
                  inspire and evoke emotions long after they are gone <br />
                  In conclusion, gentlemen, this is why art stands as the
                  noblest endeavor of all. It transcends mere existence, weaving
                  together the threads of human experience into a tapestry of
                  beauty that enriches our lives and elevates our spirits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
