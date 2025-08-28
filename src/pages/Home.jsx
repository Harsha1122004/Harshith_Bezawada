import React from "react";
import navbar from "../components/navbar";
import "../styles/Home.css";
import profileImage from "../assets/profile.jpg";

const Home = () => {
  // ... (rest of the code)

  return (
    <div className="home-container">
      <navbar />
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-quote">
            "I build **innovative digital solutions** with a passion for clean
            code and seamless user experiences."
          </p>
          <p className="hero-description">
            As a dedicated developer, I specialize in crafting robust and
            scalable web applications using modern technologies. My focus is on
            transforming complex challenges into elegant, efficient, and
            user-friendly products.
          </p>
          <div className="hero-buttons">
            <a
              href="https://drive.google.com/uc?export=download&id=1YsTiEoPKxFlPhk4JnODBayvw59QpXgmP"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-button"
            >
              Resume
            </a>
            <a
              href="https://wa.me/7075765587"
              target="_blank"
              rel="noopener noreferrer"
              className="lets-talk-button"
            >
              Let's Talk
            </a>
          </div>
        </div>
        <div className="profile-image-container">
          <img
            src={profileImage}
            alt="Harshith Bezawada"
            className="profile-img"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
