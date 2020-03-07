import React from "react";
import GridRow from "arui-feather/grid-row";
import Helmet from "react-helmet";
import GridCol from "arui-feather/grid-col";
import Scroll from "../../../components/My/ScrollTop/index.js";
import { filialBreadcrumbs } from "../../../core/utils/testData";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";
import "./styles.scss";
import Photo1 from "../../../theme/images/AboutGallery/1.jpg";
import Photo2 from "../../../theme/images/AboutGallery/2.jpg";
import Photo3 from "../../../theme/images/AboutGallery/3.jpg";
import Photo4 from "../../../theme/images/AboutGallery/4.jpg";
import Photo5 from "../../../theme/images/AboutGallery/5.jpg";
import Photo6 from "../../../theme/images/AboutGallery/6.jpg";
import Photo7 from "../../../theme/images/AboutGallery/7.jpg";
import Photo8 from "../../../theme/images/AboutGallery/8.jpg";
import Photo9 from "../../../theme/images/AboutGallery/9.jpg";
import Photo10 from "../../../theme/images/AboutGallery/10.jpg";
import Photo11 from "../../../theme/images/AboutGallery/11.jpg";

export default function Filial() {
  return (
    <section className="section">
      <Helmet>
        <title>Филиалы - ЛадаМед</title>
        <meta name="description" content="Filial" />
        <meta name="keywords" content="Filial" />
      </Helmet>
      <Breadcrumbs items={filialBreadcrumbs} />
      <Scroll />
      <GridRow>
        <GridCol key="О нас" width={{ mobile: 12, tablet: 12, desktop: 12 }}>
          <br />
          <p className="title-lin">Наши офисы:</p>
          <div className="info-office">
            <span>
              <br />
              Эжва, ул. Мира, д. 68
            </span>
            <span>
              г. Сыктывкар, <br />
              ул. Орджоникидзе, д. 33/45
            </span>
            <span>
              г. Сыктывкар,
              <br /> ул. Карла Маркса 117
            </span>
          </div>
          <div className="info-license">
            <a className="image-popup-office" href={Photo7} target="_blank">
              <img src={Photo7} width="240" height="180" />
            </a>
            <a className="image-popup-office" href={Photo8} target="_blank">
              <img src={Photo8} width="240" height="180" />
            </a>
            <a className="image-popup-office" href={Photo9} target="_blank">
              <img src={Photo9} width="240" height="180" />
            </a>
          </div>

          <div className="info-office-two">
            <span>
              <br />
              г.Ухта, пр. Ленина, д. 28
            </span>
            <span id="spainf">
              г.Сыктывкар,
              <br /> ул. Первомайская, д. 62
            </span>
          </div>
          <div className="info-license">
            <a className="image-popup-office" href={Photo10} target="_blank">
              <img src={Photo10} width="240" height="180" />
            </a>
            <a className="image-popup-office" href={Photo11} target="_blank">
              <img src={Photo11} width="240" height="180" />
            </a>
          </div>

          <br />
          <br />
          <p className="title-lin">
            Наша лицензия ЛО-11-01-002258 от 01.10.2019:
          </p>
          <div className="info-license">
            <a className="image-popup" href={Photo1} target="_blank">
              <img src={Photo1} width="125" height="180" />
            </a>
            <a className="image-popup" href={Photo2} target="_blank">
              <img src={Photo2} width="125" height="180" />
            </a>
            <a className="image-popup" href={Photo3} target="_blank">
              <img src={Photo3} width="125" height="180" />
            </a>
            <a className="image-popup" href={Photo4} target="_blank">
              <img src={Photo4} width="125" height="180" />
            </a>
            <a className="image-popup" href={Photo5} target="_blank">
              <img src={Photo5} width="125" height="180" />
            </a>
            <a className="image-popup" href={Photo6} target="_blank">
              <img src={Photo6} width="125" height="180" />
            </a>
          </div>
        </GridCol>
      </GridRow>
    </section>
  );
}
