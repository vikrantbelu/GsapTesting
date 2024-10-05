import Double from "@/components/double";
import Layout from "@/components/layout";
import styles from "@/styles/collectioncategorypage.module.scss"
import { projects } from "@/collectioncategorydata";

const CollectionCategoryPage = () => {
    return (
        <Layout>
            <main className={styles.main}>
                <h1>Immersionism: </h1>
                    <div className={styles.gallery}>
                        <Double projects={[projects[0], projects[1]]}/>
                        <Double projects={[projects[2], projects[3]]} reversed={true}/>
                        <Double projects={[projects[4], projects[5]]}/>
                        <Double projects={[projects[6], projects[7]]} reversed={true}/>
                    </div>
                </main>
        </Layout>
    );
};

export default CollectionCategoryPage;