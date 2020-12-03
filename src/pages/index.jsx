import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "components/common";
import { Businesses, Menu } from "components/landing";
import Thumbnail from "../assets/thumbnail/shop-small-businesses.png";
import "assets/js/main.js";

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="image" content={Thumbnail} />
      <meta
        property="og:url"
        content={"https://shop-small-businesses.netlify.app/"}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={"Shop Small Businesses"} />
      <meta
        property="og:description"
        content={
          "Shop small businesses this year - each order makes a world of difference."
        }
      />
      <meta property="og:image" content={Thumbnail} />
      <title>Shop Small Businesses</title>
      <link rel="canonical" href="https://shop-small-businesses.netlify.app/" />
    </Helmet>
    <Menu />
    <Businesses />
  </Layout>
);
