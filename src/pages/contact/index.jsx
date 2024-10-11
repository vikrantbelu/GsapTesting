// src/pages/contact.js


import { useState } from "react";
import styles from "./Contact.module.scss"; // Create this file for your styles
import Layout from "@/components/layout";
import ContactPage from "@/components/contactpage";

const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
const Contact = () => {
 const [formData, setFormData] = useState({
   name: "",
   email: "",
   message: "",
 });
 const [successMessage, setSuccessMessage] = useState("");
 const [errorMessage, setErrorMessage] = useState("");


 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
 };
 const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
 const handleSubmit = async (event) => {
   event.preventDefault();


   const response = await fetch("https://api.web3forms.com/submit", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       Accept: "application/json",
     },
     body: JSON.stringify({
       ...formData,
       access_key: accessKey, // Access key as a string
     }),
   });


   const result = await response.json();


   if (result.success) {
     setSuccessMessage(
       "Thank you for contacting us! We'll get back to you soon."
     );
     setErrorMessage("");
     setFormData({ name: "", email: "", message: "" }); // Reset form
   } else {
     setErrorMessage(
       "There was an error sending your message. Please try again."
     );
     setSuccessMessage("");
   }
 };


 return (
   <Layout>
     <div className={styles.contactContainer}>
       <h1 className={styles.head}>Contact Us</h1>
       {/* <form onSubmit={handleSubmit} className={styles.contactForm}>
         <input
           type="text"
           name="name"
           placeholder="Your Name"
           value={formData.name}
           onChange={handleChange}
           required
         />
         <input
           type="email"
           name="email"
           placeholder="Your Email"
           value={formData.email}
           onChange={handleChange}
           required
         />
         <textarea
           name="message"
           placeholder="Your Message"
           value={formData.message}
           onChange={handleChange}
           required
         ></textarea>
         <button type="submit">Send Message</button>
       </form>
       {successMessage && <p className={styles.success}>{successMessage}</p>}
       {errorMessage && <p className={styles.error}>{errorMessage}</p>} */}


       {/* SVG Decoration */}
       {/* <svg
       className={styles.svgDecoration}
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 100 100"
       >
       <circle cx="50" cy="50" r="40" fill="#ff6347" opacity="0.5" />
       <path
       d="M10,10 C40,40 60,40 90,10"
       stroke="#ff6347"
       strokeWidth="2"
       fill="none"
       />
       <path
       d="M10,90 C40,60 60,60 90,90"
       stroke="#ff6347"
       strokeWidth="2"
       fill="none"
       />
       </svg> */}
     </div>
     <ContactPage/>
   </Layout>
 );
};


export default Contact;
