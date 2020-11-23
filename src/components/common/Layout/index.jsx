import React from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header, Footer } from "components/theme";
import { Global } from "./styles";
// import './fonts.css';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Global />
          {children}
        </Row>
      </Container>
      <Footer />
    </>
  );
};
