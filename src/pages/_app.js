import "@/styles/globals.css";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import Preloader from "@/components/pagepreloader/preloader";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
// import localFont from "next/font/local";



const inter = Inter({ subsets: ["latin"] });

// const myFont = localFont({
//   src: "./fonts/heading.otf",
//   variable: "--font-heading",
// });


export default function App({ Component, pageProps }) {
  
  const router = useRouter();
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const handleStart = () => setLoading(true); // Start loading
    const handleComplete = () => setLoading(false); // Complete loading

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    // Cleanup event listeners on unmount
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events]);

  return (
    <>
      {loading && <Preloader />} {/* Show preloader when loading */}
      <AnimatePresence mode="wait">
        <motion.div key={router.pathname}>
          <PageTransition>
            <style jsx global>{`
              html {
                font-family: ${inter.style.fontFamily};
              }
            `}</style>
            <Component {...pageProps} />
          </PageTransition>
        </motion.div>
      </AnimatePresence>
    </>
  );
}