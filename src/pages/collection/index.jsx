import Layout from "@/components/layout";
import styles from "../../styles/collection.module.css";
import { gsap } from "gsap";
import Link from "next/link";
import React, { useEffect, useState } from "react";


export default function Collection() {
 const [categories, setCategories] = useState([]); // State to hold categories


 useEffect(() => {
   const fetchCategories = async () => {
     try {
       const response = await fetch("/api/categories"); // Fetch categories from the API
       if (!response.ok) throw new Error("Failed to fetch categories");
       const data = await response.json();


       console.log("Fetched categories:", data); // Log fetched categories for debugging


       setCategories(data); // Set the fetched categories
     } catch (error) {
       console.error("Error fetching categories:", error);
     }
   };


   fetchCategories();
 }, []);


 const manageMouseEnter = (e, index) => {
   gsap.to(e.target, {
     top: "-2vw",
     color: "black",
     backgroundColor: "black", // Adjust color as needed
     duration: 0.3,
   });
 };

 const manageMouseLeave = (e) => {
   gsap.to(e.target, {
     top: "0",
     color: "black",
     backgroundColor: "transparent",
     duration: 0.3,
     delay: 0.1,
   });
 };


 return (
   <Layout title="Collections">
     <div className={styles.container}>
       <div className={styles.collectionContainer}>
         <p className={styles.heading}>Collections:</p>
         {categories.map((category) => (
           <Link
             href={`/categories/${category.name}`} // Use category name for routing
             key={category._id} // Use unique ID as key
             className={styles.linkz}
           >
             <div
               className={styles.collection}
               onMouseEnter={(e) => manageMouseEnter(e, category._id)}
               onMouseLeave={manageMouseLeave}
             >
               <p>{category.name}</p> {/* Displaying category name */}
             </div>
           </Link>
         ))}
       </div>
     </div>
   </Layout>
 );
}
