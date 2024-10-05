import Layout from '@/components/layout'
import styles from '../../styles/collection.module.css'
import { gsap } from "gsap"
import Link from 'next/link'

const collections = [
  {
    title: "Immersionism",
    
  },
  {
    title: "Sketches",
    
  },
  {
    title: "Charcoal Sketches",
    
  },
  {
    title: "Commission Works",
    
  }
]


export default function Collection() {
  
  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {top: "-2vw", backgroundColor: collections[index].color, duration: 0.3})
  }

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {top: "0", backgroundColor: "white", duration: 0.3, delay: 0.1})
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.collectionContainer}>
        <p className={styles.heading}>Collections:</p>
              {
                collections.map( (collection, index) => {
                  return <div onMouseEnter={(e) => {manageMouseEnter(e, index)}} onMouseLeave={(e) => {manageMouseLeave(e, index)}} key={index}>
                  <Link href={`/collection/${collection.title}`}>
                    <p>{collection.title}</p>
                  </Link>
                </div>
                })
              }
          </div>
      </div>
    </Layout>
  )
}
