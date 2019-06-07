import React from 'react';
import Logo from '../../assets/img/logo.png'
import Navigation from '../navigation/navigation';


const AppHeader = () => {

    return (

      <header>
        <div className="container-fluid">
          <div className="row" id="header">
            <div className="col-sm-1 pt-3">
              <i className="fa fa-bars float-right font-bar" />
            </div>
            <div className="col-sm-2">
              <img src={Logo} alt="Movies hunt" className="pt-1 img-size" />
              <span className="float-right pt-3">MovieHunt</span>
            </div>
            <Navigation />
            <div className="col-sm-3">
              <ul className="list-unstyled  d-flex">
                <li className="pt-3">Login</li>
                <li>
                  <a 
                    href="#!"
                  >
                    <button 
                      type="button" 
                      className="btn btn-signup"
                    >
                      Sign UP 
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

    );


};

export default AppHeader;