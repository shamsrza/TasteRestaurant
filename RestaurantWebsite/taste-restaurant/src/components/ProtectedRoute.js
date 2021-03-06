import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login'


const ProtectedRoute = ({ children, ...rest }) => {

  // const checkValidToken = () => {
  //   const token = localStorage.getItem('token');
    
  //   // Validation logic...
  // }

  return(
        <Route
        {...rest}
        render={() => {
          return localStorage.getItem('token') != undefined ? (children) : <Redirect to= "/login"/>;
        }}
        />
      );
}

export default ProtectedRoute