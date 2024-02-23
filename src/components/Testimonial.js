import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Depoimentos</p>
        <h1 className="primary-heading">O que eles estão dizendo</h1>
        <p className="primary-text">
        Junte-se à conversa e descubra por que tantas pessoas estão apaixonadas por nossos produtos
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        Desde que comecei a pedir da Foodie, minha vida mudou completamente! A conveniência das entregas rápidas é incrível, mas o que realmente me conquistou foi o sabor e a qualidade das comidas
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Isaac Mac</h2>
      </div>
    </div>
  );
};

export default Testimonial;