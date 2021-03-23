import React, {useState, createContext, useContext} from "react";


const ConnectionContext = createContext(initalConnection);

export const useConnectionContext = () => useContext(ConnectionContext)

export const ConnectionProvider = ({children}) => {
    const [connection, setConnection] = useState('');
    
    return (
        <ConnectiomContext.Provider value={{connection, setConnection}}>
            {children}
        </ConnectiomContext.Provider>
        )
    }