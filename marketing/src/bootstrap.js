import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
    ReactDOM.render(
        <App />, 
        el
    );
};

if (process.env.NODE_ENV === 'development') {
    const elRoot = document.querySelector('#_marketing-div-root');

    if (elRoot) {
        mount(elRoot);
    }
}

export { mount };