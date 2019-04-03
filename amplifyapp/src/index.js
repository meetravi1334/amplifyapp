import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ButtonLike from './ButtonLike';
import * as serviceWorker from './serviceWorker';

const e = React.createElement;
ReactDOM.render(<App />, document.getElementById('root'));
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(ButtonLike), domContainer);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
