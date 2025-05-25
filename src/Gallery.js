import React from "react";
import "./styles.css";
import galleryImage from "./Assets/Logo.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <h2>Gallery</h2>

      {/* Image Grid */}
      <div className="image-grid">
        <img src={galleryImage} alt="Gallery Image 1" />
        <img src={galleryImage} alt="Gallery Image 2" />
        <img src="./Assets/mic.jpg" alt="Gallery Image 3" />
      </div>

      {/* Video Section */}
      <div className="video-container">
        <video controls width="100%">
          <source src="sample-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Gallery;
