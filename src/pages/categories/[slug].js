import React from "react";
import Double from "../../components/Double"; // Adjust the path as needed
import Layout from "@/components/layout";

const CategoryPage = ({ products, slug }) => {
  return (
    <Layout>
      <div>
        <br></br>
        <h1>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "5px 10px",
              borderRadius: "40%",
              cursor: "pointer",
            }}
            onClick={() => window.history.back()}
          >
            {/* Back button icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="12"
              height="12"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
                fill="white"
              />
            </svg>
          </button>

          {slug}
        </h1>
        {products.length > 0 ? (
          <>
            {products.map((product, index) => {
              // Group products in pairs
              if (index % 2 === 0) {
                const pair = [product, products[index + 1]]; // Get the next product for pairing
                return (
                  <Double
                    key={index}
                    projects={pair}
                    reversed={index % 4 !== 0}
                  />
                );
              }
              return null; // Skip rendering for odd indexed items
            })}
          </>
        ) : (
          <p>No products found in this category.</p>
        )}
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
