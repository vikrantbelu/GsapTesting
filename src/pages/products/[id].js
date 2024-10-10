import WhatsAppButton from "@/components/Header/whatsapp";
import Layout from "@/components/layout";
import React from "react";
import styles from "./products.module.css";

const ProductPage = ({ product }) => {
  if (!product) {
    return <p>Product not found.</p>;
  }

  const message = `Hello, I am interested in your painting - ${product.title}`;
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}products/${product._id}`;

  return (
    <Layout title={product.title}>
      <div className={styles.container}>
        <div className={styles.header}>
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
            Back to {product.category}
          </button>
        </div>
        <br></br>
        <div className={styles.productList}>
          <div className={styles.productImageContainer}>
            <img
              src={product.imageUrl}
              alt={product.title}
              className={styles.productImage}
            />
            <div className={styles.contactContainer}>
              <p>Like what you see? Contact us:</p>
              <WhatsAppButton
                phoneNumber="+919157179157"
                message={`${message} checked at ${url}`}
              />
            </div>
          </div>

          <div className={styles.productDetails}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            {/* <u>
              <p className={styles.productCategory}>{product.category}</p>
            </u> */}
            {product.availableSizes && product.availableSizes.length > 0 ? (
              <code>Available Sizes: {product.availableSizes.join(", ")}</code>
            ) : (
              <p>No sizes available.</p>
            )}
            <div className={styles.productDescription}>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?id=${id}`
  );
  const product = await res.json();

  return {
    props: { product },
  };
}

export default ProductPage;
