import React from "react";
import Helmet from "react-helmet";
import Breadcrumbs from "../../../../components/Common/Breadcrumbs";
import { diagBreadcrumbs } from "../../../../core/utils/testData";
import Scroll from "../../../../components/My/ScrollTop/index.js";
import "../styles.scss";
export default function Diag() {
  return (
    <>
      <Helmet>
        <title>Лабораторная диагностика - ЛадаМед</title>
        <meta name="description" content="Diagn" />
        <meta name="keywords" content="Diagn" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={diagBreadcrumbs} />
      </section>
      <Scroll />
      <section className="section">
        <p className="jobs-title">Лабораторная диагностика</p>

        <p className="descr-diag">
          Врачи нашего центра используют широкую диагностическую базу для
          установки верного диагноза, сами пациенты могут самостоятельно, без
          предварительной записи, сдать медицинские анализы:
        </p>
        <p className="descr-diag">
          <b>В будние дни:</b> с 7.30 до 19.00, после 12 часов — ограничения;
          <br />
          <b> В субботу:</b> с 7.30 до 11.00.
        </p>

        <p className="descr-diag">
          Получить результаты анализов можно в Медицинском центре до 20 часов в
          будние дни и до 15 часов в субботу, а так же по электронной почте,
          факсу.
        </p>

        <p className="jobs-title two">
          Для Вашего удобства мы организовали УСЛУГУ ВЗЯТИЯ АНАЛИЗОВ НА ДОМУ.
        </p>
        <p className="descr-diag">
          Позвоните в наш офис для заказа услуги, за 1-2 дня , и мы предложим
          удобное для вас время приезда процедурной медсестры.
          <br />
          <br />
          Некоторые виды анализов требуют следования правилам сдачи: прийти
          утром и натощак. Подробно по подготовке к cдаче анализов Вы можете
          найти информацию на странице Вашего города.
        </p>
        <a
          className="link-stocks"
          href="https://cloud.mail.ru/public/34XL/3sddE8xuc"
          target="_blank"
        >
          Скачать прайс услуг СЫКТЫВКАР_ул. К.Маркса117
        </a>
      </section>
    </>
  );
}
