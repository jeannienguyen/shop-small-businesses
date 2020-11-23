import React from "react";
import { Layout } from "components/common";
import { Businesses, Menu } from "components/landing";
import "assets/js/main.js";

export default () => (
  <Layout>
    <Menu />
    <Businesses />
  </Layout>
);
