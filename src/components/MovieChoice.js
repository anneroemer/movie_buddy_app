import { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { colors } from "../styles/colors";


const MovieChoice = ({genre}) => {

    const [checked, setChecked] = useState(true);

    const style = css`
        background-color: ${checked ? colors.orangeRed : colors.deepBlue};
       
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            min-width: 2rem;
            /* background-color: ${colors.deepBlue}; */
            border-radius: 1000px;
            padding: 0 0.1rem;
            color: ${colors.duskyPink};

        input[type=checkbox] {
            opacity: 0;
        }
    `;

    return ( 
        <div className='movie-choice' css={style} onClick={() => {
            setChecked(!checked);
            console.log(checked)
        }}>
            <p>{genre}</p>
            <input type="checkbox" name={genre} id="" />
        </div>
     );
}
 
export default MovieChoice;