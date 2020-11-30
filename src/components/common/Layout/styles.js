import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Global = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    * {
        box-sizing: inherit;
    }
    *:before {
        box-sizing: inherit;
    }
    *:after {
        box-sizing: inherit;
    }

    body {

        font-family: 'Montserrat';

        .col-md-4 {
            flex: 100%;
            max-width: 100%;
        }
        .col-md-8 {
            flex: 100%;
            max-width: 100%;
        }

        h1, h2 {
            font-weight: 700;
        }

        h2 {
            color: #7fddd6;
        }

        .business {
            padding-top: 2rem;
        }

        .menu {
            position: sticky;
            top: 0rem;
            padding-top: 2rem;
            overflow: auto;
            height: 100vh;
        }

        @media (min-width: 769px) {
            .col-md-4 {
                flex: 0 0 33.333333%;
                max-width: 33.333333%;
            }
            .col-md-8 {
                flex: 0 0 66.666667%;
                max-width: 66.666667%;
            }
        }

        @media (max-width: 768px) {
            .menu {
                opacity: 0;
                position: absolute;
                top: 0;
                left: 0;
                display: none;
                background: #7fddd6;
                z-index: 1;
                transition: opacity .5s ease-in-out;
                -moz-transition: opacity .5s ease-in-out;
                -webkit-transition: opacity .5s ease-in-out;
            }
            .menu-open {
                position: fixed;
                display: block;
                opacity: 1;
                transition: opacity .5s ease-in-out;
                -moz-transition: opacity .5s ease-in-out;
                -webkit-transition: opacity .5s ease-in-out;
            }
        }

        @media (max-width: 480px) {
            h1, h2 {
                font-size: 2rem;
            }

            h1 {
                margin: 0;
            }
        }
    }
`;

export const Container = styled.div`
  max-width: 1140px;
  padding: 2rem;
  margin: 0 auto;
`;
