import React from "react";
import GridRow from "arui-feather/grid-row";
import GridCol from "arui-feather/grid-col";
import Link from "arui-feather/link";
import HomeLogo4 from "../../../theme/images/home/home-logo4.png";
import HomeLogo5 from "../../../theme/images/home/home-logo5.png";
import HomeLogo6 from "../../../theme/images/home/home-logo6.png";
import "./styles.scss";

/**
 * Our advantages
 */
export default function OurAdvantages() {
  return (
    <div className="our-advantages">
      <h2 className="text-center top">Наши преимущества</h2>
      <GridRow gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
        <GridCol
          width={{ mobile: 10, tablet: 3, desktop: 4 }}
          className="our-advantages-item"
        >
          <Link pseudo>
            <img src={HomeLogo4} alt="" />
            <p className="our-advantages-item-heading">
              Наши <br /> специалисты
            </p>
          </Link>
          <p className="our-advantages-item-description">
            Приемы высококвалифицированных специалистов 12 специальностей.
            Информационная поддержка.
          </p>
        </GridCol>
        <GridCol
          width={{ mobile: 10, tablet: 3, desktop: 4 }}
          className="our-advantages-item"
        >
          <Link pseudo>
            <img src={HomeLogo5} alt="" />
            <p className="our-advantages-item-heading">
              Удобство
              <br />
              работы
            </p>
          </Link>
          <p className="our-advantages-item-description">
            Гарантированное качество и скорость медицинских анализов (
            Выполняется нашим Партнером ИНВИТРО использует инновационный подход
            и во внедрении новых услуг, используя лучшие технологические
            разработки российского и зарубежного производства.
          </p>
        </GridCol>
        <GridCol
          width={{ mobile: 10, tablet: 3, desktop: 4 }}
          className="our-advantages-item"
        >
          <Link pseudo>
            <div className="our-advantages-img-6">
              <img src={HomeLogo6} alt="" />
            </div>
            <p className="our-advantages-item-heading">
              Проверенные
              <br />
              методологии
            </p>
          </Link>
          <p className="our-advantages-item-description">
            Новейшее диагностическое оборудование, некоторое уникальное для
            Республики Коми, представлено только у нас. Широкий спектр
            медицинских тестов - более 2500.
          </p>
        </GridCol>
      </GridRow>
    </div>
  );
}
