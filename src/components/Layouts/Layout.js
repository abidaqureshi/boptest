import React from 'react';
import AppHeader from '../header/header';
import '../../css/alert_modal.css';
import '../../css/Layout.css';
/*
    Layout container which holds the 
    Auto complete search component
*/

const Layout = props => {

  return (
       
    <div>
      <AppHeader /> 
      <main role="main">
        {props.children}       
      </main>
    </div>

  );
};

export default Layout;
