import React from "react";
import Helmet from "react-helmet";
import Breadcrumbs from "../../../components/Common/Breadcrumbs";
import ReviewsBreadcrumbs from "../../../components/My/Reviews/index.js";
import {
  reviewBreadcrumbs,
  reviewsBreadcrumbs
} from "../../../core/utils/testData";
import Scroll from "../../../components/My/ScrollTop/index.js";

export default function Review() {
  return (
    <>
      <Helmet>
        <title>Отзывы - ЛадаМед</title>
        <meta name="description" content="Review" />
        <meta name="keywords" content="Review" />
      </Helmet>
      <section className="section breadcrumbs">
        <Breadcrumbs items={reviewBreadcrumbs} />
        <Scroll />
      </section>
      <section className="section">
        <ReviewsBreadcrumbs items={reviewsBreadcrumbs} />
      </section>
    </>
  );
}
