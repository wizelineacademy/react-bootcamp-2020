import React from 'react'

const UserContext = React.createContext()

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer
export const initialSearch = 'Wizeline'

export default UserContext