import React from "react";
import Helmet from "react-helmet";
import GridRow from "arui-feather/grid-row";
import GridCol from "arui-feather/grid-col";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";
import { treatmentBreadcrumbs } from "../../../core/utils/testData";
import { NavLink } from "react-router-dom";
import Scroll from "../../../components/My/ScrollTop/index.js";

import photo1 from "../../../theme/images/treatment/chehia.png";
import photo2 from "../../../theme/images/treatment/turcia.png";
import photo3 from "../../../theme/images/treatment/korea.png";

import file1 from "../../../theme/images/treatment/1.pdf";
import file2 from "../../../theme/images/treatment/4.pdf";
import file3 from "../../../theme/images/treatment/6.pdf";
import "./styles.scss";
export default function Servis() {
  return (
    <>
      <Helmet>
        <title>Лечение за рубежом - ЛадаМед</title>
        <meta name="description" content="Abroad" />
        <meta name="keywords" content="Abroad" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={treatmentBreadcrumbs} />
      </section>
      <Scroll />
      <div className="section">
        <GridRow gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
          <GridCol
            key="treatment"
            width={{ mobile: 12, tablet: 11, desktop: 12 }}
          >
            <p className="treatment one">
              Уважаемые посетители! Представляем вам новую услугу: лечение в
              лучших клиниках Чехии, Германии, Кореи, Китая, Швейцарии, Израиля
              и Турции.
            </p>
          </GridCol>
          <GridCol width={{ mobile: 4, tablet: 4, desktop: 4 }}>
            <p className="treatment list-treatment">
              Самые востребованные выезды:
            </p>
          </GridCol>

          <GridRow
            gutter={{ mobile: 24, tablet: 24, desktop: 24 }}
            className="list-treatment"
          >
            <GridCol
              width={{ mobile: 7, tablet: 7, desktop: 9 }}
              className="menu-treatment"
            >
              — уточнение диагноза
              <br />
              — ЭКО
              <br />
              — роды за границей
              <br />
              — хирургия
              <br />
              — протезирование суставов
              <br />
              — кардиология
              <br />
              — восстановление после инсульта, ДЦП
              <br />— онкология
            </GridCol>
            <GridCol
              width={{ mobile: 4, tablet: 4, desktop: 5 }}
              className="menu-treatment item-1"
            >
              — пластических хирургия
              <br />— стоматология
            </GridCol>
          </GridRow>

          <GridRow
            gutter={{ mobile: 24, tablet: 24, desktop: 24 }}
            className="list-treatment"
          >
            <GridCol width={{ mobile: 12, tablet: 11, desktop: 12 }}>
              <p className="treatment">
                Вы можете ознакомиться с презентациями клиник наших партнеров:
              </p>
            </GridCol>
            <GridCol width={{ mobile: 12, tablet: 11, desktop: 12 }}>
              <div className="treat-block">
                <img
                  className="treatment-img"
                  src={photo1}
                  alt="Чехия-Медицинский холдинг Чехии "
                />{" "}
                Медицинский холдинг Чехии:
                <a href={file1} target="_black" className="treatment-link">
                  {" "}
                  ЭХО
                </a>
              </div>
            </GridCol>
            <GridCol width={{ mobile: 12, tablet: 11, desktop: 12 }}>
              <div className="treat-block">
                <img
                  className="treatment-img"
                  src={photo2}
                  alt="Турция-Медициниский центр Турции "
                />
                Медициниский центр Турции:
                <a href={file2} target="_black" className="treatment-link">
                  {" "}
                  Memorial презентаци
                </a>
              </div>
            </GridCol>
            <GridCol width={{ mobile: 12, tablet: 11, desktop: 12 }}>
              <div className="treat-block">
                <img
                  className="treatment-img"
                  src={photo3}
                  alt="Корея-Медицинские центры Кореи: "
                />
                Медицинские центры Кореи: &nbsp;
                <a href={file3} target="_black" className="treatment-link">
                  {" "}
                  Chaum
                </a>
              </div>
            </GridCol>
          </GridRow>
          <GridRow
            gutter={{ mobile: 24, tablet: 24, desktop: 24 }}
            className="list-treatment"
          >
            <GridCol width={{ mobile: 12, tablet: 11, desktop: 12 }}>
              <p className="treatment center-step">Три простых шага:</p>
              <ul className="tratment-step">
                <li className="step-1">
                  Менеджер по работе с клиентами подберет клинику по любой
                  специализации с самым современными методами и медицинским
                  оборудованием.
                </li>

                <li className="step-2">
                  Организация поездки от 7 дней — при наличии визы Шенгенской
                  визы, помощь в получении медицинской визы от 3 дней,
                  безвизовый выезд на лечение Турция, Корея.
                </li>

                <li className="step-3">
                  Бесплатная видео консультация с врачом клиники, выезд в
                  клинику, встреча с переводчиком по уровням - оптимал, бизнес,
                  VIP. Русско-говорящий медперсонал или переводчик.
                </li>
              </ul>
            </GridCol>
            <GridCol width={{ mobile: 12, tablet: 11, desktop: 12 }}>
              <p className="treatment">
                <br />
                <br />
                Для получения подробной информации позвоните по телефону:
                <br /> 8 (912) 946-88-00 или оставьте заявку
                <button className="buttons-treatment">
                  <NavLink to="/обратная-связь" className="home-link">
                    Оставить заявку
                  </NavLink>
                </button>
                <br />
                <span>
                  Наши специалисты свяжутся с Вами в ближайшее время и
                  проконстультируют по всем интересующим вопросам.
                </span>
              </p>
            </GridCol>
          </GridRow>
        </GridRow>
      </div>
    </>
  );
}
