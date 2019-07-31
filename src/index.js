import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import PoodleDetail from './components/PoodleDetail.jsx';
import Adopt from './components/Adopt.jsx';
import {Route, BrowserRouter as Router} from 'react-router-dom';


const router = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/poodle-detail/:name" component={PoodleDetail} sensitive/>
            <Route path="/adopt" component={Adopt} />
        </div>
    </Router>
);


ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
