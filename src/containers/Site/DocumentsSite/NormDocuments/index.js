import React from "react";
import Helmet from "react-helmet";
import Breadcrumbs from "../../../../components/Common/Breadcrumbs";
import { normBreadcrumbs } from "../../../../core/utils/testData";
import file1 from "../../../../theme/images/FileDocuments/1.pdf";
import file2 from "../../../../theme/images/FileDocuments/2.pdf";
import Scroll from "../../../../components/My/ScrollTop/index.js";

export default function NormLadaMed() {
  return (
    <>
      <Helmet>
        <title>Нормативные документы - ЛадаМед</title>
        <meta name="description" content="NormDoc" />
        <meta name="keywords" content="NormDoc" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={normBreadcrumbs} />
      </section>
      <Scroll />
      <div className="section">
        <br />
        <br />
        <a href={file1} target="_black" className="section-norm-document">
          ОГРН
        </a>
        <br />
        <br />
        <br />
        <a href={file2} target="_black" className="section-norm-document">
          ЕГРЮЛ
        </a>
      </div>
    </>
  );
}
