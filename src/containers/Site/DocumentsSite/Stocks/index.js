import React from "react";
import Helmet from "react-helmet";
import Breadcrumbs from "../../../../components/Common/Breadcrumbs";
import Stocksbreadcrimbs from "../../../../components/My/Stocksbreadcrimbs/index.js";
import {
  stockBreadcrumbs,
  stocksBreadcrumbs
} from "../../../../core/utils/testData";
import Scroll from "../../../../components/My/ScrollTop/index.js";
import "./styls.scss";
export default function NewsLadaMed() {
  return (
    <>
      <Helmet>
        <title>Акции - ЛадаМед</title>
        <meta name="description" content="Stocks" />
        <meta name="keywords" content="Stocks" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={stocksBreadcrumbs} />
      </section>
      <section className="section">
        <Scroll />
        <Stocksbreadcrimbs items={stockBreadcrumbs} />
      </section>
    </>
  );
}
