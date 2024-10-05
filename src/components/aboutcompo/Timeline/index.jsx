import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const projects = [
    {
        title: "Dubai",
        src: "dubai.jpg"
    },
    {
        title: "Miami",
        src: "miami.jpg"
    },
    {
        title: "San Francisco",
        src: "sanfrancisco.jpg"
    },
    {
        title: "New York",
        src: "usa.jpg"
    }, 
]

export default function Index() {

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(imageContainer.current, { height: "100vh" }); // Set height if necessary

        const pinTrigger = ScrollTrigger.create({
            trigger: imageContainer.current,
            pin: true,
            start: "-=100px", // Adjust as necessary
            end: document.body.offsetHeight - window.innerHeight - 50,

            // markers: true, // Keep for debugging; remove in production
        });

        return () => {
            pinTrigger.kill(); // Clean up on unmount
        };
    }, []);

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/aboutpageimages/${projects[selectedProject].src}`}
                        fill={true}
                        alt="project image"
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
                </div>
                <div className={styles.column}>
                    <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map( (project, index) => {
                        return <div key={index} onMouseOver={() => {setSelectedProject(index)}} className={styles.projectEl}>
                            <h2>{project.title}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
