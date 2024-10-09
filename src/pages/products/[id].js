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
    <Layout>
      {/* div that acts as back button to return to current category */}
      <div
        className={styles.container}
        style={{ width: "100%", padding: "20px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <button
            //add animations

            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              height: "100%",
              width: " auto",
            }}
            onClick={() => window.history.back()}
          >
            {/* back button left arrow white color*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
            </svg>
          </button>

          {/* center title */}

          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
            className="title"
          >
            Back to {product.category}
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "top",
            width: "100%",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "inline",
              alignItems: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              style={{ width: "300px", height: "auto", marginRight: "20px" }}
            />
            <br></br>
            <br></br>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p>Like What you see? Contact us </p>
              <WhatsAppButton
                phoneNumber="+919157179157"
                const
                message={message + " checked at " + url}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "inherit",
              padding: "20px",

              height: "500px",

              justifyContent: "",
            }}
          >
            <div>
              <h1>{product.title}</h1>
              <br></br>
            </div>
            <u>
              <p>{product.category}</p>
            </u>
            {product.availableSizes && product.availableSizes.length > 0 ? (
              <p>Available Sizes: {product.availableSizes.join(", ")}</p>
            ) : (
              <p>No sizes available.</p>
            )}
            <div style={{ marginTop: "10px", textDexoration: "" }}>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params; // This can be either ID or slug

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?id=${id}`
  ); // Update API to fetch by ID
  const product = await res.json();

  return {
    props: { product },
  };
}

export default ProductPage;
