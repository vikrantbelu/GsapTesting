'use client';
import styles from './style.module.scss';
import Image from 'next/image';
import { useRef } from 'react'; 
import Link from "next/link"; // Import Link
export default function Double({ projects, reversed }) {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let requestAnimationFrameId = null;
  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;
  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    //Add easing to the animation
    const xPercentDelta = xPercent - currentXPercent;
    currentXPercent = currentXPercent + xPercentDelta * speed;

    //Change width of images between 33.33% and 66.66% based on cursor
    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;
    console.log(secondImagePercent);
    firstImage.current.style.width = `${firstImagePercent}%`;
    secondImage.current.style.width = `${secondImagePercent}%`;

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <div
      onMouseMove={manageMouseMove}
      className={`${styles.double} ${reversed ? styles.reversed : ""}`}
    >
      <div ref={firstImage} className={styles.imageContainer}>
        <Link href={`/products/${projects[0]._id}`}>
          {" "}
          {/* Link to individual product by ID */}
          <div className={styles.stretchyWrapper}>
            <Image
              src={projects[0].imageUrl}
              fill={true}
              alt={projects[0].name}
            />
          </div>
          <div className={styles.body}>
            <h3 style={{ fontWeight: "bold" }}>{projects[0].name}</h3>{" "}
            {/* Bold title */}
          </div>
        </Link>
      </div>

      <div ref={secondImage} className={styles.imageContainer}>
        <Link href={`/products/${projects[1]._id}`}>
          {" "}
          {/* Link to individual product by ID */}
          <div className={styles.stretchyWrapper}>
            <Image
              src={projects[1].imageUrl}
              fill={true}
              alt={projects[1].name}
            />
          </div>
          <div className={styles.body}>
            <h3 style={{ fontWeight: "bold" }}>{projects[1].name}</h3>{" "}
            {/* Bold title */}
          </div>
        </Link>
      </div>
    </div>
  );
}