import Layout from "@/components/layout";
import React from "react";

const ProductPage = ({ product }) => {
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <Layout>
      {/* div that acts as back button to return to current category */}
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
          // justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <img
          src={product.imageUrl}
          alt={product.title}
          style={{ width: "300px", height: "auto", marginRight: "20px" }}
        />
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          {product.availableSizes && product.availableSizes.length > 0 ? (
            <p>Available Sizes: {product.availableSizes.join(", ")}</p>
          ) : (
            <p>No sizes available.</p>
          )}
          <p>Category: {product.category}</p>
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
