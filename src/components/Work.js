import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Escolha as refeições",
      text: "Descubra a arte da alimentação equilibrada com nossas refeições cuidadosamente selecionadas..",
    },
    {
      image: ChooseMeals,
      title: "Escolha com que frequência",
      text: "Desfrute da comodidade e do saber semanalmente com as nossas refeições preparadas para você! ",
    },
    {
      image: DeliveryMeals,
      title: "Entregas rápidas",
      text: "Alimente-se sem esperas!Com nossas entregas rápidas, você pode saborear sua comida favorita em minutos, não horas",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Tudo para você</p>
        <h1 className="primary-heading">Como funciona</h1>
        <p className="primary-text">
        Descubra um ambiente de trabalho que se adapta às suas necessidades, oferecendo conforto, praticidade e eficiência.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;