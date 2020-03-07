import React from "react";
import Helmet from "react-helmet";
import GridRow from "arui-feather/grid-row";
import GridCol from "arui-feather/grid-col";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";
import {
  servisBreadcrumbs,
  ServicesBreadcrumbs
} from "../../../core/utils/testData.js";
import ServisBreadcrumbs from "../../../components/My/Servis/index.js";
import Scroll from "../../../components/My/ScrollTop/index.js";

export default function Servis() {
  return (
    <>
      <Helmet>
        <title>Услуги - ЛадаМед</title>
        <meta name="description" content="Services" />
        <meta name="keywords" content="Services" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={servisBreadcrumbs} />
      </section>
      <Scroll />
      <section className="section">
        <GridRow>
          <GridCol key="Услуги" width={{ mobile: 12, tablet: 9, desktop: 12 }}>
            <div>
              <p className="jobs-title">Услуги</p>
              <ServisBreadcrumbs items={ServicesBreadcrumbs} />
            </div>
          </GridCol>
        </GridRow>
      </section>
    </>
  );
}
