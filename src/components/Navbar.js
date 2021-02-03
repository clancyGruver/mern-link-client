import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

export const Navbar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();
  const logOutHandler = event => {
    event.preventDefault();
    auth.logOut();
    history.push('/');
  };

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem',}}>
        <span className="brand-logo">Сокращение ссылок</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/create">Создать</NavLink></li>
          <li><NavLink to="/links">Ссылки</NavLink></li>
          <li><a href="/" onClick={logOutHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}