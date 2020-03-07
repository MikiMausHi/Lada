import React from "react";
import Helmet from "react-helmet";
import Breadcrumbs from "../../../../components/Common/Breadcrumbs";
import { aboutBreadcrumbs } from "../../../../core/utils/testData";
import Scroll from "../../../../components/My/ScrollTop/index.js";
import "../styles.scss";
export default function Teachers() {
  return (
    <>
      <DocumentTitle title="Диагностика - ЛадаМед" />
      <Helmet>
        <title>Диагностика - ЛадаМед</title>
        <meta name="description" content="Diagnost" />
        <meta name="keywords" content="Diagnost" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={aboutBreadcrumbs} />
      </section>
      <Scroll />
      <section className="section">
        <p className="jobs-title">Диагностика</p>
        <div className="pravia-home-privacy-menu-anchor">
          <a
            className="menu-list__link"
            href="#news-diagn"
            rel="noopener noreferrer"
          >
            1. Новое в лабораторной диагнотики
          </a>
          <a
            className="menu-list__link"
            href="#news-diagn-ul"
            rel="noopener noreferrer"
          >
            2. Ультразвуковая диагностика
          </a>
          <a
            className="menu-list__link"
            href="#news-diagn-colp"
            rel="noopener noreferrer"
          >
            3. Кольпоскопия
          </a>
          <a
            className="menu-list__link"
            href="#news-diagn-ohogic"
            rel="noopener noreferrer"
          >
            4. Эхогистеросальпингоскопия
          </a>
          <a
            className="menu-list__link"
            href="#news-diagn-elect"
            rel="noopener noreferrer"
          >
            5. Электрокардиограмма (ЭКГ)
          </a>
        </div>

        <div className="content-diagnostics">
          <br /> <br />
          <p className="jobs-title" id="news-diagn">
            {" "}
            Новое в лабораторной диагнотики
          </p>
          <p className="descr-diag">
            1) Определение гормона кортизола в слюне
            <br />
            Кортизол – основной глюкокортикоидный гормон коры надпочечников,
            который участвует в гормональной регуляции функций организма в
            стрессовых ситуациях.
            <br />
            Патологическое повышение уровня кортизола, обусловленное его
            неконтролируемой секрецией, ведет к характерным метаболическим и
            клиническим проявлениям (синдром Иценко-Кушинга).
            <br />
            <br />
            2) Острые кишечные инфекции, ПЦР-скрининг восьми бактериальных и
            вирусных возбудителей острых кишечных инфекций в кале ( Shigella
            spp./Escherichia coli , Salmonella spp., Campilobacter spp.,
            Adenovirus F, Rotavirus A, Norovirus GII, Astrovirus)
            <br />
            <br />
            3) №TRO Тромбоциты, микроскопия (подсчет в окрашенном мазке по
            методу Фонио)
            <br />
            Подсчет тромбоцитов входит в состав общего анализа крови и обычно
            проводится с помощью гематологического анализатора импедансным
            методом. При некоторых клинических состояниях (в том числе при
            выраженных тромбоцитопениях и тромбоцитозах, при мониторинге
            терапии) может быть целесообразным подсчет количества тромбоцитов по
            методу Фонио вне зависимости от концентрации тромбоцитов. Данное
            исследование решает эту задачу.
            <br />
            <br />
            4) №324 Вирус гепатита С: количественное определение РНК вируса и
            генотипирование (Hepatitis C Virus (HCV) RNA, Quantitative PCR and
            Genotyping)
            <br />
            <br />
            5) №БР2/20 Установление биологического родства для одного из
            родителей при отсутствии другого (2 чел.)
            <br />
            Срок исполнения до 13 рабочих дней. Исследуемый материал -
            буккальный эпителий. Молекулярно-генетическое исследование,
            направленное на определение биологического родства: отцовства или
            материнства, проводится для разрешения спорных случаев
            биологического происхождения детей.
            <br />
            Исследование выполняется с целью исключения или, напротив,
            установления родственных связей между предполагаемыми родителями
            (отцом или матерью) и ребенком. Установление родства по
            характеристикам ДНК – одно из направлений более масштабной области
            исследований, связанной с решением задач по идентификации личности
            молекулярно-биологическими методами.
          </p>
        </div>

        <br />
        <p className="jobs-title" id="news-diagn-ul">
          {" "}
          Ультразвуковая диагностика
        </p>
        <p className="descr-diag">
          В Медицинском Центре ЛадаМед представлено самое современное
          диагностическое оборудование. Ультразвуковое исследование проводится
          на УЗИ сканере ESAOTE MyLab70 и Loqic C5 с оптимальным набором функций
          и всеми видами чувствительного допплера.
        </p>

        <br />
        <p className="jobs-title" id="news-diagn-colp">
          {" "}
          Кольпоскопия
        </p>
        <p className="descr-diag">
          Кольпоскопия проводится с целью уточнения характера патологических
          изменений шейки матки, обнаруженных при осмотре её с помощью
          влагалищных зеркал.
          <br />
          <b> Кольпоскопия</b> (греч. kolpos влагалище + skopeo наблюдать,
          исследовать) — метод исследования слизистой оболочки влагалищной части
          шейки матки с помощью оптического прибора — кольпоскопа.
          <br /> <br />
          Кольпоскопия является неотъемлемой частью гинекологического
          обследования, входящей в нормативы обследования. Кольпоскопия
          обязательна при профилактических осмотрах женщин, т. к. даёт
          возможность своевременного выявления различных заболеваний шейки
          матки, что важно в ранней диагностике злокачественных опухолей.
          <br /> <br />
          Кольпоскопия не заменяет цитологические исследования. Данные
          кольпоскопии, при выявлении патологических участков, могут быть
          использованы для прицельного взятия материла для цитологического
          исследования. Следует помнить о том, что взятие цитологического
          материала не может быть выполнено в день проведения кольпоскопии.
          <br /> <br />
          Кольпоскопию выполняет врач-гинеколог. Пациент располагается на
          гинекологическом кресле, шейку матки обнажают влагалищными зеркалами,
          при помощи тампонов удаляется отделяемое с её поверхности, затем
          производится осмотр влагалищной части шейки матки с помощью
          кольпоскопа, установленного около гинекологического кресла (простая
          кольпоскопия).
          <br />
          <br />
          Стоимость услуги для города Сыктывкар:<b> 650 руб. </b>
          <br />
          Стоимость услуги для города Ухта:<b> 500 руб.</b>
        </p>

        <br />
        <p className="jobs-title" id="news-diagn-ohogic">
          {" "}
          Эхогистеросальпингоскопия
        </p>
        <p className="descr-diag">
          Ультразвуковая гистеросальпингография (УЗГСГ) представляет собой одну
          из разновидностей ультразвукового диагностирования, дающего
          возможность определить состояние маточной полости и проходимость труб
          матки.
          <br />
          <br />
          Показания: бесплодие различного генеза, оценка состояния маточных
          труб, подозрение на аномалии развития матки, спаечный процесс;
          <br />
          УЗГСГ проводится в кабинете гинеколога с соблюдением правил асептики и
          антисептики после предварительного УЗИ ОМТ. У пациентке берётся
          согласие на проведение мед. вмешательства (приложение 1), согласие на
          обработку персональных данных (приложение 2).
          <br />
          <br />
          Исследование проводит врач УЗД и врач гинеколог. Если гинеколог имеет
          подготовку по эхографии, то он может привлечь к работе мед. сестру
          (акушерку) или другого ассистента. Во влагалище вводится ложкообразное
          зеркало и подъемник или зеркало Куско и визуально исследуется шейка
          матки или влагалище. При необходимости проводится обезболивание. Шейка
          дезинфицируется антисептиком. Катетер осторожно вводят в цервикальный
          канал до тех пор, пока он не минует область внутреннего зева, после
          этого катетер заполняется жидкостью для его фиксации. Удостоверившись
          в правильном расположении баллона, удаляют зеркало, а вагинальный
          датчик вводят поверх катетера перед шейкой матки. Шприц подсоединятся
          к катетеру и физ. раствор (темп. 37 гр.) медленно вводится в полость
          матки. Введение контролируется при помощи УЗИ.
          <br />
          <br />
          Врач может определить состояние полости матки и характеристики ее
          строения. После этого раствор проникает в маточные трубы и брюшную
          полость – результат такого обследования также может свидетельствовать
          о проходимости либо непроходимости труб матки. Как правило, кроме
          самого строения и состояния, данный метод диагностики дает возможность
          рассмотреть отклонения в полости матки, оформляется протокол
          эхогистеросальпингоскопии.
          <br />
          <br />
          После проведения исследования инструментарий подвергается дезинфекции,
          предстерилизационной очистке и стерилизации.
          <br />
          <br />
          Стоимость для города Сыктывкар: 3000 руб.
        </p>

        <br />
        <p className="jobs-title" id="news-diagn-elect">
          {" "}
          Электрокардиограмма (ЭКГ)
        </p>
        <p className="descr-diag">
          <b> Электрокардиограмма (ЭКГ) </b>(electrocardiogram (ECG)) —
          графическая запись электрических потенциалов, сопровождающих работу
          сердца, на движущейся бумажной ленте. Запись электрокардиограммы
          производится с помощью специального прибора, называемого
          электрокардиографом (electrocardiograph). <br /> <br />
          Предварительной записи или специальной подготовки к исследованию не
          требуется.
          <br /> <br />
          <b>Показания к проведению ЭКГ</b>
          <br /> <br />
          1)Подозрение на заболевания сердца и высокий риск в отношении этих
          заболеваний.
          <br /> <br />
          2)Ухудшение состояния больных с заболеваниями сердца, появление болей
          в области сердца, развитие или усиление одышки, возникновение аритмии.
          <br /> <br />
          3)Перед любыми оперативными вмешательствами.
          <br /> <br />
          4)Заболевания внутренних органов, эндокринных желез, нервной системы,
          болезней уха, горла, носа, кожные заболевания и т. д. при подозрении
          на вовлечение сердца в патологический процесс.
          <br /> <br />
          5)Наличие профессионального риска.
          <br />
          С помощью электрокардиограммы врач может диагностировать различные
          заболевания сердца, приводящие к характерным изменениям на ЭКГ.
          <br /> <br />- оборудование: Электрокардиограф ЭКГ-01 «Валента»
        </p>
      </section>
    </>
  );
}