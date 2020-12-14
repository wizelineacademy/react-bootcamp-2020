import React, { useContext, useState, useEffect, useCallback} from 'react'
const USER = {
    id: '123',
    name: 'wizeline',
    avatarUrl:
      'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  }
  const PASSWORD = 'Rocks!'


const AuthContext = React.createContext(null)

function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error(`Can't use "useAuth" without an AuthContext!`);
    }
    return context;
  }

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const login = useCallback((name, password) => {
      if (name===USER.name && password === PASSWORD) {
        sessionStorage.setItem("session", JSON.stringify(USER))
        setUser(USER);
      } else {
        throw new Error("Invalid credentials");
      }
    }, []);
    const logout = useCallback(() => {
      sessionStorage.removeItem("session");
      setUser(null);
    }, []);
    useEffect(() => {
      const session = sessionStorage.getItem("session");
      if (session) {
        setUser(JSON.parse(session));
      }
    }, [])
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    )
  }
  export { useAuth };
  export default AuthProvider;