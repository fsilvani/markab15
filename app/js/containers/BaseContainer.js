import React from 'react';

import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';

export default ({children}) => (
  <div>
    <HeaderContainer />
    {children}
    <FooterContainer />
  </div>
);
