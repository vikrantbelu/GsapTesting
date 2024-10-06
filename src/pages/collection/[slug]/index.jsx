import Double from "@/components/double";
import Layout from "@/components/layout";
import styles from "@/styles/collectioncategorypage.module.scss"
import { projects } from "@/collectioncategorydata";

const CollectionCategoryPage = ({ products, slug }) => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1>{slug} </h1>
        <div>
          <h1>Products in Category: {slug}</h1>
          {products.length > 0 ? (
            products.map((product) => (
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
            ))
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
        <div className={styles.gallery}>
          <Double projects={[projects[0], projects[1]]} />
          <Double projects={[projects[2], projects[3]]} reversed={true} />
          <Double projects={[projects[4], projects[5]]} />
          <Double projects={[projects[6], projects[7]]} reversed={true} />
        </div>
      </main>
    </Layout>
  );
};
export async function getServerSideProps({ params }) {
  const { slug } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?category=${slug}`
  );
  const products = await res.json();

  return {
    props: { products, slug },
  };
}
export default CollectionCategoryPage;