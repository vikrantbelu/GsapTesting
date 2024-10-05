'use client'

import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './picture.module.scss';
import { opacity } from '../../headeranim';
import links from '../../nav';

export default function Picture({src, selectedLink}) {
  return (
    <motion.div variants={opacity} initial="initial" animate={selectedLink.isActive ? "open" : "closed"} className={styles.imageContainer}>
      {/* {links.map((link)=>{
        return (
          <Image
          src={link.src}
          fill={true}
          alt="image"
          />
        )
      })} */}
        {/* <Image 
        src={`${src}`}
        fill={true}
        alt="image"
        /> */}
    </motion.div>
  )
}