import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from "react-router-dom";
import logo from '../../logo-01.png';
import {
  getUserLogin,
  setUserLogin,
} from './loginSlice';

export function Login() {
  const dispatch = useDispatch();
  let history = useHistory();

  const responseFacebook = (response) => {
    console.log(response);
  }
  const responseGoogle = (response) => {
    dispatch(setUserLogin(response.profileObj))
    history.push("/Feed");
  }

  return (
    <div className='login'>
      <div className='box container'>
        <img src={logo}></img>
        <FacebookLogin
          appId="4130262977020802"
          fields="name,email,picture"
          callback={responseFacebook}
          textButton="Login con Facebook"
        />
        <GoogleLogin
          clientId="570862534082-9ulvptbbkhhp4amch00os81rj45cf3cf.apps.googleusercontent.com"
          buttonText="Login con Google"
          onSuccess={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
}
