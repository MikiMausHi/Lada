import React from "react";
import GridRow from "arui-feather/grid-row";
import GridCol from "arui-feather/grid-col";
import HomeLogo1 from "../../../theme/images/home/home-logo1.png";
import HomeLogo2 from "../../../theme/images/home/home-logo2.png";
import HomeLogo3 from "../../../theme/images/home/home-logo3.png";
import "./styles.scss";

/**
 * Online learning
 */
export default function OnlineLearning() {
  return (
    <div className="online-learning">
      <h2 className="text-center">Наши партнёры</h2>
      <GridRow gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
        <GridCol
          width={{ mobile: 12, tablet: 2, desktop: 4 }}
          className="online-learning-item"
        >
          <img src={HomeLogo1} alt="" />
          <p>
            <a href="/" id="online-learning-item__text">
              Один из крупнейших российских страховщиков с универсальным
              портфелем услуг, включающий как комплексные программы защиты
              интересов бизнеса, так и широкий спектр страховых продуктов для
              частных лиц.
            </a>
          </p>
        </GridCol>
        <GridCol
          width={{ mobile: 12, tablet: 2, desktop: 4 }}
          className="online-learning-item"
        >
          <img src={HomeLogo2} alt="" />
          <p>
            <a href="/" id="online-learning-item__text">
              ФГБОУ ДО «Федеральный детский эколого-биологический центр»
            </a>
          </p>
        </GridCol>
        <GridCol
          width={{ mobile: 12, tablet: 2, desktop: 4 }}
          className="online-learning-item"
        >
          <img src={HomeLogo3} alt="" />
          <p>
            <a href="/" id="online-learning-item__text">
              Крупная российская страховая компания, отнесена к разряду
              системообразующих, лидер одноименной страховой группы. По
              совокупному размеру получаемых страховых премий стабильно занимает
              2-ое место в России.
            </a>
          </p>
        </GridCol>
      </GridRow>
    </div>
  );
}