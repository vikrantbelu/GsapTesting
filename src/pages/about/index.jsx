'use client';
import { useEffect } from 'react';
import styles from './about.module.css'
import Intro from '@/components/aboutcompo/Intro';
import Description from '@/components/aboutcompo/Description';
import Layout from '@/components/layout';


export default function Home() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
      <Layout>
        <main className={styles.main}>
          <Intro />
          <Description />
        </main>
      </Layout>
  )
}