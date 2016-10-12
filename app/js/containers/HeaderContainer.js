import React, { Component } from 'react';

import ConfiguredRadium  from './../utils/ConfiguredRadium';
import { Style } from 'radium';
// import {Drawer} from 'react-toolbox/lib/drawer';

import styles  from './HeaderContainerStyles';

import StandardMenuComponent from './../components/StandardMenuComponent';
import FunnyMenuComponent from './../components/FunnyMenuComponent';

import {standardMenuItems, funnyMenuItems} from '../utils/menuItems';

class HeaderContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuExpanded: true
    }
    this.toggleMenuExpanded = this.toggleMenuExpanded.bind(this);
  }
  toggleMenuExpanded(){
    this.setState({
      menuExpanded: !this.state.menuExpanded
    });
  }
  render() {
    const {menuExpanded} = this.state;
    const {} = this.props;
    const context = {
      menuExpanded: menuExpanded
    };
    return (
      <header className="header">
        <Style rules={styles} />
        <img src="./web/assets/images/brand/logo.png" alt="Markab15 logo" />
        <nav className="main-menu">
          <div onClick={this.toggleMenuExpanded}>Menu</div>
          {/* <Drawer active={menuExpanded} onOverlayClick={this.toggleMenuExpanded}> */}
            <StandardMenuComponent items={standardMenuItems} />
            <StandardMenuComponent items={funnyMenuItems} />
          {/* </Drawer> */}
        </nav>
      </header>
    );
  }
};

export default ConfiguredRadium(HeaderContainer);
