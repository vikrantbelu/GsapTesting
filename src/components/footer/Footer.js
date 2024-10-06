// src/components/Footer.js

import Link from "next/link";
import styles from "./Footer.module.scss"; // Create this file for your styles

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.socialMedia}>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/socials/insta.svg" alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/socials/fb.svg" alt="Facebook" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/socials/yt.png" alt="Twitter" />
          </a>
        </div>

        <div className={styles.contactInfo}>
          <p>
            &copy; {new Date().getFullYear()} Vikrant Rudolf Belu. All Rights
            Reserved.
          </p>
          <p>Email: contact@i-finearts.com</p> {/* Replace with actual email */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
