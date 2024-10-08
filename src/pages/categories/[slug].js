import React from "react";
import Double from "../../components/Double"; // Adjust the path as needed
import Layout from "@/components/layout";
import { height } from "@/components/Header/headeranim";
import { Link } from "react-router-dom";

const CategoryPage = ({ products, slug }, suppressHydrationWarning) => {
  return (
    <Layout>
      <div>
        <br></br>
        <h2>
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
          {""}
          Back to All Categories
        </h2>
        {/* div that has bottom border and text  */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            borderBottom: "1px solid black",
          }}
        >
          <h1>{slug}</h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: "20px",
          }}
        >
          {/* <Link href={`/products/${product._id}`}> */}
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product._id}>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href={`/products/${product._id}`}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    style={{ width: "200px" }}
                  />
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>Available Sizes: {product.availableSizes.join(", ")}</p>
                  <p>Category: {product.category}</p>
                </a>
              </div>
            ))
          ) : (
            <p>No products available.</p>
          )}
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
