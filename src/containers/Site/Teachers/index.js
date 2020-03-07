import React from "react";
import Helmet from "react-helmet";
import GridRow from "arui-feather/grid-row";
import GridCol from "arui-feather/grid-col";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";
import TeacherBlock from "../../../components/Site/TeacherBlock";
import { DoctorBreadcrumbs, doctorlist } from "../../../core/utils/testData";
import "./styles.scss";

/**
 *  Teachers
 */
export default function Doctors() {
  return (
    <>
      <Helmet>
        <title>Наши специалисты</title>
        <meta name="description" content="Teachers" />
        <meta name="keywords" content="Teachers" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={DoctorBreadcrumbs} />
      </section>
      <section className="section">
        <GridRow>
          {doctorlist.map(doctor => (
            <GridCol
              key={doctor.title}
              width={{ mobile: 12, tablet: 6, desktop: 4 }}
              className="doctorblock"
            >
              <TeacherBlock doctor={doctor} />
            </GridCol>
          ))}
        </GridRow>
      </section>
    </>
  );
}
