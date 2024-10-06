import Layout from '@/components/layout'
import styles from '../../styles/collection.module.css'
import { gsap } from "gsap"
import Link from 'next/link'
import react from "react";
const collections = [
  {
    title: "Immersionism",
  },
  {
    title: "Sketches",
  },
  {
    title: "Charcoal Sketches",
  },
  {
    title: "Commission Works",
  },
];

export default function Collection({ products, categories }) {
  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {
      top: "-2vw",
      backgroundColor: collections[index].color,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "white",
      duration: 0.3,
      delay: 0.1,
    });
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.collectionContainer}>
          <p className={styles.heading}>Collections:</p>
          {collections.map((collection, index) => {
            return (
              <Link href={`/categories/${collection.title}`}  className={styles.linkz} >
                <div
                  className={styles.collection}
                  onMouseEnter={(e) => {
                    manageMouseEnter(e, index);
                  }}
                  onMouseLeave={(e) => {
                    manageMouseLeave(e, index);
                  }}
                  key={index}
                >
                  <p>{collection.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* <div>
        <h1>Products</h1>
        {products.map((product) => (
          <div key={product._id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Available Sizes: {product.availableSizes.join(", ")}</p>
            <img
              src={product.imageUrl}
              alt={product.title}
              style={{ width: "200px" }}
            />
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div> */}
      {/* <div>
        <h1>Categories</h1>
        {categories.map((category) => (
          <Link key={category} href={`/categories/${category}`}>
            <p style={{ display: "block", margin: "10px 0" }}>{category}</p>
          </Link>
        ))}
      </div> */}
    </Layout>
  );
}
export async function getStaticProps() {
  const categories = ["Art", "Photography", "Design"]; // Replace with actual categories from your database
  return {
    props: { categories },
  };
}


