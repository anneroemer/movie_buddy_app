/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Map from "../components/Map";
import { useEffect, useState } from 'react';
import axios from "axios";
import SmallUser from '../components/SmallUser';
import { colors } from '../styles/colors';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
//import { motion } from 'framer-motion';

const Home = () => {

    const [users, setUsers] = useState();
	const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        axios(`/users.json`, {
        })
        .then((result) => {
            //console.log(result.data)
            setUsers(result.data)
        });
    }, []);

    const style = css`

        & .users-container {
            position: absolute;
            width: 100vw;
            top: 0rem;
            right: 0;
            z-index: 600;
            overflow: scroll;
            background-color: ${colors.deepBlue};
            border-radius: 0 0 1rem 1rem;
            box-shadow: 4px 9px 25px 5px rgba(0,0,0,0.37);

        }
        & .users-list {
            list-style: none;
            padding-left: 0;
            display: flex;
            overflow: scroll;
            scrollbar-width: none; 
            margin: 0.5rem 0 0;
        }
        & .users-list::-webkit-scrollbar {
            display: none;
        }
        & .open-close {
            display: flex;
            justify-content: end;
        }
        & .cross {
            color: ${colors.duskyPink};
            padding: 0.6rem 0.7rem;
        }
    `;

    return ( 
        <div css={style}>
                    <div className='users-container'>
                        {isVisible ?
                            <ul className='users-list'>
                                {users?.map((user, index) => (
                                    <SmallUser key={index} name={user.name} handle={user.handle}/>
                                    ))}
                            </ul>
                        : null}
                    <div className='open-close' onClick={() => {
                        setIsVisible(!isVisible);
                    }}>
                            {isVisible ? <FaChevronUp className='cross' /> : <FaChevronDown className='cross' /> }
                    </div>
                </div>
            <Map />
        </div>
     );
}
 
export default Home;