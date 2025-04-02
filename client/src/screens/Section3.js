import React, { useEffect } from 'react';
import "../css/section3.css"
const Section3 = () => {
  const matchHeight = () => {
    const textBox = document.querySelector('.sect3-item1');
    const imageBox = document.querySelector('.sect3-item2');

    if (window.innerWidth > 768) {
      const textHeight = textBox.offsetHeight;
      imageBox.style.height = textHeight + 'px';
    } else {
      imageBox.style.height = '350px'; // Reset height on mobile
    }
  };

  useEffect(() => {
    // Run on page load
    matchHeight();
    // Run when window is resized
    window.addEventListener('resize', matchHeight);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', matchHeight);
    };
  }, []);

  return (
    <section className="section3">
      <div className="sect3-wrapper">
        <div className="sect3-item1">
          <h1>The Nouvo City Hotel</h1>
          <h3>
            Experience old Bangkok with the utmost convenience to explore the city's numerous attractions,
            most within walking distance.
          </h3>
          <p>
            The Banglamphu area, also known as Old Bangkok City, is the cultural hub of the capital.
            Much of the area maintains the city's original atmosphere. This unique charm is what
            distinguishes the area from the rest of Bangkok's modern aura and provides travelers
            a glimpse into the past.
          </p>
          <p>
            Nouvo City Hotel is within walking distance to popular, must-see attractions including:
            the Grand Palace, Wat Pho, Khao San Road, Rama VIII Bridge, the Chao Phraya River,
            numerous museums & monuments, and more!
          </p>
          <button>
            <a href="location.html">Explore Location</a>
          </button>
        </div>

        <div className="sect3-item2">
          <img src="https://www.nouvocityhotel.com/wp-content/uploads/2018/11/map_2.jpg" alt="Map showing how to reach Nouvo City Hotel" />
        </div>
      </div>
    </section>
  );
}

export default Section3;
