import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Avatar from '../components/Avatar';
import { colors } from '../styles/colors';
import { motion } from "framer-motion";
import MovieChoice from '../components/MovieChoice';
import axios from "axios";
import NoMatch from "../components/NoMatch";
import { useNavigate } from "react-router-dom";



const UserInfo = () => {
    let params = useParams();
    let navigate = useNavigate();
    //console.log(params.handle)

    const [user, setUser] = useState();

    useEffect(() => {
        axios(`users.json`, {
        })
        .then((result) => {
            let user = result.data.filter(userArray => params.handle === userArray.handle);
            console.log(user)
            user.length === 0 ? navigate("*") : setUser(user[0])
            
        })
    }, [params.handle, navigate]);



    const style = css`
    background-color: ${colors.duskyPink};
    height: 100vh;
    border-radius: 1rem 1rem 0 0;
    width: 100%;
    max-width: 100vw;
    position: relative;
    top: 15rem;
    text-align: start;
    box-shadow: 4px 9px 25px 5px rgba(0,0,0,0.70);


    & .profile-content {
        padding: 0 1.5rem 1.5rem;
    }

    & .top {
        display: flex;
        justify-content: center;
    }

    & .movie-choice-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-gap: 1rem;
    }
    & .profile-name {
        color: ${colors.deepBlue};
        margin:0;
    }
    & .profile-handle {
        color: ${colors.deepBlue};
        font-size: 0.6rem;
        margin: 0 0 1rem;
    }
    & .text-area {
        appearance: none;
        background-color: ${colors.lightPink};
        color: ${colors.deepBlue};
        border: none;
        border-radius: 1rem;
        padding: 0.5rem;
        font-size: 0.8rem;
        resize: none;
    }
    & .text-area::placeholder {
        appearance: none;
        font-family: inter, sans-serif;
        color: ${colors.deepBlue};

    }
    & .select-gender {
        color: ${colors.deepBlue};
        background-color: ${colors.lightPink};
        width: 6rem;
        border: none;
        padding: 0.03rem 0.7rem;
        border-radius: 1rem;
        font-size: 0.8rem;
        

    }
`;

    return ( 
            <motion.div animate={{y:-150}}>
                <div css={style}>
                    <div className='top'>
                        <Avatar image={user?.image} />
                    </div>
                    <div className='profile-content'>
                        <h2 className='profile-name'>{user?.name}</h2>
                        <p className='profile-handle'>@{params.handle}</p>
                        <div className='select-gender'>
                            <p>{user?.gender}</p>
                        </div>
                        <h4>bio</h4>
                        <textarea className="text-area" name="bio-text" rows="5" cols="36" placeholder={user?.bio}/>
                        <h4>movie genres</h4>
                        <div className='movie-choice-container'>
                            <MovieChoice genre="Sci-fi"  />
                            <MovieChoice genre="Romance" />
                            <MovieChoice genre="Horror" />
                            <MovieChoice genre="Drama" />
                            <MovieChoice genre="Comedy" />
                            <MovieChoice genre="Documentary" />
                        </div> 
                    </div>     
                </div>
            </motion.div>
     );
}
 
export default UserInfo;