
import styles from './header.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './headeranim';
import Nav from './nav';

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={styles.header}>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background}></motion.div>
            <div className={styles.bar}>
                <Link href="/">Vikrant</Link>
                <div onClick={()=> {setIsActive(!isActive)}} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive: ""}`}></div>
                    <div className={styles.label}>
                    <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                    <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </div>
                <motion.div variants={opacity} animate={!isActive ? "open" : "closed"} className={styles.shopContainer}>
                    <p className={styles.shop}>WhatsappBTN</p>
                </motion.div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Nav/>}
            </AnimatePresence>
        </div>
    )
}
