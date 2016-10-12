//Dependencies
import React from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';
//Pages
import App from './App';
import Page404 from './pages/Page404';
// Site sections
import HomePage from './pages/HomePage';
import QuienesSomosPage from './pages/sections/QuienesSomosPage';
import DocumentacionPage from './pages/sections/DocumentacionPage';
import FormasDePagoPage from './pages/sections/FormasDePagoPage';
import ContactanosPage from './pages/sections/ContactanosPage';

export default (store) => (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Redirect from="inicio" to="/" />
    <Route path="quienes-somos" component={QuienesSomosPage} />
    <Route path="documentacion" component={DocumentacionPage} />
    <Route path="formas-de-pago" component={FormasDePagoPage} />
    <Route path="contactanos" component={ContactanosPage} />
    <Route path="*" component={Page404} />
  </Route>
);
