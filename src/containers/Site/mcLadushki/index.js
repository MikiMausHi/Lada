import React from "react";
import Helmet from "react-helmet";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";
import { ladushkiBreadcrumbs } from "../../../core/utils/testData";
import logo from "../../../theme/images/ladushki.png";
import children from "../../../theme/images/children.png";
import Scroll from "../../../components/My/ScrollTop/index.js";
import { NavLink } from "react-router-dom";
import "./styles.scss";
export default function Ladushki() {
  return (
    <>
      <Helmet>
        <title>МЦ «Ладушки» - ЛадаМед</title>
        <meta name="description" content="Ladushki" />
        <meta name="keywords" content="Ladushki" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={ladushkiBreadcrumbs} />
        <Scroll />
      </section>
      <div className="section">
        <div className="banner-ladushki">
          <div className="banner-ladushki-logo">
            <h2>О медицинском центре «Ладушки»</h2>
            <img src={logo} alt="" />
          </div>

          <div className="banner-ladushki-info">
            <p className="ladushki-info">
              Медицинский центр обладает самой современной базой, начиная от
              современного оборудования, клинических исследований, врачей более
              12 специализаций.
            </p>
            <p>
              В медицинском центре «Ладушки» можно сделать УЗИ (ультразвуковое
              исследование) всех органов, как взрослым, так и детям на
              современном оборудовании: ультразвуковом аппарате Voluson E 8 с
              возможностью графического изображения в 3D режиме.
            </p>
            <p>
              Наш медицинский центр создан для того, чтобы Вам было удобно и
              комфортно заботиться о своем здоровье. Поэтому беременная женщина
              может пригласить на УЗИ своих родных, чтобы вместе увидеть
              изображение на плазменном телевизоре, порадоваться, получить на
              память «живые картинки» будущего малыша.
            </p>
          </div>

          <div className="ladushki-children">
            <h2>Все для здоровья ваших детей!</h2>
            <img src={children} alt="" />
          </div>
          <div className="ladushki-info-text">
            <p className="info-text">
              В детском медицинском центре «ЛадаМед» проводится лечение детей и
              подростков. Есть возможность получить справку для поездки в
              оздоровительный лагерь и санаторий в кратчайшие сроки. Возможен
              вызов врача-педиатра из медицинского центра на дом.
            </p>
            <p>
              Малыши и взрослые могут сдать анализы всего лабораторного спектра
              без направления врача и очередей и самостоятельно получить
              результаты на сайте www.invitro.ru по электронной почте или факсу.
              Существует услуга взятия анализов на дому.
            </p>
            <button className="button-children">
              <NavLink to="/программа-наблюдения-малыша" id="home-link2">
                Программа наблюдения малыша от 0 до 12 месяцев
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
