import React from "react";
import Helmet from "react-helmet";
import GridRow from "arui-feather/grid-row";
import GridCol from "arui-feather/grid-col";
import Breadcrumbs from "../../../../components/Common/Breadcrumbs";
import { aboutBreadcrumbs } from "../../../../core/utils/testData";
import Scroll from "../../../../components/My/ScrollTop/index.js";
import YouTube from "@u-wave/react-youtube";
import Photo1 from "../../../../theme/images/AboutGallery/1.jpg";
import Photo2 from "../../../../theme/images/AboutGallery/2.jpg";
import Photo3 from "../../../../theme/images/AboutGallery/3.jpg";
import Photo4 from "../../../../theme/images/AboutGallery/4.jpg";
import Photo5 from "../../../../theme/images/AboutGallery/5.jpg";
import Photo6 from "../../../../theme/images/AboutGallery/6.jpg";
import Photo7 from "../../../../theme/images/AboutGallery/7.jpg";
import Photo8 from "../../../../theme/images/AboutGallery/8.jpg";
import Photo9 from "../../../../theme/images/AboutGallery/9.jpg";
import Photo10 from "../../../../theme/images/AboutGallery/10.jpg";
import Photo11 from "../../../../theme/images/AboutGallery/11.jpg";
import "./styles.scss";

export default function About() {
  return (
    <>
      <Helmet>
        <title>О нас - ЛадаМед</title>
        <meta name="description" content="About" />
        <meta name="keywords" content="About" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={aboutBreadcrumbs} />
      </section>
      <Scroll />
      <section className="section">
        <GridRow>
          <GridCol key="О нас" width={{ mobile: 12, tablet: 12, desktop: 12 }}>
            <div className="block-info">
              <div className="info">
                Медицинский центр ЛадаМед открылся в Республике Коми в 2009
                году, став агентом Независимой Лаборатории Инвитро (Федеральная
                сеть).
                <br />
                ЛадаМед первым предложил жителям Республике Коми медицинские
                анализы широчайшего спектра и самого высоко качества,
                соответствующие мировым стандартам. Именно скорость, качество и
                уровень сервиса лабораторной диагностики стали реноме
                Медицинского Центра ЛадаМед среди врачей и пациентов.
              </div>

              <div className="info-link">
                <YouTube
                  video="1OLisRYcGoU"
                  width={355}
                  height={200}
                  lang="ru"
                />
              </div>
            </div>
            <br />
            <div className="block-info-center">
              <p>
                В 2010 году под брендом Инвитро в Эжве открылся второй
                медицинский офис ЛадаМед, предлагающий услуги по лабораторной
                диагностике. Эжвинский Медицинский офис стал 300-ым под брендом
                Инвитро в России.
                <br />
                <br />
                В 2011 году открылся медицинский центр в городе Ухта, предложив
                горожанам медицинские анализы и приемы врачей на базе ЛадаМед.
                <br />
                <br />
                Команда ведущих врачей сложилась с первых месяцев открытия
                центра в Сыктывкаре, и мы продолжаем приглашать к нам самых
                высокопрофессиональных врачей.
                <br />
                <br />
                Основными направлениями стали: лабораторная диагностика,
                диагностические исследования на современном оборудовании, приемы
                специалистов более 12 специализаций.
                <br />
                Активно развиваются гинекологическое и акушерское направления.
                Постоянно вводятся новые услуги по оказанию гинекологической и
                акушерской помощи. Разрабатываются и сопровождаются
                специалистами центра Программы контрацепции и вынашивания
                беременности.
                <br />
                <br />
                На базе Медицинского Центра постоянно внедряются новаторские
                направления медицинских услуг. К примеру: Лаборатория сна - пока
                единственная в Коми республике. Программа ведется врачом
                СОМНОЛОГОМ, проходившим обучение и поддерживающим тесное
                сотрудничество с Профилакторием Барвиха, Поликлиники
                Управ.делами Президента РФ. Эта программа стала участником
                международной выставки Инновационных технологий в г. Сыктывкар в
                2012 году.
                <br />
                <br />
                Мы привлекаем к сотрудничеству и специалистов Московских
                специализированных клиник, таких как Клиника Доктора Артемова.
                Врачи этого центра познакомили сыктывкарцев с направлением
                ОСТЕОПАТИЯ, активно развивающимся в Европе.
                <br />
                <br />
                Новинкой 2013 года стала «Школа коррекции веса», под патронажем
                врача эндокринолога.
                <br />
                <br />
                <br />
                В июле 2014 года открылся Детский медицинский центр «Ладушки» с
                кабинетами Узи-диагностики, приемов, вакцинацией и анализами
                (Инвитро), который работает с 7-30 утра до 20-00 вечера в будни.
                В взрослом отделении центра наблюдаются будущие мамы (программы
                ведения беременности) и малыши.
                <br />
                <br />
                Нашей задачей является предложить нашим пациентам самые
                современные и профессиональные медицинские услуги, обеспечив при
                этом качественный сервис и заботу о Вашем здоровье.
              </p>
              <br />
              <br />
              <p className="thanks">
                {" "}
                Мы благодарим Вас , за то что доверяете нам, самое дорогое —
                Ваше здоровье!
              </p>
            </div>
          </GridCol>
        </GridRow>
      </section>
    </>
  );
}
