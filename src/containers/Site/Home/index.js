import React from "react";
import Helmet from "react-helmet";
import HowWork from "../../../components/Site/HowWork";
import MainSections from "../../../components/Site/MainSections";
import OnlineLearning from "../../../components/Site/OnlineLearning";
import OurAdvantages from "../../../components/Site/OurAdvantages";
import HomeBanner from "../../../components/My/HomeBanner";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>ЛадаМед</title>
        <meta name="description" content="LadaMed" />
        <meta name="keywords" content="LadaMed" />
      </Helmet>
      <section className="section section_home_carousel">
        <HomeBanner />
      </section>
      <section className="section">
        <MainSections />
      </section>
      <section className="section">
        <OnlineLearning />
      </section>
      <section className="section">
        <OurAdvantages />
      </section>
      <section className="section">
        <HowWork />
      </section>
    </>
  );
}
