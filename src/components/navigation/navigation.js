import React from 'react';

const Navigation = () => {

  return (
 
    <div className="col-sm-6">
      <nav className="navbar navbar-expand-sm navbar-light float-center">
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarTogglerDemo01" 
          aria-controls="navbarTogglerDemo01" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-dark" />
          Menu
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav  text-white">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#!">
                Top Rated  
                <span className="sr-only">
                  (current)
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link 
                  text-white" 
                href="#!"
              >
                    Movies
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link text-white" 
                href="#!"
              >
                  Discover
              </a>
            </li> 
          </ul>
        </div>
      </nav>
    </div>
      
  );

}

export default Navigation;