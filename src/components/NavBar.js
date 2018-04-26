import React from 'react';
import { GoogleLogin } from './App.js';

export class NavBar extends React.Component {
    render() {
      return (
          <div>
              {/*bootstrap navbar*/}
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                  <a className="navbar-brand" href="http://DanTheManGude.github.io/forTheLolz">forTheLolz</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                      {/*Github repo where this project can be found*/}
                      <li className="nav-item">
                        <a className="nav-link" href="https://github.com/DanTheManGude/forTheLolz" target="_blank"><i className="fa fa-code" aria-hidden="true"></i> Source</a>
                      </li>
                      {/*mail to link to get in contact with me*/}
                      <li className="nav-item">
                          <a className="nav-link" href="mailto:contact@dangude.com?Subject=forTheLolz%20Contact"><i className="fa fa-envelope" aria-hidden="true"></i> Contact</a>
                      </li>
                      {/*my main homepage*/}
                      <li className="nav-item">
                        <a className="nav-link" href="https://dangude.com" target="_blank"><img src="icons/DG.png" alt="DG" height='25'/> Dan Gude</a>
                      </li>
                      {/*GoogleLogin*/}
                      <li className="nav-item">
                          <a className="nav-link" id='Login' onClick={GoogleLogin}><img src="icons/G.png" alt="Google Login" height='25em'/> Login</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
          </div>
      );
    }
}
