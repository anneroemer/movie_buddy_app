import { css } from "@emotion/react";
import { colors } from "./colors";

export const Globalstyles = css`
    
    body {
        margin: 0;
        min-width: 100%;
        min-width: 100vw;
        box-sizing: border-box;
        min-height: 100vh;
        min-height: 100%;
        background-color: ${colors.deepBlue};
    }

    a {
        text-decoration: none;
    }
`;