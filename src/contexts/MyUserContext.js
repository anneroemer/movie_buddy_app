import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({children}) => {

    // const [fromLS, setFromLS ] = useState();

    // useEffect(() => {
    //     setFromLS(JSON.parse(localStorage.getItem("userinfo")))
    // }, []);

    // useEffect(() => {
    //     localStorage.setItem("userinfo", fromLS)
    // }, [fromLS]);

    const [userinfo, setUserinfo] = useState({name: "", handle: "", gender: "", bio: ""})

    const handleUserInfo = (name, handle, gender, bio) => {
        setUserinfo({
            name: name, 
            handle: handle, 
            gender: gender, 
            bio: bio,
          })
    }


    return(
        <UserContext.Provider value={{
        userinfo, 
        handleUserInfo   
        }}>{children}</UserContext.Provider>
    )
    
}
export default UserContextProvider;