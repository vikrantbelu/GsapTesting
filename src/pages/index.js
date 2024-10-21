import Layout from "@/components/layout";
import styles from "./Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="Home">
      <div
        style={{
          width: "100%",
        }}
      >
        <main className={styles.main}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              {/* <video autoPlay muted loop className="full-screen-video">
                <source src="/bg.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video> */}
              <h1>Art that Speaks</h1>
              <p>“Every canvas is a journey all its own.”</p>

              <Link className={styles.ctaButton} href="/collection">
                Explore Collection
              </Link>
            </div>
          </section>

          {/* Featured Works Section */}

          {/* About the Artist Section */}
          {/* <section className={styles.aboutArtist}>
            <h2>About the Artist</h2>
            <p>
              A brief bio about the artist goes here. Highlight their style,
              inspiration, and journey.
            </p>
            <img
              src="https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Artist"
              className={styles.artistImage}
            />
          </section> */}

          {/* Testimonials Section */}
          {/* <section className={styles.testimonials}>
            <h2>What People Are Saying</h2>
            <blockquote>
              “Stunning work! Each piece tells a story.” - Art Critic
            </blockquote>
            <blockquote>
              “A true talent! I can't wait to see more.” - Art Collector
            </blockquote>
          </section> */}

          {/* Newsletter Signup Section */}
          {/* <section className={styles.newsletter}>
            <h2>Stay Updated</h2>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </section> */}
        </main>
      </div>
    </Layout>
  );
}
