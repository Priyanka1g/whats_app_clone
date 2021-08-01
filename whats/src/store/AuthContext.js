import React, { useReducer } from 'react'

const AuthContext = React.createContext()

export const AuthContextProvider=({reducer, initialState, children})=>{
    return <AuthContext.Provider value={useReducer(reducer, initialState)}>{children}</AuthContext.Provider>
}

export default AuthContext