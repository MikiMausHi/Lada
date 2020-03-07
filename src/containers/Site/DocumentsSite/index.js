import React from "react";
import Helmet from "react-helmet";
import GridRow from "arui-feather/grid-row";
import GridCol from "arui-feather/grid-col";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";
import { NavLink } from "react-router-dom";
import { praviaBreadcrumbs } from "../../../core/utils/testData";
import "./styles.scss";
import Scroll from "../../../components/My/ScrollTop/index.js";

export default function Servis() {
  return (
    <>
      <Helmet>
        <title>Наши правила - ЛадаМед</title>
        <meta name="description" content="Docum" />
        <meta name="keywords" content="Docum" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={praviaBreadcrumbs} />
      </section>
      <section className="section">
        <div className="pravia-home">
          <Scroll />
          <h2 className="text-center top" id="prav-top">
            Наши правила
          </h2>
          <GridRow gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
            <GridCol
              width={{ mobile: 12, tablet: 3, desktop: 4 }}
              className="pravia-item"
            >
              <NavLink to="/нормативные-документы/" className="link-item">
                Нормативные документы
              </NavLink>
            </GridCol>
            <GridCol
              width={{ mobile: 12, tablet: 3, desktop: 4 }}
              className="pravia-item"
            >
              <NavLink to="/корпоративным-клиентам/" className="link-item">
                Корпоративным клиентам
              </NavLink>
            </GridCol>
            <GridCol
              width={{ mobile: 12, tablet: 3, desktop: 4 }}
              className="pravia-item"
            >
              <NavLink
                to="/политика-обработки-персональных-данных/"
                className="link-item"
              >
                Политика обработки персональных данных
              </NavLink>
            </GridCol>
            <GridCol
              width={{ mobile: 12, tablet: 3, desktop: 4 }}
              className="pravia-item"
            >
              <NavLink to="/надзорные-органы/" className="link-item">
                Надзорные службы
              </NavLink>
            </GridCol>
            <GridCol
              width={{ mobile: 12, tablet: 3, desktop: 4 }}
              className="pravia-item"
            >
              <NavLink to="/полезная-информация/" className="link-item">
                Полезная информация
              </NavLink>
            </GridCol>
          </GridRow>
        </div>
      </section>
    </>
  );
}
