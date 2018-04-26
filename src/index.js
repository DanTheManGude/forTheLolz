import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { users } from './users.js';

const findStatus = (email) => {
    var name = email.substring(0, email.lastIndexOf("@"));
    var domain = email.substring(email.lastIndexOf("@") +1);
    if (domain !== "g.rit.edu") {
        return 0;
    } else if (users.members.includes(name)) {
        return 1;
    } else if (users.admins.includes(name)) {
        return 2;
    } else {
        return 0;
    }
}

//reducer current loggedin user
const currentUser = (state = {'email': null, 'status': 0}, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            var email = action.email;
            var status = findStatus(email);
            return {
                'email': email,
                'status': status
            }
        default:
            return state;
        }
}

//reducer for the banner
const banners = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BANNER':
            return state.concat({'message': action.message, 'type': action.kind});
        case 'REMOVE_BANNER':
            var newS = state;
            newS.splice(action.id, 1);
            return newS;
        default:
            return state;
        }
}

//main reducer
const appState = combineReducers({
    currentUser,
    banners
});

//redux store
export const store = createStore(appState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//root render of the application
const render = () => {
    ReactDOM.render(
        <div>
            <App />
        </div>,
        document.getElementById('root')
    );
};

//linking the store to rendering the application
store.subscribe(render);
render();

registerServiceWorker();
