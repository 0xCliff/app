import { createContext, useState } from 'react';

const AuthContext = createContext();

function Provider({ children }) {
  const { isLoggedIn, setIsLoggedIn } = useState(false);

  const valueToShare = {
    isLoggedIn,
  };

  return (
    <AuthContext.Provider value={valueToShare}>{children}</AuthContext.Provider>
  );
}

export { Provider };
export default AuthContext;
