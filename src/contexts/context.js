import React, {createContext} from 'react'

export const MyContext = createContext()

export default function Provider({children}){



    return(
        <MyContext.Provider 
        value={
            
        }>

        </MyContext.Provider>
    )
}