import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './style.module.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

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
      <div className={styles.contactImage}>
        <Image
          src="/art/IMG_9680.jpeg"
          alt="Contact Us"
          width={400}
          height={300}
          layout="responsive"
        />
      </div>
      {/* 
      <form className={styles.contactForm}>
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
          name="message"
          placeholder="Your Message"
          value={formData.message}
          
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form> */}
      <div className={styles.mapLocation}>
        <Image
          src="/placeholder.svg?height=300&width=400"
          alt="Map Location"
          width={400}
          height={300}
          layout="responsive"
        />
      </div>
      <div className={styles.phoneNumber}>
        <h3>Call Us</h3>
        <p>+1 (123) 456-7890</p>
      </div>
      <div className={styles.socialIcons}>
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
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/placeholder.svg?height=24&width=24"
            alt="LinkedIn"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  );
}