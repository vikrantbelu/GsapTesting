import React from "react";
import Link from "next/link";
import styles from "./ProductCard.module.css"; // Import your CSS module

const ProductCard = ({ product }) => {
  return (
    <div className={styles.cardContainer}>
      <Link href={`/products/${product._id}`} className={styles.card}>
        <div className={styles.cardContent}>
          <img
            src={product.imageUrl}
            alt={product.title}
            className={styles.cardImage}
          />
          <h2 className={styles.cardTitle}>{product.title}</h2>
          {/* <p className={styles.cardDescription}>{product.description}</p> */}
          <p className={styles.cardSizes}>
            Price (INR): {product.availableSizes.join(", ")}
          </p>
          {/* <p className={styles.cardCategory}>Category: {product.category}</p> */}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
