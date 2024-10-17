import Head from "next/head";
import Header from "./Header";
import style from './layout.module.css';
import Footer from "./footer/Footer";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="i-fineart - fine art online store" />
        <meta property="og:title" content="i-fineart" />
        <meta
          property="og:description"
          content="i-fineart - fine art online store"
        />
        <title>i-fineart | {title}</title> {/* Use the title prop here */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  );
}
