
import styles from './header.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './headeranim';
import Nav from './nav';
import Image from "next/image";
import WhatsAppButton from "./whatsapp";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.header}>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <div className={styles.bar}>
        <Link href="/">
          <img
            src="/logod.png"
            width={50}
            height={50}
            className={styles.logo}
            alt="i-fineart Logo"
          />
        </Link>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={opacity}
          animate={!isActive ? "open" : "closed"}
          className={styles.shopContainer}
        >
          <p className={styles.shop}>
            <WhatsAppButton
              phoneNumber="+919157179157"
              message="Hello, I am interested in your paintings! @i-fineart.com"
            />{" "}
            <Image
              src="/whatsapp-icon.svg" // Add an appropriate WhatsApp icon image in the public folder
              alt="WhatsApp"
              width={30}
              height={30}
            />
          </p>
        </motion.div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
