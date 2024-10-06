'use client'

import Layout from "@/components/layout";
import styles from "../../styles/about.module.css";
import { useEffect } from "react";
import Intro from "@/components/aboutcompo/Intro";
import Description from "@/components/aboutcompo/Description";
import Timeline from "@/components/aboutcompo/Timeline";

export default function About() {
  useEffect(()=>{
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()

  },[])

  return (
    <Layout>
      <main className={styles.main}>
        <Intro />
        <Description />
        <Timeline />
      </main>
    </Layout>
  );
}
