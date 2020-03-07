import React from "react";
import Helmet from "react-helmet";
import Breadcrumbs from "../../../../components/Common/Breadcrumbs";
import {
  superBreadcrumbs,
  SuperBreadcrumbs
} from "../../../../core/utils/testData";
import SupersBreadcrumbs from "../../../../components/My/superBreadcrumbs/index.js";
import "./styles.scss";
export default function Supervisory() {
  return (
    <>
      <Helmet>
        <title>Надзорные органы - ЛадаМед</title>
        <meta name="description" content="Supervisory" />
        <meta name="keywords" content="Supervisory" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={superBreadcrumbs} />
      </section>
      <SupersBreadcrumbs items={SuperBreadcrumbs} />
    </>
  );
}
