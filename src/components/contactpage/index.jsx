import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './style.module.css'

const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

export default function ContactPage() {
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
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //     const { name, value } = e.target
  //     setFormData(prevState => ({ ...prevState, [name]: value }))
  //   }

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault()
  //     console.log('Form submitted:', formData)
  //     // Here you would typically send the form data to your backend
  //   }

  return (
    <div className={styles.bentoGrid}>
      <div className={styles.mapLocation}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30127.001558584205!2d72.77240997137568!3d19.287792895476095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b23d86e4a857%3A0xa86276883ec5600f!2sDongri%2C%20Uttan%2C%20Mira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1728665338061!5m2!1sen!2sin"
          width="1040"
          height="600"
          style={{ border: 0, borderRadius: "15px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      {/* <form className={styles.contactForm}>
        <h2>Get in Touch with us</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          required
        />
        <textarea
          className={styles.message}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form> */}
      <form onSubmit={handleSubmit} className={styles.contactForm}>
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
          width="100%"
          height="250px"
          resize="none"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <div className={styles.phoneNumber}>
        <h3>Connect With Us</h3>
        <p>+91 91571 79157</p>
        <p>
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          <a href="mailto:contact@i-fineart.com">contact@i-fineart.com</a>
        </p>
      </div>
      {/* <div className={styles.socialIcons}>
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/placeholder.svg?height=24&width=24"
            alt="Facebook"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/placeholder.svg?height=24&width=24"
            alt="Twitter"
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/placeholder.svg?height=24&width=24"
            alt="Instagram"
            width={24}
            height={24}
          />
        </Link>
      </div> */}
    </div>
  );
}