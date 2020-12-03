import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "components/common";
import { Businesses, Menu } from "components/landing";
import "assets/js/main.js";

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Shop Small Businesses</title>
      <link rel="canonical" href="https://shop-small-businesses.netlify.app/" />
    </Helmet>
    <Menu />
    <Businesses />
  </Layout>
);
