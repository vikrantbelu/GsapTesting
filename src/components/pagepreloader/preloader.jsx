// components/Preloader.js
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.preloader', {
      opacity: 1,
      duration: 0.5,
    })
    .to('.preloader', {
      opacity: 0,
      duration: 0.5,
      onComplete: () => setLoading(false),
    });
  }, []);

  return (
    loading && (
      <div className="preloader" style={styles.preloader}>
        Loading...
      </div>
    )
  );
};

const styles = {
  preloader: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
    zIndex: 9999,
  },
};

export default Preloader;