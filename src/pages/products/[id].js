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
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => window.history.back()}
        >
          {/* Back button icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
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
