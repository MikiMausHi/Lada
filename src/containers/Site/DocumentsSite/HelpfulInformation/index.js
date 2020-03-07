import React from "react";
import Helmet from "react-helmet";
import Breadcrumbs from "../../../../components/Common/Breadcrumbs";
import Stocksbreadcrimbs from "../../../../components/My/Stocksbreadcrimbs/index.js";
import {
  helpBreadcrumbs,
  helpsBreadcrumbs
} from "../../../../core/utils/testData";
import Scroll from "../../../../components/My/ScrollTop/index.js";

export default function NewsLadaMed() {
  return (
    <>
      <Helmet>
        <title>Полезная информация - ЛадаМед</title>
        <meta name="description" content="Helpfull" />
        <meta name="keywords" content="Helpfull" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={helpBreadcrumbs} />
      </section>
      <Scroll />
      <section className="section">
        <Stocksbreadcrimbs items={helpsBreadcrumbs} />
      </section>
    </>
  );
}
