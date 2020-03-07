import React from "react";
import { Link } from "react-router-dom";
import Toplink1 from "../../../theme/images/toplink1.png";
import Toplink2 from "../../../theme/images/toplink2.png";
import Toplink3 from "../../../theme/images/toplink3.png";
import Toplink4 from "../../../theme/images/toplink4.png";
import Toplink5 from "../../../theme/images/toplink5.png";
import "./styles.scss";

export default function TopLinks() {
  return (
    <div className="top-links-wrap">
      <section className="section section_fullwidth section_top">
        <div className="top-links">
          <ul>
            <li>
              <Link to="/о-нас" className="top-links_link">
                <img src={Toplink1} alt="О нас" /> О нас
              </Link>
            </li>
            <li>
              <Link to="/наши-специалисты" className="top-links_link">
                <img src={Toplink2} alt="Наши специалисты" /> Наши специалисты
              </Link>
            </li>
            <li>
              <Link to="/филиалы" className="top-links_link">
                <img src={Toplink3} alt="Наши клиники" /> Наши клиники
              </Link>
            </li>
            <li>
              <Link to="/полезная-информация" className="top-links_link">
                <img src={Toplink4} alt="Полезная информация" /> Полезная
                информация
              </Link>
            </li>
            <li>
              <Link to="/вакансии" className="top-links_link">
                <img src={Toplink5} alt="Вакансии" /> Вакансии{" "}
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
