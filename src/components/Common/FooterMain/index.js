import React from "react";
import GridCol from "arui-feather/grid-col";
import GridRow from "arui-feather/grid-row";
import Vk from "../../../theme/images/vk.svg";
import Facebook from "../../../theme/images/facebook.svg";
import Odnoklassniki from "../../../theme/images/odnoklassniki.svg";
import Insta from "../../../theme/images/insta.svg";
import Faphone from "../../../theme/images/fa-phone.png";
import Faemail from "../../../theme/images/fa-email.png";
import { Link } from "react-router-dom";
import "./styles.scss";
/**
 * Footer for home page
 */
export default function Footer() {
  return (
    <div className="footer_wrapper">
      <footer className="footer-main">
        <GridRow>
          <GridCol width={{ mobile: 12, tablet: 3, desktop: 3 }}>
            <div className="footer-main-first">Карта сайта</div>
            <Link to="/о-нас/" className="fa-pic">
              О нас
            </Link>
            <br />
            <Link to="/наши-правила" className="fa-pic">
              Наши правила
            </Link>
            <br />
            <Link to="/вакансии/" className="fa-pic">
              Вакансии
            </Link>
            <br />
            <Link to="/отзывы/" className="fa-pic">
              Отзывы
            </Link>
            <br />
            <Link to="/контакты" className="fa-pic">
              Контакты{" "}
            </Link>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 5, desktop: 5 }}>
            <div className="footer-main-second">
              <Link to="/акции" className="fa-pic">
                Акции
              </Link>
              <br />
              <Link to="/полезная-информация" className="fa-pic">
                Рекомендации
              </Link>
              <br />
              <Link to="/нормативные-документы" className="fa-pic">
                Нормативные документы
              </Link>
              <br />
              <Link to="/услуги" className="fa-pic">
                Услуги
              </Link>
              <br />
            </div>
          </GridCol>
          <GridCol width={{ mobile: 12, tablet: 2, desktop: 3 }}>
            <div className="footer-main-first">Свяжитесь с нами</div>
            <img src={Faemail} className="fa-pic" alt="" />{" "}
            <a href="mailto:adress@yandex.ru">adress@yandex.ru</a>
            <br />
            <img src={Faphone} className="fa-pic" alt="" />{" "}
            <a href="tel:+88212391326">8 (8212) 39-13-26</a>
            <br />
            <div className="footer-soc">
              <div className="footer-soc-title">Мы в соцсетях</div>
              <Link to="/">
                <img src={Vk} alt="" />
              </Link>
              <Link to="/">
                <img src={Facebook} alt="" />
              </Link>
              <Link to="/">
                <img src={Odnoklassniki} alt="" />
              </Link>
              <Link to="/">
                <img src={Insta} alt="" />
              </Link>
            </div>
          </GridCol>
        </GridRow>
      </footer>
    </div>
  );
}
