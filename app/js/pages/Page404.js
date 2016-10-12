import React from 'react';
import { browserHistory } from 'react-router'

const handleGoBack = (e) => {
  e.preventDefault();
  browserHistory.goBack();
}

export default (props) => (
  <div>
    <h1>404 - Not Found</h1>
    <h2>La página a la quedea acceder no se enuentra disponible.</h2>
    {/* <a href="#" onClick={e => handleGoBack(e)}>Volver</a> */}
  </div>
);
