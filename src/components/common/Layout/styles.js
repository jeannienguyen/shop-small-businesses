import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body {
        &.menu-fixed {
            position: fixed;
        }

        .menu {
            position: sticky;
            top: 0rem;
            padding-top: 2rem;
            overflow: auto;
            height: 100vh;
        }

        @media (max-width: 768px) {
            .menu {
                display: none;
                position: absolute;
                background: #7fddd6;
                z-index: 1;
            }
            .menu-open {
                display: block;
            }
        }
    }
`;
