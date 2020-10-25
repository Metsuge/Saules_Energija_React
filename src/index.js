import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './i18n';

ReactDOM.render(
    <Suspense fallback={"Loading..."}>
    <App />
  </Suspense>,
    document.querySelector('#root')
);