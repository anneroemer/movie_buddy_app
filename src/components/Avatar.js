/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


import { BsPersonCircle } from "react-icons/bs";
import { colors } from '../styles/colors';

const Avatar = () => {

    const style = css`
        background-color: ${colors.duskyPink};
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid ${colors.duskyPink};
        position: relative;
        top: -1rem;
        z-index: 400;

        & .icon {
            color: ${colors.deepBlue};
            font-size: 3rem;
        }
    `;

    return ( 
        <div css={style}>
            <BsPersonCircle className='icon'/>
        </div>
     );
}
 
export default Avatar;