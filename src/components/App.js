import React, { Component } from 'react';
import { store } from '../index.js';
import { NavBar } from './NavBar.js';
import { Banner } from './Banner.js';
import { config } from '../config.js';
export var firebase = require("firebase");

export function GoogleLogin(){
    //Google login
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        store.dispatch({
            type: 'UPDATE_USER',
            email: result.user.email
        });
        var title;
        switch (store.getState().currentUser.status) {
            case 1:
                title = "a member."
                break;
            case 2:
                title = "an admin."
                break;
            default:
                title = "not a member."
        }
        var message = "Welcome " + result.user.email + " you are " + title;
            store.dispatch({
                type: 'ADD_BANNER',
                message: message,
                'kind': 'alert-info'
            });
    }).catch(function(error) {
        store.dispatch({
            type: 'ADD_BANNER',
            message: "Something went wrong trying to login.",
            'kind': 'alert-danger'
        });
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("Error " + errorCode + ": " + errorMessage);
    });
}
class App extends Component {
  constructor(props) {
    super(props);

    // Initialize Firebase
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="App">
        <NavBar />

        {/*main body of the page*/}
        <div className="container default">
          <div className="row">
            <div className="col-lg-12 intro">
              <h2 id="title" className="mt-5">forTheLolz</h2>
              <Banner />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
