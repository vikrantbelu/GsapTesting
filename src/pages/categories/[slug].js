import React from "react";
import Double from "../../components/Double"; // Adjust the path as needed
import Layout from "@/components/layout";

const CategoryPage = ({ products, slug }) => {
  return (
    <Layout>
      <div>
        <br></br>
        <h1> {slug}</h1>
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
