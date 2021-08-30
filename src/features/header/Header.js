import React, {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import logo from '../../logo-01.png';
import {
  logOut,
  getUserLogin,
} from '../login/loginSlice';

export function Header() {
  const user = useSelector(getUserLogin);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if(!user.email) history.push('/')

  })
  return (
    <header>
      <div className='container'>
        <img src={logo} className='logo'></img>
        <div className='profile'>
          <img src={user.imageUrl}></img>
          <div className='user'>
            <span className='name'>{user.name}</span>
            <span className='email'>{user.email}</span>
          </div>
          <button className='btn' onClick={() => dispatch(logOut())}>cerrar sesión</button>
        </div>
      </div>
      <div className='line'></div>
    </header>
  );
}
