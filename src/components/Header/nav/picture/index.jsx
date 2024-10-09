'use client'

import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './picture.module.scss';
import { opacity } from '../../headeranim';
import links from '../../nav';

export default function Index({src, selectedLink}) {
  return (
    <motion.div variants={opacity} initial="initial" animate={selectedLink ? "open" : "closed"} className={styles.imageContainer}>
        <Image 
        src={`/aboutpageimages/${src}`}
        fill={true}
        alt="image"
        />
    </motion.div>
  )
}