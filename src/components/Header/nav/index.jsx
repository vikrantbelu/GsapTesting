
import styles from './nav.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../headeranim';
import Body from './Body';
import Picture from './picture';


const links = [
  {
    title: "Home",
    href: "/",
    src: "intro.jpg",
  },
  {
    title: "Collections",
    href: "/collection",
    src: "dubai.jpg",
  },
  {
    title: "About",
    href: "/about",
    src: "",
  },
  {
    title: "Contact",
    href: "/contact",
    src: "",
  },
];

export default function Nav() {
    const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});
    return (
        <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
        <div className={styles.wrapper}>
            <div className={styles.container}>
            <Body className={styles.navHeads} links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
            {/* <Footer /> */}
            </div>
            <Picture src={links[selectedLink.index].src} selectedLink={selectedLink}/>
        </div>
        </motion.div>
    )
}
