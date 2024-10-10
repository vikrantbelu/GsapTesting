import React from "react";
import Double from "../../components/Double"; // Adjust the path as needed
import Layout from "@/components/layout";
import { height } from "@/components/Header/headeranim";
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./cat.module.css";
const CategoryPage = ({ products, slug }, suppressHydrationWarning) => {
  return (
    <Layout title={slug}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            <button
              className={styles.backButton}
              onClick={() => window.history.back()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="24px"
                height="24px"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.41z" />
              </svg>
              Back to All Categories
            </button>
          </h1>
        </div>
        <div className={styles.titleContainer}>
          <h1>{slug}</h1>
        </div>
        <div className={styles.productList}>
          <div className={styles.productCardContainer}>
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?category=${slug}`
  );

  if (!res.ok) {
    return {
      props: { products: [], slug }, // Return empty array if there's an error
    };
  }

  const products = await res.json();

  return {
    props: { products, slug },
  };
}

export default CategoryPage;
