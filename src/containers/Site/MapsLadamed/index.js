import React, { Component } from "react";
import GridRow from "arui-feather/grid-row";
import GridCol from "arui-feather/grid-col";
import Helmet from "react-helmet";
import Scroll from "../../../components/My/ScrollTop/index.js";
import { Maps, mapsBreadcrumbs } from "../../../core/utils/testData";
import Mapss from "../../../components/My/Maps/index.js";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";
import "./styles.scss";
class Mapslad extends Component {
  render() {
    return (
      <section className="section">
        <div className="maps-contact">
          <Helmet>
            <title>Контакты - ЛадаМед</title>
            <meta name="description" content="Maps" />
            <meta name="keywords" content="Maps" />
          </Helmet>
          <Breadcrumbs items={mapsBreadcrumbs} />
          <Scroll />
          <GridRow gutter={{ mobile: 24, tablet: 24, desktop: 24 }}>
            <GridCol
              width={{ mobile: 12, tablet: 12, desktop: 12 }}
              className="online-learning-item"
            >
              <Mapss items={Maps} />
            </GridCol>
          </GridRow>
        </div>
      </section>
    );
  }
}

export default Mapslad;
