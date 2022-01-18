/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from "react-router-dom";
import { colors } from "../styles/colors";
import { BsFillHouseDoorFill, BsPersonCircle, BsKey } from "react-icons/bs";


const Navigation = () => {

    const style = css`
        position: fixed;
        left: 0;
        bottom: 0;
        height: 2rem;
        width: 100%;
        z-index: 1000;
        background-color: ${colors.deepBlue};
        border-radius: 1rem 1rem 0 0;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        padding: 0.6rem 0;
        box-shadow: 0px -9px 25px 5px rgba(0,0,0,0.37);

        & .nav-link {
            color: ${colors.duskyPink};
            font-size: 1.5rem;
            padding: 0 1.8rem;
        }

        & .nav-link-home {
            background-color: ${colors.duskyPink};
            color: ${colors.deepBlue};
            padding: 0.6rem;
            border-radius: 50%;
            font-size: 1.5rem;
            display: flex;
            align-content: center;
            justify-content: center;
            width: 1.5rem;
            height: 1.5rem;
            border: 3px solid ${colors.deepBlue};
        }
    `;

    return ( 
        <nav css={style}>
            <Link to="myprofile" className='nav-link'><BsPersonCircle /></Link>
            <Link to="/" className='nav-link-home'><BsFillHouseDoorFill /></Link>
            <Link to="signin" className='nav-link'><BsKey /></Link>
        </nav>
     );
}
 
export default Navigation;