"use client";

import styles from "./about.module.css";
import Layout from "@/components/layout";
import { useEffect ,useRef } from "react";
import Image from "next/image";

export default function About() {

    return (
        <Layout>
            <p>I was born in 1991 and I live in Bombay, where I establish my work as a trademark. I coined the term “Immersionism” to describe my style, which I see as a return to the significance of enigmatic beauty. My aesthetic arises from the dynamic of inner beauty. I often say, “My approach to painting has always been quite slow and methodical,” and I demonstrate my ability to complete my works quickly while maintaining remarkable dynamism. My ten-year conflict with realism inspires much of my creative output. I investigate the methods of old masters and apply them to my own in-depth introspective studies. When I first experimented with oil paint, I realized that working quickly—something I had to do because the paint dried slowly—could infuse my strokes with greater energy and dynamism. With this discovery, I combine my thorough understanding of opaque, spontaneous strokes on primed textures with the lightness and speed of oil painting, creating my unique brand of immersionism. Feel free to let me know if you’d like any more changes!</p>
        </Layout>
    );
}
