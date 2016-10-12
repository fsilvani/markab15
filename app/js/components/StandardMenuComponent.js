import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { browserHistory } from 'react-router';

import ConfiguredRadium  from './../utils/ConfiguredRadium';

const StandardMenuComponent = ConfiguredRadium(({routing, styles = {}, items}) => {
  const elementClicked = (e, menuItem) => {
    e.preventDefault();
    browserHistory.push(menuItem);
  }
  return (
    <ul className="standard-menu" style={styles.listStyles || {}}>
      {items.map((itemMenu, index) => (
        <li key={index} style={styles.itemListStyles || {}}>
          <a key={index} href={itemMenu.url} onClick={e => elementClicked(e, itemMenu.url)}
            style={[
              styles.linkStyles,
              {backgroundColor: (itemMenu.url == routing)?'black':'yellow'},
              {color: (itemMenu.url == routing)?'white':'black'}]
            }>
            {itemMenu.name}
          </a>
        </li>
      ))}
    </ul>
  );
});

const mapStateToProps = (state) => {
  return {
    routing: state.routing.locationBeforeTransitions.pathname
  }
};

export default connect(mapStateToProps)(StandardMenuComponent);
