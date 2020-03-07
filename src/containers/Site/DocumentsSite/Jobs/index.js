import React from "react";
import Helmet from "react-helmet";
import GridRow from "arui-feather/grid-row";
import GridCol from "arui-feather/grid-col";
import Breadcrumbs from "../../../../components/Common/Breadcrumbs";
import { NavLink } from "react-router-dom";
import { jobsBreadcrumbs } from "../../../../core/utils/testData";
import Scroll from "../../../../components/My/ScrollTop/index.js";
import "./styles.scss";
/**
 *  Teachers
 */
export default function Teachers() {
  return (
    <>
      <Helmet>
        <title>Вакансии - ЛадаМед</title>
        <meta name="description" content="Jobs" />
        <meta name="keywords" content="Jobs" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={jobsBreadcrumbs} />
      </section>
      <section className="section">
        <Scroll />
        <GridRow gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
          <GridCol
            key="Вакансии"
            width={{ mobile: 11, tablet: 11, desktop: 3 }}
          >
            <div className="block-info-jobs">
              <div className="info-jobs">
                <p className="jobs-vak">Вакансии</p>
                <p>
                  Международная компания «ИНВИТРО» (ООО «ЛадаМед)», в связи с
                  расширением, открывает вакансии в г.Сыктывкар и г. Ухта:{" "}
                </p>
              </div>
              <p className="jobs-title">Процедурная медсестра</p>
              <p className="jobs-list">Необходимы:</p>
              <div className="jobs-list-li">
                <p>
                  — среднее медицинское образование, действующий сертификат по
                  специальности
                </p>
                <p>— опыт забора венозной крови</p>
                <p>— умение работать с большим объемом информации</p>
              </div>
              <br />
              <br />
              <p className="jobs-list">Условия работы:</p>
              <div className="jobs-list-li">
                <p> — бесплатное обучение и сертификация</p>
                <p>— стабильная высокая ЗП от 27 000 р</p>
                <p>— полный соцпакет (оплачиваемый проезд к месту отпуска)</p>
                <p>
                  — сменный график работы с 7.30 до 14.00; с 14.00 до 20.00, в
                  субботу с 7.30 до 15.00
                </p>
              </div>
              <br />
              <br />
              <p className="jobs-title">Администратор медицинского центра</p>
              <p className="jobs-list">Ждем кандидатов</p>
              <div className="jobs-list-li">
                со средним или высшим медицинским образованием, <br />
                клиентоориентированных, готовых к постоянному обучению и
                развитию, <br /> к работе с большим объемом информации
                <br />
                <br />
                Зарплата от 28 000 р., полный соцпакет (оплачиваемый проезд к
                месту отпуска), <br />
                сменный график работы с 7.30 до 14.00; с 14.00 до 20.00 в будни,
                в субботу с 7.30 до 15.00
                <br />
                <p className="jobs-title">Ждем ваши резюме по адресу: </p>
                <br />
                <NavLink
                  className="email-jobs"
                  to="mailto:invitro2010@yandex.ru"
                >
                  invitro2010@yandex.ru{" "}
                </NavLink>
                <p>Информация по телефону — 8 (8212) 39-13-26</p>
              </div>
            </div>
          </GridCol>
        </GridRow>
      </section>
    </>
  );
}
