import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
        O alimento é uma parte importante de uma dieta equilibrada
        </h1>
        <p className="primary-text">
        Nutrir seu corpo nunca foi tão delicioso! 
        Desfrute da sua refeição favorita, preparada com ingredientes frescos 
        e saudáveis, entregue diretamente para você. Uma opção nutritiva 
        para manter sua dieta equilibrada e seu paladar satisfeito.
        </p>
        <p className="primary-text">
        Faça seu pedido agora e alimente-se com qualidade e sabor!        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Fazer meu pedido</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Dicas de dietas
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;