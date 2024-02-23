import React from "react";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import Navbar from "./NavBar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Delicie-se com a sua comida favorita, entregue fresquinha ou quentinha na sua porta!          </h1>
          <p className="primary-text">
          Sabores que aquecem o coração  
          satisfazem os sentidos.
          Peça agora e deixe-nos levar o melhor sabor até você!
          </p>
          <button className="secondary-button">
            Selecionar <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;