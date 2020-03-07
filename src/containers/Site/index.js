import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home";
import Doctors from "./Teachers";
import NotFoundPage from "./NotFound";
import Header from "../../components/Common/Header";
import FooterMain from "../../components/Common/FooterMain";
import Servis from "../../containers/Site/DocumentsSite/";
import About from "../Site/DocumentsSite/About/index.js";
import Helpfull from "../Site/DocumentsSite/HelpfulInformation/index.js";
import Vakans from "../Site/DocumentsSite/Jobs";
import NormDoc from "../Site/DocumentsSite/NormDocuments";
import Politica from "../Site/DocumentsSite/Politica/index.js";
import Stocks from "../Site/DocumentsSite/Stocks/index.js";
import SuperVisory from "../Site/DocumentsSite/Supervisory";
import CorpClient from "../Site/CorporateСlient";
import Maps from "../Site/MapsLadamed";
import Ladushki from "../Site/mcLadushki/index.js";
import Baby from "../Site/mcLadushki/babyLadushki/index.js";
import Diagn from "../Site/PageServices/LaboratoryDiagnostics/index.js";
import Diagnost from "../Site/PageServices/Diagnostics/index.js";
import Record from "../Site/Record/index.js";
import Review from "../Site/Review/index.js";
import Servisla from "../Site/ServicesLa/index.js";
import Treatment from "../Site/TreatmentAbroad/index.js";
import Chat from "../../components/My/ChatSupport";
import Filial from "./Filial/index.js";

export default function Site() {
  return (
    <>
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/обратная-связь" component={Chat} />
          <Route path="/лаборатория-диагностики" component={Diagn} />
          <Route path="/лечение-за-рубежом" component={Treatment} />
          <Route path="/онлайн-запись" component={Record} />
          <Route path="/услуги" exact component={Servisla} />
          <Route path="/отзывы" component={Review} />
          <Route path="/диагностика" component={Diagnost} />
          <Route path="/наши-специалисты" component={Doctors} />
          <Route path="/наши-правила" component={Servis} />
          <Route path="/о-нас" component={About} />
          <Route path="/филиалы" component={Filial} />
          <Route path="/полезная-информация" component={Helpfull} />
          <Route path="/вакансии" component={Vakans} />
          <Route path="/нормативные-документы" component={NormDoc} />
          <Route path="/корпоративным-клиентам" component={CorpClient} />
          <Route path="/контакты" component={Maps} />
          <Route path="/мц-«ладушки»" component={Ladushki} />
          <Route path="/программа-наблюдения-малыша" component={Baby} />
          <Route path="/надзорные-органы" component={SuperVisory} />
          <Route path="/акции" component={Stocks} />
          <Route
            path="/политика-обработки-персональных-данных"
            component={Politica}
          />
          <Route path="*" component={NotFoundPage} />
        </Switch>
        <FooterMain />
      </main>
    </>
  );
}
