import React from "react";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header, Footer } from "components/theme";
import { Global, Container } from "./styles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Row>
        <Global />
        {children}
      </Row>
      <Footer />
    </Container>
  );
};
