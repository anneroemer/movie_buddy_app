import { createContext } from "react";


export const UserContext = createContext();

const UserContextProvider = ({children}) => {

    const [movieChoices, setMovieChoices] = useState([]);



    return(
        <UserContext.Provider value={{
            movieChoices
        }}>{children}</UserContext.Provider>
    )
    
}
export default UserContextProvider;