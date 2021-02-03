import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { useAuth } from './hooks/auth.hook';
import { AuthContext } from './context/auth.context';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';

import 'materialize-css';

function App() {
  const { userId, token, logIn, logOut, ready, } = useAuth();
  const isAuthenticate = !!token;
  const routes = useRoutes(isAuthenticate);

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{token, logIn, logOut, userId, isAuthenticate}}>
      <Router>
        { isAuthenticate && <Navbar /> }
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
