/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Avatar from '../components/Avatar';
import { colors } from '../styles/colors';
import { motion } from "framer-motion";

const MyProfile = () => {

    const style = css`
        background-color: ${colors.duskyPink};
        height: 100vh;
        border-radius: 1rem 1rem 0 0;
        width: 100vw;
        position: relative;
        top: 15rem;

        & .top {
            display: flex;
            justify-content: center;
        }

        & .movie-choice {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 8rem;
            background-color: ${colors.deepBlue};
            border-radius: 1000px;
            padding: 0 0.1rem;
            color: ${colors.duskyPink};
        }

        & .movie-choice-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            grid-gap: 1rem;
            justify-items: center;
        }
    `;

    return ( 
        <>
            <motion.div animate={{y:-150}}>
                <div css={style}>
                    <div className='top'>
                        <Avatar />
                    </div>
                    <h2>Hi Jane Doe</h2>
                    <select name="gender" id="gender">
                        <option value="woman">Woman</option>
                        <option value="man">Man</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="other">Others</option>
                    </select>
                    <h4>Bio</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos unde quam quaerat explicabo! Omnis unde explicabo eligendi veniam ipsum non! Quidem, sapiente dolor! Porro laudantium aliquid amet quo est magnam!</p>
                    <h4>Movie genres</h4>
                    <div className='movie-choice-container'>
                        <div className='movie-choice'>
                            <p>Horror</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='movie-choice'>
                            <p>Romance</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='movie-choice'>
                            <p>Comedy</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='movie-choice'>
                            <p>Documentary</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div className='movie-choice'>
                            <p>Indie</p>
                            <input type="checkbox" name="" id="" />
                        </div>
                    </div>       
                </div>
            </motion.div>
        </>
     );
}
 
export default MyProfile;