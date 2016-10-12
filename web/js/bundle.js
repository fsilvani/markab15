(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    "div",
    { className: "general-wrapper" },
    children
  );
};

},{"react":"react"}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FunnyMenuComponent = function (_React$Component) {
  _inherits(FunnyMenuComponent, _React$Component);

  function FunnyMenuComponent() {
    _classCallCheck(this, FunnyMenuComponent);

    return _possibleConstructorReturn(this, (FunnyMenuComponent.__proto__ || Object.getPrototypeOf(FunnyMenuComponent)).apply(this, arguments));
  }

  _createClass(FunnyMenuComponent, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "ul",
        { className: "funny-menu" },
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            "El viaje"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Equipaje"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Social media"
          )
        ),
        _react2.default.createElement(
          "li",
          null,
          _react2.default.createElement(
            "a",
            { href: "#" },
            "Lista de 15"
          )
        )
      );
    }
  }]);

  return FunnyMenuComponent;
}(_react2.default.Component);

exports.default = FunnyMenuComponent;
;

},{"react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _ConfiguredRadium = require('./../utils/ConfiguredRadium');

var _ConfiguredRadium2 = _interopRequireDefault(_ConfiguredRadium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StandardMenuComponent = (0, _ConfiguredRadium2.default)(function (_ref) {
  var routing = _ref.routing;
  var _ref$styles = _ref.styles;
  var styles = _ref$styles === undefined ? {} : _ref$styles;
  var items = _ref.items;

  var elementClicked = function elementClicked(e, menuItem) {
    e.preventDefault();
    _reactRouter.browserHistory.push(menuItem);
  };
  return _react2.default.createElement(
    'ul',
    { className: 'standard-menu', style: styles.listStyles || {} },
    items.map(function (itemMenu, index) {
      return _react2.default.createElement(
        'li',
        { key: index, style: styles.itemListStyles || {} },
        _react2.default.createElement(
          'a',
          { key: index, href: itemMenu.url, onClick: function onClick(e) {
              return elementClicked(e, itemMenu.url);
            },
            style: [styles.linkStyles, { backgroundColor: itemMenu.url == routing ? 'black' : 'yellow' }, { color: itemMenu.url == routing ? 'white' : 'black' }] },
          itemMenu.name
        )
      );
    })
  );
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    routing: state.routing.locationBeforeTransitions.pathname
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(StandardMenuComponent);

},{"./../utils/ConfiguredRadium":17,"react":"react","react-redux":"react-redux","react-router":"react-router"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HeaderContainer = require('./HeaderContainer');

var _HeaderContainer2 = _interopRequireDefault(_HeaderContainer);

var _FooterContainer = require('./FooterContainer');

var _FooterContainer2 = _interopRequireDefault(_FooterContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_HeaderContainer2.default, null),
    children,
    _react2.default.createElement(_FooterContainer2.default, null)
  );
};

},{"./FooterContainer":5,"./HeaderContainer":6,"react":"react"}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    "footer",
    { className: "footer" },
    "T: ",
    _react2.default.createElement(
      "a",
      { href: "tel:+5402392422543" },
      "AR+54 (02392) 42-2543"
    ),
    _react2.default.createElement("br", null),
    "\xA92016 - Markab15 es una marca de Markab Viajes."
  );
};

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ConfiguredRadium = require('./../utils/ConfiguredRadium');

var _ConfiguredRadium2 = _interopRequireDefault(_ConfiguredRadium);

var _radium = require('radium');

var _HeaderContainerStyles = require('./HeaderContainerStyles');

var _HeaderContainerStyles2 = _interopRequireDefault(_HeaderContainerStyles);

var _StandardMenuComponent = require('./../components/StandardMenuComponent');

var _StandardMenuComponent2 = _interopRequireDefault(_StandardMenuComponent);

var _FunnyMenuComponent = require('./../components/FunnyMenuComponent');

var _FunnyMenuComponent2 = _interopRequireDefault(_FunnyMenuComponent);

var _menuItems = require('../utils/menuItems');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderContainer = function (_Component) {
  _inherits(HeaderContainer, _Component);

  function HeaderContainer(props) {
    _classCallCheck(this, HeaderContainer);

    var _this = _possibleConstructorReturn(this, (HeaderContainer.__proto__ || Object.getPrototypeOf(HeaderContainer)).call(this, props));

    _this.state = {
      menuExpanded: true
    };
    _this.toggleMenuExpanded = _this.toggleMenuExpanded.bind(_this);
    return _this;
  }

  _createClass(HeaderContainer, [{
    key: 'toggleMenuExpanded',
    value: function toggleMenuExpanded() {
      this.setState({
        menuExpanded: !this.state.menuExpanded
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var menuExpanded = this.state.menuExpanded;

      _objectDestructuringEmpty(this.props);

      var context = {
        menuExpanded: menuExpanded
      };
      return _react2.default.createElement(
        'header',
        { className: 'header' },
        _react2.default.createElement(_radium.Style, { rules: _HeaderContainerStyles2.default }),
        _react2.default.createElement('img', { src: './web/assets/images/brand/logo.png', alt: 'Markab15 logo' }),
        _react2.default.createElement(
          'nav',
          { className: 'main-menu' },
          _react2.default.createElement(
            'div',
            { onClick: this.toggleMenuExpanded },
            'Menu'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_StandardMenuComponent2.default, { items: _menuItems.standardMenuItems }),
            _react2.default.createElement(_StandardMenuComponent2.default, { items: _menuItems.funnyMenuItems })
          )
        )
      );
    }
  }]);

  return HeaderContainer;
}(_react.Component);

;

exports.default = (0, _ConfiguredRadium2.default)(HeaderContainer);

},{"../utils/menuItems":18,"./../components/FunnyMenuComponent":2,"./../components/StandardMenuComponent":3,"./../utils/ConfiguredRadium":17,"./HeaderContainerStyles":7,"radium":79,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

var _styleVariables = require('./../utils/styleVariables');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  '.header': {
    backgroundColor: _styleVariables.colors.cyan + ' !important',
    color: _styleVariables.colors.pink + ' !important'
  },
  '.header:before': {
    content: 'hello'
  }
  // list: {
  //   listStyle: 'none',
  //   margin: 0,
  //   padding: 0,
  // },
  // items: {
  //   margin: 0,
  //   padding: 0,
  //   display: 'inline-block',
  // },
  // links: {
  //   display: 'block',
  //   padding: '0.3em',
  //   color: colors.magenta,
  //   ':hover': {
  //     color: colors.pink,
  //   }
  // }
};
var prefixer = new _inlineStylePrefixer2.default({ userAgent: navigator.userAgent });
var prefixedStyles = prefixer.prefix(styles);
exports.default = prefixedStyles;

},{"./../utils/styleVariables":19,"inline-style-prefixer":38}],8:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _AppReducer = require('./reducers/AppReducer');

var _AppReducer2 = _interopRequireDefault(_AppReducer);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _radium = require('radium');

var _radiumNormalize = require('radium-normalize');

var _radiumNormalize2 = _interopRequireDefault(_radiumNormalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Add the reducer to your store on the `routing` key
//Dependencies
var store = (0, _redux.createStore)(_AppReducer2.default);

// Create an enhanced history that syncs navigation events with the store
var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

(0, _reactDom.render)(_react2.default.createElement(
  _radium.StyleRoot,
  null,
  _react2.default.createElement(_radium.Style, { rules: _radiumNormalize2.default }),
  _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_reactRouter.Router, { history: history, routes: (0, _routes2.default)(store) })
  )
), document.querySelector('#app'));

},{"./reducers/AppReducer":15,"./routes":16,"radium":79,"radium-normalize":67,"react":"react","react-dom":"react-dom","react-redux":"react-redux","react-router":"react-router","react-router-redux":"react-router-redux","redux":"redux"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseContainer = require('../containers/BaseContainer');

var _BaseContainer2 = _interopRequireDefault(_BaseContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    _BaseContainer2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'home-page' },
      _react2.default.createElement(
        'h1',
        null,
        'Home Page'
      )
    )
  );
};

},{"../containers/BaseContainer":4,"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleGoBack = function handleGoBack(e) {
  e.preventDefault();
  _reactRouter.browserHistory.goBack();
};

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - Not Found'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'La p\xE1gina a la quedea acceder no se enuentra disponible.'
    )
  );
};

},{"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseContainer = require('../../containers/BaseContainer');

var _BaseContainer2 = _interopRequireDefault(_BaseContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    _BaseContainer2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'contactanos-page' },
      _react2.default.createElement(
        'h1',
        null,
        'Contactanos'
      )
    )
  );
};

},{"../../containers/BaseContainer":4,"react":"react"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseContainer = require('../../containers/BaseContainer');

var _BaseContainer2 = _interopRequireDefault(_BaseContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    _BaseContainer2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'documentacion-page' },
      _react2.default.createElement(
        'h1',
        null,
        'Documentacion'
      )
    )
  );
};

},{"../../containers/BaseContainer":4,"react":"react"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseContainer = require('../../containers/BaseContainer');

var _BaseContainer2 = _interopRequireDefault(_BaseContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    _BaseContainer2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'formas-de-pago-page' },
      _react2.default.createElement(
        'h1',
        null,
        'Formas de Pago'
      )
    )
  );
};

},{"../../containers/BaseContainer":4,"react":"react"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BaseContainer = require('../../containers/BaseContainer');

var _BaseContainer2 = _interopRequireDefault(_BaseContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    _BaseContainer2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'quienes-somos-page' },
      _react2.default.createElement(
        'h1',
        null,
        'Quienes Somos'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      )
    )
  );
};

},{"../../containers/BaseContainer":4,"react":"react"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

//Dependencies
var AppReducer = (0, _redux.combineReducers)({
  routing: _reactRouterRedux.routerReducer
});

exports.default = AppReducer;

},{"react-router-redux":"react-router-redux","redux":"redux"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _Page = require('./pages/Page404');

var _Page2 = _interopRequireDefault(_Page);

var _HomePage = require('./pages/HomePage');

var _HomePage2 = _interopRequireDefault(_HomePage);

var _QuienesSomosPage = require('./pages/sections/QuienesSomosPage');

var _QuienesSomosPage2 = _interopRequireDefault(_QuienesSomosPage);

var _DocumentacionPage = require('./pages/sections/DocumentacionPage');

var _DocumentacionPage2 = _interopRequireDefault(_DocumentacionPage);

var _FormasDePagoPage = require('./pages/sections/FormasDePagoPage');

var _FormasDePagoPage2 = _interopRequireDefault(_FormasDePagoPage);

var _ContactanosPage = require('./pages/sections/ContactanosPage');

var _ContactanosPage2 = _interopRequireDefault(_ContactanosPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (store) {
  return _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomePage2.default }),
    _react2.default.createElement(_reactRouter.Redirect, { from: 'inicio', to: '/' }),
    _react2.default.createElement(_reactRouter.Route, { path: 'quienes-somos', component: _QuienesSomosPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'documentacion', component: _DocumentacionPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'formas-de-pago', component: _FormasDePagoPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'contactanos', component: _ContactanosPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _Page2.default })
  );
};
// Site sections

//Pages
//Dependencies

},{"./App":1,"./pages/HomePage":9,"./pages/Page404":10,"./pages/sections/ContactanosPage":11,"./pages/sections/DocumentacionPage":12,"./pages/sections/FormasDePagoPage":13,"./pages/sections/QuienesSomosPage":14,"react":"react","react-router":"react-router"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (component) {
  var styleLogger = function styleLogger(_ref) {
    var componentName = _ref.componentName;
    var style = _ref.style;

    console.log('Name: ' + componentName, style);
  };
  return (0, _radium2.default)({
    plugins: [_radium2.default.Plugins.mergeStyleArray, _radium2.default.Plugins.checkProps, _radium2.default.Plugins.resolveMediaQueries, _radium2.default.Plugins.resolveInteractionStyles, _radium2.default.Plugins.keyframes, _radium2.default.Plugins.visited, _radium2.default.Plugins.removeNestedStyles,
    // styleLogger,
    _radium2.default.Plugins.checkProps]
  })(component);
};

},{"radium":79}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var standardMenuItems = exports.standardMenuItems = [{
  name: 'Inicio',
  url: '/'
}, {
  name: 'Quiénes somos',
  url: '/quienes-somos'
}, {
  name: 'Documentación',
  url: '/documentacion'
}, {
  name: 'Formas de pago',
  url: '/formas-de-pago'
}, {
  name: 'Contáctanos',
  url: '/contactanos'
}];

var funnyMenuItems = exports.funnyMenuItems = [{
  name: 'El viaje',
  url: '/el-viaje'
}, {
  name: 'Equipaje',
  url: '/equipaje'
}, {
  name: 'Social media',
  url: '/social-media'
}, {
  name: 'Lista de 15',
  url: '/lista-de-15'
}];

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var colors = exports.colors = {
  magenta: '#E82CA5',
  pink: '#FF7BAC',
  cyan: '#B3B3B3',
  black: '#4D4D4D',
  white: '#ebebeb'
};

var fonts = exports.fonts = {
  primary: "'Helvetica Rounded', Helvetica, Arial, sans-serif",
  secondary: 'Times New Roman',
  tertiary: 'Arial'
};

},{}],20:[function(require,module,exports){
/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */

!function (name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(name, definition)
  else this[name] = definition()
}('bowser', function () {
  /**
    * See useragents.js for examples of navigator.userAgent
    */

  var t = true

  function detect(ua) {

    function getFirstMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[1]) || '';
    }

    function getSecondMatch(regex) {
      var match = ua.match(regex);
      return (match && match.length > 1 && match[2]) || '';
    }

    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
      , likeAndroid = /like android/i.test(ua)
      , android = !likeAndroid && /android/i.test(ua)
      , nexusMobile = /nexus\s*[0-6]\s*/i.test(ua)
      , nexusTablet = !nexusMobile && /nexus\s*[0-9]+/i.test(ua)
      , chromeos = /CrOS/.test(ua)
      , silk = /silk/i.test(ua)
      , sailfish = /sailfish/i.test(ua)
      , tizen = /tizen/i.test(ua)
      , webos = /(web|hpw)os/i.test(ua)
      , windowsphone = /windows phone/i.test(ua)
      , samsungBrowser = /SamsungBrowser/i.test(ua)
      , windows = !windowsphone && /windows/i.test(ua)
      , mac = !iosdevice && !silk && /macintosh/i.test(ua)
      , linux = !android && !sailfish && !tizen && !webos && /linux/i.test(ua)
      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
      , tablet = /tablet/i.test(ua)
      , mobile = !tablet && /[^-]mobi/i.test(ua)
      , xbox = /xbox/i.test(ua)
      , result

    if (/opera/i.test(ua)) {
      //  an old Opera
      result = {
        name: 'Opera'
      , opera: t
      , version: versionIdentifier || getFirstMatch(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
      }
    } else if (/opr|opios/i.test(ua)) {
      // a new Opera
      result = {
        name: 'Opera'
        , opera: t
        , version: getFirstMatch(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/SamsungBrowser/i.test(ua)) {
      result = {
        name: 'Samsung Internet for Android'
        , samsungBrowser: t
        , version: versionIdentifier || getFirstMatch(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/coast/i.test(ua)) {
      result = {
        name: 'Opera Coast'
        , coast: t
        , version: versionIdentifier || getFirstMatch(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/yabrowser/i.test(ua)) {
      result = {
        name: 'Yandex Browser'
      , yandexbrowser: t
      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
      }
    }
    else if (/ucbrowser/i.test(ua)) {
      result = {
          name: 'UC Browser'
        , ucbrowser: t
        , version: getFirstMatch(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/mxios/i.test(ua)) {
      result = {
        name: 'Maxthon'
        , maxthon: t
        , version: getFirstMatch(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/epiphany/i.test(ua)) {
      result = {
        name: 'Epiphany'
        , epiphany: t
        , version: getFirstMatch(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/puffin/i.test(ua)) {
      result = {
        name: 'Puffin'
        , puffin: t
        , version: getFirstMatch(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
      }
    }
    else if (/sleipnir/i.test(ua)) {
      result = {
        name: 'Sleipnir'
        , sleipnir: t
        , version: getFirstMatch(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (/k-meleon/i.test(ua)) {
      result = {
        name: 'K-Meleon'
        , kMeleon: t
        , version: getFirstMatch(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
      }
    }
    else if (windowsphone) {
      result = {
        name: 'Windows Phone'
      , windowsphone: t
      }
      if (edgeVersion) {
        result.msedge = t
        result.version = edgeVersion
      }
      else {
        result.msie = t
        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/msie|trident/i.test(ua)) {
      result = {
        name: 'Internet Explorer'
      , msie: t
      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      }
    } else if (chromeos) {
      result = {
        name: 'Chrome'
      , chromeos: t
      , chromeBook: t
      , chrome: t
      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    } else if (/chrome.+? edge/i.test(ua)) {
      result = {
        name: 'Microsoft Edge'
      , msedge: t
      , version: edgeVersion
      }
    }
    else if (/vivaldi/i.test(ua)) {
      result = {
        name: 'Vivaldi'
        , vivaldi: t
        , version: getFirstMatch(/vivaldi\/(\d+(\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (sailfish) {
      result = {
        name: 'Sailfish'
      , sailfish: t
      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/seamonkey\//i.test(ua)) {
      result = {
        name: 'SeaMonkey'
      , seamonkey: t
      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/firefox|iceweasel|fxios/i.test(ua)) {
      result = {
        name: 'Firefox'
      , firefox: t
      , version: getFirstMatch(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
      }
      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
        result.firefoxos = t
      }
    }
    else if (silk) {
      result =  {
        name: 'Amazon Silk'
      , silk: t
      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/phantom/i.test(ua)) {
      result = {
        name: 'PhantomJS'
      , phantom: t
      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/slimerjs/i.test(ua)) {
      result = {
        name: 'SlimerJS'
        , slimer: t
        , version: getFirstMatch(/slimerjs\/(\d+(\.\d+)?)/i)
      }
    }
    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
      result = {
        name: 'BlackBerry'
      , blackberry: t
      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      }
    }
    else if (webos) {
      result = {
        name: 'WebOS'
      , webos: t
      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      };
      /touchpad\//i.test(ua) && (result.touchpad = t)
    }
    else if (/bada/i.test(ua)) {
      result = {
        name: 'Bada'
      , bada: t
      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
      };
    }
    else if (tizen) {
      result = {
        name: 'Tizen'
      , tizen: t
      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
      };
    }
    else if (/qupzilla/i.test(ua)) {
      result = {
        name: 'QupZilla'
        , qupzilla: t
        , version: getFirstMatch(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || versionIdentifier
      }
    }
    else if (/chromium/i.test(ua)) {
      result = {
        name: 'Chromium'
        , chromium: t
        , version: getFirstMatch(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier
      }
    }
    else if (/chrome|crios|crmo/i.test(ua)) {
      result = {
        name: 'Chrome'
        , chrome: t
        , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      }
    }
    else if (android) {
      result = {
        name: 'Android'
        , version: versionIdentifier
      }
    }
    else if (/safari|applewebkit/i.test(ua)) {
      result = {
        name: 'Safari'
      , safari: t
      }
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if (iosdevice) {
      result = {
        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
      }
      // WTF: version is not part of user agent in web apps
      if (versionIdentifier) {
        result.version = versionIdentifier
      }
    }
    else if(/googlebot/i.test(ua)) {
      result = {
        name: 'Googlebot'
      , googlebot: t
      , version: getFirstMatch(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier
      }
    }
    else {
      result = {
        name: getFirstMatch(/^(.*)\/(.*) /),
        version: getSecondMatch(/^(.*)\/(.*) /)
     };
   }

    // set webkit or gecko flag for browsers based on these engines
    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
      if (/(apple)?webkit\/537\.36/i.test(ua)) {
        result.name = result.name || "Blink"
        result.blink = t
      } else {
        result.name = result.name || "Webkit"
        result.webkit = t
      }
      if (!result.version && versionIdentifier) {
        result.version = versionIdentifier
      }
    } else if (!result.opera && /gecko\//i.test(ua)) {
      result.name = result.name || "Gecko"
      result.gecko = t
      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
    }

    // set OS flags for platforms that have multiple browsers
    if (!result.msedge && (android || result.silk)) {
      result.android = t
    } else if (iosdevice) {
      result[iosdevice] = t
      result.ios = t
    } else if (mac) {
      result.mac = t
    } else if (xbox) {
      result.xbox = t
    } else if (windows) {
      result.windows = t
    } else if (linux) {
      result.linux = t
    }

    // OS version extraction
    var osVersion = '';
    if (result.windowsphone) {
      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (iosdevice) {
      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
      osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (result.webos) {
      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
    } else if (result.blackberry) {
      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    } else if (result.bada) {
      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
    } else if (result.tizen) {
      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
    }
    if (osVersion) {
      result.osversion = osVersion;
    }

    // device type extraction
    var osMajorVersion = osVersion.split('.')[0];
    if (
         tablet
      || nexusTablet
      || iosdevice == 'ipad'
      || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
      || result.silk
    ) {
      result.tablet = t
    } else if (
         mobile
      || iosdevice == 'iphone'
      || iosdevice == 'ipod'
      || android
      || nexusMobile
      || result.blackberry
      || result.webos
      || result.bada
    ) {
      result.mobile = t
    }

    // Graded Browser Support
    // http://developer.yahoo.com/yui/articles/gbs
    if (result.msedge ||
        (result.msie && result.version >= 10) ||
        (result.yandexbrowser && result.version >= 15) ||
		    (result.vivaldi && result.version >= 1.0) ||
        (result.chrome && result.version >= 20) ||
        (result.samsungBrowser && result.version >= 4) ||
        (result.firefox && result.version >= 20.0) ||
        (result.safari && result.version >= 6) ||
        (result.opera && result.version >= 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
        (result.blackberry && result.version >= 10.1)
        || (result.chromium && result.version >= 20)
        ) {
      result.a = t;
    }
    else if ((result.msie && result.version < 10) ||
        (result.chrome && result.version < 20) ||
        (result.firefox && result.version < 20.0) ||
        (result.safari && result.version < 6) ||
        (result.opera && result.version < 10.0) ||
        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
        || (result.chromium && result.version < 20)
        ) {
      result.c = t
    } else result.x = t

    return result
  }

  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent || '' : '')

  bowser.test = function (browserList) {
    for (var i = 0; i < browserList.length; ++i) {
      var browserItem = browserList[i];
      if (typeof browserItem=== 'string') {
        if (browserItem in bowser) {
          return true;
        }
      }
    }
    return false;
  }

  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  function getVersionPrecision(version) {
    return version.split(".").length;
  }

  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  function map(arr, iterator) {
    var result = [], i;
    if (Array.prototype.map) {
      return Array.prototype.map.call(arr, iterator);
    }
    for (i = 0; i < arr.length; i++) {
      result.push(iterator(arr[i]));
    }
    return result;
  }

  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions(['1.10.2.1',  '1.8.2.1.90'])    // 1
   *   compareVersions(['1.010.2.1', '1.09.2.1.90']);  // 1
   *   compareVersions(['1.10.2.1',  '1.10.2.1']);     // 0
   *   compareVersions(['1.10.2.1',  '1.0800.2']);     // -1
   *
   * @param  {Array<String>} versions versions to compare
   * @return {Number} comparison result
   */
  function compareVersions(versions) {
    // 1) get common precision for both versions, for example for "10.0" and "9" it should be 2
    var precision = Math.max(getVersionPrecision(versions[0]), getVersionPrecision(versions[1]));
    var chunks = map(versions, function (version) {
      var delta = precision - getVersionPrecision(version);

      // 2) "9" -> "9.0" (for precision = 2)
      version = version + new Array(delta + 1).join(".0");

      // 3) "9.0" -> ["000000000"", "000000009"]
      return map(version.split("."), function (chunk) {
        return new Array(20 - chunk.length).join("0") + chunk;
      }).reverse();
    });

    // iterate in reverse order by reversed chunks array
    while (--precision >= 0) {
      // 4) compare: "000000009" > "000000010" = false (but "9" > "10" = true)
      if (chunks[0][precision] > chunks[1][precision]) {
        return 1;
      }
      else if (chunks[0][precision] === chunks[1][precision]) {
        if (precision === 0) {
          // all version chunks are same
          return 0;
        }
      }
      else {
        return -1;
      }
    }
  }

  /**
   * Check if browser is unsupported
   *
   * @example
   *   bowser.isUnsupportedBrowser({
   *     msie: "10",
   *     firefox: "23",
   *     chrome: "29",
   *     safari: "5.1",
   *     opera: "16",
   *     phantom: "534"
   *   });
   *
   * @param  {Object}  minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function isUnsupportedBrowser(minVersions, strictMode, ua) {
    var _bowser = bowser;

    // make strictMode param optional with ua param usage
    if (typeof strictMode === 'string') {
      ua = strictMode;
      strictMode = void(0);
    }

    if (strictMode === void(0)) {
      strictMode = false;
    }
    if (ua) {
      _bowser = detect(ua);
    }

    var version = "" + _bowser.version;
    for (var browser in minVersions) {
      if (minVersions.hasOwnProperty(browser)) {
        if (_bowser[browser]) {
          // browser version and min supported version.
          return compareVersions([version, minVersions[browser]]) < 0;
        }
      }
    }

    return strictMode; // not found
  }

  /**
   * Check if browser is supported
   *
   * @param  {Object} minVersions map of minimal version to browser
   * @param  {Boolean} [strictMode = false] flag to return false if browser wasn't found in map
   * @param  {String}  [ua] user agent string
   * @return {Boolean}
   */
  function check(minVersions, strictMode, ua) {
    return !isUnsupportedBrowser(minVersions, strictMode, ua);
  }

  bowser.isUnsupportedBrowser = isUnsupportedBrowser;
  bowser.compareVersions = compareVersions;
  bowser.check = check;

  /*
   * Set our detect method to the main bowser object so we can
   * reuse it to test other user agents.
   * This is needed to implement future tests.
   */
  bowser._detect = detect;

  return bowser
});

},{}],21:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		define(function () {
			return ExecutionEnvironment;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ExecutionEnvironment;
	} else {
		window.ExecutionEnvironment = ExecutionEnvironment;
	}

}());

},{}],22:[function(require,module,exports){
'use strict';

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;

function hyphenateStyleName(string) {
    return string
        .replace(uppercasePattern, '-$&')
        .toLowerCase()
        .replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = calc;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsJoinPrefixedRules = require('../utils/joinPrefixedRules');

var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

var _utilsIsPrefixedValue = require('../utils/isPrefixedValue');

var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

function calc(property, value) {
  if (typeof value === 'string' && value.indexOf('calc(') > -1) {
    if ((0, _utilsIsPrefixedValue2['default'])(value)) return;

    return (0, _utilsJoinPrefixedRules2['default'])(property, value, function (prefix, value) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}

module.exports = exports['default'];
},{"../utils/isPrefixedValue":36,"../utils/joinPrefixedRules":37}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = cursor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsJoinPrefixedRules = require('../utils/joinPrefixedRules');

var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

var values = {
  'zoom-in': true,
  'zoom-out': true,
  'grab': true,
  'grabbing': true
};

function cursor(property, value) {
  if (property === 'cursor' && values[value]) {
    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
  }
}

module.exports = exports['default'];
},{"../utils/joinPrefixedRules":37}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = flex;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsCamelToDashCase = require('../utils/camelToDashCase');

var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

var values = { flex: true, 'inline-flex': true };

function flex(property, value) {
  if (property === 'display' && values[value]) {
    return {
      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
    };
  }
}

module.exports = exports['default'];
},{"../utils/camelToDashCase":34}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = flexboxIE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(property, value) {
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}

module.exports = exports['default'];
},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = flexboxOld;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _utilsCamelToDashCase = require('../utils/camelToDashCase');

var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value) {
  if (property === 'flexDirection') {
    return {
      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
    };
  }
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}

module.exports = exports['default'];
},{"../utils/camelToDashCase":34}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = gradient;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsJoinPrefixedRules = require('../utils/joinPrefixedRules');

var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

var _utilsIsPrefixedValue = require('../utils/isPrefixedValue');

var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && value.match(values) !== null) {
    if ((0, _utilsIsPrefixedValue2['default'])(value)) return;

    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
  }
}

module.exports = exports['default'];
},{"../utils/isPrefixedValue":36,"../utils/joinPrefixedRules":37}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = sizing;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsJoinPrefixedRules = require('../utils/joinPrefixedRules');

var _utilsJoinPrefixedRules2 = _interopRequireDefault(_utilsJoinPrefixedRules);

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties[property] && values[value]) {
    return (0, _utilsJoinPrefixedRules2['default'])(property, value);
  }
}

module.exports = exports['default'];
},{"../utils/joinPrefixedRules":37}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = transition;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _utilsCamelToDashCase = require('../utils/camelToDashCase');

var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

var _utilsCapitalizeString = require('../utils/capitalizeString');

var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

var _utilsIsPrefixedValue = require('../utils/isPrefixedValue');

var _utilsIsPrefixedValue2 = _interopRequireDefault(_utilsIsPrefixedValue);

var _prefixProps = require('../prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true
};

function transition(property, value) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties[property]) {
    var _ref2;

    var outputValue = prefixValue(value);
    var webkitOutput = outputValue.split(',').filter(function (value) {
      return value.match(/-moz-|-ms-/) === null;
    }).join(',');

    // if the property is already prefixed
    if (property.indexOf('Webkit') > -1) {
      return _defineProperty({}, property, webkitOutput);
    }

    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _utilsCapitalizeString2['default'])(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
  }
}

function prefixValue(value) {
  if ((0, _utilsIsPrefixedValue2['default'])(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  // iterate each single value and check for transitioned properties
  // that need to be prefixed as well
  multipleValues.forEach(function (val, index) {
    multipleValues[index] = Object.keys(_prefixProps2['default']).reduce(function (out, prefix) {
      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

      Object.keys(_prefixProps2['default'][prefix]).forEach(function (prop) {
        var dashCaseProperty = (0, _utilsCamelToDashCase2['default'])(prop);

        if (val.indexOf(dashCaseProperty) > -1) {
          // join all prefixes and create a new value
          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
        }
      });
      return out;
    }, val);
  });

  return multipleValues.join(',');
}
module.exports = exports['default'];
},{"../prefixProps":32,"../utils/camelToDashCase":34,"../utils/capitalizeString":35,"../utils/isPrefixedValue":36}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = prefixAll;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _prefixProps = require('./prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var _utilsCapitalizeString = require('./utils/capitalizeString');

var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

var _utilsAssign = require('./utils/assign');

var _utilsAssign2 = _interopRequireDefault(_utilsAssign);

var _pluginsCalc = require('./plugins/calc');

var _pluginsCalc2 = _interopRequireDefault(_pluginsCalc);

var _pluginsCursor = require('./plugins/cursor');

var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);

var _pluginsFlex = require('./plugins/flex');

var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);

var _pluginsSizing = require('./plugins/sizing');

var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);

var _pluginsGradient = require('./plugins/gradient');

var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);

var _pluginsTransition = require('./plugins/transition');

var _pluginsTransition2 = _interopRequireDefault(_pluginsTransition);

// special flexbox specifications

var _pluginsFlexboxIE = require('./plugins/flexboxIE');

var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);

var _pluginsFlexboxOld = require('./plugins/flexboxOld');

var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);

var plugins = [_pluginsCalc2['default'], _pluginsCursor2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsTransition2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default'], _pluginsFlex2['default']];

/**
 * Returns a prefixed version of the style object using all vendor prefixes
 * @param {Object} styles - Style object that gets prefixed properties added
 * @returns {Object} - Style object with prefixed properties and values
 */

function prefixAll(styles) {
  return Object.keys(styles).reduce(function (prefixedStyles, property) {
    var value = styles[property];
    if (value instanceof Object && !Array.isArray(value)) {
      // recurse through nested style objects
      prefixedStyles[property] = prefixAll(value);
    } else {
      Object.keys(_prefixProps2['default']).forEach(function (prefix) {
        var properties = _prefixProps2['default'][prefix];
        // add prefixes if needed
        if (properties[property]) {
          prefixedStyles[prefix + (0, _utilsCapitalizeString2['default'])(property)] = value;
        }
      });

      // resolve every special plugins
      plugins.forEach(function (plugin) {
        return (0, _utilsAssign2['default'])(prefixedStyles, plugin(property, value));
      });
    }

    return prefixedStyles;
  }, styles);
}

module.exports = exports['default'];
},{"./plugins/calc":23,"./plugins/cursor":24,"./plugins/flex":25,"./plugins/flexboxIE":26,"./plugins/flexboxOld":27,"./plugins/gradient":28,"./plugins/sizing":29,"./plugins/transition":30,"./prefixProps":32,"./utils/assign":33,"./utils/capitalizeString":35}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true, "borderImage": true, "borderImageOutset": true, "borderImageRepeat": true, "borderImageSlice": true, "borderImageSource": true, "borderImageWidth": true, "tabSize": true, "objectFit": true, "objectPosition": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
module.exports = exports["default"];
},{}],33:[function(require,module,exports){
// leight polyfill for Object.assign
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  return Object.keys(extend).reduce(function (out, key) {
    base[key] = extend[key];
    return out;
  }, {});
};

module.exports = exports["default"];
},{}],34:[function(require,module,exports){
/**
 * Converts a camel-case string to a dash-case string
 * @param {string} str - str that gets converted to dash-case
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (str) {
  return str.replace(/([a-z]|^)([A-Z])/g, function (match, p1, p2) {
    return p1 + '-' + p2.toLowerCase();
  }).replace('ms-', '-ms-');
};

module.exports = exports['default'];
},{}],35:[function(require,module,exports){
// helper to capitalize strings
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = exports["default"];
},{}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (value) {
  if (Array.isArray(value)) value = value.join(',');

  return value.match(/-webkit-|-moz-|-ms-/) !== null;
};

module.exports = exports['default'];
},{}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _camelToDashCase = require('./camelToDashCase');

var _camelToDashCase2 = _interopRequireDefault(_camelToDashCase);

// returns a style object with a single concated prefixed value string

exports['default'] = function (property, value) {
  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
    return prefix + value;
  } : arguments[2];
  return (function () {
    return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
      return replacer(prefix, value);
    }));
  })();
};

module.exports = exports['default'];
},{"./camelToDashCase":34}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// special flexbox specifications


var _prefixAll2 = require('./static/prefixAll');

var _prefixAll3 = _interopRequireDefault(_prefixAll2);

var _getBrowserInformation = require('./utils/getBrowserInformation');

var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);

var _getPrefixedKeyframes = require('./utils/getPrefixedKeyframes');

var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);

var _capitalizeString = require('./utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _prefixProps = require('./prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var _calc = require('./plugins/calc');

var _calc2 = _interopRequireDefault(_calc);

var _zoomCursor = require('./plugins/zoomCursor');

var _zoomCursor2 = _interopRequireDefault(_zoomCursor);

var _grabCursor = require('./plugins/grabCursor');

var _grabCursor2 = _interopRequireDefault(_grabCursor);

var _flex = require('./plugins/flex');

var _flex2 = _interopRequireDefault(_flex);

var _sizing = require('./plugins/sizing');

var _sizing2 = _interopRequireDefault(_sizing);

var _gradient = require('./plugins/gradient');

var _gradient2 = _interopRequireDefault(_gradient);

var _transition = require('./plugins/transition');

var _transition2 = _interopRequireDefault(_transition);

var _flexboxIE = require('./plugins/flexboxIE');

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = require('./plugins/flexboxOld');

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var plugins = [_calc2.default, _zoomCursor2.default, _grabCursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default,
// this must be run AFTER the flexbox specs
_flex2.default];

var Prefixer = function () {
  /**
   * Instantiante a new prefixer
   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
   * @param {string} keepUnprefixed - keeps unprefixed properties and values
   */

  function Prefixer() {
    var _this = this;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Prefixer);

    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

    this._userAgent = options.userAgent || defaultUserAgent;
    this._keepUnprefixed = options.keepUnprefixed || false;

    this._browserInfo = (0, _getBrowserInformation2.default)(this._userAgent);

    // Checks if the userAgent was resolved correctly
    if (this._browserInfo && this._browserInfo.prefix) {
      // set additional prefix information
      this.cssPrefix = this._browserInfo.prefix.css;
      this.jsPrefix = this._browserInfo.prefix.inline;
      this.prefixedKeyframes = (0, _getPrefixedKeyframes2.default)(this._browserInfo);
    } else {
      this._usePrefixAllFallback = true;
      return false;
    }

    var data = this._browserInfo.browser && _prefixProps2.default[this._browserInfo.browser];
    if (data) {
      this._requiresPrefix = Object.keys(data).filter(function (key) {
        return data[key] >= _this._browserInfo.version;
      }).reduce(function (result, name) {
        result[name] = true;
        return result;
      }, {});
      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
    } else {
      this._usePrefixAllFallback = true;
    }
  }

  /**
   * Returns a prefixed version of the style object
   * @param {Object} styles - Style object that gets prefixed properties added
   * @returns {Object} - Style object with prefixed properties and values
   */


  _createClass(Prefixer, [{
    key: 'prefix',
    value: function prefix(styles) {
      var _this2 = this;

      // use prefixAll as fallback if userAgent can not be resolved
      if (this._usePrefixAllFallback) {
        return (0, _prefixAll3.default)(styles);
      }

      // only add prefixes if needed
      if (!this._hasPropsRequiringPrefix) {
        return styles;
      }

      Object.keys(styles).forEach(function (property) {
        var value = styles[property];
        if (value instanceof Object && !Array.isArray(value)) {
          // recurse through nested style objects
          styles[property] = _this2.prefix(value);
        } else {
          // add prefixes if needed
          if (_this2._requiresPrefix[property]) {
            styles[_this2.jsPrefix + (0, _capitalizeString2.default)(property)] = value;
            if (!_this2._keepUnprefixed) {
              delete styles[property];
            }
          }
        }
      });

      Object.keys(styles).forEach(function (property) {
        [].concat(styles[property]).forEach(function (value) {
          // resolve plugins
          plugins.forEach(function (plugin) {
            // generates a new plugin interface with current data
            assignStyles(styles, plugin({
              property: property,
              value: value,
              styles: styles,
              browserInfo: _this2._browserInfo,
              prefix: {
                js: _this2.jsPrefix,
                css: _this2.cssPrefix,
                keyframes: _this2.prefixedKeyframes
              },
              keepUnprefixed: _this2._keepUnprefixed,
              requiresPrefix: _this2._requiresPrefix
            }), value, _this2._keepUnprefixed);
          });
        });
      });

      return styles;
    }

    /**
     * Returns a prefixed version of the style object using all vendor prefixes
     * @param {Object} styles - Style object that gets prefixed properties added
     * @returns {Object} - Style object with prefixed properties and values
     */

  }], [{
    key: 'prefixAll',
    value: function prefixAll(styles) {
      return (0, _prefixAll3.default)(styles);
    }
  }]);

  return Prefixer;
}();

exports.default = Prefixer;


function assignStyles(base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var value = arguments[2];
  var keepUnprefixed = arguments[3];

  Object.keys(extend).forEach(function (property) {
    var baseValue = base[property];
    if (Array.isArray(baseValue)) {
      [].concat(extend[property]).forEach(function (val) {
        if (base[property].indexOf(val) === -1) {
          base[property].splice(baseValue.indexOf(value), keepUnprefixed ? 0 : 1, val);
        }
      });
    } else {
      base[property] = extend[property];
    }
  });
}
module.exports = exports['default'];
},{"./plugins/calc":39,"./plugins/flex":40,"./plugins/flexboxIE":41,"./plugins/flexboxOld":42,"./plugins/grabCursor":43,"./plugins/gradient":44,"./plugins/sizing":45,"./plugins/transition":46,"./plugins/zoomCursor":47,"./prefixProps":48,"./static/prefixAll":57,"./utils/capitalizeString":59,"./utils/getBrowserInformation":60,"./utils/getPrefixedKeyframes":61}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function calc(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(value.replace(/calc\(/g, css + 'calc('), value, keepUnprefixed));
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":62}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = { flex: true, 'inline-flex': true };

function flex(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'display' && values[value] && (browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
    return {
      display: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
    };
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":62}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  flex: 'flexbox',
  'inline-flex': 'inline-flexbox'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var styles = _ref.styles;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if ((alternativeProps[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
    if (!keepUnprefixed && !Array.isArray(styles[property])) {
      delete styles[property];
    }
    if (property === 'display' && alternativeValues[value]) {
      return {
        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
      };
    }
    if (alternativeProps[property]) {
      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
    }
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":62}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];
var properties = Object.keys(alternativeProps).concat(otherProps);

function flexboxOld(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var styles = _ref.styles;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if ((properties.indexOf(property) > -1 || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
    if (!keepUnprefixed && !Array.isArray(styles[property])) {
      delete styles[property];
    }
    if (property === 'flexDirection' && typeof value === 'string') {
      return {
        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
      };
    }
    if (property === 'display' && alternativeValues[value]) {
      return {
        display: (0, _getPrefixedValue2.default)(css + alternativeValues[value], value, keepUnprefixed)
      };
    }
    if (alternativeProps[property]) {
      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
    }
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":62}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = grabCursor;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = { grab: true, grabbing: true };

function grabCursor(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var browser = _ref.browserInfo.browser;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  // adds prefixes for firefox, chrome, safari, and opera regardless of version until a reliable brwoser support info can be found (see: https://github.com/rofrischmann/inline-style-prefixer/issues/79)
  if (property === 'cursor' && values[value] && (browser === 'firefox' || browser === 'chrome' || browser === 'safari' || browser === 'opera')) {
    return {
      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
    };
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":62}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (typeof value === 'string' && value.match(values) !== null && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":62}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  // This might change in the future
  // Keep an eye on it
  if (properties[property] && values[value]) {
    return _defineProperty({}, property, (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed));
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":62}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = transition;

var _hyphenateStyleName = require('hyphenate-style-name');

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _unprefixProperty = require('../utils/unprefixProperty');

var _unprefixProperty2 = _interopRequireDefault(_unprefixProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = { transition: true, transitionProperty: true };

function transition(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var css = _ref.prefix.css;
  var requiresPrefix = _ref.requiresPrefix;
  var keepUnprefixed = _ref.keepUnprefixed;

  // also check for already prefixed transitions
  var unprefixedProperty = (0, _unprefixProperty2.default)(property);

  if (typeof value === 'string' && properties[unprefixedProperty]) {
    var _ret = function () {
      // TODO: memoize this array
      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
        return (0, _hyphenateStyleName2.default)(prop);
      });

      // only split multi values, not cubic beziers
      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

      requiresPrefixDashCased.forEach(function (prop) {
        multipleValues.forEach(function (val, index) {
          if (val.indexOf(prop) > -1 && prop !== 'order') {
            multipleValues[index] = val.replace(prop, css + prop) + (keepUnprefixed ? ',' + val : '');
          }
        });
      });

      return {
        v: _defineProperty({}, property, multipleValues.join(','))
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }
}
module.exports = exports['default'];
},{"../utils/unprefixProperty":65,"hyphenate-style-name":22}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = zoomCursor;

var _getPrefixedValue = require('../utils/getPrefixedValue');

var _getPrefixedValue2 = _interopRequireDefault(_getPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = { 'zoom-in': true, 'zoom-out': true };

function zoomCursor(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'cursor' && values[value] && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
    return {
      cursor: (0, _getPrefixedValue2.default)(css + value, value, keepUnprefixed)
    };
  }
}
module.exports = exports['default'];
},{"../utils/getPrefixedValue":62}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 55, "userSelect": 55, "fontKerning": 32, "textEmphasisPosition": 55, "textEmphasis": 55, "textEmphasisStyle": 55, "textEmphasisColor": 55, "boxDecorationBreak": 55, "clipPath": 55, "maskImage": 55, "maskMode": 55, "maskRepeat": 55, "maskPosition": 55, "maskClip": 55, "maskOrigin": 55, "maskSize": 55, "maskComposite": 55, "mask": 55, "maskBorderSource": 55, "maskBorderMode": 55, "maskBorderSlice": 55, "maskBorderWidth": 55, "maskBorderOutset": 55, "maskBorderRepeat": 55, "maskBorder": 55, "maskType": 55, "textDecorationStyle": 55, "textDecorationSkip": 55, "textDecorationLine": 55, "textDecorationColor": 55, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 49, "breakBefore": 49, "breakInside": 49, "columnCount": 49, "columnFill": 49, "columnGap": 49, "columnRule": 49, "columnRuleColor": 49, "columnRuleStyle": 49, "columnRuleWidth": 49, "columns": 49, "columnSpan": 49, "columnWidth": 49 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 10, "userSelect": 10, "backdropFilter": 10, "fontKerning": 9, "scrollSnapType": 10, "scrollSnapPointsX": 10, "scrollSnapPointsY": 10, "scrollSnapDestination": 10, "scrollSnapCoordinate": 10, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 10, "clipPath": 10, "maskImage": 10, "maskMode": 10, "maskRepeat": 10, "maskPosition": 10, "maskClip": 10, "maskOrigin": 10, "maskSize": 10, "maskComposite": 10, "mask": 10, "maskBorderSource": 10, "maskBorderMode": 10, "maskBorderSlice": 10, "maskBorderWidth": 10, "maskBorderOutset": 10, "maskBorderRepeat": 10, "maskBorder": 10, "maskType": 10, "textDecorationStyle": 10, "textDecorationSkip": 10, "textDecorationLine": 10, "textDecorationColor": 10, "shapeImageThreshold": 10, "shapeImageMargin": 10, "shapeImageOutside": 10, "filter": 9, "hyphens": 10, "flowInto": 10, "flowFrom": 10, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 10, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 51, "userSelect": 51, "boxSizing": 28, "textAlignLast": 48, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 51, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 41, "userSelect": 41, "fontKerning": 19, "textEmphasisPosition": 41, "textEmphasis": 41, "textEmphasisStyle": 41, "textEmphasisColor": 41, "boxDecorationBreak": 41, "clipPath": 41, "maskImage": 41, "maskMode": 41, "maskRepeat": 41, "maskPosition": 41, "maskClip": 41, "maskOrigin": 41, "maskSize": 41, "maskComposite": 41, "mask": 41, "maskBorderSource": 41, "maskBorderMode": 41, "maskBorderSlice": 41, "maskBorderWidth": 41, "maskBorderOutset": 41, "maskBorderRepeat": 41, "maskBorder": 41, "maskType": 41, "textDecorationStyle": 41, "textDecorationSkip": 41, "textDecorationLine": 41, "textDecorationColor": 41, "filter": 39, "fontFeatureSettings": 34, "breakAfter": 36, "breakBefore": 36, "breakInside": 36, "columnCount": 36, "columnFill": 36, "columnGap": 36, "columnRule": 36, "columnRuleColor": 36, "columnRuleStyle": 36, "columnRuleWidth": 36, "columns": 36, "columnSpan": 36, "columnWidth": 36 }, "ie": { "flex": 10, "flexDirection": 10, "flexFlow": 10, "flexWrap": 10, "transform": 9, "transformOrigin": 9, "transformOriginX": 9, "transformOriginY": 9, "userSelect": 11, "wrapFlow": 11, "wrapThrough": 11, "wrapMargin": 11, "scrollSnapType": 11, "scrollSnapPointsX": 11, "scrollSnapPointsY": 11, "scrollSnapDestination": 11, "scrollSnapCoordinate": 11, "touchAction": 10, "hyphens": 11, "flowInto": 11, "flowFrom": 11, "breakBefore": 11, "breakAfter": 11, "breakInside": 11, "regionFragment": 11, "gridTemplateColumns": 11, "gridTemplateRows": 11, "gridTemplateAreas": 11, "gridTemplate": 11, "gridAutoColumns": 11, "gridAutoRows": 11, "gridAutoFlow": 11, "grid": 11, "gridRowStart": 11, "gridColumnStart": 11, "gridRowEnd": 11, "gridRow": 11, "gridColumn": 11, "gridColumnEnd": 11, "gridColumnGap": 11, "gridRowGap": 11, "gridArea": 11, "gridGap": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 14, "wrapFlow": 14, "wrapThrough": 14, "wrapMargin": 14, "scrollSnapType": 14, "scrollSnapPointsX": 14, "scrollSnapPointsY": 14, "scrollSnapDestination": 14, "scrollSnapCoordinate": 14, "hyphens": 14, "flowInto": 14, "flowFrom": 14, "breakBefore": 14, "breakAfter": 14, "breakInside": 14, "regionFragment": 14, "gridTemplateColumns": 14, "gridTemplateRows": 14, "gridTemplateAreas": 14, "gridTemplate": 14, "gridAutoColumns": 14, "gridAutoRows": 14, "gridAutoFlow": 14, "grid": 14, "gridRowStart": 14, "gridColumnStart": 14, "gridRowEnd": 14, "gridRow": 14, "gridColumn": 14, "gridColumnEnd": 14, "gridColumnGap": 14, "gridRowGap": 14, "gridArea": 14, "gridGap": 14 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 9.3, "userSelect": 9.3, "backdropFilter": 9.3, "fontKerning": 9.3, "scrollSnapType": 9.3, "scrollSnapPointsX": 9.3, "scrollSnapPointsY": 9.3, "scrollSnapDestination": 9.3, "scrollSnapCoordinate": 9.3, "boxDecorationBreak": 9.3, "clipPath": 9.3, "maskImage": 9.3, "maskMode": 9.3, "maskRepeat": 9.3, "maskPosition": 9.3, "maskClip": 9.3, "maskOrigin": 9.3, "maskSize": 9.3, "maskComposite": 9.3, "mask": 9.3, "maskBorderSource": 9.3, "maskBorderMode": 9.3, "maskBorderSlice": 9.3, "maskBorderWidth": 9.3, "maskBorderOutset": 9.3, "maskBorderRepeat": 9.3, "maskBorder": 9.3, "maskType": 9.3, "textSizeAdjust": 9.3, "textDecorationStyle": 9.3, "textDecorationSkip": 9.3, "textDecorationLine": 9.3, "textDecorationColor": 9.3, "shapeImageThreshold": 9.3, "shapeImageMargin": 9.3, "shapeImageOutside": 9.3, "filter": 9, "hyphens": 9.3, "flowInto": 9.3, "flowFrom": 9.3, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 9.3, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 51, "userSelect": 51, "fontKerning": 4.4, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "filter": 51, "fontFeatureSettings": 4.4, "breakAfter": 51, "breakBefore": 51, "breakInside": 51, "columnCount": 51, "columnFill": 51, "columnGap": 51, "columnRule": 51, "columnRuleColor": 51, "columnRuleStyle": 51, "columnRuleWidth": 51, "columns": 51, "columnSpan": 51, "columnWidth": 51 }, "and_chr": { "appearance": 51, "userSelect": 51, "textEmphasisPosition": 51, "textEmphasis": 51, "textEmphasisStyle": 51, "textEmphasisColor": 51, "boxDecorationBreak": 51, "clipPath": 51, "maskImage": 51, "maskMode": 51, "maskRepeat": 51, "maskPosition": 51, "maskClip": 51, "maskOrigin": 51, "maskSize": 51, "maskComposite": 51, "mask": 51, "maskBorderSource": 51, "maskBorderMode": 51, "maskBorderSlice": 51, "maskBorderWidth": 51, "maskBorderOutset": 51, "maskBorderRepeat": 51, "maskBorder": 51, "maskType": 51, "textDecorationStyle": 51, "textDecorationSkip": 51, "textDecorationLine": 51, "textDecorationColor": 51, "filter": 51 }, "and_uc": { "flex": 9.9, "flexBasis": 9.9, "flexDirection": 9.9, "flexGrow": 9.9, "flexFlow": 9.9, "flexShrink": 9.9, "flexWrap": 9.9, "alignContent": 9.9, "alignItems": 9.9, "alignSelf": 9.9, "justifyContent": 9.9, "order": 9.9, "transition": 9.9, "transitionDelay": 9.9, "transitionDuration": 9.9, "transitionProperty": 9.9, "transitionTimingFunction": 9.9, "transform": 9.9, "transformOrigin": 9.9, "transformOriginX": 9.9, "transformOriginY": 9.9, "backfaceVisibility": 9.9, "perspective": 9.9, "perspectiveOrigin": 9.9, "transformStyle": 9.9, "transformOriginZ": 9.9, "animation": 9.9, "animationDelay": 9.9, "animationDirection": 9.9, "animationFillMode": 9.9, "animationDuration": 9.9, "animationIterationCount": 9.9, "animationName": 9.9, "animationPlayState": 9.9, "animationTimingFunction": 9.9, "appearance": 9.9, "userSelect": 9.9, "fontKerning": 9.9, "textEmphasisPosition": 9.9, "textEmphasis": 9.9, "textEmphasisStyle": 9.9, "textEmphasisColor": 9.9, "maskImage": 9.9, "maskMode": 9.9, "maskRepeat": 9.9, "maskPosition": 9.9, "maskClip": 9.9, "maskOrigin": 9.9, "maskSize": 9.9, "maskComposite": 9.9, "mask": 9.9, "maskBorderSource": 9.9, "maskBorderMode": 9.9, "maskBorderSlice": 9.9, "maskBorderWidth": 9.9, "maskBorderOutset": 9.9, "maskBorderRepeat": 9.9, "maskBorder": 9.9, "maskType": 9.9, "textSizeAdjust": 9.9, "filter": 9.9, "hyphens": 9.9, "flowInto": 9.9, "flowFrom": 9.9, "breakBefore": 9.9, "breakAfter": 9.9, "breakInside": 9.9, "regionFragment": 9.9, "fontFeatureSettings": 9.9, "columnCount": 9.9, "columnFill": 9.9, "columnGap": 9.9, "columnRule": 9.9, "columnRuleColor": 9.9, "columnRuleStyle": 9.9, "columnRuleWidth": 9.9, "columns": 9.9, "columnSpan": 9.9, "columnWidth": 9.9 }, "op_mini": {} };
module.exports = exports["default"];
},{}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
module.exports = exports['default'];
},{"../../utils/isPrefixedValue":63,"../../utils/joinPrefixedValue":64}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/joinPrefixedValue":64}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = { flex: true, 'inline-flex': true };

function flex(property, value) {
  if (property === 'display' && values[value]) {
    return {
      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
    };
  }
}
module.exports = exports['default'];
},{}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(property, value) {
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];
},{}],53:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value) {
  if (property === 'flexDirection' && typeof value === 'string') {
    return {
      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
    };
  }
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];
},{}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/isPrefixedValue":63,"../../utils/joinPrefixedValue":64}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties[property] && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/joinPrefixedValue":64}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateStyleName = require('hyphenate-style-name');

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _capitalizeString = require('../../utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _prefixProps = require('../prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true
};

function transition(property, value) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties[property]) {
    var _ref2;

    var outputValue = prefixValue(value);
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
      return value.match(/-moz-|-ms-/) === null;
    }).join(',');

    // if the property is already prefixed
    if (property.indexOf('Webkit') > -1) {
      return _defineProperty({}, property, webkitOutput);
    }

    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
  }
}

function prefixValue(value) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  // iterate each single value and check for transitioned properties
  // that need to be prefixed as well
  multipleValues.forEach(function (val, index) {
    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);

        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
          // join all prefixes and create a new value
          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
        }
      });
      return out;
    }, val);
  });

  return multipleValues.join(',');
}
module.exports = exports['default'];
},{"../../utils/capitalizeString":59,"../../utils/isPrefixedValue":63,"../prefixProps":58,"hyphenate-style-name":22}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixAll;

var _prefixProps = require('./prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var _capitalizeString = require('../utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _calc = require('./plugins/calc');

var _calc2 = _interopRequireDefault(_calc);

var _cursor = require('./plugins/cursor');

var _cursor2 = _interopRequireDefault(_cursor);

var _flex = require('./plugins/flex');

var _flex2 = _interopRequireDefault(_flex);

var _sizing = require('./plugins/sizing');

var _sizing2 = _interopRequireDefault(_sizing);

var _gradient = require('./plugins/gradient');

var _gradient2 = _interopRequireDefault(_gradient);

var _transition = require('./plugins/transition');

var _transition2 = _interopRequireDefault(_transition);

var _flexboxIE = require('./plugins/flexboxIE');

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = require('./plugins/flexboxOld');

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// special flexbox specifications


var plugins = [_calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];

/**
 * Returns a prefixed version of the style object using all vendor prefixes
 * @param {Object} styles - Style object that gets prefixed properties added
 * @returns {Object} - Style object with prefixed properties and values
 */
function prefixAll(styles) {
  Object.keys(styles).forEach(function (property) {
    var value = styles[property];
    if (value instanceof Object && !Array.isArray(value)) {
      // recurse through nested style objects
      styles[property] = prefixAll(value);
    } else {
      Object.keys(_prefixProps2.default).forEach(function (prefix) {
        var properties = _prefixProps2.default[prefix];
        // add prefixes if needed
        if (properties[property]) {
          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
        }
      });
    }
  });

  Object.keys(styles).forEach(function (property) {
    [].concat(styles[property]).forEach(function (value, index) {
      // resolve every special plugins
      plugins.forEach(function (plugin) {
        return assignStyles(styles, plugin(property, value));
      });
    });
  });

  return styles;
}

function assignStyles(base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  Object.keys(extend).forEach(function (property) {
    var baseValue = base[property];
    if (Array.isArray(baseValue)) {
      [].concat(extend[property]).forEach(function (value) {
        var valueIndex = baseValue.indexOf(value);
        if (valueIndex > -1) {
          base[property].splice(valueIndex, 1);
        }
        base[property].push(value);
      });
    } else {
      base[property] = extend[property];
    }
  });
}
module.exports = exports['default'];
},{"../utils/capitalizeString":59,"./plugins/calc":49,"./plugins/cursor":50,"./plugins/flex":51,"./plugins/flexboxIE":52,"./plugins/flexboxOld":53,"./plugins/gradient":54,"./plugins/sizing":55,"./plugins/transition":56,"./prefixProps":58}],58:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
module.exports = exports["default"];
},{}],59:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// helper to capitalize strings

exports.default = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = exports["default"];
},{}],60:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bowser = require('bowser');

var _bowser2 = _interopRequireDefault(_bowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendorPrefixes = {
  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen', 'chromium', 'vivaldi'],
  Moz: ['firefox', 'seamonkey', 'sailfish'],
  ms: ['msie', 'msedge']
};
var browsers = {
  chrome: [['chrome'], ['chromium']],
  safari: [['safari']],
  firefox: [['firefox']],
  edge: [['msedge']],
  opera: [['opera'], ['vivaldi']],
  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
  ie: [['msie']],
  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
  and_uc: [['android', 'mobile'], ['android', 'tablet']],
  android: [['android', 'mobile'], ['android', 'tablet']]
};

var browserByInfo = function browserByInfo(info) {
  if (info.firefox) {
    return 'firefox';
  }
  var name = '';

  Object.keys(browsers).forEach(function (browser) {
    browsers[browser].forEach(function (condition) {
      var match = 0;
      condition.forEach(function (single) {
        if (info[single]) {
          match += 1;
        }
      });
      if (condition.length === match) {
        name = browser;
      }
    });
  });

  return name;
};

/**
 * Uses bowser to get default browser information such as version and name
 * Evaluates bowser info and adds vendorPrefix information
 * @param {string} userAgent - userAgent that gets evaluated
 */

exports.default = function (userAgent) {
  if (!userAgent) {
    return false;
  }
  var info = _bowser2.default._detect(userAgent);

  Object.keys(vendorPrefixes).forEach(function (prefix) {
    vendorPrefixes[prefix].forEach(function (browser) {
      if (info[browser]) {
        info.prefix = {
          inline: prefix,
          css: '-' + prefix.toLowerCase() + '-'
        };
      }
    });
  });

  info.browser = browserByInfo(info);

  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);
  info.osversion = parseFloat(info.osversion);

  // iOS forces all browsers to use Safari under the hood
  // as the Safari version seems to match the iOS version
  // we just explicitely use the osversion instead
  // https://github.com/rofrischmann/inline-style-prefixer/issues/72
  if (info.browser === 'ios_saf' && info.version > info.osversion) {
    info.version = info.osversion;
    info.safari = true;
  }

  // seperate native android chrome
  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
  if (info.browser === 'android' && info.chrome && info.version > 37) {
    info.browser = 'and_chr';
  }

  // For android < 4.4 we want to check the osversion
  // not the chrome version, see issue #26
  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
  if (info.browser === 'android' && info.osversion < 5) {
    info.version = info.osversion;
  }

  return info;
};

module.exports = exports['default'];
},{"bowser":20}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var browser = _ref.browser;
  var version = _ref.version;
  var prefix = _ref.prefix;

  var prefixedKeyframes = 'keyframes';

  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
    prefixedKeyframes = prefix.css + prefixedKeyframes;
  }
  return prefixedKeyframes;
};

module.exports = exports['default'];
},{}],62:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (prefixedValue, value, keepUnprefixed) {
  return keepUnprefixed ? [prefixedValue, value] : prefixedValue;
};

module.exports = exports["default"];
},{}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  if (Array.isArray(value)) value = value.join(',');

  return value.match(/-webkit-|-moz-|-ms-/) !== null;
};

module.exports = exports['default'];
},{}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// returns a style object with a single concated prefixed value string

exports.default = function (property, value) {
  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
    return prefix + value;
  } : arguments[2];
  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
    return replacer(prefix, value);
  }));
};

module.exports = exports['default'];
},{}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (property) {
  var unprefixed = property.replace(/^(ms|Webkit|Moz|O)/, '');
  return unprefixed.charAt(0).toLowerCase() + unprefixed.slice(1);
};

module.exports = exports['default'];
},{}],66:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],67:[function(require,module,exports){
module.exports = {
  "html": {
    "fontFamily": "sans-serif",
    "lineHeight": 1.15,
    "msTextSizeAdjust": "100%",
    "WebkitTextSizeAdjust": "100%"
  },
  "body": {
    "margin": 0
  },
  "article, aside, details,  figcaption, figure, footer, header, main,  menu, nav, section, summary": {
    "display": "block"
  },
  "audio, canvas, progress, video": {
    "display": "inline-block"
  },
  "audio:not([controls])": {
    "display": "none",
    "height": 0
  },
  "progress": {
    "verticalAlign": "baseline"
  },
  "template,  [hidden]": {
    "display": "none"
  },
  "a": {
    "backgroundColor": "transparent",
    "WebkitTextDecorationSkip": "objects"
  },
  "a:active, a:hover": {
    "outlineWidth": 0
  },
  "abbr[title]": {
    "borderBottom": "none",
    "textDecoration": "underline dotted"
  },
  "b, strong": {
    "fontWeight": "bolder"
  },
  "dfn": {
    "fontStyle": "italic"
  },
  "h1": {
    "fontSize": "2em",
    "margin": "0.67em 0"
  },
  "mark": {
    "backgroundColor": "#ff0",
    "color": "#000"
  },
  "small": {
    "fontSize": "80%"
  },
  "sub, sup": {
    "fontSize": "75%",
    "lineHeight": 0,
    "position": "relative",
    "verticalAlign": "baseline"
  },
  "sub": {
    "bottom": "-0.25em"
  },
  "sup": {
    "top": "-0.5em"
  },
  "img": {
    "borderStyle": "none"
  },
  "svg:not(:root)": {
    "overflow": "hidden"
  },
  "code, kbd, pre, samp": {
    "fontFamily": "monospace, monospace",
    "fontSize": "1em"
  },
  "figure": {
    "margin": "1em 40px"
  },
  "hr": {
    "boxSizing": "content-box",
    "height": 0,
    "overflow": "visible"
  },
  "button, input, optgroup, select, textarea": {
    "font": "inherit",
    "margin": 0
  },
  "optgroup": {
    "fontWeight": "bold"
  },
  "button, input": {
    "overflow": "visible"
  },
  "button, select": {
    "textTransform": "none"
  },
  "button, html [type=\"button\"],  [type=\"reset\"], [type=\"submit\"]": {
    "WebkitAppearance": "button"
  },
  "button::-moz-focus-inner, [type=\"button\"]::-moz-focus-inner, [type=\"reset\"]::-moz-focus-inner, [type=\"submit\"]::-moz-focus-inner": {
    "borderStyle": "none",
    "padding": 0
  },
  "button:-moz-focusring, [type=\"button\"]:-moz-focusring, [type=\"reset\"]:-moz-focusring, [type=\"submit\"]:-moz-focusring": {
    "outline": "1px dotted ButtonText"
  },
  "fieldset": {
    "border": "1px solid #c0c0c0",
    "margin": "0 2px",
    "padding": "0.35em 0.625em 0.75em"
  },
  "legend": {
    "boxSizing": "border-box",
    "color": "inherit",
    "display": "table",
    "maxWidth": "100%",
    "padding": 0,
    "whiteSpace": "normal"
  },
  "textarea": {
    "overflow": "auto"
  },
  "[type=\"checkbox\"], [type=\"radio\"]": {
    "boxSizing": "border-box",
    "padding": 0
  },
  "[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button": {
    "height": "auto"
  },
  "[type=\"search\"]": {
    "WebkitAppearance": "textfield",
    "outlineOffset": -2
  },
  "[type=\"search\"]::-webkit-search-cancel-button, [type=\"search\"]::-webkit-search-decoration": {
    "WebkitAppearance": "none"
  },
  "::-webkit-input-placeholder": {
    "color": "inherit",
    "opacity": 0.54
  },
  "::-webkit-file-upload-button": {
    "WebkitAppearance": "button",
    "font": "inherit"
  }
};

},{}],68:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = appendImportantToEachValue;

var _appendPxIfNeeded = require('./append-px-if-needed');

var _appendPxIfNeeded2 = _interopRequireDefault(_appendPxIfNeeded);

var _mapObject = require('./map-object');

var _mapObject2 = _interopRequireDefault(_mapObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function appendImportantToEachValue(style) {
  return (0, _mapObject2.default)(style, function (result, key) {
    return (0, _appendPxIfNeeded2.default)(key, style[key]) + ' !important';
  });
}
module.exports = exports['default'];
},{"./append-px-if-needed":69,"./map-object":81}],69:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = appendPxIfNeeded;


// Copied from https://github.com/facebook/react/blob/
// 102cd291899f9942a76c40a0e78920a6fe544dc1/
// src/renderers/dom/shared/CSSProperty.js
var isUnitlessNumber = {
  animationIterationCount: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  stopOpacity: true,
  strokeDashoffset: true,
  strokeOpacity: true,
  strokeWidth: true
};

function appendPxIfNeeded(propertyName, value) {
  var needsPxSuffix = !isUnitlessNumber[propertyName] && typeof value === 'number' && value !== 0;
  return needsPxSuffix ? value + 'px' : value;
}
module.exports = exports['default'];
},{}],70:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _camelCaseRegex = /([a-z])?([A-Z])/g;

var _camelCaseReplacer = function _camelCaseReplacer(match, p1, p2) {
  return (p1 || '') + '-' + p2.toLowerCase();
};

var _camelCaseToDashCase = function _camelCaseToDashCase(s) {
  return s.replace(_camelCaseRegex, _camelCaseReplacer);
};

var camelCasePropsToDashCase = function camelCasePropsToDashCase(prefixedStyle) {
  // Since prefix is expected to work on inline style objects, we must
  // translate the keys to dash case for rendering to CSS.
  return Object.keys(prefixedStyle).reduce(function (result, key) {
    var dashCaseKey = _camelCaseToDashCase(key);

    // Fix IE vendor prefix
    if (/^ms-/.test(dashCaseKey)) {
      dashCaseKey = '-' + dashCaseKey;
    }

    result[dashCaseKey] = prefixedStyle[key];
    return result;
  }, {});
};

exports.default = camelCasePropsToDashCase;
module.exports = exports['default'];
},{}],71:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enhancer = require('../enhancer');

var _enhancer2 = _interopRequireDefault(_enhancer);

var _styleKeeper = require('../style-keeper');

var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

var _styleSheet = require('./style-sheet');

var _styleSheet2 = _interopRequireDefault(_styleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _getStyleKeeper(instance) {
  if (!instance._radiumStyleKeeper) {
    var userAgent = instance.props.radiumConfig && instance.props.radiumConfig.userAgent || instance.context._radiumConfig && instance.context._radiumConfig.userAgent;
    instance._radiumStyleKeeper = new _styleKeeper2.default(userAgent);
  }

  return instance._radiumStyleKeeper;
}

var StyleRoot = function (_Component) {
  _inherits(StyleRoot, _Component);

  function StyleRoot() {
    _classCallCheck(this, StyleRoot);

    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));

    _getStyleKeeper(_this);
    return _this;
  }

  StyleRoot.prototype.getChildContext = function getChildContext() {
    return { _radiumStyleKeeper: _getStyleKeeper(this) };
  };

  StyleRoot.prototype.render = function render() {
    /* eslint-disable no-unused-vars */
    // Pass down all props except config to the rendered div.
    var _props = this.props;
    var radiumConfig = _props.radiumConfig;

    var otherProps = _objectWithoutProperties(_props, ['radiumConfig']);
    /* eslint-enable no-unused-vars */

    return _react2.default.createElement(
      'div',
      otherProps,
      this.props.children,
      _react2.default.createElement(_styleSheet2.default, null)
    );
  };

  return StyleRoot;
}(_react.Component);

StyleRoot.contextTypes = {
  _radiumConfig: _react.PropTypes.object,
  _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
};

StyleRoot.childContextTypes = {
  _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
};

StyleRoot = (0, _enhancer2.default)(StyleRoot);

exports.default = StyleRoot;
module.exports = exports['default'];
},{"../enhancer":75,"../style-keeper":95,"./style-sheet":72,"react":"react"}],72:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styleKeeper = require('../style-keeper');

var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleSheet = (_temp = _class = function (_Component) {
  _inherits(StyleSheet, _Component);

  function StyleSheet() {
    _classCallCheck(this, StyleSheet);

    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));

    _this.state = _this._getCSSState();

    _this._onChange = _this._onChange.bind(_this);
    return _this;
  }

  StyleSheet.prototype.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this._subscription = this.context._radiumStyleKeeper.subscribe(this._onChange);
    this._onChange();
  };

  StyleSheet.prototype.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
    if (this._subscription) {
      this._subscription.remove();
    }
  };

  StyleSheet.prototype._getCSSState = function _getCSSState() {
    return { css: this.context._radiumStyleKeeper.getCSS() };
  };

  StyleSheet.prototype._onChange = function _onChange() {
    var _this2 = this;

    setTimeout(function () {
      _this2._isMounted && _this2.setState(_this2._getCSSState());
    }, 0);
  };

  StyleSheet.prototype.render = function render() {
    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: this.state.css } });
  };

  return StyleSheet;
}(_react.Component), _class.contextTypes = {
  _radiumStyleKeeper: _react2.default.PropTypes.instanceOf(_styleKeeper2.default)
}, _temp);
exports.default = StyleSheet;
module.exports = exports['default'];
},{"../style-keeper":95,"react":"react"}],73:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _cssRuleSetToString = require('../css-rule-set-to-string');

var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Style = _react2.default.createClass({
  displayName: 'Style',

  propTypes: {
    radiumConfig: _react.PropTypes.object,
    rules: _react.PropTypes.object,
    scopeSelector: _react.PropTypes.string
  },

  contextTypes: {
    _radiumConfig: _react.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      scopeSelector: ''
    };
  },
  _buildStyles: function _buildStyles(styles) {
    var _this = this;

    var userAgent = this.props.radiumConfig && this.props.radiumConfig.userAgent || this.context && this.context._radiumConfig && this.context._radiumConfig.userAgent;

    var scopeSelector = this.props.scopeSelector;

    var rootRules = Object.keys(styles).reduce(function (accumulator, selector) {
      if (_typeof(styles[selector]) !== 'object') {
        accumulator[selector] = styles[selector];
      }

      return accumulator;
    }, {});
    var rootStyles = Object.keys(rootRules).length ? (0, _cssRuleSetToString2.default)(scopeSelector || '', rootRules, userAgent) : '';

    return rootStyles + Object.keys(styles).reduce(function (accumulator, selector) {
      var rules = styles[selector];

      if (selector === 'mediaQueries') {
        accumulator += _this._buildMediaQueryString(rules);
      } else if (_typeof(styles[selector]) === 'object') {
        var completeSelector = scopeSelector ? selector.split(',').map(function (part) {
          return scopeSelector + ' ' + part.trim();
        }).join(',') : selector;

        accumulator += (0, _cssRuleSetToString2.default)(completeSelector, rules, userAgent);
      }

      return accumulator;
    }, '');
  },
  _buildMediaQueryString: function _buildMediaQueryString(stylesByMediaQuery) {
    var _this2 = this;

    var mediaQueryString = '';

    Object.keys(stylesByMediaQuery).forEach(function (query) {
      mediaQueryString += '@media ' + query + '{' + _this2._buildStyles(stylesByMediaQuery[query]) + '}';
    });

    return mediaQueryString;
  },
  render: function render() {
    if (!this.props.rules) {
      return null;
    }

    var styles = this._buildStyles(this.props.rules);

    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: styles } });
  }
});

exports.default = Style;
module.exports = exports['default'];
},{"../css-rule-set-to-string":74,"react":"react"}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cssRuleSetToString;

var _appendPxIfNeeded = require('./append-px-if-needed');

var _appendPxIfNeeded2 = _interopRequireDefault(_appendPxIfNeeded);

var _camelCasePropsToDashCase = require('./camel-case-props-to-dash-case');

var _camelCasePropsToDashCase2 = _interopRequireDefault(_camelCasePropsToDashCase);

var _mapObject = require('./map-object');

var _mapObject2 = _interopRequireDefault(_mapObject);

var _prefixer = require('./prefixer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMarkupForStyles(style) {
  return Object.keys(style).map(function (property) {
    return property + ': ' + style[property] + ';';
  }).join('\n');
}

function cssRuleSetToString(selector, rules, userAgent) {
  if (!rules) {
    return '';
  }

  var rulesWithPx = (0, _mapObject2.default)(rules, function (value, key) {
    return (0, _appendPxIfNeeded2.default)(key, value);
  });
  var prefixedRules = (0, _prefixer.getPrefixedStyle)(rulesWithPx, userAgent);
  var cssPrefixedRules = (0, _camelCasePropsToDashCase2.default)(prefixedRules);
  var serializedRules = createMarkupForStyles(cssPrefixedRules);

  return selector + '{' + serializedRules + '}';
}
module.exports = exports['default'];
},{"./append-px-if-needed":69,"./camel-case-props-to-dash-case":70,"./map-object":81,"./prefixer":93}],75:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = enhanceWithRadium;

var _react = require('react');

var _styleKeeper = require('./style-keeper.js');

var _styleKeeper2 = _interopRequireDefault(_styleKeeper);

var _resolveStyles = require('./resolve-styles.js');

var _resolveStyles2 = _interopRequireDefault(_resolveStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES = ['arguments', 'callee', 'caller', 'length', 'name', 'prototype', 'type'];

function copyProperties(source, target) {
  Object.getOwnPropertyNames(source).forEach(function (key) {
    if (KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES.indexOf(key) < 0 && !target.hasOwnProperty(key)) {
      var descriptor = Object.getOwnPropertyDescriptor(source, key);
      Object.defineProperty(target, key, descriptor);
    }
  });
}

function isStateless(component) {
  return !component.render && !(component.prototype && component.prototype.render);
}

function enhanceWithRadium(configOrComposedComponent) {
  var _class, _temp;

  var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  if (typeof configOrComposedComponent !== 'function') {
    var _ret = function () {
      var newConfig = _extends({}, config, configOrComposedComponent);
      return {
        v: function v(configOrComponent) {
          return enhanceWithRadium(configOrComponent, newConfig);
        }
      };
    }();

    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
  }

  var component = configOrComposedComponent;
  var ComposedComponent = component;

  // Handle stateless components
  if (isStateless(ComposedComponent)) {
    ComposedComponent = function (_Component) {
      _inherits(ComposedComponent, _Component);

      function ComposedComponent() {
        _classCallCheck(this, ComposedComponent);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ComposedComponent.prototype.render = function render() {
        return component(this.props, this.context);
      };

      return ComposedComponent;
    }(_react.Component);
    ComposedComponent.displayName = component.displayName || component.name;
  }

  var RadiumEnhancer = (_temp = _class = function (_ComposedComponent) {
    _inherits(RadiumEnhancer, _ComposedComponent);

    function RadiumEnhancer() {
      _classCallCheck(this, RadiumEnhancer);

      var _this2 = _possibleConstructorReturn(this, _ComposedComponent.apply(this, arguments));

      _this2.state = _this2.state || {};
      _this2.state._radiumStyleState = {};
      _this2._radiumIsMounted = true;
      return _this2;
    }

    RadiumEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (_ComposedComponent.prototype.componentWillUnmount) {
        _ComposedComponent.prototype.componentWillUnmount.call(this);
      }

      this._radiumIsMounted = false;

      if (this._radiumMouseUpListener) {
        this._radiumMouseUpListener.remove();
      }

      if (this._radiumMediaQueryListenersByQuery) {
        Object.keys(this._radiumMediaQueryListenersByQuery).forEach(function (query) {
          this._radiumMediaQueryListenersByQuery[query].remove();
        }, this);
      }
    };

    RadiumEnhancer.prototype.getChildContext = function getChildContext() {
      var superChildContext = _ComposedComponent.prototype.getChildContext ? _ComposedComponent.prototype.getChildContext.call(this) : {};

      if (!this.props.radiumConfig) {
        return superChildContext;
      }

      var newContext = _extends({}, superChildContext);

      if (this.props.radiumConfig) {
        newContext._radiumConfig = this.props.radiumConfig;
      }

      return newContext;
    };

    RadiumEnhancer.prototype.render = function render() {
      var renderedElement = _ComposedComponent.prototype.render.call(this);
      var currentConfig = this.props.radiumConfig || this.context._radiumConfig || config;

      if (config && currentConfig !== config) {
        currentConfig = _extends({}, config, currentConfig);
      }

      return (0, _resolveStyles2.default)(this, renderedElement, currentConfig);
    };

    return RadiumEnhancer;
  }(ComposedComponent), _class._isRadiumEnhanced = true, _temp);

  // Class inheritance uses Object.create and because of __proto__ issues
  // with IE <10 any static properties of the superclass aren't inherited and
  // so need to be manually populated.
  // See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-

  copyProperties(component, RadiumEnhancer);

  if (process.env.NODE_ENV !== 'production') {
    // This also fixes React Hot Loader by exposing the original components top
    // level prototype methods on the Radium enhanced prototype as discussed in
    // https://github.com/FormidableLabs/radium/issues/219.
    copyProperties(ComposedComponent.prototype, RadiumEnhancer.prototype);
  }

  if (RadiumEnhancer.propTypes && RadiumEnhancer.propTypes.style) {
    RadiumEnhancer.propTypes = _extends({}, RadiumEnhancer.propTypes, {
      style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object])
    });
  }

  RadiumEnhancer.displayName = component.displayName || component.name || 'Component';

  RadiumEnhancer.contextTypes = _extends({}, RadiumEnhancer.contextTypes, {
    _radiumConfig: _react.PropTypes.object,
    _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
  });

  RadiumEnhancer.childContextTypes = _extends({}, RadiumEnhancer.childContextTypes, {
    _radiumConfig: _react.PropTypes.object,
    _radiumStyleKeeper: _react.PropTypes.instanceOf(_styleKeeper2.default)
  });

  return RadiumEnhancer;
}
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./resolve-styles.js":94,"./style-keeper.js":95,"_process":66,"react":"react"}],76:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getStateKey = function getStateKey(elementKey) {
  return elementKey === null || elementKey === undefined ? 'main' : elementKey.toString();
};

exports.default = getStateKey;
module.exports = exports['default'];
},{}],77:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getStateKey = require('./get-state-key');

var _getStateKey2 = _interopRequireDefault(_getStateKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getState = function getState(state, elementKey, value) {
  var key = (0, _getStateKey2.default)(elementKey);

  return !!state && !!state._radiumStyleState && !!state._radiumStyleState[key] && state._radiumStyleState[key][value];
};

exports.default = getState;
module.exports = exports['default'];
},{"./get-state-key":76}],78:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hash;


// a simple djb2 hash based on hash-string:
// https://github.com/MatthewBarker/hash-string/blob/master/source/hash-string.js
// returns a hex-encoded hash
function hash(text) {
  if (!text) {
    return '';
  }

  var hashValue = 5381;
  var index = text.length - 1;

  while (index) {
    hashValue = hashValue * 33 ^ text.charCodeAt(index);
    index -= 1;
  }

  return (hashValue >>> 0).toString(16);
}
module.exports = exports['default'];
},{}],79:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enhancer = require('./enhancer');

var _enhancer2 = _interopRequireDefault(_enhancer);

var _plugins = require('./plugins');

var _plugins2 = _interopRequireDefault(_plugins);

var _style = require('./components/style');

var _style2 = _interopRequireDefault(_style);

var _styleRoot = require('./components/style-root');

var _styleRoot2 = _interopRequireDefault(_styleRoot);

var _getState = require('./get-state');

var _getState2 = _interopRequireDefault(_getState);

var _keyframes = require('./keyframes');

var _keyframes2 = _interopRequireDefault(_keyframes);

var _resolveStyles = require('./resolve-styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Radium(ComposedComponent) {
  return (0, _enhancer2.default)(ComposedComponent);
}

Radium.Plugins = _plugins2.default;
Radium.Style = _style2.default;
Radium.StyleRoot = _styleRoot2.default;
Radium.getState = _getState2.default;
Radium.keyframes = _keyframes2.default;

if (process.env.NODE_ENV !== 'production') {
  Radium.TestMode = {
    clearState: _resolveStyles.__clearStateForTests,
    disable: _resolveStyles.__setTestMode.bind(null, false),
    enable: _resolveStyles.__setTestMode.bind(null, true)
  };
}

exports.default = Radium;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./components/style":73,"./components/style-root":71,"./enhancer":75,"./get-state":77,"./keyframes":80,"./plugins":84,"./resolve-styles":94,"_process":66}],80:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyframes;

var _cssRuleSetToString = require('./css-rule-set-to-string');

var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

var _hash = require('./hash');

var _hash2 = _interopRequireDefault(_hash);

var _prefixer = require('./prefixer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function keyframes(keyframeRules, name) {
  return {
    __radiumKeyframes: true,
    __process: function __process(userAgent) {
      var keyframesPrefixed = (0, _prefixer.getPrefixedKeyframes)(userAgent);
      var rules = Object.keys(keyframeRules).map(function (percentage) {
        return (0, _cssRuleSetToString2.default)(percentage, keyframeRules[percentage], userAgent);
      }).join('\n');
      var animationName = (name ? name + '-' : '') + 'radium-animation-' + (0, _hash2.default)(rules);
      var css = '@' + keyframesPrefixed + ' ' + animationName + ' {\n' + rules + '\n}\n';
      return { css: css, animationName: animationName };
    }
  };
}
module.exports = exports['default'];
},{"./css-rule-set-to-string":74,"./hash":78,"./prefixer":93}],81:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapObject;
function mapObject(object, mapper) {
  return Object.keys(object).reduce(function (result, key) {
    result[key] = mapper(object[key], key);
    return result;
  }, {});
}
module.exports = exports["default"];
},{}],82:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.isNestedStyle = isNestedStyle;
exports.mergeStyles = mergeStyles;
function isNestedStyle(value) {
  // Don't merge objects overriding toString, since they should be converted
  // to string values.
  return value && value.constructor === Object && value.toString === Object.prototype.toString;
}

// Merge style objects. Deep merge plain object values.
function mergeStyles(styles) {
  var result = {};

  styles.forEach(function (style) {
    if (!style || (typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object') {
      return;
    }

    if (Array.isArray(style)) {
      style = mergeStyles(style);
    }

    Object.keys(style).forEach(function (key) {
      // Simple case, nothing nested
      if (!isNestedStyle(style[key]) || !isNestedStyle(result[key])) {
        result[key] = style[key];
        return;
      }

      // If nested media, don't merge the nested styles, append a space to the
      // end (benign when converted to CSS). This way we don't end up merging
      // media queries that appear later in the chain with those that appear
      // earlier.
      if (key.indexOf('@media') === 0) {
        var newKey = key;
        while (true) {
          // eslint-disable-line no-constant-condition
          newKey += ' ';
          if (!result[newKey]) {
            result[newKey] = style[key];
            return;
          }
        }
      }

      // Merge all other nested styles recursively
      result[key] = mergeStyles([result[key], style[key]]);
    });
  });

  return result;
}
},{}],83:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _checkProps = function checkProps() {};

if (process.env.NODE_ENV !== 'production') {
  (function () {
    // Warn if you use longhand and shorthand properties in the same style
    // object.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties

    var shorthandPropertyExpansions = {
      'background': ['backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize'],
      'border': ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth', 'borderWidth'],
      'borderImage': ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
      'borderRadius': ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
      'font': ['fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'lineHeight'],
      'listStyle': ['listStyleImage', 'listStylePosition', 'listStyleType'],
      'margin': ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
      'padding': ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
      'transition': ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']
    };

    _checkProps = function checkProps(config) {
      var componentName = config.componentName;
      var style = config.style;

      if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) !== 'object' || !style) {
        return;
      }

      var styleKeys = Object.keys(style);
      styleKeys.forEach(function (styleKey) {
        if (Array.isArray(shorthandPropertyExpansions[styleKey]) && shorthandPropertyExpansions[styleKey].some(function (sp) {
          return styleKeys.indexOf(sp) !== -1;
        })) {
          if (process.env.NODE_ENV !== 'production') {
            /* eslint-disable no-console */
            console.warn('Radium: property "' + styleKey + '" in style object', style, ': do not mix longhand and ' + 'shorthand properties in the same style object. Check the render ' + 'method of ' + componentName + '.', 'See https://github.com/FormidableLabs/radium/issues/95 for more ' + 'information.');
            /* eslint-enable no-console */
          }
        }
      });

      styleKeys.forEach(function (k) {
        return _checkProps(_extends({}, config, { style: style[k] }));
      });
      return;
    };
  })();
}

exports.default = _checkProps;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":66}],84:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkPropsPlugin = require('./check-props-plugin');

var _checkPropsPlugin2 = _interopRequireDefault(_checkPropsPlugin);

var _keyframesPlugin = require('./keyframes-plugin');

var _keyframesPlugin2 = _interopRequireDefault(_keyframesPlugin);

var _mergeStyleArrayPlugin = require('./merge-style-array-plugin');

var _mergeStyleArrayPlugin2 = _interopRequireDefault(_mergeStyleArrayPlugin);

var _prefixPlugin = require('./prefix-plugin');

var _prefixPlugin2 = _interopRequireDefault(_prefixPlugin);

var _removeNestedStylesPlugin = require('./remove-nested-styles-plugin');

var _removeNestedStylesPlugin2 = _interopRequireDefault(_removeNestedStylesPlugin);

var _resolveInteractionStylesPlugin = require('./resolve-interaction-styles-plugin');

var _resolveInteractionStylesPlugin2 = _interopRequireDefault(_resolveInteractionStylesPlugin);

var _resolveMediaQueriesPlugin = require('./resolve-media-queries-plugin');

var _resolveMediaQueriesPlugin2 = _interopRequireDefault(_resolveMediaQueriesPlugin);

var _visitedPlugin = require('./visited-plugin');

var _visitedPlugin2 = _interopRequireDefault(_visitedPlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  checkProps: _checkPropsPlugin2.default,
  keyframes: _keyframesPlugin2.default,
  mergeStyleArray: _mergeStyleArrayPlugin2.default,
  prefix: _prefixPlugin2.default,
  removeNestedStyles: _removeNestedStylesPlugin2.default,
  resolveInteractionStyles: _resolveInteractionStylesPlugin2.default,
  resolveMediaQueries: _resolveMediaQueriesPlugin2.default,
  visited: _visitedPlugin2.default
};
/* eslint-disable block-scoped-const */

module.exports = exports['default'];
},{"./check-props-plugin":83,"./keyframes-plugin":85,"./merge-style-array-plugin":86,"./prefix-plugin":88,"./remove-nested-styles-plugin":89,"./resolve-interaction-styles-plugin":90,"./resolve-media-queries-plugin":91,"./visited-plugin":92}],85:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyframesPlugin;
function keyframesPlugin(_ref // eslint-disable-line no-shadow
) {
  var addCSS = _ref.addCSS;
  var config = _ref.config;
  var style = _ref.style;

  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];
    if (key === 'animationName' && value && value.__radiumKeyframes) {
      var keyframesValue = value;

      var _keyframesValue$__pro = keyframesValue.__process(config.userAgent);

      var animationName = _keyframesValue$__pro.animationName;
      var css = _keyframesValue$__pro.css;

      addCSS(css);
      value = animationName;
    }

    newStyleInProgress[key] = value;
    return newStyleInProgress;
  }, {});
  return { style: newStyle };
}
module.exports = exports['default'];
},{}],86:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


// Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
// Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
var mergeStyleArrayPlugin = function mergeStyleArrayPlugin(_ref) {
  var style = _ref.style;
  var mergeStyles = _ref.mergeStyles;
  // eslint-disable-line no-shadow
  var newStyle = Array.isArray(style) ? mergeStyles(style) : style;
  return { style: newStyle };
};

exports.default = mergeStyleArrayPlugin;
module.exports = exports['default'];
},{}],87:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _callbacks = [];
var _mouseUpListenerIsActive = false;

function _handleMouseUp() {
  _callbacks.forEach(function (callback) {
    callback();
  });
}

var subscribe = function subscribe(callback) {
  if (_callbacks.indexOf(callback) === -1) {
    _callbacks.push(callback);
  }

  if (!_mouseUpListenerIsActive) {
    window.addEventListener('mouseup', _handleMouseUp);
    _mouseUpListenerIsActive = true;
  }

  return {
    remove: function remove() {
      var index = _callbacks.indexOf(callback);
      _callbacks.splice(index, 1);

      if (_callbacks.length === 0 && _mouseUpListenerIsActive) {
        window.removeEventListener('mouseup', _handleMouseUp);
        _mouseUpListenerIsActive = false;
      }
    }
  };
};

exports.default = {
  subscribe: subscribe,
  __triggerForTests: _handleMouseUp
};
module.exports = exports['default'];
},{}],88:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixPlugin;

var _prefixer = require('../prefixer');

function prefixPlugin(_ref // eslint-disable-line no-shadow
) {
  var config = _ref.config;
  var style = _ref.style;

  var newStyle = (0, _prefixer.getPrefixedStyle)(style, config.userAgent);
  return { style: newStyle };
}
module.exports = exports['default'];
},{"../prefixer":93}],89:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeNestedStyles;
function removeNestedStyles(_ref) {
  var isNestedStyle = _ref.isNestedStyle;
  var style = _ref.style;
  // eslint-disable-line no-shadow
  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];
    if (!isNestedStyle(value)) {
      newStyleInProgress[key] = value;
    }
    return newStyleInProgress;
  }, {});

  return {
    style: newStyle
  };
}
module.exports = exports['default'];
},{}],90:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mouseUpListener = require('./mouse-up-listener');

var _mouseUpListener2 = _interopRequireDefault(_mouseUpListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _isInteractiveStyleField = function _isInteractiveStyleField(styleFieldName) {
  return styleFieldName === ':hover' || styleFieldName === ':active' || styleFieldName === ':focus';
};

var resolveInteractionStyles = function resolveInteractionStyles(config) {
  var ExecutionEnvironment = config.ExecutionEnvironment;
  var getComponentField = config.getComponentField;
  var getState = config.getState;
  var mergeStyles = config.mergeStyles;
  var props = config.props;
  var setState = config.setState;
  var style = config.style;


  var newComponentFields = {};
  var newProps = {};

  // Only add handlers if necessary
  if (style[':hover']) {
    (function () {
      // Always call the existing handler if one is already defined.
      // This code, and the very similar ones below, could be abstracted a bit
      // more, but it hurts readability IMO.
      var existingOnMouseEnter = props.onMouseEnter;
      newProps.onMouseEnter = function (e) {
        existingOnMouseEnter && existingOnMouseEnter(e);
        setState(':hover', true);
      };

      var existingOnMouseLeave = props.onMouseLeave;
      newProps.onMouseLeave = function (e) {
        existingOnMouseLeave && existingOnMouseLeave(e);
        setState(':hover', false);
      };
    })();
  }

  if (style[':active']) {
    (function () {
      var existingOnMouseDown = props.onMouseDown;
      newProps.onMouseDown = function (e) {
        existingOnMouseDown && existingOnMouseDown(e);
        newComponentFields._lastMouseDown = Date.now();
        setState(':active', 'viamousedown');
      };

      var existingOnKeyDown = props.onKeyDown;
      newProps.onKeyDown = function (e) {
        existingOnKeyDown && existingOnKeyDown(e);
        if (e.key === ' ' || e.key === 'Enter') {
          setState(':active', 'viakeydown');
        }
      };

      var existingOnKeyUp = props.onKeyUp;
      newProps.onKeyUp = function (e) {
        existingOnKeyUp && existingOnKeyUp(e);
        if (e.key === ' ' || e.key === 'Enter') {
          setState(':active', false);
        }
      };
    })();
  }

  if (style[':focus']) {
    (function () {
      var existingOnFocus = props.onFocus;
      newProps.onFocus = function (e) {
        existingOnFocus && existingOnFocus(e);
        setState(':focus', true);
      };

      var existingOnBlur = props.onBlur;
      newProps.onBlur = function (e) {
        existingOnBlur && existingOnBlur(e);
        setState(':focus', false);
      };
    })();
  }

  if (style[':active'] && !getComponentField('_radiumMouseUpListener') && ExecutionEnvironment.canUseEventListeners) {
    newComponentFields._radiumMouseUpListener = _mouseUpListener2.default.subscribe(function () {
      Object.keys(getComponentField('state')._radiumStyleState).forEach(function (key) {
        if (getState(':active', key) === 'viamousedown') {
          setState(':active', false, key);
        }
      });
    });
  }

  // Merge the styles in the order they were defined
  var interactionStyles = props.disabled ? [style[':disabled']] : Object.keys(style).filter(function (name) {
    return _isInteractiveStyleField(name) && getState(name);
  }).map(function (name) {
    return style[name];
  });

  var newStyle = mergeStyles([style].concat(interactionStyles));

  // Remove interactive styles
  newStyle = Object.keys(newStyle).reduce(function (styleWithoutInteractions, name) {
    if (!_isInteractiveStyleField(name) && name !== ':disabled') {
      styleWithoutInteractions[name] = newStyle[name];
    }
    return styleWithoutInteractions;
  }, {});

  return {
    componentFields: newComponentFields,
    props: newProps,
    style: newStyle
  };
};

exports.default = resolveInteractionStyles;
module.exports = exports['default'];
},{"./mouse-up-listener":87}],91:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = resolveMediaQueries;


var _windowMatchMedia = void 0;
function _getWindowMatchMedia(ExecutionEnvironment) {
  if (_windowMatchMedia === undefined) {
    _windowMatchMedia = !!ExecutionEnvironment.canUseDOM && !!window && !!window.matchMedia && function (mediaQueryString) {
      return window.matchMedia(mediaQueryString);
    } || null;
  }
  return _windowMatchMedia;
}

function _filterObject(obj, predicate) {
  return Object.keys(obj).filter(function (key) {
    return predicate(obj[key], key);
  }).reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
}

function _removeMediaQueries(style) {
  return Object.keys(style).reduce(function (styleWithoutMedia, key) {
    if (key.indexOf('@media') !== 0) {
      styleWithoutMedia[key] = style[key];
    }
    return styleWithoutMedia;
  }, {});
}

function _topLevelRulesToCSS(_ref) {
  var addCSS = _ref.addCSS;
  var appendImportantToEachValue = _ref.appendImportantToEachValue;
  var cssRuleSetToString = _ref.cssRuleSetToString;
  var hash = _ref.hash;
  var isNestedStyle = _ref.isNestedStyle;
  var style = _ref.style;
  var userAgent = _ref.userAgent;

  var className = '';
  Object.keys(style).filter(function (name) {
    return name.indexOf('@media') === 0;
  }).map(function (query) {
    var topLevelRules = appendImportantToEachValue(_filterObject(style[query], function (value) {
      return !isNestedStyle(value);
    }));

    if (!Object.keys(topLevelRules).length) {
      return;
    }

    var ruleCSS = cssRuleSetToString('', topLevelRules, userAgent);

    // CSS classes cannot start with a number
    var mediaQueryClassName = 'rmq-' + hash(query + ruleCSS);
    var css = query + '{ .' + mediaQueryClassName + ruleCSS + '}';

    addCSS(css);

    className += (className ? ' ' : '') + mediaQueryClassName;
  });
  return className;
}

function _subscribeToMediaQuery(_ref2) {
  var listener = _ref2.listener;
  var listenersByQuery = _ref2.listenersByQuery;
  var matchMedia = _ref2.matchMedia;
  var mediaQueryListsByQuery = _ref2.mediaQueryListsByQuery;
  var query = _ref2.query;

  query = query.replace('@media ', '');

  var mql = mediaQueryListsByQuery[query];
  if (!mql && matchMedia) {
    mediaQueryListsByQuery[query] = mql = matchMedia(query);
  }

  if (!listenersByQuery || !listenersByQuery[query]) {
    mql.addListener(listener);

    listenersByQuery[query] = {
      remove: function remove() {
        mql.removeListener(listener);
      }
    };
  }
  return mql;
}

function resolveMediaQueries(_ref3) {
  var ExecutionEnvironment = _ref3.ExecutionEnvironment;
  var addCSS = _ref3.addCSS;
  var appendImportantToEachValue = _ref3.appendImportantToEachValue;
  var config = _ref3.config;
  var cssRuleSetToString = _ref3.cssRuleSetToString;
  var getComponentField = _ref3.getComponentField;
  var getGlobalState = _ref3.getGlobalState;
  var hash = _ref3.hash;
  var isNestedStyle = _ref3.isNestedStyle;
  var mergeStyles = _ref3.mergeStyles;
  var props = _ref3.props;
  var setState = _ref3.setState;
  var style = _ref3.style;
  // eslint-disable-line no-shadow
  var newStyle = _removeMediaQueries(style);
  var mediaQueryClassNames = _topLevelRulesToCSS({
    addCSS: addCSS,
    appendImportantToEachValue: appendImportantToEachValue,
    cssRuleSetToString: cssRuleSetToString,
    hash: hash,
    isNestedStyle: isNestedStyle,
    style: style,
    userAgent: config.userAgent
  });

  var newProps = mediaQueryClassNames ? {
    className: mediaQueryClassNames + (props.className ? ' ' + props.className : '')
  } : null;

  var matchMedia = config.matchMedia || _getWindowMatchMedia(ExecutionEnvironment);

  if (!matchMedia) {
    return {
      props: newProps,
      style: newStyle
    };
  }

  var listenersByQuery = _extends({}, getComponentField('_radiumMediaQueryListenersByQuery'));
  var mediaQueryListsByQuery = getGlobalState('mediaQueryListsByQuery') || {};

  Object.keys(style).filter(function (name) {
    return name.indexOf('@media') === 0;
  }).map(function (query) {
    var nestedRules = _filterObject(style[query], isNestedStyle);

    if (!Object.keys(nestedRules).length) {
      return;
    }

    var mql = _subscribeToMediaQuery({
      listener: function listener() {
        return setState(query, mql.matches, '_all');
      },
      listenersByQuery: listenersByQuery,
      matchMedia: matchMedia,
      mediaQueryListsByQuery: mediaQueryListsByQuery,
      query: query
    });

    // Apply media query states
    if (mql.matches) {
      newStyle = mergeStyles([newStyle, nestedRules]);
    }
  });

  return {
    componentFields: {
      _radiumMediaQueryListenersByQuery: listenersByQuery
    },
    globalState: { mediaQueryListsByQuery: mediaQueryListsByQuery },
    props: newProps,
    style: newStyle
  };
}
module.exports = exports['default'];
},{}],92:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = visited;
function visited(_ref) {
  var addCSS = _ref.addCSS;
  var appendImportantToEachValue = _ref.appendImportantToEachValue;
  var config = _ref.config;
  var cssRuleSetToString = _ref.cssRuleSetToString;
  var hash = _ref.hash;
  var props = _ref.props;
  var style = _ref.style;
  // eslint-disable-line no-shadow
  var className = props.className;

  var newStyle = Object.keys(style).reduce(function (newStyleInProgress, key) {
    var value = style[key];
    if (key === ':visited') {
      value = appendImportantToEachValue(value);
      var ruleCSS = cssRuleSetToString('', value, config.userAgent);
      var visitedClassName = 'rad-' + hash(ruleCSS);
      var css = '.' + visitedClassName + ':visited' + ruleCSS;

      addCSS(css);
      className = (className ? className + ' ' : '') + visitedClassName;
    } else {
      newStyleInProgress[key] = value;
    }

    return newStyleInProgress;
  }, {});

  return {
    props: className === props.className ? null : { className: className },
    style: newStyle
  };
}
module.exports = exports['default'];
},{}],93:[function(require,module,exports){
(function (process,global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                   * Based on https://github.com/jsstyles/css-vendor, but without having to
                                                                                                                                                                                                                                                   * convert between different cases all the time.
                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                                                   */

exports.getPrefixedKeyframes = getPrefixedKeyframes;
exports.getPrefixedStyle = getPrefixedStyle;

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformValues(style) {
  return Object.keys(style).reduce(function (newStyle, key) {
    var value = style[key];
    if (Array.isArray(value)) {
      value = value.join(';' + key + ':');
    } else if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.toString === 'function') {
      value = value.toString();
    }

    newStyle[key] = value;
    return newStyle;
  }, {});
}

var _hasWarnedAboutUserAgent = false;
var _lastUserAgent = void 0;
var _cachedPrefixer = void 0;

function getPrefixer(userAgent) {
  var actualUserAgent = userAgent || global && global.navigator && global.navigator.userAgent;

  if (process.env.NODE_ENV !== 'production') {
    if (!actualUserAgent && !_hasWarnedAboutUserAgent) {
      /* eslint-disable no-console */
      console.warn('Radium: userAgent should be supplied for server-side rendering. See ' + 'https://github.com/FormidableLabs/radium/tree/master/docs/api#radium ' + 'for more information.');
      /* eslint-enable no-console */
      _hasWarnedAboutUserAgent = true;
    }
  }

  if (!_cachedPrefixer || actualUserAgent !== _lastUserAgent) {
    if (actualUserAgent === 'all') {
      _cachedPrefixer = {
        prefix: _inlineStylePrefixer2.default.prefixAll,
        prefixedKeyframes: 'keyframes'
      };
    } else {
      _cachedPrefixer = new _inlineStylePrefixer2.default({ userAgent: actualUserAgent });
    }
    _lastUserAgent = actualUserAgent;
  }
  return _cachedPrefixer;
}

function getPrefixedKeyframes(userAgent) {
  return getPrefixer(userAgent).prefixedKeyframes;
}

// Returns a new style object with vendor prefixes added to property names
// and values.
function getPrefixedStyle(style, userAgent) {
  var styleWithFallbacks = transformValues(style);
  var prefixer = getPrefixer(userAgent);
  var prefixedStyle = prefixer.prefix(styleWithFallbacks);
  return prefixedStyle;
}
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":66,"inline-style-prefixer":96}],94:[function(require,module,exports){
(function (process){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _appendImportantToEachValue = require('./append-important-to-each-value');

var _appendImportantToEachValue2 = _interopRequireDefault(_appendImportantToEachValue);

var _cssRuleSetToString = require('./css-rule-set-to-string');

var _cssRuleSetToString2 = _interopRequireDefault(_cssRuleSetToString);

var _getState = require('./get-state');

var _getState2 = _interopRequireDefault(_getState);

var _getStateKey = require('./get-state-key');

var _getStateKey2 = _interopRequireDefault(_getStateKey);

var _hash = require('./hash');

var _hash2 = _interopRequireDefault(_hash);

var _mergeStyles = require('./merge-styles');

var _plugins = require('./plugins/');

var _plugins2 = _interopRequireDefault(_plugins);

var _exenv = require('exenv');

var _exenv2 = _interopRequireDefault(_exenv);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_CONFIG = {
  plugins: [_plugins2.default.mergeStyleArray, _plugins2.default.checkProps, _plugins2.default.resolveMediaQueries, _plugins2.default.resolveInteractionStyles, _plugins2.default.keyframes, _plugins2.default.visited, _plugins2.default.removeNestedStyles, _plugins2.default.prefix, _plugins2.default.checkProps]
};

// Gross
var globalState = {};

// Declare early for recursive helpers.
var resolveStyles = null;

var _shouldResolveStyles = function _shouldResolveStyles(component) {
  return component.type && !component.type._isRadiumEnhanced;
};

var _resolveChildren = function _resolveChildren(_ref) {
  var children = _ref.children;
  var component = _ref.component;
  var config = _ref.config;
  var existingKeyMap = _ref.existingKeyMap;

  if (!children) {
    return children;
  }

  var childrenType = typeof children === 'undefined' ? 'undefined' : _typeof(children);

  if (childrenType === 'string' || childrenType === 'number') {
    // Don't do anything with a single primitive child
    return children;
  }

  if (childrenType === 'function') {
    // Wrap the function, resolving styles on the result
    return function () {
      var result = children.apply(this, arguments);
      if (_react2.default.isValidElement(result)) {
        return resolveStyles(component, result, config, existingKeyMap, true);
      }
      return result;
    };
  }

  if (_react2.default.Children.count(children) === 1 && children.type) {
    // If a React Element is an only child, don't wrap it in an array for
    // React.Children.map() for React.Children.only() compatibility.
    var onlyChild = _react2.default.Children.only(children);
    return resolveStyles(component, onlyChild, config, existingKeyMap, true);
  }

  return _react2.default.Children.map(children, function (child) {
    if (_react2.default.isValidElement(child)) {
      return resolveStyles(component, child, config, existingKeyMap, true);
    }

    return child;
  });
};

// Recurse over props, just like children
var _resolveProps = function _resolveProps(_ref2) {
  var component = _ref2.component;
  var config = _ref2.config;
  var existingKeyMap = _ref2.existingKeyMap;
  var props = _ref2.props;

  var newProps = props;

  Object.keys(props).forEach(function (prop) {
    // We already recurse over children above
    if (prop === 'children') {
      return;
    }

    var propValue = props[prop];
    if (_react2.default.isValidElement(propValue)) {
      newProps = _extends({}, newProps);
      newProps[prop] = resolveStyles(component, propValue, config, existingKeyMap, true);
    }
  });

  return newProps;
};

var _buildGetKey = function _buildGetKey(_ref3) {
  var componentName = _ref3.componentName;
  var existingKeyMap = _ref3.existingKeyMap;
  var renderedElement = _ref3.renderedElement;

  // We need a unique key to correlate state changes due to user interaction
  // with the rendered element, so we know to apply the proper interactive
  // styles.
  var originalKey = typeof renderedElement.ref === 'string' ? renderedElement.ref : renderedElement.key;
  var key = (0, _getStateKey2.default)(originalKey);

  var alreadyGotKey = false;
  var getKey = function getKey() {
    if (alreadyGotKey) {
      return key;
    }

    alreadyGotKey = true;

    if (existingKeyMap[key]) {
      var elementName = void 0;
      if (typeof renderedElement.type === 'string') {
        elementName = renderedElement.type;
      } else if (renderedElement.type.constructor) {
        elementName = renderedElement.type.constructor.displayName || renderedElement.type.constructor.name;
      }

      throw new Error('Radium requires each element with interactive styles to have a unique ' + 'key, set using either the ref or key prop. ' + (originalKey ? 'Key "' + originalKey + '" is a duplicate.' : 'Multiple elements have no key specified.') + ' ' + 'Component: "' + componentName + '". ' + (elementName ? 'Element: "' + elementName + '".' : ''));
    }

    existingKeyMap[key] = true;

    return key;
  };

  return getKey;
};

var _setStyleState = function _setStyleState(component, key, stateKey, value) {
  if (!component._radiumIsMounted) {
    return;
  }

  var existing = component._lastRadiumState || component.state && component.state._radiumStyleState || {};

  var state = { _radiumStyleState: _extends({}, existing) };
  state._radiumStyleState[key] = _extends({}, state._radiumStyleState[key]);
  state._radiumStyleState[key][stateKey] = value;

  component._lastRadiumState = state._radiumStyleState;
  component.setState(state);
};

var _runPlugins = function _runPlugins(_ref4) {
  var component = _ref4.component;
  var config = _ref4.config;
  var existingKeyMap = _ref4.existingKeyMap;
  var props = _ref4.props;
  var renderedElement = _ref4.renderedElement;

  // Don't run plugins if renderedElement is not a simple ReactDOMElement or has
  // no style.
  if (!_react2.default.isValidElement(renderedElement) || typeof renderedElement.type !== 'string' || !props.style) {
    return props;
  }

  var newProps = props;

  var plugins = config.plugins || DEFAULT_CONFIG.plugins;

  var componentName = component.constructor.displayName || component.constructor.name;
  var getKey = _buildGetKey({ renderedElement: renderedElement, existingKeyMap: existingKeyMap, componentName: componentName });
  var getComponentField = function getComponentField(key) {
    return component[key];
  };
  var getGlobalState = function getGlobalState(key) {
    return globalState[key];
  };
  var componentGetState = function componentGetState(stateKey, elementKey) {
    return (0, _getState2.default)(component.state, elementKey || getKey(), stateKey);
  };
  var setState = function setState(stateKey, value, elementKey) {
    return _setStyleState(component, elementKey || getKey(), stateKey, value);
  };

  var addCSS = function addCSS(css) {
    var styleKeeper = component._radiumStyleKeeper || component.context._radiumStyleKeeper;
    if (!styleKeeper) {
      if (__isTestModeEnabled) {
        return {
          remove: function remove() {}
        };
      }

      throw new Error('To use plugins requiring `addCSS` (e.g. keyframes, media queries), ' + 'please wrap your application in the StyleRoot component. Component ' + 'name: `' + componentName + '`.');
    }

    return styleKeeper.addCSS(css);
  };

  var newStyle = props.style;

  plugins.forEach(function (plugin) {
    var result = plugin({
      ExecutionEnvironment: _exenv2.default,
      addCSS: addCSS,
      appendImportantToEachValue: _appendImportantToEachValue2.default,
      componentName: componentName,
      config: config,
      cssRuleSetToString: _cssRuleSetToString2.default,
      getComponentField: getComponentField,
      getGlobalState: getGlobalState,
      getState: componentGetState,
      hash: _hash2.default,
      mergeStyles: _mergeStyles.mergeStyles,
      props: newProps,
      setState: setState,
      isNestedStyle: _mergeStyles.isNestedStyle,
      style: newStyle
    }) || {};

    newStyle = result.style || newStyle;

    newProps = result.props && Object.keys(result.props).length ? _extends({}, newProps, result.props) : newProps;

    var newComponentFields = result.componentFields || {};
    Object.keys(newComponentFields).forEach(function (fieldName) {
      component[fieldName] = newComponentFields[fieldName];
    });

    var newGlobalState = result.globalState || {};
    Object.keys(newGlobalState).forEach(function (key) {
      globalState[key] = newGlobalState[key];
    });
  });

  if (newStyle !== props.style) {
    newProps = _extends({}, newProps, { style: newStyle });
  }

  return newProps;
};

// Wrapper around React.cloneElement. To avoid processing the same element
// twice, whenever we clone an element add a special prop to make sure we don't
// process this element again.
var _cloneElement = function _cloneElement(renderedElement, newProps, newChildren) {
  // Only add flag if this is a normal DOM element
  if (typeof renderedElement.type === 'string') {
    newProps = _extends({}, newProps, { 'data-radium': true });
  }

  return _react2.default.cloneElement(renderedElement, newProps, newChildren);
};

//
// The nucleus of Radium. resolveStyles is called on the rendered elements
// before they are returned in render. It iterates over the elements and
// children, rewriting props to add event handlers required to capture user
// interactions (e.g. mouse over). It also replaces the style prop because it
// adds in the various interaction styles (e.g. :hover).
//
resolveStyles = function resolveStyles(component, // ReactComponent, flow+eslint complaining
renderedElement) {
  var config = arguments.length <= 2 || arguments[2] === undefined ? DEFAULT_CONFIG : arguments[2];
  var existingKeyMap = arguments[3];
  var shouldCheckBeforeResolve = arguments.length <= 4 || arguments[4] === undefined ? false : arguments[4];
  // ReactElement
  existingKeyMap = existingKeyMap || {};
  if (!renderedElement ||
  // Bail if we've already processed this element. This ensures that only the
  // owner of an element processes that element, since the owner's render
  // function will be called first (which will always be the case, since you
  // can't know what else to render until you render the parent component).
  renderedElement.props && renderedElement.props['data-radium'] ||

  // Bail if this element is a radium enhanced element, because if it is,
  // then it will take care of resolving its own styles.
  shouldCheckBeforeResolve && !_shouldResolveStyles(renderedElement)) {
    return renderedElement;
  }

  var newChildren = _resolveChildren({
    children: renderedElement.props.children,
    component: component,
    config: config,
    existingKeyMap: existingKeyMap
  });

  var newProps = _resolveProps({
    component: component,
    config: config,
    existingKeyMap: existingKeyMap,
    props: renderedElement.props
  });

  newProps = _runPlugins({
    component: component,
    config: config,
    existingKeyMap: existingKeyMap,
    props: newProps,
    renderedElement: renderedElement
  });

  // If nothing changed, don't bother cloning the element. Might be a bit
  // wasteful, as we add the sentinal to stop double-processing when we clone.
  // Assume benign double-processing is better than unneeded cloning.
  if (newChildren === renderedElement.props.children && newProps === renderedElement.props) {
    return renderedElement;
  }

  return _cloneElement(renderedElement, newProps !== renderedElement.props ? newProps : {}, newChildren);
};

// Only for use by tests
var __isTestModeEnabled = false;
if (process.env.NODE_ENV !== 'production') {
  resolveStyles.__clearStateForTests = function () {
    globalState = {};
  };
  resolveStyles.__setTestMode = function (isEnabled) {
    __isTestModeEnabled = isEnabled;
  };
}

exports.default = resolveStyles;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./append-important-to-each-value":68,"./css-rule-set-to-string":74,"./get-state":77,"./get-state-key":76,"./hash":78,"./merge-styles":82,"./plugins/":84,"_process":66,"exenv":21,"react":"react"}],95:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleKeeper = function () {
  function StyleKeeper(userAgent) {
    _classCallCheck(this, StyleKeeper);

    this._userAgent = userAgent;
    this._listeners = [];
    this._cssSet = {};
  }

  StyleKeeper.prototype.subscribe = function subscribe(listener) {
    var _this = this;

    if (this._listeners.indexOf(listener) === -1) {
      this._listeners.push(listener);
    }

    return {
      // Must be fat arrow to capture `this`
      remove: function remove() {
        var listenerIndex = _this._listeners.indexOf(listener);
        if (listenerIndex > -1) {
          _this._listeners.splice(listenerIndex, 1);
        }
      }
    };
  };

  StyleKeeper.prototype.addCSS = function addCSS(css) {
    var _this2 = this;

    if (!this._cssSet[css]) {
      this._cssSet[css] = true;
      this._emitChange();
    }

    return {
      // Must be fat arrow to capture `this`
      remove: function remove() {
        delete _this2._cssSet[css];
        _this2._emitChange();
      }
    };
  };

  StyleKeeper.prototype.getCSS = function getCSS() {
    return Object.keys(this._cssSet).join('\n');
  };

  StyleKeeper.prototype._emitChange = function _emitChange() {
    this._listeners.forEach(function (listener) {
      return listener();
    });
  };

  return StyleKeeper;
}();

exports.default = StyleKeeper;
module.exports = exports['default'];
},{}],96:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _inlineStylePrefixAll = require('inline-style-prefix-all');

var _inlineStylePrefixAll2 = _interopRequireDefault(_inlineStylePrefixAll);

var _utilsGetBrowserInformation = require('./utils/getBrowserInformation');

var _utilsGetBrowserInformation2 = _interopRequireDefault(_utilsGetBrowserInformation);

var _utilsGetPrefixedKeyframes = require('./utils/getPrefixedKeyframes');

var _utilsGetPrefixedKeyframes2 = _interopRequireDefault(_utilsGetPrefixedKeyframes);

var _utilsCapitalizeString = require('./utils/capitalizeString');

var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

var _utilsAssign = require('./utils/assign');

var _utilsAssign2 = _interopRequireDefault(_utilsAssign);

var _prefixProps = require('./prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var _pluginsCalc = require('./plugins/calc');

var _pluginsCalc2 = _interopRequireDefault(_pluginsCalc);

var _pluginsCursor = require('./plugins/cursor');

var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);

var _pluginsFlex = require('./plugins/flex');

var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);

var _pluginsSizing = require('./plugins/sizing');

var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);

var _pluginsGradient = require('./plugins/gradient');

var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);

var _pluginsTransition = require('./plugins/transition');

var _pluginsTransition2 = _interopRequireDefault(_pluginsTransition);

// special flexbox specifications

var _pluginsFlexboxIE = require('./plugins/flexboxIE');

var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);

var _pluginsFlexboxOld = require('./plugins/flexboxOld');

var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);

var plugins = [_pluginsCalc2['default'], _pluginsCursor2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsTransition2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default'],
// this must be run AFTER the flexbox specs
_pluginsFlex2['default']];

var Prefixer = (function () {
  /**
   * Instantiante a new prefixer
   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
   * @param {string} keepUnprefixed - keeps unprefixed properties and values
   */

  function Prefixer() {
    var _this = this;

    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Prefixer);

    var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

    this._userAgent = options.userAgent || defaultUserAgent;
    this._keepUnprefixed = options.keepUnprefixed || false;

    this._browserInfo = (0, _utilsGetBrowserInformation2['default'])(this._userAgent);

    // Checks if the userAgent was resolved correctly
    if (this._browserInfo && this._browserInfo.prefix) {
      // set additional prefix information
      this.cssPrefix = this._browserInfo.prefix.css;
      this.jsPrefix = this._browserInfo.prefix.inline;
      this.prefixedKeyframes = (0, _utilsGetPrefixedKeyframes2['default'])(this._browserInfo);
    } else {
      this._usePrefixAllFallback = true;
      return false;
    }

    var data = this._browserInfo.browser && _prefixProps2['default'][this._browserInfo.browser];
    if (data) {
      this._requiresPrefix = Object.keys(data).filter(function (key) {
        return data[key] >= _this._browserInfo.version;
      }).reduce(function (result, name) {
        result[name] = true;
        return result;
      }, {});
      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
    } else {
      this._usePrefixAllFallback = true;
    }
  }

  /**
   * Returns a prefixed version of the style object
   * @param {Object} styles - Style object that gets prefixed properties added
   * @returns {Object} - Style object with prefixed properties and values
   */

  _createClass(Prefixer, [{
    key: 'prefix',
    value: function prefix(styles) {
      var _this2 = this;

      // use prefixAll as fallback if userAgent can not be resolved
      if (this._usePrefixAllFallback) {
        return (0, _inlineStylePrefixAll2['default'])(styles);
      }

      // only add prefixes if needed
      if (!this._hasPropsRequiringPrefix) {
        return styles;
      }

      styles = (0, _utilsAssign2['default'])({}, styles);

      Object.keys(styles).forEach(function (property) {
        var value = styles[property];
        if (value instanceof Object) {
          // recurse through nested style objects
          styles[property] = _this2.prefix(value);
        } else {
          // add prefixes if needed
          if (_this2._requiresPrefix[property]) {
            styles[_this2.jsPrefix + (0, _utilsCapitalizeString2['default'])(property)] = value;
            if (!_this2._keepUnprefixed) {
              delete styles[property];
            }
          }

          // resolve plugins
          plugins.forEach(function (plugin) {
            // generates a new plugin interface with current data
            var resolvedStyles = plugin({
              property: property,
              value: value,
              styles: styles,
              browserInfo: _this2._browserInfo,
              prefix: {
                js: _this2.jsPrefix,
                css: _this2.cssPrefix,
                keyframes: _this2.prefixedKeyframes
              },
              keepUnprefixed: _this2._keepUnprefixed,
              requiresPrefix: _this2._requiresPrefix
            });
            (0, _utilsAssign2['default'])(styles, resolvedStyles);
          });
        }
      });

      return styles;
    }

    /**
     * Returns a prefixed version of the style object using all vendor prefixes
     * @param {Object} styles - Style object that gets prefixed properties added
     * @returns {Object} - Style object with prefixed properties and values
     */
  }], [{
    key: 'prefixAll',
    value: function prefixAll(styles) {
      return (0, _inlineStylePrefixAll2['default'])(styles);
    }
  }]);

  return Prefixer;
})();

exports['default'] = Prefixer;
module.exports = exports['default'];
},{"./plugins/calc":97,"./plugins/cursor":98,"./plugins/flex":99,"./plugins/flexboxIE":100,"./plugins/flexboxOld":101,"./plugins/gradient":102,"./plugins/sizing":103,"./plugins/transition":104,"./prefixProps":105,"./utils/assign":106,"./utils/capitalizeString":108,"./utils/getBrowserInformation":109,"./utils/getPrefixedKeyframes":110,"inline-style-prefix-all":31}],97:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = calc;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _utilsCamelToDashCase = require('../utils/camelToDashCase');

var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

function calc(_ref2) {
  var property = _ref2.property;
  var value = _ref2.value;
  var _ref2$browserInfo = _ref2.browserInfo;
  var browser = _ref2$browserInfo.browser;
  var version = _ref2$browserInfo.version;
  var css = _ref2.prefix.css;
  var keepUnprefixed = _ref2.keepUnprefixed;

  if (typeof value === 'string' && value.indexOf('calc(') > -1 && (browser === 'firefox' && version < 15 || browser === 'chrome' && version < 25 || browser === 'safari' && version < 6.1 || browser === 'ios_saf' && version < 7)) {
    return _defineProperty({}, property, value.replace(/calc\(/g, css + 'calc(') + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : ''));
  }
}

module.exports = exports['default'];
},{"../utils/camelToDashCase":107}],98:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = cursor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsCamelToDashCase = require('../utils/camelToDashCase');

var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

var values = {
  'zoom-in': true,
  'zoom-out': true,
  'grab': true,
  'grabbing': true
};

function cursor(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'cursor' && values[value] && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
    return {
      cursor: css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
    };
  }
}

module.exports = exports['default'];
},{"../utils/camelToDashCase":107}],99:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = flex;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsCamelToDashCase = require('../utils/camelToDashCase');

var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

var values = {
  'flex': true,
  'inline-flex': true
};

function flex(_ref) {
  var property = _ref.property;
  var value = _ref.value;
  var _ref$browserInfo = _ref.browserInfo;
  var browser = _ref$browserInfo.browser;
  var version = _ref$browserInfo.version;
  var css = _ref.prefix.css;
  var keepUnprefixed = _ref.keepUnprefixed;

  if (property === 'display' && values[value] && (browser === 'chrome' && version < 29 && version > 20 || (browser === 'safari' || browser === 'ios_saf') && version < 9 && version > 6 || browser === 'opera' && (version == 15 || version == 16))) {
    return {
      display: css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
    };
  }
}

module.exports = exports['default'];
},{"../utils/camelToDashCase":107}],100:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = flexboxIE;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _utilsCamelToDashCase = require('../utils/camelToDashCase');

var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  flex: 'flexbox',
  'inline-flex': 'inline-flexbox'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

var properties = Object.keys(alternativeProps).reduce(function (result, prop) {
  result[prop] = true;
  return result;
}, {});

function flexboxIE(_ref2) {
  var property = _ref2.property;
  var value = _ref2.value;
  var styles = _ref2.styles;
  var _ref2$browserInfo = _ref2.browserInfo;
  var browser = _ref2$browserInfo.browser;
  var version = _ref2$browserInfo.version;
  var css = _ref2.prefix.css;
  var keepUnprefixed = _ref2.keepUnprefixed;

  if ((properties[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
    if (!keepUnprefixed) {
      delete styles[property];
    }
    if (property === 'display' && alternativeValues[value]) {
      return {
        display: css + alternativeValues[value] + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
      };
    }
    if (alternativeProps[property]) {
      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
    }
  }
}

module.exports = exports['default'];
},{"../utils/camelToDashCase":107}],101:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = flexboxOld;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _utilsCamelToDashCase = require('../utils/camelToDashCase');

var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

var otherProps = ['alignContent', 'alignSelf', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection'];

var properties = Object.keys(alternativeProps).concat(otherProps).reduce(function (result, prop) {
  result[prop] = true;
  return result;
}, {});

function flexboxOld(_ref2) {
  var property = _ref2.property;
  var value = _ref2.value;
  var styles = _ref2.styles;
  var _ref2$browserInfo = _ref2.browserInfo;
  var browser = _ref2$browserInfo.browser;
  var version = _ref2$browserInfo.version;
  var css = _ref2.prefix.css;
  var keepUnprefixed = _ref2.keepUnprefixed;

  if ((properties[property] || property === 'display' && typeof value === 'string' && value.indexOf('flex') > -1) && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
    if (!keepUnprefixed) {
      delete styles[property];
    }
    if (property === 'flexDirection') {
      return {
        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
      };
    }
    if (property === 'display' && alternativeValues[value]) {
      return {
        display: css + alternativeValues[value] + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : '')
      };
    }
    if (alternativeProps[property]) {
      return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
    }
  }
}

module.exports = exports['default'];
},{"../utils/camelToDashCase":107}],102:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = gradient;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _utilsCamelToDashCase = require('../utils/camelToDashCase');

var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(_ref2) {
  var property = _ref2.property;
  var value = _ref2.value;
  var _ref2$browserInfo = _ref2.browserInfo;
  var browser = _ref2$browserInfo.browser;
  var version = _ref2$browserInfo.version;
  var css = _ref2.prefix.css;
  var keepUnprefixed = _ref2.keepUnprefixed;

  if (typeof value === 'string' && value.match(values) !== null && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
    return _defineProperty({}, property, css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : ''));
  }
}

module.exports = exports['default'];
},{"../utils/camelToDashCase":107}],103:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = sizing;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _utilsCamelToDashCase = require('../utils/camelToDashCase');

var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(_ref2) {
  var property = _ref2.property;
  var value = _ref2.value;
  var css = _ref2.prefix.css;
  var keepUnprefixed = _ref2.keepUnprefixed;

  // This might change in the future
  // Keep an eye on it
  if (properties[property] && values[value]) {
    return _defineProperty({}, property, css + value + (keepUnprefixed ? ';' + (0, _utilsCamelToDashCase2['default'])(property) + ':' + value : ''));
  }
}

module.exports = exports['default'];
},{"../utils/camelToDashCase":107}],104:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = transition;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _utilsCamelToDashCase = require('../utils/camelToDashCase');

var _utilsCamelToDashCase2 = _interopRequireDefault(_utilsCamelToDashCase);

var _utilsCapitalizeString = require('../utils/capitalizeString');

var _utilsCapitalizeString2 = _interopRequireDefault(_utilsCapitalizeString);

var _utilsUnprefixProperty = require('../utils/unprefixProperty');

var _utilsUnprefixProperty2 = _interopRequireDefault(_utilsUnprefixProperty);

var properties = { transition: true, transitionProperty: true };

function transition(_ref2) {
  var property = _ref2.property;
  var value = _ref2.value;
  var css = _ref2.prefix.css;
  var requiresPrefix = _ref2.requiresPrefix;
  var keepUnprefixed = _ref2.keepUnprefixed;

  // also check for already prefixed transitions
  var unprefixedProperty = (0, _utilsUnprefixProperty2['default'])(property);
  if (typeof value === 'string' && properties[unprefixedProperty]) {
    var _ret = (function () {
      var requiresPrefixDashCased = Object.keys(requiresPrefix).map(function (prop) {
        return (0, _utilsCamelToDashCase2['default'])(prop);
      });

      // only split multi values, not cubic beziers
      var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

      requiresPrefixDashCased.forEach(function (property) {
        multipleValues.forEach(function (val, index) {
          if (val.indexOf(property) > -1) {
            multipleValues[index] = val.replace(property, css + property) + (keepUnprefixed ? ',' + val : '');
          }
        });
      });

      return {
        v: _defineProperty({}, property, multipleValues.join(','))
      };
    })();

    if (typeof _ret === 'object') return _ret.v;
  }
}

module.exports = exports['default'];
},{"../utils/camelToDashCase":107,"../utils/capitalizeString":108,"../utils/unprefixProperty":111}],105:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = { "chrome": { "transform": 35, "transformOrigin": 35, "transformOriginX": 35, "transformOriginY": 35, "backfaceVisibility": 35, "perspective": 35, "perspectiveOrigin": 35, "transformStyle": 35, "transformOriginZ": 35, "animation": 42, "animationDelay": 42, "animationDirection": 42, "animationFillMode": 42, "animationDuration": 42, "animationIterationCount": 42, "animationName": 42, "animationPlayState": 42, "animationTimingFunction": 42, "appearance": 52, "userSelect": 52, "fontKerning": 32, "textEmphasisPosition": 52, "textEmphasis": 52, "textEmphasisStyle": 52, "textEmphasisColor": 52, "boxDecorationBreak": 52, "clipPath": 52, "maskImage": 52, "maskMode": 52, "maskRepeat": 52, "maskPosition": 52, "maskClip": 52, "maskOrigin": 52, "maskSize": 52, "maskComposite": 52, "mask": 52, "maskBorderSource": 52, "maskBorderMode": 52, "maskBorderSlice": 52, "maskBorderWidth": 52, "maskBorderOutset": 52, "maskBorderRepeat": 52, "maskBorder": 52, "maskType": 52, "textDecorationStyle": 52, "textDecorationSkip": 52, "textDecorationLine": 52, "textDecorationColor": 52, "filter": 52, "fontFeatureSettings": 47, "breakAfter": 52, "breakBefore": 52, "breakInside": 52, "columnCount": 52, "columnFill": 52, "columnGap": 52, "columnRule": 52, "columnRuleColor": 52, "columnRuleStyle": 52, "columnRuleWidth": 52, "columns": 52, "columnSpan": 52, "columnWidth": 52 }, "safari": { "flex": 8, "flexBasis": 8, "flexDirection": 8, "flexGrow": 8, "flexFlow": 8, "flexShrink": 8, "flexWrap": 8, "alignContent": 8, "alignItems": 8, "alignSelf": 8, "justifyContent": 8, "order": 8, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8, "transformOrigin": 8, "transformOriginX": 8, "transformOriginY": 8, "backfaceVisibility": 8, "perspective": 8, "perspectiveOrigin": 8, "transformStyle": 8, "transformOriginZ": 8, "animation": 8, "animationDelay": 8, "animationDirection": 8, "animationFillMode": 8, "animationDuration": 8, "animationIterationCount": 8, "animationName": 8, "animationPlayState": 8, "animationTimingFunction": 8, "appearance": 9.1, "userSelect": 9.1, "backdropFilter": 9.1, "fontKerning": 9.1, "scrollSnapType": 9.1, "scrollSnapPointsX": 9.1, "scrollSnapPointsY": 9.1, "scrollSnapDestination": 9.1, "scrollSnapCoordinate": 9.1, "textEmphasisPosition": 7, "textEmphasis": 7, "textEmphasisStyle": 7, "textEmphasisColor": 7, "boxDecorationBreak": 9.1, "clipPath": 9.1, "maskImage": 9.1, "maskMode": 9.1, "maskRepeat": 9.1, "maskPosition": 9.1, "maskClip": 9.1, "maskOrigin": 9.1, "maskSize": 9.1, "maskComposite": 9.1, "mask": 9.1, "maskBorderSource": 9.1, "maskBorderMode": 9.1, "maskBorderSlice": 9.1, "maskBorderWidth": 9.1, "maskBorderOutset": 9.1, "maskBorderRepeat": 9.1, "maskBorder": 9.1, "maskType": 9.1, "textDecorationStyle": 9.1, "textDecorationSkip": 9.1, "textDecorationLine": 9.1, "textDecorationColor": 9.1, "shapeImageThreshold": 9.1, "shapeImageMargin": 9.1, "shapeImageOutside": 9.1, "filter": 9, "hyphens": 9.1, "flowInto": 9.1, "flowFrom": 9.1, "breakBefore": 8, "breakAfter": 8, "breakInside": 8, "regionFragment": 9.1, "columnCount": 8, "columnFill": 8, "columnGap": 8, "columnRule": 8, "columnRuleColor": 8, "columnRuleStyle": 8, "columnRuleWidth": 8, "columns": 8, "columnSpan": 8, "columnWidth": 8 }, "firefox": { "appearance": 47, "userSelect": 47, "boxSizing": 28, "textAlignLast": 47, "textDecorationStyle": 35, "textDecorationSkip": 35, "textDecorationLine": 35, "textDecorationColor": 35, "tabSize": 47, "hyphens": 42, "fontFeatureSettings": 33, "breakAfter": 47, "breakBefore": 47, "breakInside": 47, "columnCount": 47, "columnFill": 47, "columnGap": 47, "columnRule": 47, "columnRuleColor": 47, "columnRuleStyle": 47, "columnRuleWidth": 47, "columns": 47, "columnSpan": 47, "columnWidth": 47 }, "opera": { "flex": 16, "flexBasis": 16, "flexDirection": 16, "flexGrow": 16, "flexFlow": 16, "flexShrink": 16, "flexWrap": 16, "alignContent": 16, "alignItems": 16, "alignSelf": 16, "justifyContent": 16, "order": 16, "transform": 22, "transformOrigin": 22, "transformOriginX": 22, "transformOriginY": 22, "backfaceVisibility": 22, "perspective": 22, "perspectiveOrigin": 22, "transformStyle": 22, "transformOriginZ": 22, "animation": 29, "animationDelay": 29, "animationDirection": 29, "animationFillMode": 29, "animationDuration": 29, "animationIterationCount": 29, "animationName": 29, "animationPlayState": 29, "animationTimingFunction": 29, "appearance": 37, "userSelect": 37, "fontKerning": 19, "textEmphasisPosition": 37, "textEmphasis": 37, "textEmphasisStyle": 37, "textEmphasisColor": 37, "boxDecorationBreak": 37, "clipPath": 37, "maskImage": 37, "maskMode": 37, "maskRepeat": 37, "maskPosition": 37, "maskClip": 37, "maskOrigin": 37, "maskSize": 37, "maskComposite": 37, "mask": 37, "maskBorderSource": 37, "maskBorderMode": 37, "maskBorderSlice": 37, "maskBorderWidth": 37, "maskBorderOutset": 37, "maskBorderRepeat": 37, "maskBorder": 37, "maskType": 37, "filter": 37, "fontFeatureSettings": 37, "breakAfter": 37, "breakBefore": 37, "breakInside": 37, "columnCount": 37, "columnFill": 37, "columnGap": 37, "columnRule": 37, "columnRuleColor": 37, "columnRuleStyle": 37, "columnRuleWidth": 37, "columns": 37, "columnSpan": 37, "columnWidth": 37 }, "ie": { "gridTemplateRows": 11, "breakInside": 11, "transformOriginY": 9, "gridRowStart": 11, "gridColumn": 11, "regionFragment": 11, "breakBefore": 11, "userSelect": 11, "gridColumnEnd": 11, "gridRowEnd": 11, "gridTemplateColumns": 11, "gridColumnStart": 11, "gridArea": 11, "flexDirection": 10, "gridRowGap": 11, "gridTemplateAreas": 11, "gridAutoRows": 11, "gridRow": 11, "scrollSnapDestination": 11, "scrollSnapPointsY": 11, "touchAction": 10, "gridGap": 11, "gridColumnGap": 11, "wrapFlow": 11, "scrollSnapPointsX": 11, "flowFrom": 11, "transform": 9, "breakAfter": 11, "wrapMargin": 11, "scrollSnapCoordinate": 11, "flexWrap": 10, "scrollSnapType": 11, "flex": 10, "wrapThrough": 11, "gridAutoColumns": 11, "flexFlow": 10, "gridTemplate": 11, "hyphens": 11, "grid": 11, "transformOriginX": 9, "flowInto": 11, "transformOrigin": 9, "gridAutoFlow": 11, "textSizeAdjust": 11 }, "edge": { "userSelect": 14, "wrapFlow": 14, "wrapThrough": 14, "wrapMargin": 14, "scrollSnapType": 14, "scrollSnapPointsX": 14, "scrollSnapPointsY": 14, "scrollSnapDestination": 14, "scrollSnapCoordinate": 14, "hyphens": 14, "flowInto": 14, "flowFrom": 14, "breakBefore": 14, "breakAfter": 14, "breakInside": 14, "regionFragment": 14, "gridTemplateColumns": 14, "gridTemplateRows": 14, "gridTemplateAreas": 14, "gridTemplate": 14, "gridAutoColumns": 14, "gridAutoRows": 14, "gridAutoFlow": 14, "grid": 14, "gridRowStart": 14, "gridColumnStart": 14, "gridRowEnd": 14, "gridRow": 14, "gridColumn": 14, "gridColumnEnd": 14, "gridColumnGap": 14, "gridRowGap": 14, "gridArea": 14, "gridGap": 14 }, "ios_saf": { "flex": 8.1, "flexBasis": 8.1, "flexDirection": 8.1, "flexGrow": 8.1, "flexFlow": 8.1, "flexShrink": 8.1, "flexWrap": 8.1, "alignContent": 8.1, "alignItems": 8.1, "alignSelf": 8.1, "justifyContent": 8.1, "order": 8.1, "transition": 6, "transitionDelay": 6, "transitionDuration": 6, "transitionProperty": 6, "transitionTimingFunction": 6, "transform": 8.1, "transformOrigin": 8.1, "transformOriginX": 8.1, "transformOriginY": 8.1, "backfaceVisibility": 8.1, "perspective": 8.1, "perspectiveOrigin": 8.1, "transformStyle": 8.1, "transformOriginZ": 8.1, "animation": 8.1, "animationDelay": 8.1, "animationDirection": 8.1, "animationFillMode": 8.1, "animationDuration": 8.1, "animationIterationCount": 8.1, "animationName": 8.1, "animationPlayState": 8.1, "animationTimingFunction": 8.1, "appearance": 9.3, "userSelect": 9.3, "backdropFilter": 9.3, "fontKerning": 9.3, "scrollSnapType": 9.3, "scrollSnapPointsX": 9.3, "scrollSnapPointsY": 9.3, "scrollSnapDestination": 9.3, "scrollSnapCoordinate": 9.3, "boxDecorationBreak": 9.3, "clipPath": 9.3, "maskImage": 9.3, "maskMode": 9.3, "maskRepeat": 9.3, "maskPosition": 9.3, "maskClip": 9.3, "maskOrigin": 9.3, "maskSize": 9.3, "maskComposite": 9.3, "mask": 9.3, "maskBorderSource": 9.3, "maskBorderMode": 9.3, "maskBorderSlice": 9.3, "maskBorderWidth": 9.3, "maskBorderOutset": 9.3, "maskBorderRepeat": 9.3, "maskBorder": 9.3, "maskType": 9.3, "textSizeAdjust": 9.3, "textDecorationStyle": 9.3, "textDecorationSkip": 9.3, "textDecorationLine": 9.3, "textDecorationColor": 9.3, "shapeImageThreshold": 9.3, "shapeImageMargin": 9.3, "shapeImageOutside": 9.3, "filter": 9, "hyphens": 9.3, "flowInto": 9.3, "flowFrom": 9.3, "breakBefore": 8.1, "breakAfter": 8.1, "breakInside": 8.1, "regionFragment": 9.3, "columnCount": 8.1, "columnFill": 8.1, "columnGap": 8.1, "columnRule": 8.1, "columnRuleColor": 8.1, "columnRuleStyle": 8.1, "columnRuleWidth": 8.1, "columns": 8.1, "columnSpan": 8.1, "columnWidth": 8.1 }, "android": { "borderImage": 4.2, "borderImageOutset": 4.2, "borderImageRepeat": 4.2, "borderImageSlice": 4.2, "borderImageSource": 4.2, "borderImageWidth": 4.2, "flex": 4.2, "flexBasis": 4.2, "flexDirection": 4.2, "flexGrow": 4.2, "flexFlow": 4.2, "flexShrink": 4.2, "flexWrap": 4.2, "alignContent": 4.2, "alignItems": 4.2, "alignSelf": 4.2, "justifyContent": 4.2, "order": 4.2, "transition": 4.2, "transitionDelay": 4.2, "transitionDuration": 4.2, "transitionProperty": 4.2, "transitionTimingFunction": 4.2, "transform": 4.4, "transformOrigin": 4.4, "transformOriginX": 4.4, "transformOriginY": 4.4, "backfaceVisibility": 4.4, "perspective": 4.4, "perspectiveOrigin": 4.4, "transformStyle": 4.4, "transformOriginZ": 4.4, "animation": 4.4, "animationDelay": 4.4, "animationDirection": 4.4, "animationFillMode": 4.4, "animationDuration": 4.4, "animationIterationCount": 4.4, "animationName": 4.4, "animationPlayState": 4.4, "animationTimingFunction": 4.4, "appearance": 47, "userSelect": 47, "fontKerning": 4.4, "textEmphasisPosition": 47, "textEmphasis": 47, "textEmphasisStyle": 47, "textEmphasisColor": 47, "boxDecorationBreak": 47, "clipPath": 47, "maskImage": 47, "maskMode": 47, "maskRepeat": 47, "maskPosition": 47, "maskClip": 47, "maskOrigin": 47, "maskSize": 47, "maskComposite": 47, "mask": 47, "maskBorderSource": 47, "maskBorderMode": 47, "maskBorderSlice": 47, "maskBorderWidth": 47, "maskBorderOutset": 47, "maskBorderRepeat": 47, "maskBorder": 47, "maskType": 47, "filter": 47, "fontFeatureSettings": 47, "breakAfter": 47, "breakBefore": 47, "breakInside": 47, "columnCount": 47, "columnFill": 47, "columnGap": 47, "columnRule": 47, "columnRuleColor": 47, "columnRuleStyle": 47, "columnRuleWidth": 47, "columns": 47, "columnSpan": 47, "columnWidth": 47 }, "and_chr": { "appearance": 47, "userSelect": 47, "textEmphasisPosition": 47, "textEmphasis": 47, "textEmphasisStyle": 47, "textEmphasisColor": 47, "boxDecorationBreak": 47, "clipPath": 47, "maskImage": 47, "maskMode": 47, "maskRepeat": 47, "maskPosition": 47, "maskClip": 47, "maskOrigin": 47, "maskSize": 47, "maskComposite": 47, "mask": 47, "maskBorderSource": 47, "maskBorderMode": 47, "maskBorderSlice": 47, "maskBorderWidth": 47, "maskBorderOutset": 47, "maskBorderRepeat": 47, "maskBorder": 47, "maskType": 47, "textDecorationStyle": 47, "textDecorationSkip": 47, "textDecorationLine": 47, "textDecorationColor": 47, "filter": 47, "fontFeatureSettings": 47, "breakAfter": 47, "breakBefore": 47, "breakInside": 47, "columnCount": 47, "columnFill": 47, "columnGap": 47, "columnRule": 47, "columnRuleColor": 47, "columnRuleStyle": 47, "columnRuleWidth": 47, "columns": 47, "columnSpan": 47, "columnWidth": 47 }, "and_uc": { "flex": 9.9, "flexBasis": 9.9, "flexDirection": 9.9, "flexGrow": 9.9, "flexFlow": 9.9, "flexShrink": 9.9, "flexWrap": 9.9, "alignContent": 9.9, "alignItems": 9.9, "alignSelf": 9.9, "justifyContent": 9.9, "order": 9.9, "transition": 9.9, "transitionDelay": 9.9, "transitionDuration": 9.9, "transitionProperty": 9.9, "transitionTimingFunction": 9.9, "transform": 9.9, "transformOrigin": 9.9, "transformOriginX": 9.9, "transformOriginY": 9.9, "backfaceVisibility": 9.9, "perspective": 9.9, "perspectiveOrigin": 9.9, "transformStyle": 9.9, "transformOriginZ": 9.9, "animation": 9.9, "animationDelay": 9.9, "animationDirection": 9.9, "animationFillMode": 9.9, "animationDuration": 9.9, "animationIterationCount": 9.9, "animationName": 9.9, "animationPlayState": 9.9, "animationTimingFunction": 9.9, "appearance": 9.9, "userSelect": 9.9, "fontKerning": 9.9, "textEmphasisPosition": 9.9, "textEmphasis": 9.9, "textEmphasisStyle": 9.9, "textEmphasisColor": 9.9, "maskImage": 9.9, "maskMode": 9.9, "maskRepeat": 9.9, "maskPosition": 9.9, "maskClip": 9.9, "maskOrigin": 9.9, "maskSize": 9.9, "maskComposite": 9.9, "mask": 9.9, "maskBorderSource": 9.9, "maskBorderMode": 9.9, "maskBorderSlice": 9.9, "maskBorderWidth": 9.9, "maskBorderOutset": 9.9, "maskBorderRepeat": 9.9, "maskBorder": 9.9, "maskType": 9.9, "textSizeAdjust": 9.9, "filter": 9.9, "hyphens": 9.9, "flowInto": 9.9, "flowFrom": 9.9, "breakBefore": 9.9, "breakAfter": 9.9, "breakInside": 9.9, "regionFragment": 9.9, "fontFeatureSettings": 9.9, "columnCount": 9.9, "columnFill": 9.9, "columnGap": 9.9, "columnRule": 9.9, "columnRuleColor": 9.9, "columnRuleStyle": 9.9, "columnRuleWidth": 9.9, "columns": 9.9, "columnSpan": 9.9, "columnWidth": 9.9 }, "op_mini": { "borderImage": 5, "borderImageOutset": 5, "borderImageRepeat": 5, "borderImageSlice": 5, "borderImageSource": 5, "borderImageWidth": 5, "tabSize": 5, "objectFit": 5, "objectPosition": 5 } };
module.exports = exports["default"];
},{}],106:[function(require,module,exports){
// leight polyfill for Object.assign
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  Object.keys(extend).forEach(function (key) {
    return base[key] = extend[key];
  });
  return base;
};

module.exports = exports["default"];
},{}],107:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"dup":34}],108:[function(require,module,exports){
arguments[4][35][0].apply(exports,arguments)
},{"dup":35}],109:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bowser = require('bowser');

var _bowser2 = _interopRequireDefault(_bowser);

var vendorPrefixes = {
  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen'],
  Moz: ['firefox', 'seamonkey', 'sailfish'],
  ms: ['msie', 'msedge']
};

var browsers = {
  chrome: [['chrome']],
  safari: [['safari']],
  firefox: [['firefox']],
  ie: [['msie']],
  edge: [['msedge']],
  opera: [['opera']],
  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
  ie_mob: [['windowsphone', 'mobile', 'msie'], ['windowsphone', 'tablet', 'msie'], ['windowsphone', 'mobile', 'msedge'], ['windowsphone', 'tablet', 'msedge']],
  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
  and_uc: [['android', 'mobile'], ['android', 'tablet']],
  android: [['android', 'mobile'], ['android', 'tablet']]
};

/**
 * Uses bowser to get default browser information such as version and name
 * Evaluates bowser info and adds vendorPrefix information
 * @param {string} userAgent - userAgent that gets evaluated
 */

exports['default'] = function (userAgent) {
  if (!userAgent) {
    return false;
  }

  var info = _bowser2['default']._detect(userAgent);

  Object.keys(vendorPrefixes).forEach(function (prefix) {
    vendorPrefixes[prefix].forEach(function (browser) {
      if (info[browser]) {
        info.prefix = {
          inline: prefix,
          css: '-' + prefix.toLowerCase() + '-'
        };
      }
    });
  });

  var name = '';
  Object.keys(browsers).forEach(function (browser) {
    browsers[browser].forEach(function (condition) {
      var match = 0;
      condition.forEach(function (single) {
        if (info[single]) {
          match += 1;
        }
      });
      if (condition.length === match) {
        name = browser;
      }
    });
  });

  info.browser = name;
  // For cordova IOS 8 the version is missing, set truncated osversion to prevent NaN
  info.version = info.version ? parseFloat(info.version) : parseInt(parseFloat(info.osversion), 10);

  // seperate native android chrome
  // https://github.com/rofrischmann/inline-style-prefixer/issues/45
  if (info.browser === 'android' && info.chrome && info.version > 37) {
    info.browser = 'and_chr';
  }
  info.version = parseFloat(info.version);
  info.osversion = parseFloat(info.osversion);
  // For android < 4.4 we want to check the osversion
  // not the chrome version, see issue #26
  // https://github.com/rofrischmann/inline-style-prefixer/issues/26
  if (info.browser === 'android' && info.osversion < 5) {
    info.version = info.osversion;
  }

  return info;
};

module.exports = exports['default'];
},{"bowser":20}],110:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (_ref) {
  var browser = _ref.browser;
  var version = _ref.version;
  var prefix = _ref.prefix;

  var prefixedKeyframes = 'keyframes';

  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
    prefixedKeyframes = prefix.css + prefixedKeyframes;
  }
  return prefixedKeyframes;
};

module.exports = exports['default'];
},{}],111:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (property) {
  var unprefixed = property.replace(/^(ms|Webkit|Moz|O)/, '');
  return unprefixed.charAt(0).toLowerCase() + unprefixed.slice(1);
};

module.exports = exports['default'];
},{}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGpzXFxBcHAuanMiLCJhcHBcXGpzXFxjb21wb25lbnRzXFxGdW5ueU1lbnVDb21wb25lbnQuanMiLCJhcHBcXGpzXFxjb21wb25lbnRzXFxTdGFuZGFyZE1lbnVDb21wb25lbnQuanMiLCJhcHBcXGpzXFxjb250YWluZXJzXFxCYXNlQ29udGFpbmVyLmpzIiwiYXBwXFxqc1xcY29udGFpbmVyc1xcRm9vdGVyQ29udGFpbmVyLmpzIiwiYXBwXFxqc1xcY29udGFpbmVyc1xcSGVhZGVyQ29udGFpbmVyLmpzIiwiYXBwXFxqc1xcY29udGFpbmVyc1xcSGVhZGVyQ29udGFpbmVyU3R5bGVzLmpzIiwiYXBwXFxqc1xcaW5kZXguanMiLCJhcHBcXGpzXFxwYWdlc1xcSG9tZVBhZ2UuanMiLCJhcHBcXGpzXFxwYWdlc1xcUGFnZTQwNC5qcyIsImFwcFxcanNcXHBhZ2VzXFxzZWN0aW9uc1xcQ29udGFjdGFub3NQYWdlLmpzIiwiYXBwXFxqc1xccGFnZXNcXHNlY3Rpb25zXFxEb2N1bWVudGFjaW9uUGFnZS5qcyIsImFwcFxcanNcXHBhZ2VzXFxzZWN0aW9uc1xcRm9ybWFzRGVQYWdvUGFnZS5qcyIsImFwcFxcanNcXHBhZ2VzXFxzZWN0aW9uc1xcUXVpZW5lc1NvbW9zUGFnZS5qcyIsImFwcFxcanNcXHJlZHVjZXJzXFxBcHBSZWR1Y2VyLmpzIiwiYXBwXFxqc1xccm91dGVzLmpzIiwiYXBwXFxqc1xcdXRpbHNcXENvbmZpZ3VyZWRSYWRpdW0uanMiLCJhcHBcXGpzXFx1dGlsc1xcbWVudUl0ZW1zLmpzIiwiYXBwXFxqc1xcdXRpbHNcXHN0eWxlVmFyaWFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2Jvd3Nlci9zcmMvYm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2V4ZW52L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2h5cGhlbmF0ZS1zdHlsZS1uYW1lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXgtYWxsL2xpYi9wbHVnaW5zL2NhbGMuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeC1hbGwvbGliL3BsdWdpbnMvY3Vyc29yLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXgtYWxsL2xpYi9wbHVnaW5zL2ZsZXguanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeC1hbGwvbGliL3BsdWdpbnMvZmxleGJveElFLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXgtYWxsL2xpYi9wbHVnaW5zL2ZsZXhib3hPbGQuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeC1hbGwvbGliL3BsdWdpbnMvZ3JhZGllbnQuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeC1hbGwvbGliL3BsdWdpbnMvc2l6aW5nLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXgtYWxsL2xpYi9wbHVnaW5zL3RyYW5zaXRpb24uanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeC1hbGwvbGliL3ByZWZpeEFsbC5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4LWFsbC9saWIvcHJlZml4UHJvcHMuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeC1hbGwvbGliL3V0aWxzL2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4LWFsbC9saWIvdXRpbHMvY2FtZWxUb0Rhc2hDYXNlLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXgtYWxsL2xpYi91dGlscy9jYXBpdGFsaXplU3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXgtYWxsL2xpYi91dGlscy9pc1ByZWZpeGVkVmFsdWUuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeC1hbGwvbGliL3V0aWxzL2pvaW5QcmVmaXhlZFJ1bGVzLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvUHJlZml4ZXIuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2NhbGMuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2ZsZXguanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL2ZsZXhib3hJRS5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvZmxleGJveE9sZC5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvZ3JhYkN1cnNvci5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvZ3JhZGllbnQuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9wbHVnaW5zL3NpemluZy5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvdHJhbnNpdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvem9vbUN1cnNvci5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3ByZWZpeFByb3BzLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvY2FsYy5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL2N1cnNvci5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL2ZsZXguanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9mbGV4Ym94SUUuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9mbGV4Ym94T2xkLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvZ3JhZGllbnQuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9zaXppbmcuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy90cmFuc2l0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3ByZWZpeEFsbC5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wcmVmaXhQcm9wcy5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9nZXRCcm93c2VySW5mb3JtYXRpb24uanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9nZXRQcmVmaXhlZEtleWZyYW1lcy5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2dldFByZWZpeGVkVmFsdWUuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9pc1ByZWZpeGVkVmFsdWUuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9qb2luUHJlZml4ZWRWYWx1ZS5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL3VucHJlZml4UHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS1ub3JtYWxpemUvbm9ybWFsaXplLmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS9saWIvYXBwZW5kLWltcG9ydGFudC10by1lYWNoLXZhbHVlLmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS9saWIvYXBwZW5kLXB4LWlmLW5lZWRlZC5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbGliL2NhbWVsLWNhc2UtcHJvcHMtdG8tZGFzaC1jYXNlLmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS9saWIvY29tcG9uZW50cy9zdHlsZS1yb290LmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS9saWIvY29tcG9uZW50cy9zdHlsZS1zaGVldC5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbGliL2NvbXBvbmVudHMvc3R5bGUuanMiLCJub2RlX21vZHVsZXMvcmFkaXVtL2xpYi9jc3MtcnVsZS1zZXQtdG8tc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS9saWIvZW5oYW5jZXIuanMiLCJub2RlX21vZHVsZXMvcmFkaXVtL2xpYi9nZXQtc3RhdGUta2V5LmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS9saWIvZ2V0LXN0YXRlLmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS9saWIvaGFzaC5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS9saWIva2V5ZnJhbWVzLmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS9saWIvbWFwLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbGliL21lcmdlLXN0eWxlcy5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbGliL3BsdWdpbnMvY2hlY2stcHJvcHMtcGx1Z2luLmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS9saWIvcGx1Z2lucy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbGliL3BsdWdpbnMva2V5ZnJhbWVzLXBsdWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbGliL3BsdWdpbnMvbWVyZ2Utc3R5bGUtYXJyYXktcGx1Z2luLmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS9saWIvcGx1Z2lucy9tb3VzZS11cC1saXN0ZW5lci5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbGliL3BsdWdpbnMvcHJlZml4LXBsdWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbGliL3BsdWdpbnMvcmVtb3ZlLW5lc3RlZC1zdHlsZXMtcGx1Z2luLmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS9saWIvcGx1Z2lucy9yZXNvbHZlLWludGVyYWN0aW9uLXN0eWxlcy1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvcmFkaXVtL2xpYi9wbHVnaW5zL3Jlc29sdmUtbWVkaWEtcXVlcmllcy1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvcmFkaXVtL2xpYi9wbHVnaW5zL3Zpc2l0ZWQtcGx1Z2luLmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS9saWIvcHJlZml4ZXIuanMiLCJub2RlX21vZHVsZXMvcmFkaXVtL2xpYi9yZXNvbHZlLXN0eWxlcy5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbGliL3N0eWxlLWtlZXBlci5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvUHJlZml4ZXIuanMiLCJub2RlX21vZHVsZXMvcmFkaXVtL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvY2FsYy5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy9jdXJzb3IuanMiLCJub2RlX21vZHVsZXMvcmFkaXVtL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvZmxleC5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy9mbGV4Ym94SUUuanMiLCJub2RlX21vZHVsZXMvcmFkaXVtL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvZmxleGJveE9sZC5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy9ncmFkaWVudC5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcGx1Z2lucy9zaXppbmcuanMiLCJub2RlX21vZHVsZXMvcmFkaXVtL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3BsdWdpbnMvdHJhbnNpdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvcHJlZml4UHJvcHMuanMiLCJub2RlX21vZHVsZXMvcmFkaXVtL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3V0aWxzL2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvZ2V0QnJvd3NlckluZm9ybWF0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JhZGl1bS9ub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9nZXRQcmVmaXhlZEtleWZyYW1lcy5qcyIsIm5vZGVfbW9kdWxlcy9yYWRpdW0vbm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvdW5wcmVmaXhQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBOzs7Ozs7a0JBRWU7QUFBQSxNQUFFLFFBQUYsUUFBRSxRQUFGO0FBQUEsU0FDWDtBQUFBO0FBQUEsTUFBSyxXQUFVLGlCQUFmO0FBQ0c7QUFESCxHQURXO0FBQUEsQzs7Ozs7Ozs7Ozs7QUNGZjs7Ozs7Ozs7Ozs7O0lBRXFCLGtCOzs7Ozs7Ozs7Ozs2QkFDVjtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVSxZQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQUFKLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsY0FBRyxNQUFLLEdBQVI7QUFBQTtBQUFBO0FBQUosU0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxjQUFHLE1BQUssR0FBUjtBQUFBO0FBQUE7QUFBSixTQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGNBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQUFKO0FBSkYsT0FERjtBQVFEOzs7O0VBVjZDLGdCQUFNLFM7O2tCQUFqQyxrQjtBQVdwQjs7Ozs7Ozs7O0FDYkQ7Ozs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUEsSUFBTSx3QkFBd0IsZ0NBQWlCLGdCQUFtQztBQUFBLE1BQWpDLE9BQWlDLFFBQWpDLE9BQWlDO0FBQUEseUJBQXhCLE1BQXdCO0FBQUEsTUFBeEIsTUFBd0IsK0JBQWYsRUFBZTtBQUFBLE1BQVgsS0FBVyxRQUFYLEtBQVc7O0FBQ2hGLE1BQU0saUJBQWlCLFNBQWpCLGNBQWlCLENBQUMsQ0FBRCxFQUFJLFFBQUosRUFBaUI7QUFDdEMsTUFBRSxjQUFGO0FBQ0EsZ0NBQWUsSUFBZixDQUFvQixRQUFwQjtBQUNELEdBSEQ7QUFJQSxTQUNFO0FBQUE7QUFBQSxNQUFJLFdBQVUsZUFBZCxFQUE4QixPQUFPLE9BQU8sVUFBUCxJQUFxQixFQUExRDtBQUNHLFVBQU0sR0FBTixDQUFVLFVBQUMsUUFBRCxFQUFXLEtBQVg7QUFBQSxhQUNUO0FBQUE7QUFBQSxVQUFJLEtBQUssS0FBVCxFQUFnQixPQUFPLE9BQU8sY0FBUCxJQUF5QixFQUFoRDtBQUNFO0FBQUE7QUFBQSxZQUFHLEtBQUssS0FBUixFQUFlLE1BQU0sU0FBUyxHQUE5QixFQUFtQyxTQUFTO0FBQUEscUJBQUssZUFBZSxDQUFmLEVBQWtCLFNBQVMsR0FBM0IsQ0FBTDtBQUFBLGFBQTVDO0FBQ0UsbUJBQU8sQ0FDTCxPQUFPLFVBREYsRUFFTCxFQUFDLGlCQUFrQixTQUFTLEdBQVQsSUFBZ0IsT0FBakIsR0FBMEIsT0FBMUIsR0FBa0MsUUFBcEQsRUFGSyxFQUdMLEVBQUMsT0FBUSxTQUFTLEdBQVQsSUFBZ0IsT0FBakIsR0FBMEIsT0FBMUIsR0FBa0MsT0FBMUMsRUFISyxDQURUO0FBTUcsbUJBQVM7QUFOWjtBQURGLE9BRFM7QUFBQSxLQUFWO0FBREgsR0FERjtBQWdCRCxDQXJCNkIsQ0FBOUI7O0FBdUJBLElBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLENBQUMsS0FBRCxFQUFXO0FBQ2pDLFNBQU87QUFDTCxhQUFTLE1BQU0sT0FBTixDQUFjLHlCQUFkLENBQXdDO0FBRDVDLEdBQVA7QUFHRCxDQUpEOztrQkFNZSx5QkFBUSxlQUFSLEVBQXlCLHFCQUF6QixDOzs7Ozs7Ozs7QUNuQ2Y7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7a0JBRWU7QUFBQSxNQUFFLFFBQUYsUUFBRSxRQUFGO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRSxrRUFERjtBQUVHLFlBRkg7QUFHRTtBQUhGLEdBRGE7QUFBQSxDOzs7Ozs7Ozs7QUNMZjs7Ozs7O2tCQUVlO0FBQUEsU0FDYjtBQUFBO0FBQUEsTUFBUSxXQUFVLFFBQWxCO0FBQUE7QUFDSztBQUFBO0FBQUEsUUFBRyxNQUFLLG9CQUFSO0FBQUE7QUFBQSxLQURMO0FBQzJELDZDQUQzRDtBQUFBO0FBQUEsR0FEYTtBQUFBLEM7Ozs7Ozs7Ozs7O0FDRmY7Ozs7QUFFQTs7OztBQUNBOztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7SUFFTSxlOzs7QUFDSiwyQkFBWSxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsa0lBQ1YsS0FEVTs7QUFFaEIsVUFBSyxLQUFMLEdBQWE7QUFDWCxvQkFBYztBQURILEtBQWI7QUFHQSxVQUFLLGtCQUFMLEdBQTBCLE1BQUssa0JBQUwsQ0FBd0IsSUFBeEIsT0FBMUI7QUFMZ0I7QUFNakI7Ozs7eUNBQ21CO0FBQ2xCLFdBQUssUUFBTCxDQUFjO0FBQ1osc0JBQWMsQ0FBQyxLQUFLLEtBQUwsQ0FBVztBQURkLE9BQWQ7QUFHRDs7OzZCQUNRO0FBQUEsVUFDQSxZQURBLEdBQ2dCLEtBQUssS0FEckIsQ0FDQSxZQURBOztBQUFBLGdDQUVJLEtBQUssS0FGVDs7QUFHUCxVQUFNLFVBQVU7QUFDZCxzQkFBYztBQURBLE9BQWhCO0FBR0EsYUFDRTtBQUFBO0FBQUEsVUFBUSxXQUFVLFFBQWxCO0FBQ0UsdURBQU8sc0NBQVAsR0FERjtBQUVFLCtDQUFLLEtBQUksb0NBQVQsRUFBOEMsS0FBSSxlQUFsRCxHQUZGO0FBR0U7QUFBQTtBQUFBLFlBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssU0FBUyxLQUFLLGtCQUFuQjtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFLDZFQUF1QixtQ0FBdkIsR0FERjtBQUVFLDZFQUF1QixnQ0FBdkI7QUFGRjtBQUZGO0FBSEYsT0FERjtBQWFEOzs7Ozs7QUFDRjs7a0JBRWMsZ0NBQWlCLGVBQWpCLEM7Ozs7Ozs7OztBQy9DZjs7OztBQUNBOzs7O0FBQ0EsSUFBSSxTQUFTO0FBQ1gsYUFBVztBQUNULHFCQUFpQix1QkFBTyxJQUFQLEdBQWMsYUFEdEI7QUFFVCxXQUFPLHVCQUFPLElBQVAsR0FBYztBQUZaLEdBREE7QUFLWCxvQkFBa0I7QUFDaEIsYUFBUztBQURPO0FBR2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpCVyxDQUFiO0FBMkJBLElBQU0sV0FBVyxrQ0FBYSxFQUFFLFdBQVcsVUFBVSxTQUF2QixFQUFiLENBQWpCO0FBQ0EsSUFBTSxpQkFBaUIsU0FBUyxNQUFULENBQWdCLE1BQWhCLENBQXZCO2tCQUNlLGM7Ozs7O0FDOUJmOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQTtBQVpBO0FBYUEsSUFBTSxRQUFRLDZDQUFkOztBQUlBO0FBQ0EsSUFBTSxVQUFVLHlFQUFxQyxLQUFyQyxDQUFoQjs7QUFFQSxzQkFDRTtBQUFBO0FBQUE7QUFDRSxpREFBTyxnQ0FBUCxHQURGO0FBRUU7QUFBQTtBQUFBLE1BQVUsT0FBTyxLQUFqQjtBQUNFLHlEQUFRLFNBQVMsT0FBakIsRUFBMEIsUUFBUSxzQkFBTyxLQUFQLENBQWxDO0FBREY7QUFGRixDQURGLEVBT0UsU0FBUyxhQUFULENBQXVCLE1BQXZCLENBUEY7Ozs7Ozs7OztBQ3BCQTs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFERixHQURhO0FBQUEsQzs7Ozs7Ozs7O0FDSGY7Ozs7QUFDQTs7OztBQUVBLElBQU0sZUFBZSxTQUFmLFlBQWUsQ0FBQyxDQUFELEVBQU87QUFDMUIsSUFBRSxjQUFGO0FBQ0EsOEJBQWUsTUFBZjtBQUNELENBSEQ7O2tCQUtlLFVBQUMsS0FBRDtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLEdBRGE7QUFBQSxDOzs7Ozs7Ozs7QUNSZjs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBREYsR0FEYTtBQUFBLEM7Ozs7Ozs7OztBQ0hmOzs7O0FBQ0E7Ozs7OztrQkFFZSxVQUFDLEtBQUQ7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsb0JBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFERixHQURhO0FBQUEsQzs7Ozs7Ozs7O0FDSGY7Ozs7QUFDQTs7Ozs7O2tCQUVlLFVBQUMsS0FBRDtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQURGLEdBRGE7QUFBQSxDOzs7Ozs7Ozs7QUNIZjs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBREYsR0FEYTtBQUFBLEM7Ozs7Ozs7OztBQ0ZmOztBQUNBOztBQUZBO0FBSUEsSUFBTSxhQUFhLDRCQUFnQjtBQUNqQztBQURpQyxDQUFoQixDQUFuQjs7a0JBSWUsVTs7Ozs7Ozs7O0FDUGY7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLFVBQUMsS0FBRDtBQUFBLFNBQ2I7QUFBQTtBQUFBLE1BQU8sTUFBSyxHQUFaLEVBQWdCLHdCQUFoQjtBQUNFLDZEQUFZLDZCQUFaLEdBREY7QUFFRSwyREFBVSxNQUFLLFFBQWYsRUFBd0IsSUFBRyxHQUEzQixHQUZGO0FBR0Usd0RBQU8sTUFBSyxlQUFaLEVBQTRCLHFDQUE1QixHQUhGO0FBSUUsd0RBQU8sTUFBSyxlQUFaLEVBQTRCLHNDQUE1QixHQUpGO0FBS0Usd0RBQU8sTUFBSyxnQkFBWixFQUE2QixxQ0FBN0IsR0FMRjtBQU1FLHdEQUFPLE1BQUssYUFBWixFQUEwQixvQ0FBMUIsR0FORjtBQU9FLHdEQUFPLE1BQUssR0FBWixFQUFnQix5QkFBaEI7QUFQRixHQURhO0FBQUEsQztBQVBmOztBQUhBO0FBSEE7Ozs7Ozs7OztBQ0FBOzs7Ozs7a0JBR2UsVUFBQyxTQUFELEVBQWU7QUFDNUIsTUFBTSxjQUFjLFNBQWQsV0FBYyxPQUE0QjtBQUFBLFFBQTFCLGFBQTBCLFFBQTFCLGFBQTBCO0FBQUEsUUFBWCxLQUFXLFFBQVgsS0FBVzs7QUFDOUMsWUFBUSxHQUFSLENBQVksV0FBVyxhQUF2QixFQUFzQyxLQUF0QztBQUNELEdBRkQ7QUFHQSxTQUFRLHNCQUFPO0FBQ2IsYUFBUyxDQUNQLGlCQUFPLE9BQVAsQ0FBZSxlQURSLEVBRVAsaUJBQU8sT0FBUCxDQUFlLFVBRlIsRUFHUCxpQkFBTyxPQUFQLENBQWUsbUJBSFIsRUFJUCxpQkFBTyxPQUFQLENBQWUsd0JBSlIsRUFLUCxpQkFBTyxPQUFQLENBQWUsU0FMUixFQU1QLGlCQUFPLE9BQVAsQ0FBZSxPQU5SLEVBT1AsaUJBQU8sT0FBUCxDQUFlLGtCQVBSO0FBUVA7QUFDQSxxQkFBTyxPQUFQLENBQWUsVUFUUjtBQURJLEdBQVAsRUFZTCxTQVpLLENBQVI7QUFhQSxDOzs7Ozs7OztBQ3BCSyxJQUFNLGdEQUFvQixDQUMvQjtBQUNFLFFBQU0sUUFEUjtBQUVFLE9BQUs7QUFGUCxDQUQrQixFQUsvQjtBQUNFLFFBQU0sZUFEUjtBQUVFLE9BQUs7QUFGUCxDQUwrQixFQVMvQjtBQUNFLFFBQU0sZUFEUjtBQUVFLE9BQUs7QUFGUCxDQVQrQixFQWEvQjtBQUNFLFFBQU0sZ0JBRFI7QUFFRSxPQUFLO0FBRlAsQ0FiK0IsRUFpQi9CO0FBQ0UsUUFBTSxhQURSO0FBRUUsT0FBSztBQUZQLENBakIrQixDQUExQjs7QUF1QkEsSUFBTSwwQ0FBaUIsQ0FDNUI7QUFDRSxRQUFNLFVBRFI7QUFFRSxPQUFLO0FBRlAsQ0FENEIsRUFLNUI7QUFDRSxRQUFNLFVBRFI7QUFFRSxPQUFLO0FBRlAsQ0FMNEIsRUFTNUI7QUFDRSxRQUFNLGNBRFI7QUFFRSxPQUFLO0FBRlAsQ0FUNEIsRUFhNUI7QUFDRSxRQUFNLGFBRFI7QUFFRSxPQUFLO0FBRlAsQ0FiNEIsQ0FBdkI7Ozs7Ozs7O0FDdkJBLElBQU0sMEJBQVM7QUFDcEIsV0FBUyxTQURXO0FBRXBCLFFBQU0sU0FGYztBQUdwQixRQUFNLFNBSGM7QUFJcEIsU0FBTyxTQUphO0FBS3BCLFNBQU87QUFMYSxDQUFmOztBQVFBLElBQU0sd0JBQVE7QUFDbkIsV0FBUyxtREFEVTtBQUVuQixhQUFXLGlCQUZRO0FBR25CLFlBQVU7QUFIUyxDQUFkOzs7QUNSUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9LQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25XQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHtjaGlsZHJlbn0pID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhbC13cmFwcGVyXCI+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVubnlNZW51Q29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZnVubnktbWVudVwiPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkVsIHZpYWplPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RXF1aXBhamU8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Tb2NpYWwgbWVkaWE8L2E+PC9saT5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5MaXN0YSBkZSAxNTwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgKVxyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9ICBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmltcG9ydCBDb25maWd1cmVkUmFkaXVtICBmcm9tICcuLy4uL3V0aWxzL0NvbmZpZ3VyZWRSYWRpdW0nO1xyXG5cclxuY29uc3QgU3RhbmRhcmRNZW51Q29tcG9uZW50ID0gQ29uZmlndXJlZFJhZGl1bSgoe3JvdXRpbmcsIHN0eWxlcyA9IHt9LCBpdGVtc30pID0+IHtcclxuICBjb25zdCBlbGVtZW50Q2xpY2tlZCA9IChlLCBtZW51SXRlbSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYnJvd3Nlckhpc3RvcnkucHVzaChtZW51SXRlbSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwic3RhbmRhcmQtbWVudVwiIHN0eWxlPXtzdHlsZXMubGlzdFN0eWxlcyB8fCB7fX0+XHJcbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW1NZW51LCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZT17c3R5bGVzLml0ZW1MaXN0U3R5bGVzIHx8IHt9fT5cclxuICAgICAgICAgIDxhIGtleT17aW5kZXh9IGhyZWY9e2l0ZW1NZW51LnVybH0gb25DbGljaz17ZSA9PiBlbGVtZW50Q2xpY2tlZChlLCBpdGVtTWVudS51cmwpfVxyXG4gICAgICAgICAgICBzdHlsZT17W1xuICAgICAgICAgICAgICBzdHlsZXMubGlua1N0eWxlcyxcbiAgICAgICAgICAgICAge2JhY2tncm91bmRDb2xvcjogKGl0ZW1NZW51LnVybCA9PSByb3V0aW5nKT8nYmxhY2snOid5ZWxsb3cnfSxcclxuICAgICAgICAgICAgICB7Y29sb3I6IChpdGVtTWVudS51cmwgPT0gcm91dGluZyk/J3doaXRlJzonYmxhY2snfV1cclxuICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAge2l0ZW1NZW51Lm5hbWV9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucy5wYXRobmFtZVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShTdGFuZGFyZE1lbnVDb21wb25lbnQpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuL0hlYWRlckNvbnRhaW5lcic7XHJcbmltcG9ydCBGb290ZXJDb250YWluZXIgZnJvbSAnLi9Gb290ZXJDb250YWluZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHtjaGlsZHJlbn0pID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEhlYWRlckNvbnRhaW5lciAvPlxyXG4gICAge2NoaWxkcmVufVxyXG4gICAgPEZvb3RlckNvbnRhaW5lciAvPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICBUOiA8YSBocmVmPVwidGVsOis1NDAyMzkyNDIyNTQzXCI+QVIrNTQgKDAyMzkyKSA0Mi0yNTQzPC9hPjxici8+XHJcbiAgICAmY29weTsyMDE2IC0gTWFya2FiMTUgZXMgdW5hIG1hcmNhIGRlIE1hcmthYiBWaWFqZXMuXHJcbiAgPC9mb290ZXI+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgQ29uZmlndXJlZFJhZGl1bSAgZnJvbSAnLi8uLi91dGlscy9Db25maWd1cmVkUmFkaXVtJztcclxuaW1wb3J0IHsgU3R5bGUgfSBmcm9tICdyYWRpdW0nO1xyXG5cclxuaW1wb3J0IHN0eWxlcyAgZnJvbSAnLi9IZWFkZXJDb250YWluZXJTdHlsZXMnO1xyXG5cclxuaW1wb3J0IFN0YW5kYXJkTWVudUNvbXBvbmVudCBmcm9tICcuLy4uL2NvbXBvbmVudHMvU3RhbmRhcmRNZW51Q29tcG9uZW50JztcclxuaW1wb3J0IEZ1bm55TWVudUNvbXBvbmVudCBmcm9tICcuLy4uL2NvbXBvbmVudHMvRnVubnlNZW51Q29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7c3RhbmRhcmRNZW51SXRlbXMsIGZ1bm55TWVudUl0ZW1zfSBmcm9tICcuLi91dGlscy9tZW51SXRlbXMnO1xyXG5cclxuY2xhc3MgSGVhZGVyQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtZW51RXhwYW5kZWQ6IHRydWVcclxuICAgIH1cclxuICAgIHRoaXMudG9nZ2xlTWVudUV4cGFuZGVkID0gdGhpcy50b2dnbGVNZW51RXhwYW5kZWQuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgdG9nZ2xlTWVudUV4cGFuZGVkKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWVudUV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5tZW51RXhwYW5kZWRcclxuICAgIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7bWVudUV4cGFuZGVkfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCB7fSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBjb250ZXh0ID0ge1xyXG4gICAgICBtZW51RXhwYW5kZWQ6IG1lbnVFeHBhbmRlZFxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgPFN0eWxlIHJ1bGVzPXtzdHlsZXN9IC8+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuL3dlYi9hc3NldHMvaW1hZ2VzL2JyYW5kL2xvZ28ucG5nXCIgYWx0PVwiTWFya2FiMTUgbG9nb1wiIC8+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYWluLW1lbnVcIj5cclxuICAgICAgICAgIDxkaXYgb25DbGljaz17dGhpcy50b2dnbGVNZW51RXhwYW5kZWR9Pk1lbnU8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICA8U3RhbmRhcmRNZW51Q29tcG9uZW50IGl0ZW1zPXtzdGFuZGFyZE1lbnVJdGVtc30gLz5cclxuICAgICAgICAgICAgPFN0YW5kYXJkTWVudUNvbXBvbmVudCBpdGVtcz17ZnVubnlNZW51SXRlbXN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyZWRSYWRpdW0oSGVhZGVyQ29udGFpbmVyKTtcclxuIiwiaW1wb3J0IFByZWZpeGVyIGZyb20gJ2lubGluZS1zdHlsZS1wcmVmaXhlcic7XHJcbmltcG9ydCB7IGNvbG9ycywgZm9udHMgfSBmcm9tICcuLy4uL3V0aWxzL3N0eWxlVmFyaWFibGVzJztcclxudmFyIHN0eWxlcyA9IHtcclxuICAnLmhlYWRlcic6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmN5YW4gKyAnICFpbXBvcnRhbnQnLFxyXG4gICAgY29sb3I6IGNvbG9ycy5waW5rICsgJyAhaW1wb3J0YW50JyxcclxuICB9LFxyXG4gICcuaGVhZGVyOmJlZm9yZSc6IHtcclxuICAgIGNvbnRlbnQ6ICdoZWxsbydcclxuICB9XHJcbiAgLy8gbGlzdDoge1xyXG4gIC8vICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgLy8gICBtYXJnaW46IDAsXHJcbiAgLy8gICBwYWRkaW5nOiAwLFxyXG4gIC8vIH0sXHJcbiAgLy8gaXRlbXM6IHtcclxuICAvLyAgIG1hcmdpbjogMCxcclxuICAvLyAgIHBhZGRpbmc6IDAsXHJcbiAgLy8gICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAvLyB9LFxyXG4gIC8vIGxpbmtzOiB7XHJcbiAgLy8gICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gIC8vICAgcGFkZGluZzogJzAuM2VtJyxcclxuICAvLyAgIGNvbG9yOiBjb2xvcnMubWFnZW50YSxcclxuICAvLyAgICc6aG92ZXInOiB7XHJcbiAgLy8gICAgIGNvbG9yOiBjb2xvcnMucGluayxcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbn07XHJcbmNvbnN0IHByZWZpeGVyID0gbmV3IFByZWZpeGVyKHsgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50fSk7XHJcbmNvbnN0IHByZWZpeGVkU3R5bGVzID0gcHJlZml4ZXIucHJlZml4KHN0eWxlcyk7XHJcbmV4cG9ydCBkZWZhdWx0IHByZWZpeGVkU3R5bGVzO1xyXG4iLCIvL0RlcGVuZGVuY2llc1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJvdXRlciwgSW5kZXhSb3V0ZSwgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgeyBzeW5jSGlzdG9yeVdpdGhTdG9yZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCc7XHJcbmltcG9ydCBBcHBSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvQXBwUmVkdWNlcic7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBTdHlsZSwgU3R5bGVSb290IH0gZnJvbSAncmFkaXVtJztcclxuaW1wb3J0IG5vcm1hbGl6ZSBmcm9tICdyYWRpdW0tbm9ybWFsaXplJztcclxuXHJcbi8vIEFkZCB0aGUgcmVkdWNlciB0byB5b3VyIHN0b3JlIG9uIHRoZSBgcm91dGluZ2Aga2V5XHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgQXBwUmVkdWNlclxyXG4pO1xyXG5cclxuLy8gQ3JlYXRlIGFuIGVuaGFuY2VkIGhpc3RvcnkgdGhhdCBzeW5jcyBuYXZpZ2F0aW9uIGV2ZW50cyB3aXRoIHRoZSBzdG9yZVxyXG5jb25zdCBoaXN0b3J5ID0gc3luY0hpc3RvcnlXaXRoU3RvcmUoYnJvd3Nlckhpc3RvcnksIHN0b3JlKTtcclxuXHJcbnJlbmRlcihcclxuICA8U3R5bGVSb290PlxyXG4gICAgPFN0eWxlIHJ1bGVzPXtub3JtYWxpemV9IC8+XHJcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fSByb3V0ZXM9e3JvdXRlcyhzdG9yZSl9PjwvUm91dGVyPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICA8L1N0eWxlUm9vdD4sXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCYXNlQ29udGFpbmVyIGZyb20gJy4uL2NvbnRhaW5lcnMvQmFzZUNvbnRhaW5lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcclxuICA8QmFzZUNvbnRhaW5lcj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1wYWdlXCI+XHJcbiAgICAgIDxoMT5Ib21lIFBhZ2U8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9CYXNlQ29udGFpbmVyPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuXHJcbmNvbnN0IGhhbmRsZUdvQmFjayA9IChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGJyb3dzZXJIaXN0b3J5LmdvQmFjaygpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGgxPjQwNCAtIE5vdCBGb3VuZDwvaDE+XHJcbiAgICA8aDI+TGEgcMOhZ2luYSBhIGxhIHF1ZWRlYSBhY2NlZGVyIG5vIHNlIGVudWVudHJhIGRpc3BvbmlibGUuPC9oMj5cclxuICAgIHsvKiA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e2UgPT4gaGFuZGxlR29CYWNrKGUpfT5Wb2x2ZXI8L2E+ICovfVxyXG4gIDwvZGl2PlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZUNvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0Jhc2VDb250YWluZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXHJcbiAgPEJhc2VDb250YWluZXI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3Rhbm9zLXBhZ2VcIj5cclxuICAgICAgPGgxPkNvbnRhY3Rhbm9zPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gIDwvQmFzZUNvbnRhaW5lcj5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2VDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9CYXNlQ29udGFpbmVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxyXG4gIDxCYXNlQ29udGFpbmVyPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb2N1bWVudGFjaW9uLXBhZ2VcIj5cclxuICAgICAgPGgxPkRvY3VtZW50YWNpb248L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9CYXNlQ29udGFpbmVyPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQmFzZUNvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL0Jhc2VDb250YWluZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXHJcbiAgPEJhc2VDb250YWluZXI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1hcy1kZS1wYWdvLXBhZ2VcIj5cclxuICAgICAgPGgxPkZvcm1hcyBkZSBQYWdvPC9oMT5cclxuICAgIDwvZGl2PlxyXG4gIDwvQmFzZUNvbnRhaW5lcj5cclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJhc2VDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9CYXNlQ29udGFpbmVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxyXG4gIDxCYXNlQ29udGFpbmVyPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJxdWllbmVzLXNvbW9zLXBhZ2VcIj5cclxuICAgICAgPGgxPlF1aWVuZXMgU29tb3M8L2gxPlxyXG4gICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLjwvcD5cclxuICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS48L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L0Jhc2VDb250YWluZXI+XHJcbik7XHJcbiIsIi8vRGVwZW5kZW5jaWVzXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgcm91dGVyUmVkdWNlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1yZWR1eCdcclxuXHJcbmNvbnN0IEFwcFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHJvdXRpbmc6IHJvdXRlclJlZHVjZXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwUmVkdWNlcjtcclxuIiwiLy9EZXBlbmRlbmNpZXNcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgUmVkaXJlY3QsIEluZGV4Um91dGUsIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuLy9QYWdlc1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcclxuaW1wb3J0IFBhZ2U0MDQgZnJvbSAnLi9wYWdlcy9QYWdlNDA0JztcclxuLy8gU2l0ZSBzZWN0aW9uc1xyXG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSAnLi9wYWdlcy9Ib21lUGFnZSc7XHJcbmltcG9ydCBRdWllbmVzU29tb3NQYWdlIGZyb20gJy4vcGFnZXMvc2VjdGlvbnMvUXVpZW5lc1NvbW9zUGFnZSc7XHJcbmltcG9ydCBEb2N1bWVudGFjaW9uUGFnZSBmcm9tICcuL3BhZ2VzL3NlY3Rpb25zL0RvY3VtZW50YWNpb25QYWdlJztcclxuaW1wb3J0IEZvcm1hc0RlUGFnb1BhZ2UgZnJvbSAnLi9wYWdlcy9zZWN0aW9ucy9Gb3JtYXNEZVBhZ29QYWdlJztcclxuaW1wb3J0IENvbnRhY3Rhbm9zUGFnZSBmcm9tICcuL3BhZ2VzL3NlY3Rpb25zL0NvbnRhY3Rhbm9zUGFnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RvcmUpID0+IChcclxuICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XHJcbiAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWVQYWdlfSAvPlxyXG4gICAgPFJlZGlyZWN0IGZyb209XCJpbmljaW9cIiB0bz1cIi9cIiAvPlxyXG4gICAgPFJvdXRlIHBhdGg9XCJxdWllbmVzLXNvbW9zXCIgY29tcG9uZW50PXtRdWllbmVzU29tb3NQYWdlfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9XCJkb2N1bWVudGFjaW9uXCIgY29tcG9uZW50PXtEb2N1bWVudGFjaW9uUGFnZX0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPVwiZm9ybWFzLWRlLXBhZ29cIiBjb21wb25lbnQ9e0Zvcm1hc0RlUGFnb1BhZ2V9IC8+XHJcbiAgICA8Um91dGUgcGF0aD1cImNvbnRhY3Rhbm9zXCIgY29tcG9uZW50PXtDb250YWN0YW5vc1BhZ2V9IC8+XHJcbiAgICA8Um91dGUgcGF0aD1cIipcIiBjb21wb25lbnQ9e1BhZ2U0MDR9IC8+XHJcbiAgPC9Sb3V0ZT5cclxuKTtcclxuIiwiaW1wb3J0IFJhZGl1bSBmcm9tICdyYWRpdW0nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChjb21wb25lbnQpID0+IHtcclxuICBjb25zdCBzdHlsZUxvZ2dlciA9ICh7Y29tcG9uZW50TmFtZSwgc3R5bGV9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTmFtZTogJyArIGNvbXBvbmVudE5hbWUsIHN0eWxlKTtcclxuICB9XHJcbiAgcmV0dXJuIChSYWRpdW0oe1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICBSYWRpdW0uUGx1Z2lucy5tZXJnZVN0eWxlQXJyYXksXHJcbiAgICAgIFJhZGl1bS5QbHVnaW5zLmNoZWNrUHJvcHMsXHJcbiAgICAgIFJhZGl1bS5QbHVnaW5zLnJlc29sdmVNZWRpYVF1ZXJpZXMsXHJcbiAgICAgIFJhZGl1bS5QbHVnaW5zLnJlc29sdmVJbnRlcmFjdGlvblN0eWxlcyxcclxuICAgICAgUmFkaXVtLlBsdWdpbnMua2V5ZnJhbWVzLFxyXG4gICAgICBSYWRpdW0uUGx1Z2lucy52aXNpdGVkLFxyXG4gICAgICBSYWRpdW0uUGx1Z2lucy5yZW1vdmVOZXN0ZWRTdHlsZXMsXHJcbiAgICAgIC8vIHN0eWxlTG9nZ2VyLFxyXG4gICAgICBSYWRpdW0uUGx1Z2lucy5jaGVja1Byb3BzLFxyXG4gICAgXVxyXG4gIH0pKGNvbXBvbmVudClcclxuKX07XHJcbiIsImV4cG9ydCBjb25zdCBzdGFuZGFyZE1lbnVJdGVtcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnSW5pY2lvJyxcclxuICAgIHVybDogJy8nXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnUXVpw6luZXMgc29tb3MnLFxyXG4gICAgdXJsOiAnL3F1aWVuZXMtc29tb3MnXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRG9jdW1lbnRhY2nDs24nLFxyXG4gICAgdXJsOiAnL2RvY3VtZW50YWNpb24nXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnRm9ybWFzIGRlIHBhZ28nLFxyXG4gICAgdXJsOiAnL2Zvcm1hcy1kZS1wYWdvJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NvbnTDoWN0YW5vcycsXHJcbiAgICB1cmw6ICcvY29udGFjdGFub3MnXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBmdW5ueU1lbnVJdGVtcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnRWwgdmlhamUnLFxyXG4gICAgdXJsOiAnL2VsLXZpYWplJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VxdWlwYWplJyxcclxuICAgIHVybDogJy9lcXVpcGFqZSdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdTb2NpYWwgbWVkaWEnLFxyXG4gICAgdXJsOiAnL3NvY2lhbC1tZWRpYSdcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdMaXN0YSBkZSAxNScsXHJcbiAgICB1cmw6ICcvbGlzdGEtZGUtMTUnXHJcbiAgfVxyXG5dO1xyXG4iLCJleHBvcnQgY29uc3QgY29sb3JzID0ge1xyXG4gIG1hZ2VudGE6ICcjRTgyQ0E1JyxcclxuICBwaW5rOiAnI0ZGN0JBQycsXHJcbiAgY3lhbjogJyNCM0IzQjMnLFxyXG4gIGJsYWNrOiAnIzRENEQ0RCcsXHJcbiAgd2hpdGU6ICcjZWJlYmViJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvbnRzID0ge1xyXG4gIHByaW1hcnk6IFwiJ0hlbHZldGljYSBSb3VuZGVkJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZlwiLFxyXG4gIHNlY29uZGFyeTogJ1RpbWVzIE5ldyBSb21hbicsXHJcbiAgdGVydGlhcnk6ICdBcmlhbCdcclxufTtcclxuIiwiLyohXG4gKiBCb3dzZXIgLSBhIGJyb3dzZXIgZGV0ZWN0b3JcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZWQvYm93c2VyXG4gKiBNSVQgTGljZW5zZSB8IChjKSBEdXN0aW4gRGlheiAyMDE1XG4gKi9cblxuIWZ1bmN0aW9uIChuYW1lLCBkZWZpbml0aW9uKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKG5hbWUsIGRlZmluaXRpb24pXG4gIGVsc2UgdGhpc1tuYW1lXSA9IGRlZmluaXRpb24oKVxufSgnYm93c2VyJywgZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICAqIFNlZSB1c2VyYWdlbnRzLmpzIGZvciBleGFtcGxlcyBvZiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgKi9cblxuICB2YXIgdCA9IHRydWVcblxuICBmdW5jdGlvbiBkZXRlY3QodWEpIHtcblxuICAgIGZ1bmN0aW9uIGdldEZpcnN0TWF0Y2gocmVnZXgpIHtcbiAgICAgIHZhciBtYXRjaCA9IHVhLm1hdGNoKHJlZ2V4KTtcbiAgICAgIHJldHVybiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaFsxXSkgfHwgJyc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2Vjb25kTWF0Y2gocmVnZXgpIHtcbiAgICAgIHZhciBtYXRjaCA9IHVhLm1hdGNoKHJlZ2V4KTtcbiAgICAgIHJldHVybiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSAmJiBtYXRjaFsyXSkgfHwgJyc7XG4gICAgfVxuXG4gICAgdmFyIGlvc2RldmljZSA9IGdldEZpcnN0TWF0Y2goLyhpcG9kfGlwaG9uZXxpcGFkKS9pKS50b0xvd2VyQ2FzZSgpXG4gICAgICAsIGxpa2VBbmRyb2lkID0gL2xpa2UgYW5kcm9pZC9pLnRlc3QodWEpXG4gICAgICAsIGFuZHJvaWQgPSAhbGlrZUFuZHJvaWQgJiYgL2FuZHJvaWQvaS50ZXN0KHVhKVxuICAgICAgLCBuZXh1c01vYmlsZSA9IC9uZXh1c1xccypbMC02XVxccyovaS50ZXN0KHVhKVxuICAgICAgLCBuZXh1c1RhYmxldCA9ICFuZXh1c01vYmlsZSAmJiAvbmV4dXNcXHMqWzAtOV0rL2kudGVzdCh1YSlcbiAgICAgICwgY2hyb21lb3MgPSAvQ3JPUy8udGVzdCh1YSlcbiAgICAgICwgc2lsayA9IC9zaWxrL2kudGVzdCh1YSlcbiAgICAgICwgc2FpbGZpc2ggPSAvc2FpbGZpc2gvaS50ZXN0KHVhKVxuICAgICAgLCB0aXplbiA9IC90aXplbi9pLnRlc3QodWEpXG4gICAgICAsIHdlYm9zID0gLyh3ZWJ8aHB3KW9zL2kudGVzdCh1YSlcbiAgICAgICwgd2luZG93c3Bob25lID0gL3dpbmRvd3MgcGhvbmUvaS50ZXN0KHVhKVxuICAgICAgLCBzYW1zdW5nQnJvd3NlciA9IC9TYW1zdW5nQnJvd3Nlci9pLnRlc3QodWEpXG4gICAgICAsIHdpbmRvd3MgPSAhd2luZG93c3Bob25lICYmIC93aW5kb3dzL2kudGVzdCh1YSlcbiAgICAgICwgbWFjID0gIWlvc2RldmljZSAmJiAhc2lsayAmJiAvbWFjaW50b3NoL2kudGVzdCh1YSlcbiAgICAgICwgbGludXggPSAhYW5kcm9pZCAmJiAhc2FpbGZpc2ggJiYgIXRpemVuICYmICF3ZWJvcyAmJiAvbGludXgvaS50ZXN0KHVhKVxuICAgICAgLCBlZGdlVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL2VkZ2VcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICAsIHZlcnNpb25JZGVudGlmaWVyID0gZ2V0Rmlyc3RNYXRjaCgvdmVyc2lvblxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgICwgdGFibGV0ID0gL3RhYmxldC9pLnRlc3QodWEpXG4gICAgICAsIG1vYmlsZSA9ICF0YWJsZXQgJiYgL1teLV1tb2JpL2kudGVzdCh1YSlcbiAgICAgICwgeGJveCA9IC94Ym94L2kudGVzdCh1YSlcbiAgICAgICwgcmVzdWx0XG5cbiAgICBpZiAoL29wZXJhL2kudGVzdCh1YSkpIHtcbiAgICAgIC8vICBhbiBvbGQgT3BlcmFcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ09wZXJhJ1xuICAgICAgLCBvcGVyYTogdFxuICAgICAgLCB2ZXJzaW9uOiB2ZXJzaW9uSWRlbnRpZmllciB8fCBnZXRGaXJzdE1hdGNoKC8oPzpvcGVyYXxvcHJ8b3Bpb3MpW1xcc1xcL10oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgvb3ByfG9waW9zL2kudGVzdCh1YSkpIHtcbiAgICAgIC8vIGEgbmV3IE9wZXJhXG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdPcGVyYSdcbiAgICAgICAgLCBvcGVyYTogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/Om9wcnxvcGlvcylbXFxzXFwvXShcXGQrKFxcLlxcZCspPykvaSkgfHwgdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL1NhbXN1bmdCcm93c2VyL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1NhbXN1bmcgSW50ZXJuZXQgZm9yIEFuZHJvaWQnXG4gICAgICAgICwgc2Ftc3VuZ0Jyb3dzZXI6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiB2ZXJzaW9uSWRlbnRpZmllciB8fCBnZXRGaXJzdE1hdGNoKC8oPzpTYW1zdW5nQnJvd3NlcilbXFxzXFwvXShcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2NvYXN0L2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ09wZXJhIENvYXN0J1xuICAgICAgICAsIGNvYXN0OiB0XG4gICAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvKD86Y29hc3QpW1xcc1xcL10oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC95YWJyb3dzZXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnWWFuZGV4IEJyb3dzZXInXG4gICAgICAsIHlhbmRleGJyb3dzZXI6IHRcbiAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXIgfHwgZ2V0Rmlyc3RNYXRjaCgvKD86eWFicm93c2VyKVtcXHNcXC9dKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvdWNicm93c2VyL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBuYW1lOiAnVUMgQnJvd3NlcidcbiAgICAgICAgLCB1Y2Jyb3dzZXI6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzp1Y2Jyb3dzZXIpW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspKykvaSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL214aW9zL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ01heHRob24nXG4gICAgICAgICwgbWF4dGhvbjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/Om14aW9zKVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9lcGlwaGFueS9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdFcGlwaGFueSdcbiAgICAgICAgLCBlcGlwaGFueTogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmVwaXBoYW55KVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9wdWZmaW4vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnUHVmZmluJ1xuICAgICAgICAsIHB1ZmZpbjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OnB1ZmZpbilbXFxzXFwvXShcXGQrKD86XFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvc2xlaXBuaXIvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2xlaXBuaXInXG4gICAgICAgICwgc2xlaXBuaXI6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpzbGVpcG5pcilbXFxzXFwvXShcXGQrKD86XFwuXFxkKykrKS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvay1tZWxlb24vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnSy1NZWxlb24nXG4gICAgICAgICwga01lbGVvbjogdFxuICAgICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/OmstbWVsZW9uKVtcXHNcXC9dKFxcZCsoPzpcXC5cXGQrKSspL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHdpbmRvd3NwaG9uZSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnV2luZG93cyBQaG9uZSdcbiAgICAgICwgd2luZG93c3Bob25lOiB0XG4gICAgICB9XG4gICAgICBpZiAoZWRnZVZlcnNpb24pIHtcbiAgICAgICAgcmVzdWx0Lm1zZWRnZSA9IHRcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSBlZGdlVmVyc2lvblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlc3VsdC5tc2llID0gdFxuICAgICAgICByZXN1bHQudmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL2llbW9iaWxlXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvbXNpZXx0cmlkZW50L2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0ludGVybmV0IEV4cGxvcmVyJ1xuICAgICAgLCBtc2llOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goLyg/Om1zaWUgfHJ2OikoXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjaHJvbWVvcykge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnQ2hyb21lJ1xuICAgICAgLCBjaHJvbWVvczogdFxuICAgICAgLCBjaHJvbWVCb29rOiB0XG4gICAgICAsIGNocm9tZTogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpjaHJvbWV8Y3Jpb3N8Y3JtbylcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICgvY2hyb21lLis/IGVkZ2UvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnTWljcm9zb2Z0IEVkZ2UnXG4gICAgICAsIG1zZWRnZTogdFxuICAgICAgLCB2ZXJzaW9uOiBlZGdlVmVyc2lvblxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvdml2YWxkaS9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdWaXZhbGRpJ1xuICAgICAgICAsIHZpdmFsZGk6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC92aXZhbGRpXFwvKFxcZCsoXFwuXFxkKyk/KS9pKSB8fCB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChzYWlsZmlzaCkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2FpbGZpc2gnXG4gICAgICAsIHNhaWxmaXNoOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goL3NhaWxmaXNoXFxzP2Jyb3dzZXJcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9zZWFtb25rZXlcXC8vaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2VhTW9ua2V5J1xuICAgICAgLCBzZWFtb25rZXk6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvc2VhbW9ua2V5XFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvZmlyZWZveHxpY2V3ZWFzZWx8Znhpb3MvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnRmlyZWZveCdcbiAgICAgICwgZmlyZWZveDogdFxuICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpmaXJlZm94fGljZXdlYXNlbHxmeGlvcylbIFxcL10oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgICBpZiAoL1xcKChtb2JpbGV8dGFibGV0KTtbXlxcKV0qcnY6W1xcZFxcLl0rXFwpL2kudGVzdCh1YSkpIHtcbiAgICAgICAgcmVzdWx0LmZpcmVmb3hvcyA9IHRcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc2lsaykge1xuICAgICAgcmVzdWx0ID0gIHtcbiAgICAgICAgbmFtZTogJ0FtYXpvbiBTaWxrJ1xuICAgICAgLCBzaWxrOiB0XG4gICAgICAsIHZlcnNpb24gOiBnZXRGaXJzdE1hdGNoKC9zaWxrXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvcGhhbnRvbS9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdQaGFudG9tSlMnXG4gICAgICAsIHBoYW50b206IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvcGhhbnRvbWpzXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgvc2xpbWVyanMvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnU2xpbWVySlMnXG4gICAgICAgICwgc2xpbWVyOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvc2xpbWVyanNcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKC9ibGFja2JlcnJ5fFxcYmJiXFxkKy9pLnRlc3QodWEpIHx8IC9yaW1cXHN0YWJsZXQvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnQmxhY2tCZXJyeSdcbiAgICAgICwgYmxhY2tiZXJyeTogdFxuICAgICAgLCB2ZXJzaW9uOiB2ZXJzaW9uSWRlbnRpZmllciB8fCBnZXRGaXJzdE1hdGNoKC9ibGFja2JlcnJ5W1xcZF0rXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh3ZWJvcykge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnV2ViT1MnXG4gICAgICAsIHdlYm9zOiB0XG4gICAgICAsIHZlcnNpb246IHZlcnNpb25JZGVudGlmaWVyIHx8IGdldEZpcnN0TWF0Y2goL3coPzplYik/b3Nicm93c2VyXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgICAgfTtcbiAgICAgIC90b3VjaHBhZFxcLy9pLnRlc3QodWEpICYmIChyZXN1bHQudG91Y2hwYWQgPSB0KVxuICAgIH1cbiAgICBlbHNlIGlmICgvYmFkYS9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdCYWRhJ1xuICAgICAgLCBiYWRhOiB0XG4gICAgICAsIHZlcnNpb246IGdldEZpcnN0TWF0Y2goL2RvbGZpblxcLyhcXGQrKFxcLlxcZCspPykvaSlcbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKHRpemVuKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdUaXplbidcbiAgICAgICwgdGl6ZW46IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86dGl6ZW5cXHM/KT9icm93c2VyXFwvKFxcZCsoXFwuXFxkKyk/KS9pKSB8fCB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoL3F1cHppbGxhL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ1F1cFppbGxhJ1xuICAgICAgICAsIHF1cHppbGxhOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86cXVwemlsbGEpW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspKykvaSkgfHwgdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2Nocm9taXVtL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0Nocm9taXVtJ1xuICAgICAgICAsIGNocm9taXVtOiB0XG4gICAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvKD86Y2hyb21pdW0pW1xcc1xcL10oXFxkKyg/OlxcLlxcZCspPykvaSkgfHwgdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL2Nocm9tZXxjcmlvc3xjcm1vL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0Nocm9tZSdcbiAgICAgICAgLCBjaHJvbWU6IHRcbiAgICAgICAgLCB2ZXJzaW9uOiBnZXRGaXJzdE1hdGNoKC8oPzpjaHJvbWV8Y3Jpb3N8Y3JtbylcXC8oXFxkKyhcXC5cXGQrKT8pL2kpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGFuZHJvaWQpIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgbmFtZTogJ0FuZHJvaWQnXG4gICAgICAgICwgdmVyc2lvbjogdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoL3NhZmFyaXxhcHBsZXdlYmtpdC9pLnRlc3QodWEpKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWU6ICdTYWZhcmknXG4gICAgICAsIHNhZmFyaTogdFxuICAgICAgfVxuICAgICAgaWYgKHZlcnNpb25JZGVudGlmaWVyKSB7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaW9zZGV2aWNlKSB7XG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIG5hbWUgOiBpb3NkZXZpY2UgPT0gJ2lwaG9uZScgPyAnaVBob25lJyA6IGlvc2RldmljZSA9PSAnaXBhZCcgPyAnaVBhZCcgOiAnaVBvZCdcbiAgICAgIH1cbiAgICAgIC8vIFdURjogdmVyc2lvbiBpcyBub3QgcGFydCBvZiB1c2VyIGFnZW50IGluIHdlYiBhcHBzXG4gICAgICBpZiAodmVyc2lvbklkZW50aWZpZXIpIHtcbiAgICAgICAgcmVzdWx0LnZlcnNpb24gPSB2ZXJzaW9uSWRlbnRpZmllclxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKC9nb29nbGVib3QvaS50ZXN0KHVhKSkge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiAnR29vZ2xlYm90J1xuICAgICAgLCBnb29nbGVib3Q6IHRcbiAgICAgICwgdmVyc2lvbjogZ2V0Rmlyc3RNYXRjaCgvZ29vZ2xlYm90XFwvKFxcZCsoXFwuXFxkKykpL2kpIHx8IHZlcnNpb25JZGVudGlmaWVyXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBnZXRGaXJzdE1hdGNoKC9eKC4qKVxcLyguKikgLyksXG4gICAgICAgIHZlcnNpb246IGdldFNlY29uZE1hdGNoKC9eKC4qKVxcLyguKikgLylcbiAgICAgfTtcbiAgIH1cblxuICAgIC8vIHNldCB3ZWJraXQgb3IgZ2Vja28gZmxhZyBmb3IgYnJvd3NlcnMgYmFzZWQgb24gdGhlc2UgZW5naW5lc1xuICAgIGlmICghcmVzdWx0Lm1zZWRnZSAmJiAvKGFwcGxlKT93ZWJraXQvaS50ZXN0KHVhKSkge1xuICAgICAgaWYgKC8oYXBwbGUpP3dlYmtpdFxcLzUzN1xcLjM2L2kudGVzdCh1YSkpIHtcbiAgICAgICAgcmVzdWx0Lm5hbWUgPSByZXN1bHQubmFtZSB8fCBcIkJsaW5rXCJcbiAgICAgICAgcmVzdWx0LmJsaW5rID0gdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0Lm5hbWUgPSByZXN1bHQubmFtZSB8fCBcIldlYmtpdFwiXG4gICAgICAgIHJlc3VsdC53ZWJraXQgPSB0XG4gICAgICB9XG4gICAgICBpZiAoIXJlc3VsdC52ZXJzaW9uICYmIHZlcnNpb25JZGVudGlmaWVyKSB7XG4gICAgICAgIHJlc3VsdC52ZXJzaW9uID0gdmVyc2lvbklkZW50aWZpZXJcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFyZXN1bHQub3BlcmEgJiYgL2dlY2tvXFwvL2kudGVzdCh1YSkpIHtcbiAgICAgIHJlc3VsdC5uYW1lID0gcmVzdWx0Lm5hbWUgfHwgXCJHZWNrb1wiXG4gICAgICByZXN1bHQuZ2Vja28gPSB0XG4gICAgICByZXN1bHQudmVyc2lvbiA9IHJlc3VsdC52ZXJzaW9uIHx8IGdldEZpcnN0TWF0Y2goL2dlY2tvXFwvKFxcZCsoXFwuXFxkKyk/KS9pKVxuICAgIH1cblxuICAgIC8vIHNldCBPUyBmbGFncyBmb3IgcGxhdGZvcm1zIHRoYXQgaGF2ZSBtdWx0aXBsZSBicm93c2Vyc1xuICAgIGlmICghcmVzdWx0Lm1zZWRnZSAmJiAoYW5kcm9pZCB8fCByZXN1bHQuc2lsaykpIHtcbiAgICAgIHJlc3VsdC5hbmRyb2lkID0gdFxuICAgIH0gZWxzZSBpZiAoaW9zZGV2aWNlKSB7XG4gICAgICByZXN1bHRbaW9zZGV2aWNlXSA9IHRcbiAgICAgIHJlc3VsdC5pb3MgPSB0XG4gICAgfSBlbHNlIGlmIChtYWMpIHtcbiAgICAgIHJlc3VsdC5tYWMgPSB0XG4gICAgfSBlbHNlIGlmICh4Ym94KSB7XG4gICAgICByZXN1bHQueGJveCA9IHRcbiAgICB9IGVsc2UgaWYgKHdpbmRvd3MpIHtcbiAgICAgIHJlc3VsdC53aW5kb3dzID0gdFxuICAgIH0gZWxzZSBpZiAobGludXgpIHtcbiAgICAgIHJlc3VsdC5saW51eCA9IHRcbiAgICB9XG5cbiAgICAvLyBPUyB2ZXJzaW9uIGV4dHJhY3Rpb25cbiAgICB2YXIgb3NWZXJzaW9uID0gJyc7XG4gICAgaWYgKHJlc3VsdC53aW5kb3dzcGhvbmUpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL3dpbmRvd3MgcGhvbmUgKD86b3MpP1xccz8oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAoaW9zZGV2aWNlKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC9vcyAoXFxkKyhbX1xcc11cXGQrKSopIGxpa2UgbWFjIG9zIHgvaSk7XG4gICAgICBvc1ZlcnNpb24gPSBvc1ZlcnNpb24ucmVwbGFjZSgvW19cXHNdL2csICcuJyk7XG4gICAgfSBlbHNlIGlmIChhbmRyb2lkKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC9hbmRyb2lkWyBcXC8tXShcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQud2Vib3MpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goLyg/OndlYnxocHcpb3NcXC8oXFxkKyhcXC5cXGQrKSopL2kpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LmJsYWNrYmVycnkpIHtcbiAgICAgIG9zVmVyc2lvbiA9IGdldEZpcnN0TWF0Y2goL3JpbVxcc3RhYmxldFxcc29zXFxzKFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC5iYWRhKSB7XG4gICAgICBvc1ZlcnNpb24gPSBnZXRGaXJzdE1hdGNoKC9iYWRhXFwvKFxcZCsoXFwuXFxkKykqKS9pKTtcbiAgICB9IGVsc2UgaWYgKHJlc3VsdC50aXplbikge1xuICAgICAgb3NWZXJzaW9uID0gZ2V0Rmlyc3RNYXRjaCgvdGl6ZW5bXFwvXFxzXShcXGQrKFxcLlxcZCspKikvaSk7XG4gICAgfVxuICAgIGlmIChvc1ZlcnNpb24pIHtcbiAgICAgIHJlc3VsdC5vc3ZlcnNpb24gPSBvc1ZlcnNpb247XG4gICAgfVxuXG4gICAgLy8gZGV2aWNlIHR5cGUgZXh0cmFjdGlvblxuICAgIHZhciBvc01ham9yVmVyc2lvbiA9IG9zVmVyc2lvbi5zcGxpdCgnLicpWzBdO1xuICAgIGlmIChcbiAgICAgICAgIHRhYmxldFxuICAgICAgfHwgbmV4dXNUYWJsZXRcbiAgICAgIHx8IGlvc2RldmljZSA9PSAnaXBhZCdcbiAgICAgIHx8IChhbmRyb2lkICYmIChvc01ham9yVmVyc2lvbiA9PSAzIHx8IChvc01ham9yVmVyc2lvbiA+PSA0ICYmICFtb2JpbGUpKSlcbiAgICAgIHx8IHJlc3VsdC5zaWxrXG4gICAgKSB7XG4gICAgICByZXN1bHQudGFibGV0ID0gdFxuICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICBtb2JpbGVcbiAgICAgIHx8IGlvc2RldmljZSA9PSAnaXBob25lJ1xuICAgICAgfHwgaW9zZGV2aWNlID09ICdpcG9kJ1xuICAgICAgfHwgYW5kcm9pZFxuICAgICAgfHwgbmV4dXNNb2JpbGVcbiAgICAgIHx8IHJlc3VsdC5ibGFja2JlcnJ5XG4gICAgICB8fCByZXN1bHQud2Vib3NcbiAgICAgIHx8IHJlc3VsdC5iYWRhXG4gICAgKSB7XG4gICAgICByZXN1bHQubW9iaWxlID0gdFxuICAgIH1cblxuICAgIC8vIEdyYWRlZCBCcm93c2VyIFN1cHBvcnRcbiAgICAvLyBodHRwOi8vZGV2ZWxvcGVyLnlhaG9vLmNvbS95dWkvYXJ0aWNsZXMvZ2JzXG4gICAgaWYgKHJlc3VsdC5tc2VkZ2UgfHxcbiAgICAgICAgKHJlc3VsdC5tc2llICYmIHJlc3VsdC52ZXJzaW9uID49IDEwKSB8fFxuICAgICAgICAocmVzdWx0LnlhbmRleGJyb3dzZXIgJiYgcmVzdWx0LnZlcnNpb24gPj0gMTUpIHx8XG5cdFx0ICAgIChyZXN1bHQudml2YWxkaSAmJiByZXN1bHQudmVyc2lvbiA+PSAxLjApIHx8XG4gICAgICAgIChyZXN1bHQuY2hyb21lICYmIHJlc3VsdC52ZXJzaW9uID49IDIwKSB8fFxuICAgICAgICAocmVzdWx0LnNhbXN1bmdCcm93c2VyICYmIHJlc3VsdC52ZXJzaW9uID49IDQpIHx8XG4gICAgICAgIChyZXN1bHQuZmlyZWZveCAmJiByZXN1bHQudmVyc2lvbiA+PSAyMC4wKSB8fFxuICAgICAgICAocmVzdWx0LnNhZmFyaSAmJiByZXN1bHQudmVyc2lvbiA+PSA2KSB8fFxuICAgICAgICAocmVzdWx0Lm9wZXJhICYmIHJlc3VsdC52ZXJzaW9uID49IDEwLjApIHx8XG4gICAgICAgIChyZXN1bHQuaW9zICYmIHJlc3VsdC5vc3ZlcnNpb24gJiYgcmVzdWx0Lm9zdmVyc2lvbi5zcGxpdChcIi5cIilbMF0gPj0gNikgfHxcbiAgICAgICAgKHJlc3VsdC5ibGFja2JlcnJ5ICYmIHJlc3VsdC52ZXJzaW9uID49IDEwLjEpXG4gICAgICAgIHx8IChyZXN1bHQuY2hyb21pdW0gJiYgcmVzdWx0LnZlcnNpb24gPj0gMjApXG4gICAgICAgICkge1xuICAgICAgcmVzdWx0LmEgPSB0O1xuICAgIH1cbiAgICBlbHNlIGlmICgocmVzdWx0Lm1zaWUgJiYgcmVzdWx0LnZlcnNpb24gPCAxMCkgfHxcbiAgICAgICAgKHJlc3VsdC5jaHJvbWUgJiYgcmVzdWx0LnZlcnNpb24gPCAyMCkgfHxcbiAgICAgICAgKHJlc3VsdC5maXJlZm94ICYmIHJlc3VsdC52ZXJzaW9uIDwgMjAuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5zYWZhcmkgJiYgcmVzdWx0LnZlcnNpb24gPCA2KSB8fFxuICAgICAgICAocmVzdWx0Lm9wZXJhICYmIHJlc3VsdC52ZXJzaW9uIDwgMTAuMCkgfHxcbiAgICAgICAgKHJlc3VsdC5pb3MgJiYgcmVzdWx0Lm9zdmVyc2lvbiAmJiByZXN1bHQub3N2ZXJzaW9uLnNwbGl0KFwiLlwiKVswXSA8IDYpXG4gICAgICAgIHx8IChyZXN1bHQuY2hyb21pdW0gJiYgcmVzdWx0LnZlcnNpb24gPCAyMClcbiAgICAgICAgKSB7XG4gICAgICByZXN1bHQuYyA9IHRcbiAgICB9IGVsc2UgcmVzdWx0LnggPSB0XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICB2YXIgYm93c2VyID0gZGV0ZWN0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnID8gbmF2aWdhdG9yLnVzZXJBZ2VudCB8fCAnJyA6ICcnKVxuXG4gIGJvd3Nlci50ZXN0ID0gZnVuY3Rpb24gKGJyb3dzZXJMaXN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBicm93c2VyTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGJyb3dzZXJJdGVtID0gYnJvd3Nlckxpc3RbaV07XG4gICAgICBpZiAodHlwZW9mIGJyb3dzZXJJdGVtPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChicm93c2VySXRlbSBpbiBib3dzZXIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHZlcnNpb24gcHJlY2lzaW9ucyBjb3VudFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgIGdldFZlcnNpb25QcmVjaXNpb24oXCIxLjEwLjNcIikgLy8gM1xuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHZlcnNpb25cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VmVyc2lvblByZWNpc2lvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHZlcnNpb24uc3BsaXQoXCIuXCIpLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcnJheTo6bWFwIHBvbHlmaWxsXG4gICAqXG4gICAqIEBwYXJhbSAge0FycmF5fSBhcnJcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGl0ZXJhdG9yXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gbWFwKGFyciwgaXRlcmF0b3IpIHtcbiAgICB2YXIgcmVzdWx0ID0gW10sIGk7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5tYXApIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoYXJyLCBpdGVyYXRvcik7XG4gICAgfVxuICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZXJhdG9yKGFycltpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBicm93c2VyIHZlcnNpb24gd2VpZ2h0XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqICAgY29tcGFyZVZlcnNpb25zKFsnMS4xMC4yLjEnLCAgJzEuOC4yLjEuOTAnXSkgICAgLy8gMVxuICAgKiAgIGNvbXBhcmVWZXJzaW9ucyhbJzEuMDEwLjIuMScsICcxLjA5LjIuMS45MCddKTsgIC8vIDFcbiAgICogICBjb21wYXJlVmVyc2lvbnMoWycxLjEwLjIuMScsICAnMS4xMC4yLjEnXSk7ICAgICAvLyAwXG4gICAqICAgY29tcGFyZVZlcnNpb25zKFsnMS4xMC4yLjEnLCAgJzEuMDgwMC4yJ10pOyAgICAgLy8gLTFcbiAgICpcbiAgICogQHBhcmFtICB7QXJyYXk8U3RyaW5nPn0gdmVyc2lvbnMgdmVyc2lvbnMgdG8gY29tcGFyZVxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGNvbXBhcmlzb24gcmVzdWx0XG4gICAqL1xuICBmdW5jdGlvbiBjb21wYXJlVmVyc2lvbnModmVyc2lvbnMpIHtcbiAgICAvLyAxKSBnZXQgY29tbW9uIHByZWNpc2lvbiBmb3IgYm90aCB2ZXJzaW9ucywgZm9yIGV4YW1wbGUgZm9yIFwiMTAuMFwiIGFuZCBcIjlcIiBpdCBzaG91bGQgYmUgMlxuICAgIHZhciBwcmVjaXNpb24gPSBNYXRoLm1heChnZXRWZXJzaW9uUHJlY2lzaW9uKHZlcnNpb25zWzBdKSwgZ2V0VmVyc2lvblByZWNpc2lvbih2ZXJzaW9uc1sxXSkpO1xuICAgIHZhciBjaHVua3MgPSBtYXAodmVyc2lvbnMsIGZ1bmN0aW9uICh2ZXJzaW9uKSB7XG4gICAgICB2YXIgZGVsdGEgPSBwcmVjaXNpb24gLSBnZXRWZXJzaW9uUHJlY2lzaW9uKHZlcnNpb24pO1xuXG4gICAgICAvLyAyKSBcIjlcIiAtPiBcIjkuMFwiIChmb3IgcHJlY2lzaW9uID0gMilcbiAgICAgIHZlcnNpb24gPSB2ZXJzaW9uICsgbmV3IEFycmF5KGRlbHRhICsgMSkuam9pbihcIi4wXCIpO1xuXG4gICAgICAvLyAzKSBcIjkuMFwiIC0+IFtcIjAwMDAwMDAwMFwiXCIsIFwiMDAwMDAwMDA5XCJdXG4gICAgICByZXR1cm4gbWFwKHZlcnNpb24uc3BsaXQoXCIuXCIpLCBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheSgyMCAtIGNodW5rLmxlbmd0aCkuam9pbihcIjBcIikgKyBjaHVuaztcbiAgICAgIH0pLnJldmVyc2UoKTtcbiAgICB9KTtcblxuICAgIC8vIGl0ZXJhdGUgaW4gcmV2ZXJzZSBvcmRlciBieSByZXZlcnNlZCBjaHVua3MgYXJyYXlcbiAgICB3aGlsZSAoLS1wcmVjaXNpb24gPj0gMCkge1xuICAgICAgLy8gNCkgY29tcGFyZTogXCIwMDAwMDAwMDlcIiA+IFwiMDAwMDAwMDEwXCIgPSBmYWxzZSAoYnV0IFwiOVwiID4gXCIxMFwiID0gdHJ1ZSlcbiAgICAgIGlmIChjaHVua3NbMF1bcHJlY2lzaW9uXSA+IGNodW5rc1sxXVtwcmVjaXNpb25dKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY2h1bmtzWzBdW3ByZWNpc2lvbl0gPT09IGNodW5rc1sxXVtwcmVjaXNpb25dKSB7XG4gICAgICAgIGlmIChwcmVjaXNpb24gPT09IDApIHtcbiAgICAgICAgICAvLyBhbGwgdmVyc2lvbiBjaHVua3MgYXJlIHNhbWVcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYnJvd3NlciBpcyB1bnN1cHBvcnRlZFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAgIGJvd3Nlci5pc1Vuc3VwcG9ydGVkQnJvd3Nlcih7XG4gICAqICAgICBtc2llOiBcIjEwXCIsXG4gICAqICAgICBmaXJlZm94OiBcIjIzXCIsXG4gICAqICAgICBjaHJvbWU6IFwiMjlcIixcbiAgICogICAgIHNhZmFyaTogXCI1LjFcIixcbiAgICogICAgIG9wZXJhOiBcIjE2XCIsXG4gICAqICAgICBwaGFudG9tOiBcIjUzNFwiXG4gICAqICAgfSk7XG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gIG1pblZlcnNpb25zIG1hcCBvZiBtaW5pbWFsIHZlcnNpb24gdG8gYnJvd3NlclxuICAgKiBAcGFyYW0gIHtCb29sZWFufSBbc3RyaWN0TW9kZSA9IGZhbHNlXSBmbGFnIHRvIHJldHVybiBmYWxzZSBpZiBicm93c2VyIHdhc24ndCBmb3VuZCBpbiBtYXBcbiAgICogQHBhcmFtICB7U3RyaW5nfSAgW3VhXSB1c2VyIGFnZW50IHN0cmluZ1xuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgZnVuY3Rpb24gaXNVbnN1cHBvcnRlZEJyb3dzZXIobWluVmVyc2lvbnMsIHN0cmljdE1vZGUsIHVhKSB7XG4gICAgdmFyIF9ib3dzZXIgPSBib3dzZXI7XG5cbiAgICAvLyBtYWtlIHN0cmljdE1vZGUgcGFyYW0gb3B0aW9uYWwgd2l0aCB1YSBwYXJhbSB1c2FnZVxuICAgIGlmICh0eXBlb2Ygc3RyaWN0TW9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVhID0gc3RyaWN0TW9kZTtcbiAgICAgIHN0cmljdE1vZGUgPSB2b2lkKDApO1xuICAgIH1cblxuICAgIGlmIChzdHJpY3RNb2RlID09PSB2b2lkKDApKSB7XG4gICAgICBzdHJpY3RNb2RlID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh1YSkge1xuICAgICAgX2Jvd3NlciA9IGRldGVjdCh1YSk7XG4gICAgfVxuXG4gICAgdmFyIHZlcnNpb24gPSBcIlwiICsgX2Jvd3Nlci52ZXJzaW9uO1xuICAgIGZvciAodmFyIGJyb3dzZXIgaW4gbWluVmVyc2lvbnMpIHtcbiAgICAgIGlmIChtaW5WZXJzaW9ucy5oYXNPd25Qcm9wZXJ0eShicm93c2VyKSkge1xuICAgICAgICBpZiAoX2Jvd3Nlclticm93c2VyXSkge1xuICAgICAgICAgIC8vIGJyb3dzZXIgdmVyc2lvbiBhbmQgbWluIHN1cHBvcnRlZCB2ZXJzaW9uLlxuICAgICAgICAgIHJldHVybiBjb21wYXJlVmVyc2lvbnMoW3ZlcnNpb24sIG1pblZlcnNpb25zW2Jyb3dzZXJdXSkgPCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmljdE1vZGU7IC8vIG5vdCBmb3VuZFxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGJyb3dzZXIgaXMgc3VwcG9ydGVkXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gbWluVmVyc2lvbnMgbWFwIG9mIG1pbmltYWwgdmVyc2lvbiB0byBicm93c2VyXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IFtzdHJpY3RNb2RlID0gZmFsc2VdIGZsYWcgdG8gcmV0dXJuIGZhbHNlIGlmIGJyb3dzZXIgd2Fzbid0IGZvdW5kIGluIG1hcFxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICBbdWFdIHVzZXIgYWdlbnQgc3RyaW5nXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBmdW5jdGlvbiBjaGVjayhtaW5WZXJzaW9ucywgc3RyaWN0TW9kZSwgdWEpIHtcbiAgICByZXR1cm4gIWlzVW5zdXBwb3J0ZWRCcm93c2VyKG1pblZlcnNpb25zLCBzdHJpY3RNb2RlLCB1YSk7XG4gIH1cblxuICBib3dzZXIuaXNVbnN1cHBvcnRlZEJyb3dzZXIgPSBpc1Vuc3VwcG9ydGVkQnJvd3NlcjtcbiAgYm93c2VyLmNvbXBhcmVWZXJzaW9ucyA9IGNvbXBhcmVWZXJzaW9ucztcbiAgYm93c2VyLmNoZWNrID0gY2hlY2s7XG5cbiAgLypcbiAgICogU2V0IG91ciBkZXRlY3QgbWV0aG9kIHRvIHRoZSBtYWluIGJvd3NlciBvYmplY3Qgc28gd2UgY2FuXG4gICAqIHJldXNlIGl0IHRvIHRlc3Qgb3RoZXIgdXNlciBhZ2VudHMuXG4gICAqIFRoaXMgaXMgbmVlZGVkIHRvIGltcGxlbWVudCBmdXR1cmUgdGVzdHMuXG4gICAqL1xuICBib3dzZXIuX2RldGVjdCA9IGRldGVjdDtcblxuICByZXR1cm4gYm93c2VyXG59KTtcbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cbiAgQmFzZWQgb24gY29kZSB0aGF0IGlzIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGNhblVzZURPTSA9ICEhKFxuXHRcdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG5cdFx0d2luZG93LmRvY3VtZW50ICYmXG5cdFx0d2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcblx0KTtcblxuXHR2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cblx0XHRjYW5Vc2VET006IGNhblVzZURPTSxcblxuXHRcdGNhblVzZVdvcmtlcnM6IHR5cGVvZiBXb3JrZXIgIT09ICd1bmRlZmluZWQnLFxuXG5cdFx0Y2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG5cdFx0XHRjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuXHRcdGNhblVzZVZpZXdwb3J0OiBjYW5Vc2VET00gJiYgISF3aW5kb3cuc2NyZWVuXG5cblx0fTtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdGRlZmluZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHR9XG5cbn0oKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2c7XG52YXIgbXNQYXR0ZXJuID0gL15tcy0vO1xuXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZ1xuICAgICAgICAucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCAnLSQmJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgLnJlcGxhY2UobXNQYXR0ZXJuLCAnLW1zLScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGh5cGhlbmF0ZVN0eWxlTmFtZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBjYWxjO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXRpbHNKb2luUHJlZml4ZWRSdWxlcyA9IHJlcXVpcmUoJy4uL3V0aWxzL2pvaW5QcmVmaXhlZFJ1bGVzJyk7XG5cbnZhciBfdXRpbHNKb2luUHJlZml4ZWRSdWxlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0pvaW5QcmVmaXhlZFJ1bGVzKTtcblxudmFyIF91dGlsc0lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX3V0aWxzSXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzSXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gY2FsYyhwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignY2FsYygnKSA+IC0xKSB7XG4gICAgaWYgKCgwLCBfdXRpbHNJc1ByZWZpeGVkVmFsdWUyWydkZWZhdWx0J10pKHZhbHVlKSkgcmV0dXJuO1xuXG4gICAgcmV0dXJuICgwLCBfdXRpbHNKb2luUHJlZml4ZWRSdWxlczJbJ2RlZmF1bHQnXSkocHJvcGVydHksIHZhbHVlLCBmdW5jdGlvbiAocHJlZml4LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2NhbGNcXCgvZywgcHJlZml4ICsgJ2NhbGMoJyk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGN1cnNvcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxzSm9pblByZWZpeGVkUnVsZXMgPSByZXF1aXJlKCcuLi91dGlscy9qb2luUHJlZml4ZWRSdWxlcycpO1xuXG52YXIgX3V0aWxzSm9pblByZWZpeGVkUnVsZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNKb2luUHJlZml4ZWRSdWxlcyk7XG5cbnZhciB2YWx1ZXMgPSB7XG4gICd6b29tLWluJzogdHJ1ZSxcbiAgJ3pvb20tb3V0JzogdHJ1ZSxcbiAgJ2dyYWInOiB0cnVlLFxuICAnZ3JhYmJpbmcnOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBjdXJzb3IocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2N1cnNvcicgJiYgdmFsdWVzW3ZhbHVlXSkge1xuICAgIHJldHVybiAoMCwgX3V0aWxzSm9pblByZWZpeGVkUnVsZXMyWydkZWZhdWx0J10pKHByb3BlcnR5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZsZXg7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlsc0NhbWVsVG9EYXNoQ2FzZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhbWVsVG9EYXNoQ2FzZScpO1xuXG52YXIgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlKTtcblxudmFyIHZhbHVlcyA9IHsgZmxleDogdHJ1ZSwgJ2lubGluZS1mbGV4JzogdHJ1ZSB9O1xuXG5mdW5jdGlvbiBmbGV4KHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiB2YWx1ZXNbdmFsdWVdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IFsnLXdlYmtpdC1ib3gnLCAnLW1vei1ib3gnLCAnLW1zLScgKyB2YWx1ZSArICdib3gnLCAnLXdlYmtpdC0nICsgdmFsdWUsIHZhbHVlXVxuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZsZXhib3hJRTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2Rpc3RyaWJ1dGUnLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJ1xufTtcbnZhciBhbHRlcm5hdGl2ZVByb3BzID0ge1xuICBhbGlnbkNvbnRlbnQ6ICdtc0ZsZXhMaW5lUGFjaycsXG4gIGFsaWduU2VsZjogJ21zRmxleEl0ZW1BbGlnbicsXG4gIGFsaWduSXRlbXM6ICdtc0ZsZXhBbGlnbicsXG4gIGp1c3RpZnlDb250ZW50OiAnbXNGbGV4UGFjaycsXG4gIG9yZGVyOiAnbXNGbGV4T3JkZXInLFxuICBmbGV4R3JvdzogJ21zRmxleFBvc2l0aXZlJyxcbiAgZmxleFNocmluazogJ21zRmxleE5lZ2F0aXZlJyxcbiAgZmxleEJhc2lzOiAnbXNQcmVmZXJyZWRTaXplJ1xufTtcblxuZnVuY3Rpb24gZmxleGJveElFKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAoYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0pIHtcbiAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSwgYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdIHx8IHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZmxleGJveE9sZDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FtZWxUb0Rhc2hDYXNlJyk7XG5cbnZhciBfdXRpbHNDYW1lbFRvRGFzaENhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDYW1lbFRvRGFzaENhc2UpO1xuXG52YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICdzcGFjZS1hcm91bmQnOiAnanVzdGlmeScsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICdmbGV4LWVuZCc6ICdlbmQnLFxuICAnd3JhcC1yZXZlcnNlJzogJ211bHRpcGxlJyxcbiAgd3JhcDogJ211bHRpcGxlJ1xufTtcblxudmFyIGFsdGVybmF0aXZlUHJvcHMgPSB7XG4gIGFsaWduSXRlbXM6ICdXZWJraXRCb3hBbGlnbicsXG4gIGp1c3RpZnlDb250ZW50OiAnV2Via2l0Qm94UGFjaycsXG4gIGZsZXhXcmFwOiAnV2Via2l0Qm94TGluZXMnXG59O1xuXG5mdW5jdGlvbiBmbGV4Ym94T2xkKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdmbGV4RGlyZWN0aW9uJykge1xuICAgIHJldHVybiB7XG4gICAgICBXZWJraXRCb3hPcmllbnQ6IHZhbHVlLmluZGV4T2YoJ2NvbHVtbicpID4gLTEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLFxuICAgICAgV2Via2l0Qm94RGlyZWN0aW9uOiB2YWx1ZS5pbmRleE9mKCdyZXZlcnNlJykgPiAtMSA/ICdyZXZlcnNlJyA6ICdub3JtYWwnXG4gICAgfTtcbiAgfVxuICBpZiAoYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0pIHtcbiAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSwgYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdIHx8IHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZ3JhZGllbnQ7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlsc0pvaW5QcmVmaXhlZFJ1bGVzID0gcmVxdWlyZSgnLi4vdXRpbHMvam9pblByZWZpeGVkUnVsZXMnKTtcblxudmFyIF91dGlsc0pvaW5QcmVmaXhlZFJ1bGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzSm9pblByZWZpeGVkUnVsZXMpO1xuXG52YXIgX3V0aWxzSXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfdXRpbHNJc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNJc1ByZWZpeGVkVmFsdWUpO1xuXG52YXIgdmFsdWVzID0gL2xpbmVhci1ncmFkaWVudHxyYWRpYWwtZ3JhZGllbnR8cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudHxyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50LztcblxuZnVuY3Rpb24gZ3JhZGllbnQocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLm1hdGNoKHZhbHVlcykgIT09IG51bGwpIHtcbiAgICBpZiAoKDAsIF91dGlsc0lzUHJlZml4ZWRWYWx1ZTJbJ2RlZmF1bHQnXSkodmFsdWUpKSByZXR1cm47XG5cbiAgICByZXR1cm4gKDAsIF91dGlsc0pvaW5QcmVmaXhlZFJ1bGVzMlsnZGVmYXVsdCddKShwcm9wZXJ0eSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBzaXppbmc7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlsc0pvaW5QcmVmaXhlZFJ1bGVzID0gcmVxdWlyZSgnLi4vdXRpbHMvam9pblByZWZpeGVkUnVsZXMnKTtcblxudmFyIF91dGlsc0pvaW5QcmVmaXhlZFJ1bGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzSm9pblByZWZpeGVkUnVsZXMpO1xuXG52YXIgcHJvcGVydGllcyA9IHtcbiAgbWF4SGVpZ2h0OiB0cnVlLFxuICBtYXhXaWR0aDogdHJ1ZSxcbiAgd2lkdGg6IHRydWUsXG4gIGhlaWdodDogdHJ1ZSxcbiAgY29sdW1uV2lkdGg6IHRydWUsXG4gIG1pbldpZHRoOiB0cnVlLFxuICBtaW5IZWlnaHQ6IHRydWVcbn07XG52YXIgdmFsdWVzID0ge1xuICAnbWluLWNvbnRlbnQnOiB0cnVlLFxuICAnbWF4LWNvbnRlbnQnOiB0cnVlLFxuICAnZmlsbC1hdmFpbGFibGUnOiB0cnVlLFxuICAnZml0LWNvbnRlbnQnOiB0cnVlLFxuICAnY29udGFpbi1mbG9hdHMnOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBzaXppbmcocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0aWVzW3Byb3BlcnR5XSAmJiB2YWx1ZXNbdmFsdWVdKSB7XG4gICAgcmV0dXJuICgwLCBfdXRpbHNKb2luUHJlZml4ZWRSdWxlczJbJ2RlZmF1bHQnXSkocHJvcGVydHksIHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gdHJhbnNpdGlvbjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FtZWxUb0Rhc2hDYXNlJyk7XG5cbnZhciBfdXRpbHNDYW1lbFRvRGFzaENhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDYW1lbFRvRGFzaENhc2UpO1xuXG52YXIgX3V0aWxzQ2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF91dGlsc0NhcGl0YWxpemVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDYXBpdGFsaXplU3RyaW5nKTtcblxudmFyIF91dGlsc0lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX3V0aWxzSXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzSXNQcmVmaXhlZFZhbHVlKTtcblxudmFyIF9wcmVmaXhQcm9wcyA9IHJlcXVpcmUoJy4uL3ByZWZpeFByb3BzJyk7XG5cbnZhciBfcHJlZml4UHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4UHJvcHMpO1xuXG52YXIgcHJvcGVydGllcyA9IHtcbiAgdHJhbnNpdGlvbjogdHJ1ZSxcbiAgdHJhbnNpdGlvblByb3BlcnR5OiB0cnVlLFxuICBXZWJraXRUcmFuc2l0aW9uOiB0cnVlLFxuICBXZWJraXRUcmFuc2l0aW9uUHJvcGVydHk6IHRydWVcbn07XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb24ocHJvcGVydHksIHZhbHVlKSB7XG4gIC8vIGFsc28gY2hlY2sgZm9yIGFscmVhZHkgcHJlZml4ZWQgdHJhbnNpdGlvbnNcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgcHJvcGVydGllc1twcm9wZXJ0eV0pIHtcbiAgICB2YXIgX3JlZjI7XG5cbiAgICB2YXIgb3V0cHV0VmFsdWUgPSBwcmVmaXhWYWx1ZSh2YWx1ZSk7XG4gICAgdmFyIHdlYmtpdE91dHB1dCA9IG91dHB1dFZhbHVlLnNwbGl0KCcsJykuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLm1hdGNoKC8tbW96LXwtbXMtLykgPT09IG51bGw7XG4gICAgfSkuam9pbignLCcpO1xuXG4gICAgLy8gaWYgdGhlIHByb3BlcnR5IGlzIGFscmVhZHkgcHJlZml4ZWRcbiAgICBpZiAocHJvcGVydHkuaW5kZXhPZignV2Via2l0JykgPiAtMSkge1xuICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIHdlYmtpdE91dHB1dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWYyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgJ1dlYmtpdCcgKyAoMCwgX3V0aWxzQ2FwaXRhbGl6ZVN0cmluZzJbJ2RlZmF1bHQnXSkocHJvcGVydHkpLCB3ZWJraXRPdXRwdXQpLCBfZGVmaW5lUHJvcGVydHkoX3JlZjIsIHByb3BlcnR5LCBvdXRwdXRWYWx1ZSksIF9yZWYyO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZpeFZhbHVlKHZhbHVlKSB7XG4gIGlmICgoMCwgX3V0aWxzSXNQcmVmaXhlZFZhbHVlMlsnZGVmYXVsdCddKSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvLyBvbmx5IHNwbGl0IG11bHRpIHZhbHVlcywgbm90IGN1YmljIGJlemllcnNcbiAgdmFyIG11bHRpcGxlVmFsdWVzID0gdmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZyk7XG5cbiAgLy8gaXRlcmF0ZSBlYWNoIHNpbmdsZSB2YWx1ZSBhbmQgY2hlY2sgZm9yIHRyYW5zaXRpb25lZCBwcm9wZXJ0aWVzXG4gIC8vIHRoYXQgbmVlZCB0byBiZSBwcmVmaXhlZCBhcyB3ZWxsXG4gIG11bHRpcGxlVmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKHZhbCwgaW5kZXgpIHtcbiAgICBtdWx0aXBsZVZhbHVlc1tpbmRleF0gPSBPYmplY3Qua2V5cyhfcHJlZml4UHJvcHMyWydkZWZhdWx0J10pLnJlZHVjZShmdW5jdGlvbiAob3V0LCBwcmVmaXgpIHtcbiAgICAgIHZhciBkYXNoQ2FzZVByZWZpeCA9ICctJyArIHByZWZpeC50b0xvd2VyQ2FzZSgpICsgJy0nO1xuXG4gICAgICBPYmplY3Qua2V5cyhfcHJlZml4UHJvcHMyWydkZWZhdWx0J11bcHJlZml4XSkuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICB2YXIgZGFzaENhc2VQcm9wZXJ0eSA9ICgwLCBfdXRpbHNDYW1lbFRvRGFzaENhc2UyWydkZWZhdWx0J10pKHByb3ApO1xuXG4gICAgICAgIGlmICh2YWwuaW5kZXhPZihkYXNoQ2FzZVByb3BlcnR5KSA+IC0xKSB7XG4gICAgICAgICAgLy8gam9pbiBhbGwgcHJlZml4ZXMgYW5kIGNyZWF0ZSBhIG5ldyB2YWx1ZVxuICAgICAgICAgIG91dCA9IHZhbC5yZXBsYWNlKGRhc2hDYXNlUHJvcGVydHksIGRhc2hDYXNlUHJlZml4ICsgZGFzaENhc2VQcm9wZXJ0eSkgKyAnLCcgKyBvdXQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG91dDtcbiAgICB9LCB2YWwpO1xuICB9KTtcblxuICByZXR1cm4gbXVsdGlwbGVWYWx1ZXMuam9pbignLCcpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHByZWZpeEFsbDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3ByZWZpeFByb3BzID0gcmVxdWlyZSgnLi9wcmVmaXhQcm9wcycpO1xuXG52YXIgX3ByZWZpeFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeFByb3BzKTtcblxudmFyIF91dGlsc0NhcGl0YWxpemVTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF91dGlsc0NhcGl0YWxpemVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDYXBpdGFsaXplU3RyaW5nKTtcblxudmFyIF91dGlsc0Fzc2lnbiA9IHJlcXVpcmUoJy4vdXRpbHMvYXNzaWduJyk7XG5cbnZhciBfdXRpbHNBc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNBc3NpZ24pO1xuXG52YXIgX3BsdWdpbnNDYWxjID0gcmVxdWlyZSgnLi9wbHVnaW5zL2NhbGMnKTtcblxudmFyIF9wbHVnaW5zQ2FsYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zQ2FsYyk7XG5cbnZhciBfcGx1Z2luc0N1cnNvciA9IHJlcXVpcmUoJy4vcGx1Z2lucy9jdXJzb3InKTtcblxudmFyIF9wbHVnaW5zQ3Vyc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsdWdpbnNDdXJzb3IpO1xuXG52YXIgX3BsdWdpbnNGbGV4ID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXgnKTtcblxudmFyIF9wbHVnaW5zRmxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zRmxleCk7XG5cbnZhciBfcGx1Z2luc1NpemluZyA9IHJlcXVpcmUoJy4vcGx1Z2lucy9zaXppbmcnKTtcblxudmFyIF9wbHVnaW5zU2l6aW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsdWdpbnNTaXppbmcpO1xuXG52YXIgX3BsdWdpbnNHcmFkaWVudCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9ncmFkaWVudCcpO1xuXG52YXIgX3BsdWdpbnNHcmFkaWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zR3JhZGllbnQpO1xuXG52YXIgX3BsdWdpbnNUcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9wbHVnaW5zL3RyYW5zaXRpb24nKTtcblxudmFyIF9wbHVnaW5zVHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zVHJhbnNpdGlvbik7XG5cbi8vIHNwZWNpYWwgZmxleGJveCBzcGVjaWZpY2F0aW9uc1xuXG52YXIgX3BsdWdpbnNGbGV4Ym94SUUgPSByZXF1aXJlKCcuL3BsdWdpbnMvZmxleGJveElFJyk7XG5cbnZhciBfcGx1Z2luc0ZsZXhib3hJRTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zRmxleGJveElFKTtcblxudmFyIF9wbHVnaW5zRmxleGJveE9sZCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Ym94T2xkJyk7XG5cbnZhciBfcGx1Z2luc0ZsZXhib3hPbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGx1Z2luc0ZsZXhib3hPbGQpO1xuXG52YXIgcGx1Z2lucyA9IFtfcGx1Z2luc0NhbGMyWydkZWZhdWx0J10sIF9wbHVnaW5zQ3Vyc29yMlsnZGVmYXVsdCddLCBfcGx1Z2luc1NpemluZzJbJ2RlZmF1bHQnXSwgX3BsdWdpbnNHcmFkaWVudDJbJ2RlZmF1bHQnXSwgX3BsdWdpbnNUcmFuc2l0aW9uMlsnZGVmYXVsdCddLCBfcGx1Z2luc0ZsZXhib3hJRTJbJ2RlZmF1bHQnXSwgX3BsdWdpbnNGbGV4Ym94T2xkMlsnZGVmYXVsdCddLCBfcGx1Z2luc0ZsZXgyWydkZWZhdWx0J11dO1xuXG4vKipcbiAqIFJldHVybnMgYSBwcmVmaXhlZCB2ZXJzaW9uIG9mIHRoZSBzdHlsZSBvYmplY3QgdXNpbmcgYWxsIHZlbmRvciBwcmVmaXhlc1xuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyAtIFN0eWxlIG9iamVjdCB0aGF0IGdldHMgcHJlZml4ZWQgcHJvcGVydGllcyBhZGRlZFxuICogQHJldHVybnMge09iamVjdH0gLSBTdHlsZSBvYmplY3Qgd2l0aCBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAqL1xuXG5mdW5jdGlvbiBwcmVmaXhBbGwoc3R5bGVzKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZXMpLnJlZHVjZShmdW5jdGlvbiAocHJlZml4ZWRTdHlsZXMsIHByb3BlcnR5KSB7XG4gICAgdmFyIHZhbHVlID0gc3R5bGVzW3Byb3BlcnR5XTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAvLyByZWN1cnNlIHRocm91Z2ggbmVzdGVkIHN0eWxlIG9iamVjdHNcbiAgICAgIHByZWZpeGVkU3R5bGVzW3Byb3BlcnR5XSA9IHByZWZpeEFsbCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5rZXlzKF9wcmVmaXhQcm9wczJbJ2RlZmF1bHQnXSkuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gX3ByZWZpeFByb3BzMlsnZGVmYXVsdCddW3ByZWZpeF07XG4gICAgICAgIC8vIGFkZCBwcmVmaXhlcyBpZiBuZWVkZWRcbiAgICAgICAgaWYgKHByb3BlcnRpZXNbcHJvcGVydHldKSB7XG4gICAgICAgICAgcHJlZml4ZWRTdHlsZXNbcHJlZml4ICsgKDAsIF91dGlsc0NhcGl0YWxpemVTdHJpbmcyWydkZWZhdWx0J10pKHByb3BlcnR5KV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHJlc29sdmUgZXZlcnkgc3BlY2lhbCBwbHVnaW5zXG4gICAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlsc0Fzc2lnbjJbJ2RlZmF1bHQnXSkocHJlZml4ZWRTdHlsZXMsIHBsdWdpbihwcm9wZXJ0eSwgdmFsdWUpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXhlZFN0eWxlcztcbiAgfSwgc3R5bGVzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHsgXCJXZWJraXRcIjogeyBcInRyYW5zZm9ybVwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpblwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpblhcIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IHRydWUsIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6IHRydWUsIFwicGVyc3BlY3RpdmVcIjogdHJ1ZSwgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiB0cnVlLCBcInRyYW5zZm9ybVN0eWxlXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWlwiOiB0cnVlLCBcImFuaW1hdGlvblwiOiB0cnVlLCBcImFuaW1hdGlvbkRlbGF5XCI6IHRydWUsIFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6IHRydWUsIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogdHJ1ZSwgXCJhbmltYXRpb25EdXJhdGlvblwiOiB0cnVlLCBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IHRydWUsIFwiYW5pbWF0aW9uTmFtZVwiOiB0cnVlLCBcImFuaW1hdGlvblBsYXlTdGF0ZVwiOiB0cnVlLCBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IHRydWUsIFwiYXBwZWFyYW5jZVwiOiB0cnVlLCBcInVzZXJTZWxlY3RcIjogdHJ1ZSwgXCJmb250S2VybmluZ1wiOiB0cnVlLCBcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNDb2xvclwiOiB0cnVlLCBcImJveERlY29yYXRpb25CcmVha1wiOiB0cnVlLCBcImNsaXBQYXRoXCI6IHRydWUsIFwibWFza0ltYWdlXCI6IHRydWUsIFwibWFza01vZGVcIjogdHJ1ZSwgXCJtYXNrUmVwZWF0XCI6IHRydWUsIFwibWFza1Bvc2l0aW9uXCI6IHRydWUsIFwibWFza0NsaXBcIjogdHJ1ZSwgXCJtYXNrT3JpZ2luXCI6IHRydWUsIFwibWFza1NpemVcIjogdHJ1ZSwgXCJtYXNrQ29tcG9zaXRlXCI6IHRydWUsIFwibWFza1wiOiB0cnVlLCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyTW9kZVwiOiB0cnVlLCBcIm1hc2tCb3JkZXJTbGljZVwiOiB0cnVlLCBcIm1hc2tCb3JkZXJXaWR0aFwiOiB0cnVlLCBcIm1hc2tCb3JkZXJPdXRzZXRcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IHRydWUsIFwibWFza0JvcmRlclwiOiB0cnVlLCBcIm1hc2tUeXBlXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogdHJ1ZSwgXCJmaWx0ZXJcIjogdHJ1ZSwgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IHRydWUsIFwiYnJlYWtBZnRlclwiOiB0cnVlLCBcImJyZWFrQmVmb3JlXCI6IHRydWUsIFwiYnJlYWtJbnNpZGVcIjogdHJ1ZSwgXCJjb2x1bW5Db3VudFwiOiB0cnVlLCBcImNvbHVtbkZpbGxcIjogdHJ1ZSwgXCJjb2x1bW5HYXBcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlXCI6IHRydWUsIFwiY29sdW1uUnVsZUNvbG9yXCI6IHRydWUsIFwiY29sdW1uUnVsZVN0eWxlXCI6IHRydWUsIFwiY29sdW1uUnVsZVdpZHRoXCI6IHRydWUsIFwiY29sdW1uc1wiOiB0cnVlLCBcImNvbHVtblNwYW5cIjogdHJ1ZSwgXCJjb2x1bW5XaWR0aFwiOiB0cnVlLCBcImZsZXhcIjogdHJ1ZSwgXCJmbGV4QmFzaXNcIjogdHJ1ZSwgXCJmbGV4RGlyZWN0aW9uXCI6IHRydWUsIFwiZmxleEdyb3dcIjogdHJ1ZSwgXCJmbGV4Rmxvd1wiOiB0cnVlLCBcImZsZXhTaHJpbmtcIjogdHJ1ZSwgXCJmbGV4V3JhcFwiOiB0cnVlLCBcImFsaWduQ29udGVudFwiOiB0cnVlLCBcImFsaWduSXRlbXNcIjogdHJ1ZSwgXCJhbGlnblNlbGZcIjogdHJ1ZSwgXCJqdXN0aWZ5Q29udGVudFwiOiB0cnVlLCBcIm9yZGVyXCI6IHRydWUsIFwidHJhbnNpdGlvblwiOiB0cnVlLCBcInRyYW5zaXRpb25EZWxheVwiOiB0cnVlLCBcInRyYW5zaXRpb25EdXJhdGlvblwiOiB0cnVlLCBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiB0cnVlLCBcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOiB0cnVlLCBcImJhY2tkcm9wRmlsdGVyXCI6IHRydWUsIFwic2Nyb2xsU25hcFR5cGVcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwUG9pbnRzWFwiOiB0cnVlLCBcInNjcm9sbFNuYXBQb2ludHNZXCI6IHRydWUsIFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCI6IHRydWUsIFwic2Nyb2xsU25hcENvb3JkaW5hdGVcIjogdHJ1ZSwgXCJzaGFwZUltYWdlVGhyZXNob2xkXCI6IHRydWUsIFwic2hhcGVJbWFnZU1hcmdpblwiOiB0cnVlLCBcInNoYXBlSW1hZ2VPdXRzaWRlXCI6IHRydWUsIFwiaHlwaGVuc1wiOiB0cnVlLCBcImZsb3dJbnRvXCI6IHRydWUsIFwiZmxvd0Zyb21cIjogdHJ1ZSwgXCJyZWdpb25GcmFnbWVudFwiOiB0cnVlLCBcInRleHRTaXplQWRqdXN0XCI6IHRydWUsIFwiYm9yZGVySW1hZ2VcIjogdHJ1ZSwgXCJib3JkZXJJbWFnZU91dHNldFwiOiB0cnVlLCBcImJvcmRlckltYWdlUmVwZWF0XCI6IHRydWUsIFwiYm9yZGVySW1hZ2VTbGljZVwiOiB0cnVlLCBcImJvcmRlckltYWdlU291cmNlXCI6IHRydWUsIFwiYm9yZGVySW1hZ2VXaWR0aFwiOiB0cnVlLCBcInRhYlNpemVcIjogdHJ1ZSwgXCJvYmplY3RGaXRcIjogdHJ1ZSwgXCJvYmplY3RQb3NpdGlvblwiOiB0cnVlIH0sIFwiTW96XCI6IHsgXCJhcHBlYXJhbmNlXCI6IHRydWUsIFwidXNlclNlbGVjdFwiOiB0cnVlLCBcImJveFNpemluZ1wiOiB0cnVlLCBcInRleHRBbGlnbkxhc3RcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Db2xvclwiOiB0cnVlLCBcInRhYlNpemVcIjogdHJ1ZSwgXCJoeXBoZW5zXCI6IHRydWUsIFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOiB0cnVlLCBcImJyZWFrQWZ0ZXJcIjogdHJ1ZSwgXCJicmVha0JlZm9yZVwiOiB0cnVlLCBcImJyZWFrSW5zaWRlXCI6IHRydWUsIFwiY29sdW1uQ291bnRcIjogdHJ1ZSwgXCJjb2x1bW5GaWxsXCI6IHRydWUsIFwiY29sdW1uR2FwXCI6IHRydWUsIFwiY29sdW1uUnVsZVwiOiB0cnVlLCBcImNvbHVtblJ1bGVDb2xvclwiOiB0cnVlLCBcImNvbHVtblJ1bGVTdHlsZVwiOiB0cnVlLCBcImNvbHVtblJ1bGVXaWR0aFwiOiB0cnVlLCBcImNvbHVtbnNcIjogdHJ1ZSwgXCJjb2x1bW5TcGFuXCI6IHRydWUsIFwiY29sdW1uV2lkdGhcIjogdHJ1ZSB9LCBcIm1zXCI6IHsgXCJmbGV4XCI6IHRydWUsIFwiZmxleEJhc2lzXCI6IGZhbHNlLCBcImZsZXhEaXJlY3Rpb25cIjogdHJ1ZSwgXCJmbGV4R3Jvd1wiOiBmYWxzZSwgXCJmbGV4Rmxvd1wiOiB0cnVlLCBcImZsZXhTaHJpbmtcIjogZmFsc2UsIFwiZmxleFdyYXBcIjogdHJ1ZSwgXCJhbGlnbkNvbnRlbnRcIjogZmFsc2UsIFwiYWxpZ25JdGVtc1wiOiBmYWxzZSwgXCJhbGlnblNlbGZcIjogZmFsc2UsIFwianVzdGlmeUNvbnRlbnRcIjogZmFsc2UsIFwib3JkZXJcIjogZmFsc2UsIFwidHJhbnNmb3JtXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpbllcIjogdHJ1ZSwgXCJ1c2VyU2VsZWN0XCI6IHRydWUsIFwid3JhcEZsb3dcIjogdHJ1ZSwgXCJ3cmFwVGhyb3VnaFwiOiB0cnVlLCBcIndyYXBNYXJnaW5cIjogdHJ1ZSwgXCJzY3JvbGxTbmFwVHlwZVwiOiB0cnVlLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1lcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogdHJ1ZSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiB0cnVlLCBcInRvdWNoQWN0aW9uXCI6IHRydWUsIFwiaHlwaGVuc1wiOiB0cnVlLCBcImZsb3dJbnRvXCI6IHRydWUsIFwiZmxvd0Zyb21cIjogdHJ1ZSwgXCJicmVha0JlZm9yZVwiOiB0cnVlLCBcImJyZWFrQWZ0ZXJcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcInJlZ2lvbkZyYWdtZW50XCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlQ29sdW1uc1wiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZVJvd3NcIjogdHJ1ZSwgXCJncmlkVGVtcGxhdGVBcmVhc1wiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZVwiOiB0cnVlLCBcImdyaWRBdXRvQ29sdW1uc1wiOiB0cnVlLCBcImdyaWRBdXRvUm93c1wiOiB0cnVlLCBcImdyaWRBdXRvRmxvd1wiOiB0cnVlLCBcImdyaWRcIjogdHJ1ZSwgXCJncmlkUm93U3RhcnRcIjogdHJ1ZSwgXCJncmlkQ29sdW1uU3RhcnRcIjogdHJ1ZSwgXCJncmlkUm93RW5kXCI6IHRydWUsIFwiZ3JpZFJvd1wiOiB0cnVlLCBcImdyaWRDb2x1bW5cIjogdHJ1ZSwgXCJncmlkQ29sdW1uRW5kXCI6IHRydWUsIFwiZ3JpZENvbHVtbkdhcFwiOiB0cnVlLCBcImdyaWRSb3dHYXBcIjogdHJ1ZSwgXCJncmlkQXJlYVwiOiB0cnVlLCBcImdyaWRHYXBcIjogdHJ1ZSwgXCJ0ZXh0U2l6ZUFkanVzdFwiOiB0cnVlIH0gfTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiLy8gbGVpZ2h0IHBvbHlmaWxsIGZvciBPYmplY3QuYXNzaWduXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoYmFzZSkge1xuICB2YXIgZXh0ZW5kID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG4gIHJldHVybiBPYmplY3Qua2V5cyhleHRlbmQpLnJlZHVjZShmdW5jdGlvbiAob3V0LCBrZXkpIHtcbiAgICBiYXNlW2tleV0gPSBleHRlbmRba2V5XTtcbiAgICByZXR1cm4gb3V0O1xuICB9LCB7fSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIi8qKlxuICogQ29udmVydHMgYSBjYW1lbC1jYXNlIHN0cmluZyB0byBhIGRhc2gtY2FzZSBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBzdHIgdGhhdCBnZXRzIGNvbnZlcnRlZCB0byBkYXNoLWNhc2VcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XXxeKShbQS1aXSkvZywgZnVuY3Rpb24gKG1hdGNoLCBwMSwgcDIpIHtcbiAgICByZXR1cm4gcDEgKyAnLScgKyBwMi50b0xvd2VyQ2FzZSgpO1xuICB9KS5yZXBsYWNlKCdtcy0nLCAnLW1zLScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy8gaGVscGVyIHRvIGNhcGl0YWxpemUgc3RyaW5nc1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IHZhbHVlLmpvaW4oJywnKTtcblxuICByZXR1cm4gdmFsdWUubWF0Y2goLy13ZWJraXQtfC1tb3otfC1tcy0vKSAhPT0gbnVsbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIF9jYW1lbFRvRGFzaENhc2UgPSByZXF1aXJlKCcuL2NhbWVsVG9EYXNoQ2FzZScpO1xuXG52YXIgX2NhbWVsVG9EYXNoQ2FzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW1lbFRvRGFzaENhc2UpO1xuXG4vLyByZXR1cm5zIGEgc3R5bGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgY29uY2F0ZWQgcHJlZml4ZWQgdmFsdWUgc3RyaW5nXG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgdmFyIHJlcGxhY2VyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKHByZWZpeCwgdmFsdWUpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgdmFsdWU7XG4gIH0gOiBhcmd1bWVudHNbMl07XG4gIHJldHVybiAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCBbJy13ZWJraXQtJywgJy1tb3otJywgJyddLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICByZXR1cm4gcmVwbGFjZXIocHJlZml4LCB2YWx1ZSk7XG4gICAgfSkpO1xuICB9KSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuLy8gc3BlY2lhbCBmbGV4Ym94IHNwZWNpZmljYXRpb25zXG5cblxudmFyIF9wcmVmaXhBbGwyID0gcmVxdWlyZSgnLi9zdGF0aWMvcHJlZml4QWxsJyk7XG5cbnZhciBfcHJlZml4QWxsMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeEFsbDIpO1xuXG52YXIgX2dldEJyb3dzZXJJbmZvcm1hdGlvbiA9IHJlcXVpcmUoJy4vdXRpbHMvZ2V0QnJvd3NlckluZm9ybWF0aW9uJyk7XG5cbnZhciBfZ2V0QnJvd3NlckluZm9ybWF0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEJyb3dzZXJJbmZvcm1hdGlvbik7XG5cbnZhciBfZ2V0UHJlZml4ZWRLZXlmcmFtZXMgPSByZXF1aXJlKCcuL3V0aWxzL2dldFByZWZpeGVkS2V5ZnJhbWVzJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRLZXlmcmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJlZml4ZWRLZXlmcmFtZXMpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemVTdHJpbmcpO1xuXG52YXIgX3ByZWZpeFByb3BzID0gcmVxdWlyZSgnLi9wcmVmaXhQcm9wcycpO1xuXG52YXIgX3ByZWZpeFByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeFByb3BzKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9wbHVnaW5zL2NhbGMnKTtcblxudmFyIF9jYWxjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbGMpO1xuXG52YXIgX3pvb21DdXJzb3IgPSByZXF1aXJlKCcuL3BsdWdpbnMvem9vbUN1cnNvcicpO1xuXG52YXIgX3pvb21DdXJzb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfem9vbUN1cnNvcik7XG5cbnZhciBfZ3JhYkN1cnNvciA9IHJlcXVpcmUoJy4vcGx1Z2lucy9ncmFiQ3Vyc29yJyk7XG5cbnZhciBfZ3JhYkN1cnNvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ncmFiQ3Vyc29yKTtcblxudmFyIF9mbGV4ID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXgnKTtcblxudmFyIF9mbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXgpO1xuXG52YXIgX3NpemluZyA9IHJlcXVpcmUoJy4vcGx1Z2lucy9zaXppbmcnKTtcblxudmFyIF9zaXppbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2l6aW5nKTtcblxudmFyIF9ncmFkaWVudCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9ncmFkaWVudCcpO1xuXG52YXIgX2dyYWRpZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dyYWRpZW50KTtcblxudmFyIF90cmFuc2l0aW9uID0gcmVxdWlyZSgnLi9wbHVnaW5zL3RyYW5zaXRpb24nKTtcblxudmFyIF90cmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb24pO1xuXG52YXIgX2ZsZXhib3hJRSA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Ym94SUUnKTtcblxudmFyIF9mbGV4Ym94SUUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxleGJveElFKTtcblxudmFyIF9mbGV4Ym94T2xkID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXhib3hPbGQnKTtcblxudmFyIF9mbGV4Ym94T2xkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXhib3hPbGQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgcGx1Z2lucyA9IFtfY2FsYzIuZGVmYXVsdCwgX3pvb21DdXJzb3IyLmRlZmF1bHQsIF9ncmFiQ3Vyc29yMi5kZWZhdWx0LCBfc2l6aW5nMi5kZWZhdWx0LCBfZ3JhZGllbnQyLmRlZmF1bHQsIF90cmFuc2l0aW9uMi5kZWZhdWx0LCBfZmxleGJveElFMi5kZWZhdWx0LCBfZmxleGJveE9sZDIuZGVmYXVsdCxcbi8vIHRoaXMgbXVzdCBiZSBydW4gQUZURVIgdGhlIGZsZXhib3ggc3BlY3Ncbl9mbGV4Mi5kZWZhdWx0XTtcblxudmFyIFByZWZpeGVyID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogSW5zdGFudGlhbnRlIGEgbmV3IHByZWZpeGVyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VyQWdlbnQgLSB1c2VyQWdlbnQgdG8gZ2F0aGVyIHByZWZpeCBpbmZvcm1hdGlvbiBhY2NvcmRpbmcgdG8gY2FuaXVzZS5jb21cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtlZXBVbnByZWZpeGVkIC0ga2VlcHMgdW5wcmVmaXhlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAgICovXG5cbiAgZnVuY3Rpb24gUHJlZml4ZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJlZml4ZXIpO1xuXG4gICAgdmFyIGRlZmF1bHRVc2VyQWdlbnQgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyA/IG5hdmlnYXRvci51c2VyQWdlbnQgOiB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLl91c2VyQWdlbnQgPSBvcHRpb25zLnVzZXJBZ2VudCB8fCBkZWZhdWx0VXNlckFnZW50O1xuICAgIHRoaXMuX2tlZXBVbnByZWZpeGVkID0gb3B0aW9ucy5rZWVwVW5wcmVmaXhlZCB8fCBmYWxzZTtcblxuICAgIHRoaXMuX2Jyb3dzZXJJbmZvID0gKDAsIF9nZXRCcm93c2VySW5mb3JtYXRpb24yLmRlZmF1bHQpKHRoaXMuX3VzZXJBZ2VudCk7XG5cbiAgICAvLyBDaGVja3MgaWYgdGhlIHVzZXJBZ2VudCB3YXMgcmVzb2x2ZWQgY29ycmVjdGx5XG4gICAgaWYgKHRoaXMuX2Jyb3dzZXJJbmZvICYmIHRoaXMuX2Jyb3dzZXJJbmZvLnByZWZpeCkge1xuICAgICAgLy8gc2V0IGFkZGl0aW9uYWwgcHJlZml4IGluZm9ybWF0aW9uXG4gICAgICB0aGlzLmNzc1ByZWZpeCA9IHRoaXMuX2Jyb3dzZXJJbmZvLnByZWZpeC5jc3M7XG4gICAgICB0aGlzLmpzUHJlZml4ID0gdGhpcy5fYnJvd3NlckluZm8ucHJlZml4LmlubGluZTtcbiAgICAgIHRoaXMucHJlZml4ZWRLZXlmcmFtZXMgPSAoMCwgX2dldFByZWZpeGVkS2V5ZnJhbWVzMi5kZWZhdWx0KSh0aGlzLl9icm93c2VySW5mbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VzZVByZWZpeEFsbEZhbGxiYWNrID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgZGF0YSA9IHRoaXMuX2Jyb3dzZXJJbmZvLmJyb3dzZXIgJiYgX3ByZWZpeFByb3BzMi5kZWZhdWx0W3RoaXMuX2Jyb3dzZXJJbmZvLmJyb3dzZXJdO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICB0aGlzLl9yZXF1aXJlc1ByZWZpeCA9IE9iamVjdC5rZXlzKGRhdGEpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiBkYXRhW2tleV0gPj0gX3RoaXMuX2Jyb3dzZXJJbmZvLnZlcnNpb247XG4gICAgICB9KS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwgbmFtZSkge1xuICAgICAgICByZXN1bHRbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSwge30pO1xuICAgICAgdGhpcy5faGFzUHJvcHNSZXF1aXJpbmdQcmVmaXggPSBPYmplY3Qua2V5cyh0aGlzLl9yZXF1aXJlc1ByZWZpeCkubGVuZ3RoID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXNlUHJlZml4QWxsRmFsbGJhY2sgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcHJlZml4ZWQgdmVyc2lvbiBvZiB0aGUgc3R5bGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgLSBTdHlsZSBvYmplY3QgdGhhdCBnZXRzIHByZWZpeGVkIHByb3BlcnRpZXMgYWRkZWRcbiAgICogQHJldHVybnMge09iamVjdH0gLSBTdHlsZSBvYmplY3Qgd2l0aCBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoUHJlZml4ZXIsIFt7XG4gICAga2V5OiAncHJlZml4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJlZml4KHN0eWxlcykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIC8vIHVzZSBwcmVmaXhBbGwgYXMgZmFsbGJhY2sgaWYgdXNlckFnZW50IGNhbiBub3QgYmUgcmVzb2x2ZWRcbiAgICAgIGlmICh0aGlzLl91c2VQcmVmaXhBbGxGYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gKDAsIF9wcmVmaXhBbGwzLmRlZmF1bHQpKHN0eWxlcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIG9ubHkgYWRkIHByZWZpeGVzIGlmIG5lZWRlZFxuICAgICAgaWYgKCF0aGlzLl9oYXNQcm9wc1JlcXVpcmluZ1ByZWZpeCkge1xuICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgfVxuXG4gICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1twcm9wZXJ0eV07XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAvLyByZWN1cnNlIHRocm91Z2ggbmVzdGVkIHN0eWxlIG9iamVjdHNcbiAgICAgICAgICBzdHlsZXNbcHJvcGVydHldID0gX3RoaXMyLnByZWZpeCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gYWRkIHByZWZpeGVzIGlmIG5lZWRlZFxuICAgICAgICAgIGlmIChfdGhpczIuX3JlcXVpcmVzUHJlZml4W3Byb3BlcnR5XSkge1xuICAgICAgICAgICAgc3R5bGVzW190aGlzMi5qc1ByZWZpeCArICgwLCBfY2FwaXRhbGl6ZVN0cmluZzIuZGVmYXVsdCkocHJvcGVydHkpXSA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKCFfdGhpczIuX2tlZXBVbnByZWZpeGVkKSB7XG4gICAgICAgICAgICAgIGRlbGV0ZSBzdHlsZXNbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgW10uY29uY2F0KHN0eWxlc1twcm9wZXJ0eV0pLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgLy8gcmVzb2x2ZSBwbHVnaW5zXG4gICAgICAgICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgICAgIC8vIGdlbmVyYXRlcyBhIG5ldyBwbHVnaW4gaW50ZXJmYWNlIHdpdGggY3VycmVudCBkYXRhXG4gICAgICAgICAgICBhc3NpZ25TdHlsZXMoc3R5bGVzLCBwbHVnaW4oe1xuICAgICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgICAgICAgIGJyb3dzZXJJbmZvOiBfdGhpczIuX2Jyb3dzZXJJbmZvLFxuICAgICAgICAgICAgICBwcmVmaXg6IHtcbiAgICAgICAgICAgICAgICBqczogX3RoaXMyLmpzUHJlZml4LFxuICAgICAgICAgICAgICAgIGNzczogX3RoaXMyLmNzc1ByZWZpeCxcbiAgICAgICAgICAgICAgICBrZXlmcmFtZXM6IF90aGlzMi5wcmVmaXhlZEtleWZyYW1lc1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBrZWVwVW5wcmVmaXhlZDogX3RoaXMyLl9rZWVwVW5wcmVmaXhlZCxcbiAgICAgICAgICAgICAgcmVxdWlyZXNQcmVmaXg6IF90aGlzMi5fcmVxdWlyZXNQcmVmaXhcbiAgICAgICAgICAgIH0pLCB2YWx1ZSwgX3RoaXMyLl9rZWVwVW5wcmVmaXhlZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByZWZpeGVkIHZlcnNpb24gb2YgdGhlIHN0eWxlIG9iamVjdCB1c2luZyBhbGwgdmVuZG9yIHByZWZpeGVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyAtIFN0eWxlIG9iamVjdCB0aGF0IGdldHMgcHJlZml4ZWQgcHJvcGVydGllcyBhZGRlZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IC0gU3R5bGUgb2JqZWN0IHdpdGggcHJlZml4ZWQgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAgICovXG5cbiAgfV0sIFt7XG4gICAga2V5OiAncHJlZml4QWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJlZml4QWxsKHN0eWxlcykge1xuICAgICAgcmV0dXJuICgwLCBfcHJlZml4QWxsMy5kZWZhdWx0KShzdHlsZXMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcmVmaXhlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUHJlZml4ZXI7XG5cblxuZnVuY3Rpb24gYXNzaWduU3R5bGVzKGJhc2UpIHtcbiAgdmFyIGV4dGVuZCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuICB2YXIgdmFsdWUgPSBhcmd1bWVudHNbMl07XG4gIHZhciBrZWVwVW5wcmVmaXhlZCA9IGFyZ3VtZW50c1szXTtcblxuICBPYmplY3Qua2V5cyhleHRlbmQpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgdmFyIGJhc2VWYWx1ZSA9IGJhc2VbcHJvcGVydHldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGJhc2VWYWx1ZSkpIHtcbiAgICAgIFtdLmNvbmNhdChleHRlbmRbcHJvcGVydHldKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgaWYgKGJhc2VbcHJvcGVydHldLmluZGV4T2YodmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICBiYXNlW3Byb3BlcnR5XS5zcGxpY2UoYmFzZVZhbHVlLmluZGV4T2YodmFsdWUpLCBrZWVwVW5wcmVmaXhlZCA/IDAgOiAxLCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZVtwcm9wZXJ0eV0gPSBleHRlbmRbcHJvcGVydHldO1xuICAgIH1cbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjYWxjO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gY2FsYyhfcmVmKSB7XG4gIHZhciBwcm9wZXJ0eSA9IF9yZWYucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWU7XG4gIHZhciBfcmVmJGJyb3dzZXJJbmZvID0gX3JlZi5icm93c2VySW5mbztcbiAgdmFyIGJyb3dzZXIgPSBfcmVmJGJyb3dzZXJJbmZvLmJyb3dzZXI7XG4gIHZhciB2ZXJzaW9uID0gX3JlZiRicm93c2VySW5mby52ZXJzaW9uO1xuICB2YXIgY3NzID0gX3JlZi5wcmVmaXguY3NzO1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2NhbGMoJykgPiAtMSAmJiAoYnJvd3NlciA9PT0gJ2ZpcmVmb3gnICYmIHZlcnNpb24gPCAxNSB8fCBicm93c2VyID09PSAnY2hyb21lJyAmJiB2ZXJzaW9uIDwgMjUgfHwgYnJvd3NlciA9PT0gJ3NhZmFyaScgJiYgdmVyc2lvbiA8IDYuMSB8fCBicm93c2VyID09PSAnaW9zX3NhZicgJiYgdmVyc2lvbiA8IDcpKSB7XG4gICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksICgwLCBfZ2V0UHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkodmFsdWUucmVwbGFjZSgvY2FsY1xcKC9nLCBjc3MgKyAnY2FsYygnKSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZsZXg7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdmFsdWVzID0geyBmbGV4OiB0cnVlLCAnaW5saW5lLWZsZXgnOiB0cnVlIH07XG5cbmZ1bmN0aW9uIGZsZXgoX3JlZikge1xuICB2YXIgcHJvcGVydHkgPSBfcmVmLnByb3BlcnR5O1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlO1xuICB2YXIgX3JlZiRicm93c2VySW5mbyA9IF9yZWYuYnJvd3NlckluZm87XG4gIHZhciBicm93c2VyID0gX3JlZiRicm93c2VySW5mby5icm93c2VyO1xuICB2YXIgdmVyc2lvbiA9IF9yZWYkYnJvd3NlckluZm8udmVyc2lvbjtcbiAgdmFyIGNzcyA9IF9yZWYucHJlZml4LmNzcztcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiB2YWx1ZXNbdmFsdWVdICYmIChicm93c2VyID09PSAnY2hyb21lJyAmJiB2ZXJzaW9uIDwgMjkgJiYgdmVyc2lvbiA+IDIwIHx8IChicm93c2VyID09PSAnc2FmYXJpJyB8fCBicm93c2VyID09PSAnaW9zX3NhZicpICYmIHZlcnNpb24gPCA5ICYmIHZlcnNpb24gPiA2IHx8IGJyb3dzZXIgPT09ICdvcGVyYScgJiYgKHZlcnNpb24gPT0gMTUgfHwgdmVyc2lvbiA9PSAxNikpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6ICgwLCBfZ2V0UHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkoY3NzICsgdmFsdWUsIHZhbHVlLCBrZWVwVW5wcmVmaXhlZClcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94SUU7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICdzcGFjZS1hcm91bmQnOiAnZGlzdHJpYnV0ZScsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICdmbGV4LWVuZCc6ICdlbmQnLFxuICBmbGV4OiAnZmxleGJveCcsXG4gICdpbmxpbmUtZmxleCc6ICdpbmxpbmUtZmxleGJveCdcbn07XG52YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgYWxpZ25Db250ZW50OiAnbXNGbGV4TGluZVBhY2snLFxuICBhbGlnblNlbGY6ICdtc0ZsZXhJdGVtQWxpZ24nLFxuICBhbGlnbkl0ZW1zOiAnbXNGbGV4QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ21zRmxleFBhY2snLFxuICBvcmRlcjogJ21zRmxleE9yZGVyJyxcbiAgZmxleEdyb3c6ICdtc0ZsZXhQb3NpdGl2ZScsXG4gIGZsZXhTaHJpbms6ICdtc0ZsZXhOZWdhdGl2ZScsXG4gIGZsZXhCYXNpczogJ21zUHJlZmVycmVkU2l6ZSdcbn07XG5cbmZ1bmN0aW9uIGZsZXhib3hJRShfcmVmKSB7XG4gIHZhciBwcm9wZXJ0eSA9IF9yZWYucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWU7XG4gIHZhciBzdHlsZXMgPSBfcmVmLnN0eWxlcztcbiAgdmFyIF9yZWYkYnJvd3NlckluZm8gPSBfcmVmLmJyb3dzZXJJbmZvO1xuICB2YXIgYnJvd3NlciA9IF9yZWYkYnJvd3NlckluZm8uYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBfcmVmJGJyb3dzZXJJbmZvLnZlcnNpb247XG4gIHZhciBjc3MgPSBfcmVmLnByZWZpeC5jc3M7XG4gIHZhciBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgaWYgKChhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSB8fCBwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignZmxleCcpID4gLTEpICYmIChicm93c2VyID09PSAnaWVfbW9iJyB8fCBicm93c2VyID09PSAnaWUnKSAmJiB2ZXJzaW9uID09IDEwKSB7XG4gICAgaWYgKCFrZWVwVW5wcmVmaXhlZCAmJiAhQXJyYXkuaXNBcnJheShzdHlsZXNbcHJvcGVydHldKSkge1xuICAgICAgZGVsZXRlIHN0eWxlc1twcm9wZXJ0eV07XG4gICAgfVxuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShjc3MgKyBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0sIHZhbHVlLCBrZWVwVW5wcmVmaXhlZClcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0sIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94T2xkO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2p1c3RpZnknLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJyxcbiAgJ3dyYXAtcmV2ZXJzZSc6ICdtdWx0aXBsZScsXG4gIHdyYXA6ICdtdWx0aXBsZScsXG4gIGZsZXg6ICdib3gnLFxuICAnaW5saW5lLWZsZXgnOiAnaW5saW5lLWJveCdcbn07XG5cbnZhciBhbHRlcm5hdGl2ZVByb3BzID0ge1xuICBhbGlnbkl0ZW1zOiAnV2Via2l0Qm94QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ1dlYmtpdEJveFBhY2snLFxuICBmbGV4V3JhcDogJ1dlYmtpdEJveExpbmVzJ1xufTtcblxudmFyIG90aGVyUHJvcHMgPSBbJ2FsaWduQ29udGVudCcsICdhbGlnblNlbGYnLCAnb3JkZXInLCAnZmxleEdyb3cnLCAnZmxleFNocmluaycsICdmbGV4QmFzaXMnLCAnZmxleERpcmVjdGlvbiddO1xudmFyIHByb3BlcnRpZXMgPSBPYmplY3Qua2V5cyhhbHRlcm5hdGl2ZVByb3BzKS5jb25jYXQob3RoZXJQcm9wcyk7XG5cbmZ1bmN0aW9uIGZsZXhib3hPbGQoX3JlZikge1xuICB2YXIgcHJvcGVydHkgPSBfcmVmLnByb3BlcnR5O1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlO1xuICB2YXIgc3R5bGVzID0gX3JlZi5zdHlsZXM7XG4gIHZhciBfcmVmJGJyb3dzZXJJbmZvID0gX3JlZi5icm93c2VySW5mbztcbiAgdmFyIGJyb3dzZXIgPSBfcmVmJGJyb3dzZXJJbmZvLmJyb3dzZXI7XG4gIHZhciB2ZXJzaW9uID0gX3JlZiRicm93c2VySW5mby52ZXJzaW9uO1xuICB2YXIgY3NzID0gX3JlZi5wcmVmaXguY3NzO1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmICgocHJvcGVydGllcy5pbmRleE9mKHByb3BlcnR5KSA+IC0xIHx8IHByb3BlcnR5ID09PSAnZGlzcGxheScgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmRleE9mKCdmbGV4JykgPiAtMSkgJiYgKGJyb3dzZXIgPT09ICdmaXJlZm94JyAmJiB2ZXJzaW9uIDwgMjIgfHwgYnJvd3NlciA9PT0gJ2Nocm9tZScgJiYgdmVyc2lvbiA8IDIxIHx8IChicm93c2VyID09PSAnc2FmYXJpJyB8fCBicm93c2VyID09PSAnaW9zX3NhZicpICYmIHZlcnNpb24gPD0gNi4xIHx8IGJyb3dzZXIgPT09ICdhbmRyb2lkJyAmJiB2ZXJzaW9uIDwgNC40IHx8IGJyb3dzZXIgPT09ICdhbmRfdWMnKSkge1xuICAgIGlmICgha2VlcFVucHJlZml4ZWQgJiYgIUFycmF5LmlzQXJyYXkoc3R5bGVzW3Byb3BlcnR5XSkpIHtcbiAgICAgIGRlbGV0ZSBzdHlsZXNbcHJvcGVydHldO1xuICAgIH1cbiAgICBpZiAocHJvcGVydHkgPT09ICdmbGV4RGlyZWN0aW9uJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBXZWJraXRCb3hPcmllbnQ6IHZhbHVlLmluZGV4T2YoJ2NvbHVtbicpID4gLTEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLFxuICAgICAgICBXZWJraXRCb3hEaXJlY3Rpb246IHZhbHVlLmluZGV4T2YoJ3JldmVyc2UnKSA+IC0xID8gJ3JldmVyc2UnIDogJ25vcm1hbCdcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ2Rpc3BsYXknICYmIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGlzcGxheTogKDAsIF9nZXRQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShjc3MgKyBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0sIHZhbHVlLCBrZWVwVW5wcmVmaXhlZClcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSkge1xuICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0sIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBncmFiQ3Vyc29yO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHZhbHVlcyA9IHsgZ3JhYjogdHJ1ZSwgZ3JhYmJpbmc6IHRydWUgfTtcblxuZnVuY3Rpb24gZ3JhYkN1cnNvcihfcmVmKSB7XG4gIHZhciBwcm9wZXJ0eSA9IF9yZWYucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWU7XG4gIHZhciBicm93c2VyID0gX3JlZi5icm93c2VySW5mby5icm93c2VyO1xuICB2YXIgY3NzID0gX3JlZi5wcmVmaXguY3NzO1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIC8vIGFkZHMgcHJlZml4ZXMgZm9yIGZpcmVmb3gsIGNocm9tZSwgc2FmYXJpLCBhbmQgb3BlcmEgcmVnYXJkbGVzcyBvZiB2ZXJzaW9uIHVudGlsIGEgcmVsaWFibGUgYnJ3b3NlciBzdXBwb3J0IGluZm8gY2FuIGJlIGZvdW5kIChzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yb2ZyaXNjaG1hbm4vaW5saW5lLXN0eWxlLXByZWZpeGVyL2lzc3Vlcy83OSlcbiAgaWYgKHByb3BlcnR5ID09PSAnY3Vyc29yJyAmJiB2YWx1ZXNbdmFsdWVdICYmIChicm93c2VyID09PSAnZmlyZWZveCcgfHwgYnJvd3NlciA9PT0gJ2Nocm9tZScgfHwgYnJvd3NlciA9PT0gJ3NhZmFyaScgfHwgYnJvd3NlciA9PT0gJ29wZXJhJykpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3Vyc29yOiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzcyArIHZhbHVlLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpXG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ3JhZGllbnQ7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2dldFByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgdmFsdWVzID0gL2xpbmVhci1ncmFkaWVudHxyYWRpYWwtZ3JhZGllbnR8cmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudHxyZXBlYXRpbmctcmFkaWFsLWdyYWRpZW50LztcblxuZnVuY3Rpb24gZ3JhZGllbnQoX3JlZikge1xuICB2YXIgcHJvcGVydHkgPSBfcmVmLnByb3BlcnR5O1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlO1xuICB2YXIgX3JlZiRicm93c2VySW5mbyA9IF9yZWYuYnJvd3NlckluZm87XG4gIHZhciBicm93c2VyID0gX3JlZiRicm93c2VySW5mby5icm93c2VyO1xuICB2YXIgdmVyc2lvbiA9IF9yZWYkYnJvd3NlckluZm8udmVyc2lvbjtcbiAgdmFyIGNzcyA9IF9yZWYucHJlZml4LmNzcztcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5tYXRjaCh2YWx1ZXMpICE9PSBudWxsICYmIChicm93c2VyID09PSAnZmlyZWZveCcgJiYgdmVyc2lvbiA8IDE2IHx8IGJyb3dzZXIgPT09ICdjaHJvbWUnICYmIHZlcnNpb24gPCAyNiB8fCAoYnJvd3NlciA9PT0gJ3NhZmFyaScgfHwgYnJvd3NlciA9PT0gJ2lvc19zYWYnKSAmJiB2ZXJzaW9uIDwgNyB8fCAoYnJvd3NlciA9PT0gJ29wZXJhJyB8fCBicm93c2VyID09PSAnb3BfbWluaScpICYmIHZlcnNpb24gPCAxMi4xIHx8IGJyb3dzZXIgPT09ICdhbmRyb2lkJyAmJiB2ZXJzaW9uIDwgNC40IHx8IGJyb3dzZXIgPT09ICdhbmRfdWMnKSkge1xuICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzcyArIHZhbHVlLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gc2l6aW5nO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi91dGlscy9nZXRQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfZ2V0UHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIG1heEhlaWdodDogdHJ1ZSxcbiAgbWF4V2lkdGg6IHRydWUsXG4gIHdpZHRoOiB0cnVlLFxuICBoZWlnaHQ6IHRydWUsXG4gIGNvbHVtbldpZHRoOiB0cnVlLFxuICBtaW5XaWR0aDogdHJ1ZSxcbiAgbWluSGVpZ2h0OiB0cnVlXG59O1xudmFyIHZhbHVlcyA9IHtcbiAgJ21pbi1jb250ZW50JzogdHJ1ZSxcbiAgJ21heC1jb250ZW50JzogdHJ1ZSxcbiAgJ2ZpbGwtYXZhaWxhYmxlJzogdHJ1ZSxcbiAgJ2ZpdC1jb250ZW50JzogdHJ1ZSxcbiAgJ2NvbnRhaW4tZmxvYXRzJzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gc2l6aW5nKF9yZWYpIHtcbiAgdmFyIHByb3BlcnR5ID0gX3JlZi5wcm9wZXJ0eTtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZTtcbiAgdmFyIGNzcyA9IF9yZWYucHJlZml4LmNzcztcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICAvLyBUaGlzIG1pZ2h0IGNoYW5nZSBpbiB0aGUgZnV0dXJlXG4gIC8vIEtlZXAgYW4gZXllIG9uIGl0XG4gIGlmIChwcm9wZXJ0aWVzW3Byb3BlcnR5XSAmJiB2YWx1ZXNbdmFsdWVdKSB7XG4gICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksICgwLCBfZ2V0UHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkoY3NzICsgdmFsdWUsIHZhbHVlLCBrZWVwVW5wcmVmaXhlZCkpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2l0aW9uO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2h5cGhlbmF0ZS1zdHlsZS1uYW1lJyk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVN0eWxlTmFtZSk7XG5cbnZhciBfdW5wcmVmaXhQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL3V0aWxzL3VucHJlZml4UHJvcGVydHknKTtcblxudmFyIF91bnByZWZpeFByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VucHJlZml4UHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgcHJvcGVydGllcyA9IHsgdHJhbnNpdGlvbjogdHJ1ZSwgdHJhbnNpdGlvblByb3BlcnR5OiB0cnVlIH07XG5cbmZ1bmN0aW9uIHRyYW5zaXRpb24oX3JlZikge1xuICB2YXIgcHJvcGVydHkgPSBfcmVmLnByb3BlcnR5O1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlO1xuICB2YXIgY3NzID0gX3JlZi5wcmVmaXguY3NzO1xuICB2YXIgcmVxdWlyZXNQcmVmaXggPSBfcmVmLnJlcXVpcmVzUHJlZml4O1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBfcmVmLmtlZXBVbnByZWZpeGVkO1xuXG4gIC8vIGFsc28gY2hlY2sgZm9yIGFscmVhZHkgcHJlZml4ZWQgdHJhbnNpdGlvbnNcbiAgdmFyIHVucHJlZml4ZWRQcm9wZXJ0eSA9ICgwLCBfdW5wcmVmaXhQcm9wZXJ0eTIuZGVmYXVsdCkocHJvcGVydHkpO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHByb3BlcnRpZXNbdW5wcmVmaXhlZFByb3BlcnR5XSkge1xuICAgIHZhciBfcmV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gVE9ETzogbWVtb2l6ZSB0aGlzIGFycmF5XG4gICAgICB2YXIgcmVxdWlyZXNQcmVmaXhEYXNoQ2FzZWQgPSBPYmplY3Qua2V5cyhyZXF1aXJlc1ByZWZpeCkubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHJldHVybiAoMCwgX2h5cGhlbmF0ZVN0eWxlTmFtZTIuZGVmYXVsdCkocHJvcCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gb25seSBzcGxpdCBtdWx0aSB2YWx1ZXMsIG5vdCBjdWJpYyBiZXppZXJzXG4gICAgICB2YXIgbXVsdGlwbGVWYWx1ZXMgPSB2YWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKTtcblxuICAgICAgcmVxdWlyZXNQcmVmaXhEYXNoQ2FzZWQuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICBtdWx0aXBsZVZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICAgICAgaWYgKHZhbC5pbmRleE9mKHByb3ApID4gLTEgJiYgcHJvcCAhPT0gJ29yZGVyJykge1xuICAgICAgICAgICAgbXVsdGlwbGVWYWx1ZXNbaW5kZXhdID0gdmFsLnJlcGxhY2UocHJvcCwgY3NzICsgcHJvcCkgKyAoa2VlcFVucHJlZml4ZWQgPyAnLCcgKyB2YWwgOiAnJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB2OiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCBtdWx0aXBsZVZhbHVlcy5qb2luKCcsJykpXG4gICAgICB9O1xuICAgIH0oKTtcblxuICAgIGlmICgodHlwZW9mIF9yZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKF9yZXQpKSA9PT0gXCJvYmplY3RcIikgcmV0dXJuIF9yZXQudjtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gem9vbUN1cnNvcjtcblxudmFyIF9nZXRQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vdXRpbHMvZ2V0UHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2dldFByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB2YWx1ZXMgPSB7ICd6b29tLWluJzogdHJ1ZSwgJ3pvb20tb3V0JzogdHJ1ZSB9O1xuXG5mdW5jdGlvbiB6b29tQ3Vyc29yKF9yZWYpIHtcbiAgdmFyIHByb3BlcnR5ID0gX3JlZi5wcm9wZXJ0eTtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZTtcbiAgdmFyIF9yZWYkYnJvd3NlckluZm8gPSBfcmVmLmJyb3dzZXJJbmZvO1xuICB2YXIgYnJvd3NlciA9IF9yZWYkYnJvd3NlckluZm8uYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBfcmVmJGJyb3dzZXJJbmZvLnZlcnNpb247XG4gIHZhciBjc3MgPSBfcmVmLnByZWZpeC5jc3M7XG4gIHZhciBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgaWYgKHByb3BlcnR5ID09PSAnY3Vyc29yJyAmJiB2YWx1ZXNbdmFsdWVdICYmIChicm93c2VyID09PSAnZmlyZWZveCcgJiYgdmVyc2lvbiA8IDI0IHx8IGJyb3dzZXIgPT09ICdjaHJvbWUnICYmIHZlcnNpb24gPCAzNyB8fCBicm93c2VyID09PSAnc2FmYXJpJyAmJiB2ZXJzaW9uIDwgOSB8fCBicm93c2VyID09PSAnb3BlcmEnICYmIHZlcnNpb24gPCAyNCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3Vyc29yOiAoMCwgX2dldFByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKGNzcyArIHZhbHVlLCB2YWx1ZSwga2VlcFVucHJlZml4ZWQpXG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7IFwiY2hyb21lXCI6IHsgXCJ0cmFuc2Zvcm1cIjogMzUsIFwidHJhbnNmb3JtT3JpZ2luXCI6IDM1LCBcInRyYW5zZm9ybU9yaWdpblhcIjogMzUsIFwidHJhbnNmb3JtT3JpZ2luWVwiOiAzNSwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogMzUsIFwicGVyc3BlY3RpdmVcIjogMzUsIFwicGVyc3BlY3RpdmVPcmlnaW5cIjogMzUsIFwidHJhbnNmb3JtU3R5bGVcIjogMzUsIFwidHJhbnNmb3JtT3JpZ2luWlwiOiAzNSwgXCJhbmltYXRpb25cIjogNDIsIFwiYW5pbWF0aW9uRGVsYXlcIjogNDIsIFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6IDQyLCBcImFuaW1hdGlvbkZpbGxNb2RlXCI6IDQyLCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDQyLCBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IDQyLCBcImFuaW1hdGlvbk5hbWVcIjogNDIsIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IDQyLCBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IDQyLCBcImFwcGVhcmFuY2VcIjogNTUsIFwidXNlclNlbGVjdFwiOiA1NSwgXCJmb250S2VybmluZ1wiOiAzMiwgXCJ0ZXh0RW1waGFzaXNQb3NpdGlvblwiOiA1NSwgXCJ0ZXh0RW1waGFzaXNcIjogNTUsIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogNTUsIFwidGV4dEVtcGhhc2lzQ29sb3JcIjogNTUsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IDU1LCBcImNsaXBQYXRoXCI6IDU1LCBcIm1hc2tJbWFnZVwiOiA1NSwgXCJtYXNrTW9kZVwiOiA1NSwgXCJtYXNrUmVwZWF0XCI6IDU1LCBcIm1hc2tQb3NpdGlvblwiOiA1NSwgXCJtYXNrQ2xpcFwiOiA1NSwgXCJtYXNrT3JpZ2luXCI6IDU1LCBcIm1hc2tTaXplXCI6IDU1LCBcIm1hc2tDb21wb3NpdGVcIjogNTUsIFwibWFza1wiOiA1NSwgXCJtYXNrQm9yZGVyU291cmNlXCI6IDU1LCBcIm1hc2tCb3JkZXJNb2RlXCI6IDU1LCBcIm1hc2tCb3JkZXJTbGljZVwiOiA1NSwgXCJtYXNrQm9yZGVyV2lkdGhcIjogNTUsIFwibWFza0JvcmRlck91dHNldFwiOiA1NSwgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IDU1LCBcIm1hc2tCb3JkZXJcIjogNTUsIFwibWFza1R5cGVcIjogNTUsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiA1NSwgXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjogNTUsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IDU1LCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogNTUsIFwiZmlsdGVyXCI6IDUyLCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogNDcsIFwiYnJlYWtBZnRlclwiOiA0OSwgXCJicmVha0JlZm9yZVwiOiA0OSwgXCJicmVha0luc2lkZVwiOiA0OSwgXCJjb2x1bW5Db3VudFwiOiA0OSwgXCJjb2x1bW5GaWxsXCI6IDQ5LCBcImNvbHVtbkdhcFwiOiA0OSwgXCJjb2x1bW5SdWxlXCI6IDQ5LCBcImNvbHVtblJ1bGVDb2xvclwiOiA0OSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogNDksIFwiY29sdW1uUnVsZVdpZHRoXCI6IDQ5LCBcImNvbHVtbnNcIjogNDksIFwiY29sdW1uU3BhblwiOiA0OSwgXCJjb2x1bW5XaWR0aFwiOiA0OSB9LCBcInNhZmFyaVwiOiB7IFwiZmxleFwiOiA4LCBcImZsZXhCYXNpc1wiOiA4LCBcImZsZXhEaXJlY3Rpb25cIjogOCwgXCJmbGV4R3Jvd1wiOiA4LCBcImZsZXhGbG93XCI6IDgsIFwiZmxleFNocmlua1wiOiA4LCBcImZsZXhXcmFwXCI6IDgsIFwiYWxpZ25Db250ZW50XCI6IDgsIFwiYWxpZ25JdGVtc1wiOiA4LCBcImFsaWduU2VsZlwiOiA4LCBcImp1c3RpZnlDb250ZW50XCI6IDgsIFwib3JkZXJcIjogOCwgXCJ0cmFuc2l0aW9uXCI6IDYsIFwidHJhbnNpdGlvbkRlbGF5XCI6IDYsIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IDYsIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IDYsIFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6IDYsIFwidHJhbnNmb3JtXCI6IDgsIFwidHJhbnNmb3JtT3JpZ2luXCI6IDgsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiA4LCBcInRyYW5zZm9ybU9yaWdpbllcIjogOCwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogOCwgXCJwZXJzcGVjdGl2ZVwiOiA4LCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IDgsIFwidHJhbnNmb3JtU3R5bGVcIjogOCwgXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6IDgsIFwiYW5pbWF0aW9uXCI6IDgsIFwiYW5pbWF0aW9uRGVsYXlcIjogOCwgXCJhbmltYXRpb25EaXJlY3Rpb25cIjogOCwgXCJhbmltYXRpb25GaWxsTW9kZVwiOiA4LCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDgsIFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogOCwgXCJhbmltYXRpb25OYW1lXCI6IDgsIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IDgsIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogOCwgXCJhcHBlYXJhbmNlXCI6IDEwLCBcInVzZXJTZWxlY3RcIjogMTAsIFwiYmFja2Ryb3BGaWx0ZXJcIjogMTAsIFwiZm9udEtlcm5pbmdcIjogOSwgXCJzY3JvbGxTbmFwVHlwZVwiOiAxMCwgXCJzY3JvbGxTbmFwUG9pbnRzWFwiOiAxMCwgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiAxMCwgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogMTAsIFwic2Nyb2xsU25hcENvb3JkaW5hdGVcIjogMTAsIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogNywgXCJ0ZXh0RW1waGFzaXNcIjogNywgXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOiA3LCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IDcsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IDEwLCBcImNsaXBQYXRoXCI6IDEwLCBcIm1hc2tJbWFnZVwiOiAxMCwgXCJtYXNrTW9kZVwiOiAxMCwgXCJtYXNrUmVwZWF0XCI6IDEwLCBcIm1hc2tQb3NpdGlvblwiOiAxMCwgXCJtYXNrQ2xpcFwiOiAxMCwgXCJtYXNrT3JpZ2luXCI6IDEwLCBcIm1hc2tTaXplXCI6IDEwLCBcIm1hc2tDb21wb3NpdGVcIjogMTAsIFwibWFza1wiOiAxMCwgXCJtYXNrQm9yZGVyU291cmNlXCI6IDEwLCBcIm1hc2tCb3JkZXJNb2RlXCI6IDEwLCBcIm1hc2tCb3JkZXJTbGljZVwiOiAxMCwgXCJtYXNrQm9yZGVyV2lkdGhcIjogMTAsIFwibWFza0JvcmRlck91dHNldFwiOiAxMCwgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IDEwLCBcIm1hc2tCb3JkZXJcIjogMTAsIFwibWFza1R5cGVcIjogMTAsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiAxMCwgXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjogMTAsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IDEwLCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogMTAsIFwic2hhcGVJbWFnZVRocmVzaG9sZFwiOiAxMCwgXCJzaGFwZUltYWdlTWFyZ2luXCI6IDEwLCBcInNoYXBlSW1hZ2VPdXRzaWRlXCI6IDEwLCBcImZpbHRlclwiOiA5LCBcImh5cGhlbnNcIjogMTAsIFwiZmxvd0ludG9cIjogMTAsIFwiZmxvd0Zyb21cIjogMTAsIFwiYnJlYWtCZWZvcmVcIjogOCwgXCJicmVha0FmdGVyXCI6IDgsIFwiYnJlYWtJbnNpZGVcIjogOCwgXCJyZWdpb25GcmFnbWVudFwiOiAxMCwgXCJjb2x1bW5Db3VudFwiOiA4LCBcImNvbHVtbkZpbGxcIjogOCwgXCJjb2x1bW5HYXBcIjogOCwgXCJjb2x1bW5SdWxlXCI6IDgsIFwiY29sdW1uUnVsZUNvbG9yXCI6IDgsIFwiY29sdW1uUnVsZVN0eWxlXCI6IDgsIFwiY29sdW1uUnVsZVdpZHRoXCI6IDgsIFwiY29sdW1uc1wiOiA4LCBcImNvbHVtblNwYW5cIjogOCwgXCJjb2x1bW5XaWR0aFwiOiA4IH0sIFwiZmlyZWZveFwiOiB7IFwiYXBwZWFyYW5jZVwiOiA1MSwgXCJ1c2VyU2VsZWN0XCI6IDUxLCBcImJveFNpemluZ1wiOiAyOCwgXCJ0ZXh0QWxpZ25MYXN0XCI6IDQ4LCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogMzUsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IDM1LCBcInRleHREZWNvcmF0aW9uTGluZVwiOiAzNSwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IDM1LCBcInRhYlNpemVcIjogNTEsIFwiaHlwaGVuc1wiOiA0MiwgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IDMzLCBcImJyZWFrQWZ0ZXJcIjogNTEsIFwiYnJlYWtCZWZvcmVcIjogNTEsIFwiYnJlYWtJbnNpZGVcIjogNTEsIFwiY29sdW1uQ291bnRcIjogNTEsIFwiY29sdW1uRmlsbFwiOiA1MSwgXCJjb2x1bW5HYXBcIjogNTEsIFwiY29sdW1uUnVsZVwiOiA1MSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogNTEsIFwiY29sdW1uUnVsZVN0eWxlXCI6IDUxLCBcImNvbHVtblJ1bGVXaWR0aFwiOiA1MSwgXCJjb2x1bW5zXCI6IDUxLCBcImNvbHVtblNwYW5cIjogNTEsIFwiY29sdW1uV2lkdGhcIjogNTEgfSwgXCJvcGVyYVwiOiB7IFwiZmxleFwiOiAxNiwgXCJmbGV4QmFzaXNcIjogMTYsIFwiZmxleERpcmVjdGlvblwiOiAxNiwgXCJmbGV4R3Jvd1wiOiAxNiwgXCJmbGV4Rmxvd1wiOiAxNiwgXCJmbGV4U2hyaW5rXCI6IDE2LCBcImZsZXhXcmFwXCI6IDE2LCBcImFsaWduQ29udGVudFwiOiAxNiwgXCJhbGlnbkl0ZW1zXCI6IDE2LCBcImFsaWduU2VsZlwiOiAxNiwgXCJqdXN0aWZ5Q29udGVudFwiOiAxNiwgXCJvcmRlclwiOiAxNiwgXCJ0cmFuc2Zvcm1cIjogMjIsIFwidHJhbnNmb3JtT3JpZ2luXCI6IDIyLCBcInRyYW5zZm9ybU9yaWdpblhcIjogMjIsIFwidHJhbnNmb3JtT3JpZ2luWVwiOiAyMiwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogMjIsIFwicGVyc3BlY3RpdmVcIjogMjIsIFwicGVyc3BlY3RpdmVPcmlnaW5cIjogMjIsIFwidHJhbnNmb3JtU3R5bGVcIjogMjIsIFwidHJhbnNmb3JtT3JpZ2luWlwiOiAyMiwgXCJhbmltYXRpb25cIjogMjksIFwiYW5pbWF0aW9uRGVsYXlcIjogMjksIFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6IDI5LCBcImFuaW1hdGlvbkZpbGxNb2RlXCI6IDI5LCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDI5LCBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IDI5LCBcImFuaW1hdGlvbk5hbWVcIjogMjksIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IDI5LCBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IDI5LCBcImFwcGVhcmFuY2VcIjogNDEsIFwidXNlclNlbGVjdFwiOiA0MSwgXCJmb250S2VybmluZ1wiOiAxOSwgXCJ0ZXh0RW1waGFzaXNQb3NpdGlvblwiOiA0MSwgXCJ0ZXh0RW1waGFzaXNcIjogNDEsIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogNDEsIFwidGV4dEVtcGhhc2lzQ29sb3JcIjogNDEsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IDQxLCBcImNsaXBQYXRoXCI6IDQxLCBcIm1hc2tJbWFnZVwiOiA0MSwgXCJtYXNrTW9kZVwiOiA0MSwgXCJtYXNrUmVwZWF0XCI6IDQxLCBcIm1hc2tQb3NpdGlvblwiOiA0MSwgXCJtYXNrQ2xpcFwiOiA0MSwgXCJtYXNrT3JpZ2luXCI6IDQxLCBcIm1hc2tTaXplXCI6IDQxLCBcIm1hc2tDb21wb3NpdGVcIjogNDEsIFwibWFza1wiOiA0MSwgXCJtYXNrQm9yZGVyU291cmNlXCI6IDQxLCBcIm1hc2tCb3JkZXJNb2RlXCI6IDQxLCBcIm1hc2tCb3JkZXJTbGljZVwiOiA0MSwgXCJtYXNrQm9yZGVyV2lkdGhcIjogNDEsIFwibWFza0JvcmRlck91dHNldFwiOiA0MSwgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IDQxLCBcIm1hc2tCb3JkZXJcIjogNDEsIFwibWFza1R5cGVcIjogNDEsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiA0MSwgXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjogNDEsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IDQxLCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogNDEsIFwiZmlsdGVyXCI6IDM5LCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogMzQsIFwiYnJlYWtBZnRlclwiOiAzNiwgXCJicmVha0JlZm9yZVwiOiAzNiwgXCJicmVha0luc2lkZVwiOiAzNiwgXCJjb2x1bW5Db3VudFwiOiAzNiwgXCJjb2x1bW5GaWxsXCI6IDM2LCBcImNvbHVtbkdhcFwiOiAzNiwgXCJjb2x1bW5SdWxlXCI6IDM2LCBcImNvbHVtblJ1bGVDb2xvclwiOiAzNiwgXCJjb2x1bW5SdWxlU3R5bGVcIjogMzYsIFwiY29sdW1uUnVsZVdpZHRoXCI6IDM2LCBcImNvbHVtbnNcIjogMzYsIFwiY29sdW1uU3BhblwiOiAzNiwgXCJjb2x1bW5XaWR0aFwiOiAzNiB9LCBcImllXCI6IHsgXCJmbGV4XCI6IDEwLCBcImZsZXhEaXJlY3Rpb25cIjogMTAsIFwiZmxleEZsb3dcIjogMTAsIFwiZmxleFdyYXBcIjogMTAsIFwidHJhbnNmb3JtXCI6IDksIFwidHJhbnNmb3JtT3JpZ2luXCI6IDksIFwidHJhbnNmb3JtT3JpZ2luWFwiOiA5LCBcInRyYW5zZm9ybU9yaWdpbllcIjogOSwgXCJ1c2VyU2VsZWN0XCI6IDExLCBcIndyYXBGbG93XCI6IDExLCBcIndyYXBUaHJvdWdoXCI6IDExLCBcIndyYXBNYXJnaW5cIjogMTEsIFwic2Nyb2xsU25hcFR5cGVcIjogMTEsIFwic2Nyb2xsU25hcFBvaW50c1hcIjogMTEsIFwic2Nyb2xsU25hcFBvaW50c1lcIjogMTEsIFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCI6IDExLCBcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6IDExLCBcInRvdWNoQWN0aW9uXCI6IDEwLCBcImh5cGhlbnNcIjogMTEsIFwiZmxvd0ludG9cIjogMTEsIFwiZmxvd0Zyb21cIjogMTEsIFwiYnJlYWtCZWZvcmVcIjogMTEsIFwiYnJlYWtBZnRlclwiOiAxMSwgXCJicmVha0luc2lkZVwiOiAxMSwgXCJyZWdpb25GcmFnbWVudFwiOiAxMSwgXCJncmlkVGVtcGxhdGVDb2x1bW5zXCI6IDExLCBcImdyaWRUZW1wbGF0ZVJvd3NcIjogMTEsIFwiZ3JpZFRlbXBsYXRlQXJlYXNcIjogMTEsIFwiZ3JpZFRlbXBsYXRlXCI6IDExLCBcImdyaWRBdXRvQ29sdW1uc1wiOiAxMSwgXCJncmlkQXV0b1Jvd3NcIjogMTEsIFwiZ3JpZEF1dG9GbG93XCI6IDExLCBcImdyaWRcIjogMTEsIFwiZ3JpZFJvd1N0YXJ0XCI6IDExLCBcImdyaWRDb2x1bW5TdGFydFwiOiAxMSwgXCJncmlkUm93RW5kXCI6IDExLCBcImdyaWRSb3dcIjogMTEsIFwiZ3JpZENvbHVtblwiOiAxMSwgXCJncmlkQ29sdW1uRW5kXCI6IDExLCBcImdyaWRDb2x1bW5HYXBcIjogMTEsIFwiZ3JpZFJvd0dhcFwiOiAxMSwgXCJncmlkQXJlYVwiOiAxMSwgXCJncmlkR2FwXCI6IDExLCBcInRleHRTaXplQWRqdXN0XCI6IDExIH0sIFwiZWRnZVwiOiB7IFwidXNlclNlbGVjdFwiOiAxNCwgXCJ3cmFwRmxvd1wiOiAxNCwgXCJ3cmFwVGhyb3VnaFwiOiAxNCwgXCJ3cmFwTWFyZ2luXCI6IDE0LCBcInNjcm9sbFNuYXBUeXBlXCI6IDE0LCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IDE0LCBcInNjcm9sbFNuYXBQb2ludHNZXCI6IDE0LCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiAxNCwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiAxNCwgXCJoeXBoZW5zXCI6IDE0LCBcImZsb3dJbnRvXCI6IDE0LCBcImZsb3dGcm9tXCI6IDE0LCBcImJyZWFrQmVmb3JlXCI6IDE0LCBcImJyZWFrQWZ0ZXJcIjogMTQsIFwiYnJlYWtJbnNpZGVcIjogMTQsIFwicmVnaW9uRnJhZ21lbnRcIjogMTQsIFwiZ3JpZFRlbXBsYXRlQ29sdW1uc1wiOiAxNCwgXCJncmlkVGVtcGxhdGVSb3dzXCI6IDE0LCBcImdyaWRUZW1wbGF0ZUFyZWFzXCI6IDE0LCBcImdyaWRUZW1wbGF0ZVwiOiAxNCwgXCJncmlkQXV0b0NvbHVtbnNcIjogMTQsIFwiZ3JpZEF1dG9Sb3dzXCI6IDE0LCBcImdyaWRBdXRvRmxvd1wiOiAxNCwgXCJncmlkXCI6IDE0LCBcImdyaWRSb3dTdGFydFwiOiAxNCwgXCJncmlkQ29sdW1uU3RhcnRcIjogMTQsIFwiZ3JpZFJvd0VuZFwiOiAxNCwgXCJncmlkUm93XCI6IDE0LCBcImdyaWRDb2x1bW5cIjogMTQsIFwiZ3JpZENvbHVtbkVuZFwiOiAxNCwgXCJncmlkQ29sdW1uR2FwXCI6IDE0LCBcImdyaWRSb3dHYXBcIjogMTQsIFwiZ3JpZEFyZWFcIjogMTQsIFwiZ3JpZEdhcFwiOiAxNCB9LCBcImlvc19zYWZcIjogeyBcImZsZXhcIjogOC4xLCBcImZsZXhCYXNpc1wiOiA4LjEsIFwiZmxleERpcmVjdGlvblwiOiA4LjEsIFwiZmxleEdyb3dcIjogOC4xLCBcImZsZXhGbG93XCI6IDguMSwgXCJmbGV4U2hyaW5rXCI6IDguMSwgXCJmbGV4V3JhcFwiOiA4LjEsIFwiYWxpZ25Db250ZW50XCI6IDguMSwgXCJhbGlnbkl0ZW1zXCI6IDguMSwgXCJhbGlnblNlbGZcIjogOC4xLCBcImp1c3RpZnlDb250ZW50XCI6IDguMSwgXCJvcmRlclwiOiA4LjEsIFwidHJhbnNpdGlvblwiOiA2LCBcInRyYW5zaXRpb25EZWxheVwiOiA2LCBcInRyYW5zaXRpb25EdXJhdGlvblwiOiA2LCBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiA2LCBcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOiA2LCBcInRyYW5zZm9ybVwiOiA4LjEsIFwidHJhbnNmb3JtT3JpZ2luXCI6IDguMSwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IDguMSwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IDguMSwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogOC4xLCBcInBlcnNwZWN0aXZlXCI6IDguMSwgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiA4LjEsIFwidHJhbnNmb3JtU3R5bGVcIjogOC4xLCBcInRyYW5zZm9ybU9yaWdpblpcIjogOC4xLCBcImFuaW1hdGlvblwiOiA4LjEsIFwiYW5pbWF0aW9uRGVsYXlcIjogOC4xLCBcImFuaW1hdGlvbkRpcmVjdGlvblwiOiA4LjEsIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogOC4xLCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDguMSwgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiA4LjEsIFwiYW5pbWF0aW9uTmFtZVwiOiA4LjEsIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IDguMSwgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiA4LjEsIFwiYXBwZWFyYW5jZVwiOiA5LjMsIFwidXNlclNlbGVjdFwiOiA5LjMsIFwiYmFja2Ryb3BGaWx0ZXJcIjogOS4zLCBcImZvbnRLZXJuaW5nXCI6IDkuMywgXCJzY3JvbGxTbmFwVHlwZVwiOiA5LjMsIFwic2Nyb2xsU25hcFBvaW50c1hcIjogOS4zLCBcInNjcm9sbFNuYXBQb2ludHNZXCI6IDkuMywgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogOS4zLCBcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6IDkuMywgXCJib3hEZWNvcmF0aW9uQnJlYWtcIjogOS4zLCBcImNsaXBQYXRoXCI6IDkuMywgXCJtYXNrSW1hZ2VcIjogOS4zLCBcIm1hc2tNb2RlXCI6IDkuMywgXCJtYXNrUmVwZWF0XCI6IDkuMywgXCJtYXNrUG9zaXRpb25cIjogOS4zLCBcIm1hc2tDbGlwXCI6IDkuMywgXCJtYXNrT3JpZ2luXCI6IDkuMywgXCJtYXNrU2l6ZVwiOiA5LjMsIFwibWFza0NvbXBvc2l0ZVwiOiA5LjMsIFwibWFza1wiOiA5LjMsIFwibWFza0JvcmRlclNvdXJjZVwiOiA5LjMsIFwibWFza0JvcmRlck1vZGVcIjogOS4zLCBcIm1hc2tCb3JkZXJTbGljZVwiOiA5LjMsIFwibWFza0JvcmRlcldpZHRoXCI6IDkuMywgXCJtYXNrQm9yZGVyT3V0c2V0XCI6IDkuMywgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IDkuMywgXCJtYXNrQm9yZGVyXCI6IDkuMywgXCJtYXNrVHlwZVwiOiA5LjMsIFwidGV4dFNpemVBZGp1c3RcIjogOS4zLCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogOS4zLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiA5LjMsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IDkuMywgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IDkuMywgXCJzaGFwZUltYWdlVGhyZXNob2xkXCI6IDkuMywgXCJzaGFwZUltYWdlTWFyZ2luXCI6IDkuMywgXCJzaGFwZUltYWdlT3V0c2lkZVwiOiA5LjMsIFwiZmlsdGVyXCI6IDksIFwiaHlwaGVuc1wiOiA5LjMsIFwiZmxvd0ludG9cIjogOS4zLCBcImZsb3dGcm9tXCI6IDkuMywgXCJicmVha0JlZm9yZVwiOiA4LjEsIFwiYnJlYWtBZnRlclwiOiA4LjEsIFwiYnJlYWtJbnNpZGVcIjogOC4xLCBcInJlZ2lvbkZyYWdtZW50XCI6IDkuMywgXCJjb2x1bW5Db3VudFwiOiA4LjEsIFwiY29sdW1uRmlsbFwiOiA4LjEsIFwiY29sdW1uR2FwXCI6IDguMSwgXCJjb2x1bW5SdWxlXCI6IDguMSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogOC4xLCBcImNvbHVtblJ1bGVTdHlsZVwiOiA4LjEsIFwiY29sdW1uUnVsZVdpZHRoXCI6IDguMSwgXCJjb2x1bW5zXCI6IDguMSwgXCJjb2x1bW5TcGFuXCI6IDguMSwgXCJjb2x1bW5XaWR0aFwiOiA4LjEgfSwgXCJhbmRyb2lkXCI6IHsgXCJmbGV4XCI6IDQuMiwgXCJmbGV4QmFzaXNcIjogNC4yLCBcImZsZXhEaXJlY3Rpb25cIjogNC4yLCBcImZsZXhHcm93XCI6IDQuMiwgXCJmbGV4Rmxvd1wiOiA0LjIsIFwiZmxleFNocmlua1wiOiA0LjIsIFwiZmxleFdyYXBcIjogNC4yLCBcImFsaWduQ29udGVudFwiOiA0LjIsIFwiYWxpZ25JdGVtc1wiOiA0LjIsIFwiYWxpZ25TZWxmXCI6IDQuMiwgXCJqdXN0aWZ5Q29udGVudFwiOiA0LjIsIFwib3JkZXJcIjogNC4yLCBcInRyYW5zaXRpb25cIjogNC4yLCBcInRyYW5zaXRpb25EZWxheVwiOiA0LjIsIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IDQuMiwgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogNC4yLCBcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOiA0LjIsIFwidHJhbnNmb3JtXCI6IDQuNCwgXCJ0cmFuc2Zvcm1PcmlnaW5cIjogNC40LCBcInRyYW5zZm9ybU9yaWdpblhcIjogNC40LCBcInRyYW5zZm9ybU9yaWdpbllcIjogNC40LCBcImJhY2tmYWNlVmlzaWJpbGl0eVwiOiA0LjQsIFwicGVyc3BlY3RpdmVcIjogNC40LCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IDQuNCwgXCJ0cmFuc2Zvcm1TdHlsZVwiOiA0LjQsIFwidHJhbnNmb3JtT3JpZ2luWlwiOiA0LjQsIFwiYW5pbWF0aW9uXCI6IDQuNCwgXCJhbmltYXRpb25EZWxheVwiOiA0LjQsIFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6IDQuNCwgXCJhbmltYXRpb25GaWxsTW9kZVwiOiA0LjQsIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogNC40LCBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IDQuNCwgXCJhbmltYXRpb25OYW1lXCI6IDQuNCwgXCJhbmltYXRpb25QbGF5U3RhdGVcIjogNC40LCBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IDQuNCwgXCJhcHBlYXJhbmNlXCI6IDUxLCBcInVzZXJTZWxlY3RcIjogNTEsIFwiZm9udEtlcm5pbmdcIjogNC40LCBcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6IDUxLCBcInRleHRFbXBoYXNpc1wiOiA1MSwgXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOiA1MSwgXCJ0ZXh0RW1waGFzaXNDb2xvclwiOiA1MSwgXCJib3hEZWNvcmF0aW9uQnJlYWtcIjogNTEsIFwiY2xpcFBhdGhcIjogNTEsIFwibWFza0ltYWdlXCI6IDUxLCBcIm1hc2tNb2RlXCI6IDUxLCBcIm1hc2tSZXBlYXRcIjogNTEsIFwibWFza1Bvc2l0aW9uXCI6IDUxLCBcIm1hc2tDbGlwXCI6IDUxLCBcIm1hc2tPcmlnaW5cIjogNTEsIFwibWFza1NpemVcIjogNTEsIFwibWFza0NvbXBvc2l0ZVwiOiA1MSwgXCJtYXNrXCI6IDUxLCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogNTEsIFwibWFza0JvcmRlck1vZGVcIjogNTEsIFwibWFza0JvcmRlclNsaWNlXCI6IDUxLCBcIm1hc2tCb3JkZXJXaWR0aFwiOiA1MSwgXCJtYXNrQm9yZGVyT3V0c2V0XCI6IDUxLCBcIm1hc2tCb3JkZXJSZXBlYXRcIjogNTEsIFwibWFza0JvcmRlclwiOiA1MSwgXCJtYXNrVHlwZVwiOiA1MSwgXCJmaWx0ZXJcIjogNTEsIFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOiA0LjQsIFwiYnJlYWtBZnRlclwiOiA1MSwgXCJicmVha0JlZm9yZVwiOiA1MSwgXCJicmVha0luc2lkZVwiOiA1MSwgXCJjb2x1bW5Db3VudFwiOiA1MSwgXCJjb2x1bW5GaWxsXCI6IDUxLCBcImNvbHVtbkdhcFwiOiA1MSwgXCJjb2x1bW5SdWxlXCI6IDUxLCBcImNvbHVtblJ1bGVDb2xvclwiOiA1MSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogNTEsIFwiY29sdW1uUnVsZVdpZHRoXCI6IDUxLCBcImNvbHVtbnNcIjogNTEsIFwiY29sdW1uU3BhblwiOiA1MSwgXCJjb2x1bW5XaWR0aFwiOiA1MSB9LCBcImFuZF9jaHJcIjogeyBcImFwcGVhcmFuY2VcIjogNTEsIFwidXNlclNlbGVjdFwiOiA1MSwgXCJ0ZXh0RW1waGFzaXNQb3NpdGlvblwiOiA1MSwgXCJ0ZXh0RW1waGFzaXNcIjogNTEsIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogNTEsIFwidGV4dEVtcGhhc2lzQ29sb3JcIjogNTEsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IDUxLCBcImNsaXBQYXRoXCI6IDUxLCBcIm1hc2tJbWFnZVwiOiA1MSwgXCJtYXNrTW9kZVwiOiA1MSwgXCJtYXNrUmVwZWF0XCI6IDUxLCBcIm1hc2tQb3NpdGlvblwiOiA1MSwgXCJtYXNrQ2xpcFwiOiA1MSwgXCJtYXNrT3JpZ2luXCI6IDUxLCBcIm1hc2tTaXplXCI6IDUxLCBcIm1hc2tDb21wb3NpdGVcIjogNTEsIFwibWFza1wiOiA1MSwgXCJtYXNrQm9yZGVyU291cmNlXCI6IDUxLCBcIm1hc2tCb3JkZXJNb2RlXCI6IDUxLCBcIm1hc2tCb3JkZXJTbGljZVwiOiA1MSwgXCJtYXNrQm9yZGVyV2lkdGhcIjogNTEsIFwibWFza0JvcmRlck91dHNldFwiOiA1MSwgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IDUxLCBcIm1hc2tCb3JkZXJcIjogNTEsIFwibWFza1R5cGVcIjogNTEsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiA1MSwgXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjogNTEsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IDUxLCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogNTEsIFwiZmlsdGVyXCI6IDUxIH0sIFwiYW5kX3VjXCI6IHsgXCJmbGV4XCI6IDkuOSwgXCJmbGV4QmFzaXNcIjogOS45LCBcImZsZXhEaXJlY3Rpb25cIjogOS45LCBcImZsZXhHcm93XCI6IDkuOSwgXCJmbGV4Rmxvd1wiOiA5LjksIFwiZmxleFNocmlua1wiOiA5LjksIFwiZmxleFdyYXBcIjogOS45LCBcImFsaWduQ29udGVudFwiOiA5LjksIFwiYWxpZ25JdGVtc1wiOiA5LjksIFwiYWxpZ25TZWxmXCI6IDkuOSwgXCJqdXN0aWZ5Q29udGVudFwiOiA5LjksIFwib3JkZXJcIjogOS45LCBcInRyYW5zaXRpb25cIjogOS45LCBcInRyYW5zaXRpb25EZWxheVwiOiA5LjksIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IDkuOSwgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogOS45LCBcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOiA5LjksIFwidHJhbnNmb3JtXCI6IDkuOSwgXCJ0cmFuc2Zvcm1PcmlnaW5cIjogOS45LCBcInRyYW5zZm9ybU9yaWdpblhcIjogOS45LCBcInRyYW5zZm9ybU9yaWdpbllcIjogOS45LCBcImJhY2tmYWNlVmlzaWJpbGl0eVwiOiA5LjksIFwicGVyc3BlY3RpdmVcIjogOS45LCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IDkuOSwgXCJ0cmFuc2Zvcm1TdHlsZVwiOiA5LjksIFwidHJhbnNmb3JtT3JpZ2luWlwiOiA5LjksIFwiYW5pbWF0aW9uXCI6IDkuOSwgXCJhbmltYXRpb25EZWxheVwiOiA5LjksIFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6IDkuOSwgXCJhbmltYXRpb25GaWxsTW9kZVwiOiA5LjksIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogOS45LCBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IDkuOSwgXCJhbmltYXRpb25OYW1lXCI6IDkuOSwgXCJhbmltYXRpb25QbGF5U3RhdGVcIjogOS45LCBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IDkuOSwgXCJhcHBlYXJhbmNlXCI6IDkuOSwgXCJ1c2VyU2VsZWN0XCI6IDkuOSwgXCJmb250S2VybmluZ1wiOiA5LjksIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogOS45LCBcInRleHRFbXBoYXNpc1wiOiA5LjksIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogOS45LCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IDkuOSwgXCJtYXNrSW1hZ2VcIjogOS45LCBcIm1hc2tNb2RlXCI6IDkuOSwgXCJtYXNrUmVwZWF0XCI6IDkuOSwgXCJtYXNrUG9zaXRpb25cIjogOS45LCBcIm1hc2tDbGlwXCI6IDkuOSwgXCJtYXNrT3JpZ2luXCI6IDkuOSwgXCJtYXNrU2l6ZVwiOiA5LjksIFwibWFza0NvbXBvc2l0ZVwiOiA5LjksIFwibWFza1wiOiA5LjksIFwibWFza0JvcmRlclNvdXJjZVwiOiA5LjksIFwibWFza0JvcmRlck1vZGVcIjogOS45LCBcIm1hc2tCb3JkZXJTbGljZVwiOiA5LjksIFwibWFza0JvcmRlcldpZHRoXCI6IDkuOSwgXCJtYXNrQm9yZGVyT3V0c2V0XCI6IDkuOSwgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IDkuOSwgXCJtYXNrQm9yZGVyXCI6IDkuOSwgXCJtYXNrVHlwZVwiOiA5LjksIFwidGV4dFNpemVBZGp1c3RcIjogOS45LCBcImZpbHRlclwiOiA5LjksIFwiaHlwaGVuc1wiOiA5LjksIFwiZmxvd0ludG9cIjogOS45LCBcImZsb3dGcm9tXCI6IDkuOSwgXCJicmVha0JlZm9yZVwiOiA5LjksIFwiYnJlYWtBZnRlclwiOiA5LjksIFwiYnJlYWtJbnNpZGVcIjogOS45LCBcInJlZ2lvbkZyYWdtZW50XCI6IDkuOSwgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IDkuOSwgXCJjb2x1bW5Db3VudFwiOiA5LjksIFwiY29sdW1uRmlsbFwiOiA5LjksIFwiY29sdW1uR2FwXCI6IDkuOSwgXCJjb2x1bW5SdWxlXCI6IDkuOSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogOS45LCBcImNvbHVtblJ1bGVTdHlsZVwiOiA5LjksIFwiY29sdW1uUnVsZVdpZHRoXCI6IDkuOSwgXCJjb2x1bW5zXCI6IDkuOSwgXCJjb2x1bW5TcGFuXCI6IDkuOSwgXCJjb2x1bW5XaWR0aFwiOiA5LjkgfSwgXCJvcF9taW5pXCI6IHt9IH07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNhbGM7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9qb2luUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2pvaW5QcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pvaW5QcmVmaXhlZFZhbHVlKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gY2FsYyhwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkgJiYgdmFsdWUuaW5kZXhPZignY2FsYygnKSA+IC0xKSB7XG4gICAgcmV0dXJuICgwLCBfam9pblByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHByb3BlcnR5LCB2YWx1ZSwgZnVuY3Rpb24gKHByZWZpeCwgdmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9jYWxjXFwoL2csIHByZWZpeCArICdjYWxjKCcpO1xuICAgIH0pO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjdXJzb3I7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9qb2luUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2pvaW5QcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pvaW5QcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHZhbHVlcyA9IHtcbiAgJ3pvb20taW4nOiB0cnVlLFxuICAnem9vbS1vdXQnOiB0cnVlLFxuICBncmFiOiB0cnVlLFxuICBncmFiYmluZzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gY3Vyc29yKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdjdXJzb3InICYmIHZhbHVlc1t2YWx1ZV0pIHtcbiAgICByZXR1cm4gKDAsIF9qb2luUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkocHJvcGVydHksIHZhbHVlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmxleDtcbnZhciB2YWx1ZXMgPSB7IGZsZXg6IHRydWUsICdpbmxpbmUtZmxleCc6IHRydWUgfTtcblxuZnVuY3Rpb24gZmxleChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnR5ID09PSAnZGlzcGxheScgJiYgdmFsdWVzW3ZhbHVlXSkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXNwbGF5OiBbJy13ZWJraXQtYm94JywgJy1tb3otYm94JywgJy1tcy0nICsgdmFsdWUgKyAnYm94JywgJy13ZWJraXQtJyArIHZhbHVlLCB2YWx1ZV1cbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4Ym94SUU7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBhbHRlcm5hdGl2ZVZhbHVlcyA9IHtcbiAgJ3NwYWNlLWFyb3VuZCc6ICdkaXN0cmlidXRlJyxcbiAgJ3NwYWNlLWJldHdlZW4nOiAnanVzdGlmeScsXG4gICdmbGV4LXN0YXJ0JzogJ3N0YXJ0JyxcbiAgJ2ZsZXgtZW5kJzogJ2VuZCdcbn07XG52YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgYWxpZ25Db250ZW50OiAnbXNGbGV4TGluZVBhY2snLFxuICBhbGlnblNlbGY6ICdtc0ZsZXhJdGVtQWxpZ24nLFxuICBhbGlnbkl0ZW1zOiAnbXNGbGV4QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ21zRmxleFBhY2snLFxuICBvcmRlcjogJ21zRmxleE9yZGVyJyxcbiAgZmxleEdyb3c6ICdtc0ZsZXhQb3NpdGl2ZScsXG4gIGZsZXhTaHJpbms6ICdtc0ZsZXhOZWdhdGl2ZScsXG4gIGZsZXhCYXNpczogJ21zUHJlZmVycmVkU2l6ZSdcbn07XG5cbmZ1bmN0aW9uIGZsZXhib3hJRShwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldKSB7XG4gICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0sIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZsZXhib3hPbGQ7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBhbHRlcm5hdGl2ZVZhbHVlcyA9IHtcbiAgJ3NwYWNlLWFyb3VuZCc6ICdqdXN0aWZ5JyxcbiAgJ3NwYWNlLWJldHdlZW4nOiAnanVzdGlmeScsXG4gICdmbGV4LXN0YXJ0JzogJ3N0YXJ0JyxcbiAgJ2ZsZXgtZW5kJzogJ2VuZCcsXG4gICd3cmFwLXJldmVyc2UnOiAnbXVsdGlwbGUnLFxuICB3cmFwOiAnbXVsdGlwbGUnXG59O1xuXG52YXIgYWx0ZXJuYXRpdmVQcm9wcyA9IHtcbiAgYWxpZ25JdGVtczogJ1dlYmtpdEJveEFsaWduJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdXZWJraXRCb3hQYWNrJyxcbiAgZmxleFdyYXA6ICdXZWJraXRCb3hMaW5lcydcbn07XG5cbmZ1bmN0aW9uIGZsZXhib3hPbGQocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2ZsZXhEaXJlY3Rpb24nICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgV2Via2l0Qm94T3JpZW50OiB2YWx1ZS5pbmRleE9mKCdjb2x1bW4nKSA+IC0xID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyxcbiAgICAgIFdlYmtpdEJveERpcmVjdGlvbjogdmFsdWUuaW5kZXhPZigncmV2ZXJzZScpID4gLTEgPyAncmV2ZXJzZScgOiAnbm9ybWFsJ1xuICAgIH07XG4gIH1cbiAgaWYgKGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldKSB7XG4gICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0sIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSB8fCB2YWx1ZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGdyYWRpZW50O1xuXG52YXIgX2pvaW5QcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvam9pblByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9qb2luUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qb2luUHJlZml4ZWRWYWx1ZSk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvaXNQcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfaXNQcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzUHJlZml4ZWRWYWx1ZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB2YWx1ZXMgPSAvbGluZWFyLWdyYWRpZW50fHJhZGlhbC1ncmFkaWVudHxyZXBlYXRpbmctbGluZWFyLWdyYWRpZW50fHJlcGVhdGluZy1yYWRpYWwtZ3JhZGllbnQvO1xuXG5mdW5jdGlvbiBncmFkaWVudChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgISgwLCBfaXNQcmVmaXhlZFZhbHVlMi5kZWZhdWx0KSh2YWx1ZSkgJiYgdmFsdWUubWF0Y2godmFsdWVzKSAhPT0gbnVsbCkge1xuICAgIHJldHVybiAoMCwgX2pvaW5QcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShwcm9wZXJ0eSwgdmFsdWUpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzaXppbmc7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9qb2luUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2pvaW5QcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pvaW5QcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIG1heEhlaWdodDogdHJ1ZSxcbiAgbWF4V2lkdGg6IHRydWUsXG4gIHdpZHRoOiB0cnVlLFxuICBoZWlnaHQ6IHRydWUsXG4gIGNvbHVtbldpZHRoOiB0cnVlLFxuICBtaW5XaWR0aDogdHJ1ZSxcbiAgbWluSGVpZ2h0OiB0cnVlXG59O1xudmFyIHZhbHVlcyA9IHtcbiAgJ21pbi1jb250ZW50JzogdHJ1ZSxcbiAgJ21heC1jb250ZW50JzogdHJ1ZSxcbiAgJ2ZpbGwtYXZhaWxhYmxlJzogdHJ1ZSxcbiAgJ2ZpdC1jb250ZW50JzogdHJ1ZSxcbiAgJ2NvbnRhaW4tZmxvYXRzJzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gc2l6aW5nKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydGllc1twcm9wZXJ0eV0gJiYgdmFsdWVzW3ZhbHVlXSkge1xuICAgIHJldHVybiAoMCwgX2pvaW5QcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShwcm9wZXJ0eSwgdmFsdWUpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2l0aW9uO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2h5cGhlbmF0ZS1zdHlsZS1uYW1lJyk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVN0eWxlTmFtZSk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemVTdHJpbmcpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG52YXIgX3ByZWZpeFByb3BzID0gcmVxdWlyZSgnLi4vcHJlZml4UHJvcHMnKTtcblxudmFyIF9wcmVmaXhQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhQcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBwcm9wZXJ0aWVzID0ge1xuICB0cmFuc2l0aW9uOiB0cnVlLFxuICB0cmFuc2l0aW9uUHJvcGVydHk6IHRydWUsXG4gIFdlYmtpdFRyYW5zaXRpb246IHRydWUsXG4gIFdlYmtpdFRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gdHJhbnNpdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgLy8gYWxzbyBjaGVjayBmb3IgYWxyZWFkeSBwcmVmaXhlZCB0cmFuc2l0aW9uc1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBwcm9wZXJ0aWVzW3Byb3BlcnR5XSkge1xuICAgIHZhciBfcmVmMjtcblxuICAgIHZhciBvdXRwdXRWYWx1ZSA9IHByZWZpeFZhbHVlKHZhbHVlKTtcbiAgICB2YXIgd2Via2l0T3V0cHV0ID0gb3V0cHV0VmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZykuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLm1hdGNoKC8tbW96LXwtbXMtLykgPT09IG51bGw7XG4gICAgfSkuam9pbignLCcpO1xuXG4gICAgLy8gaWYgdGhlIHByb3BlcnR5IGlzIGFscmVhZHkgcHJlZml4ZWRcbiAgICBpZiAocHJvcGVydHkuaW5kZXhPZignV2Via2l0JykgPiAtMSkge1xuICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIHdlYmtpdE91dHB1dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWYyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgJ1dlYmtpdCcgKyAoMCwgX2NhcGl0YWxpemVTdHJpbmcyLmRlZmF1bHQpKHByb3BlcnR5KSwgd2Via2l0T3V0cHV0KSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCBwcm9wZXJ0eSwgb3V0cHV0VmFsdWUpLCBfcmVmMjtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmaXhWYWx1ZSh2YWx1ZSkge1xuICBpZiAoKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8vIG9ubHkgc3BsaXQgbXVsdGkgdmFsdWVzLCBub3QgY3ViaWMgYmV6aWVyc1xuICB2YXIgbXVsdGlwbGVWYWx1ZXMgPSB2YWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKTtcblxuICAvLyBpdGVyYXRlIGVhY2ggc2luZ2xlIHZhbHVlIGFuZCBjaGVjayBmb3IgdHJhbnNpdGlvbmVkIHByb3BlcnRpZXNcbiAgLy8gdGhhdCBuZWVkIHRvIGJlIHByZWZpeGVkIGFzIHdlbGxcbiAgbXVsdGlwbGVWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgIG11bHRpcGxlVmFsdWVzW2luZGV4XSA9IE9iamVjdC5rZXlzKF9wcmVmaXhQcm9wczIuZGVmYXVsdCkucmVkdWNlKGZ1bmN0aW9uIChvdXQsIHByZWZpeCkge1xuICAgICAgdmFyIGRhc2hDYXNlUHJlZml4ID0gJy0nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkgKyAnLSc7XG5cbiAgICAgIE9iamVjdC5rZXlzKF9wcmVmaXhQcm9wczIuZGVmYXVsdFtwcmVmaXhdKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHZhciBkYXNoQ2FzZVByb3BlcnR5ID0gKDAsIF9oeXBoZW5hdGVTdHlsZU5hbWUyLmRlZmF1bHQpKHByb3ApO1xuXG4gICAgICAgIGlmICh2YWwuaW5kZXhPZihkYXNoQ2FzZVByb3BlcnR5KSA+IC0xICYmIGRhc2hDYXNlUHJvcGVydHkgIT09ICdvcmRlcicpIHtcbiAgICAgICAgICAvLyBqb2luIGFsbCBwcmVmaXhlcyBhbmQgY3JlYXRlIGEgbmV3IHZhbHVlXG4gICAgICAgICAgb3V0ID0gdmFsLnJlcGxhY2UoZGFzaENhc2VQcm9wZXJ0eSwgZGFzaENhc2VQcmVmaXggKyBkYXNoQ2FzZVByb3BlcnR5KSArICcsJyArIG91dDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0sIHZhbCk7XG4gIH0pO1xuXG4gIHJldHVybiBtdWx0aXBsZVZhbHVlcy5qb2luKCcsJyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwcmVmaXhBbGw7XG5cbnZhciBfcHJlZml4UHJvcHMgPSByZXF1aXJlKCcuL3ByZWZpeFByb3BzJyk7XG5cbnZhciBfcHJlZml4UHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4UHJvcHMpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcgPSByZXF1aXJlKCcuLi91dGlscy9jYXBpdGFsaXplU3RyaW5nJyk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYXBpdGFsaXplU3RyaW5nKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9wbHVnaW5zL2NhbGMnKTtcblxudmFyIF9jYWxjMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhbGMpO1xuXG52YXIgX2N1cnNvciA9IHJlcXVpcmUoJy4vcGx1Z2lucy9jdXJzb3InKTtcblxudmFyIF9jdXJzb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3Vyc29yKTtcblxudmFyIF9mbGV4ID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXgnKTtcblxudmFyIF9mbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXgpO1xuXG52YXIgX3NpemluZyA9IHJlcXVpcmUoJy4vcGx1Z2lucy9zaXppbmcnKTtcblxudmFyIF9zaXppbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2l6aW5nKTtcblxudmFyIF9ncmFkaWVudCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9ncmFkaWVudCcpO1xuXG52YXIgX2dyYWRpZW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dyYWRpZW50KTtcblxudmFyIF90cmFuc2l0aW9uID0gcmVxdWlyZSgnLi9wbHVnaW5zL3RyYW5zaXRpb24nKTtcblxudmFyIF90cmFuc2l0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zaXRpb24pO1xuXG52YXIgX2ZsZXhib3hJRSA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Ym94SUUnKTtcblxudmFyIF9mbGV4Ym94SUUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxleGJveElFKTtcblxudmFyIF9mbGV4Ym94T2xkID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXhib3hPbGQnKTtcblxudmFyIF9mbGV4Ym94T2xkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZsZXhib3hPbGQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBzcGVjaWFsIGZsZXhib3ggc3BlY2lmaWNhdGlvbnNcblxuXG52YXIgcGx1Z2lucyA9IFtfY2FsYzIuZGVmYXVsdCwgX2N1cnNvcjIuZGVmYXVsdCwgX3NpemluZzIuZGVmYXVsdCwgX2dyYWRpZW50Mi5kZWZhdWx0LCBfdHJhbnNpdGlvbjIuZGVmYXVsdCwgX2ZsZXhib3hJRTIuZGVmYXVsdCwgX2ZsZXhib3hPbGQyLmRlZmF1bHQsIF9mbGV4Mi5kZWZhdWx0XTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgcHJlZml4ZWQgdmVyc2lvbiBvZiB0aGUgc3R5bGUgb2JqZWN0IHVzaW5nIGFsbCB2ZW5kb3IgcHJlZml4ZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZXMgLSBTdHlsZSBvYmplY3QgdGhhdCBnZXRzIHByZWZpeGVkIHByb3BlcnRpZXMgYWRkZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IC0gU3R5bGUgb2JqZWN0IHdpdGggcHJlZml4ZWQgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gKi9cbmZ1bmN0aW9uIHByZWZpeEFsbChzdHlsZXMpIHtcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlc1twcm9wZXJ0eV07XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgLy8gcmVjdXJzZSB0aHJvdWdoIG5lc3RlZCBzdHlsZSBvYmplY3RzXG4gICAgICBzdHlsZXNbcHJvcGVydHldID0gcHJlZml4QWxsKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT2JqZWN0LmtleXMoX3ByZWZpeFByb3BzMi5kZWZhdWx0KS5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBfcHJlZml4UHJvcHMyLmRlZmF1bHRbcHJlZml4XTtcbiAgICAgICAgLy8gYWRkIHByZWZpeGVzIGlmIG5lZWRlZFxuICAgICAgICBpZiAocHJvcGVydGllc1twcm9wZXJ0eV0pIHtcbiAgICAgICAgICBzdHlsZXNbcHJlZml4ICsgKDAsIF9jYXBpdGFsaXplU3RyaW5nMi5kZWZhdWx0KShwcm9wZXJ0eSldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgIFtdLmNvbmNhdChzdHlsZXNbcHJvcGVydHldKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIC8vIHJlc29sdmUgZXZlcnkgc3BlY2lhbCBwbHVnaW5zXG4gICAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICByZXR1cm4gYXNzaWduU3R5bGVzKHN0eWxlcywgcGx1Z2luKHByb3BlcnR5LCB2YWx1ZSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFzc2lnblN0eWxlcyhiYXNlKSB7XG4gIHZhciBleHRlbmQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICBPYmplY3Qua2V5cyhleHRlbmQpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgdmFyIGJhc2VWYWx1ZSA9IGJhc2VbcHJvcGVydHldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGJhc2VWYWx1ZSkpIHtcbiAgICAgIFtdLmNvbmNhdChleHRlbmRbcHJvcGVydHldKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgdmFsdWVJbmRleCA9IGJhc2VWYWx1ZS5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgaWYgKHZhbHVlSW5kZXggPiAtMSkge1xuICAgICAgICAgIGJhc2VbcHJvcGVydHldLnNwbGljZSh2YWx1ZUluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBiYXNlW3Byb3BlcnR5XS5wdXNoKHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlW3Byb3BlcnR5XSA9IGV4dGVuZFtwcm9wZXJ0eV07XG4gICAgfVxuICB9KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0geyBcIldlYmtpdFwiOiB7IFwidHJhbnNmb3JtXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpbllcIjogdHJ1ZSwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogdHJ1ZSwgXCJwZXJzcGVjdGl2ZVwiOiB0cnVlLCBcInBlcnNwZWN0aXZlT3JpZ2luXCI6IHRydWUsIFwidHJhbnNmb3JtU3R5bGVcIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6IHRydWUsIFwiYW5pbWF0aW9uXCI6IHRydWUsIFwiYW5pbWF0aW9uRGVsYXlcIjogdHJ1ZSwgXCJhbmltYXRpb25EaXJlY3Rpb25cIjogdHJ1ZSwgXCJhbmltYXRpb25GaWxsTW9kZVwiOiB0cnVlLCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IHRydWUsIFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogdHJ1ZSwgXCJhbmltYXRpb25OYW1lXCI6IHRydWUsIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IHRydWUsIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogdHJ1ZSwgXCJhcHBlYXJhbmNlXCI6IHRydWUsIFwidXNlclNlbGVjdFwiOiB0cnVlLCBcImZvbnRLZXJuaW5nXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNcIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOiB0cnVlLCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IHRydWUsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IHRydWUsIFwiY2xpcFBhdGhcIjogdHJ1ZSwgXCJtYXNrSW1hZ2VcIjogdHJ1ZSwgXCJtYXNrTW9kZVwiOiB0cnVlLCBcIm1hc2tSZXBlYXRcIjogdHJ1ZSwgXCJtYXNrUG9zaXRpb25cIjogdHJ1ZSwgXCJtYXNrQ2xpcFwiOiB0cnVlLCBcIm1hc2tPcmlnaW5cIjogdHJ1ZSwgXCJtYXNrU2l6ZVwiOiB0cnVlLCBcIm1hc2tDb21wb3NpdGVcIjogdHJ1ZSwgXCJtYXNrXCI6IHRydWUsIFwibWFza0JvcmRlclNvdXJjZVwiOiB0cnVlLCBcIm1hc2tCb3JkZXJNb2RlXCI6IHRydWUsIFwibWFza0JvcmRlclNsaWNlXCI6IHRydWUsIFwibWFza0JvcmRlcldpZHRoXCI6IHRydWUsIFwibWFza0JvcmRlck91dHNldFwiOiB0cnVlLCBcIm1hc2tCb3JkZXJSZXBlYXRcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyXCI6IHRydWUsIFwibWFza1R5cGVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Db2xvclwiOiB0cnVlLCBcImZpbHRlclwiOiB0cnVlLCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogdHJ1ZSwgXCJicmVha0FmdGVyXCI6IHRydWUsIFwiYnJlYWtCZWZvcmVcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcImNvbHVtbkNvdW50XCI6IHRydWUsIFwiY29sdW1uRmlsbFwiOiB0cnVlLCBcImNvbHVtbkdhcFwiOiB0cnVlLCBcImNvbHVtblJ1bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlV2lkdGhcIjogdHJ1ZSwgXCJjb2x1bW5zXCI6IHRydWUsIFwiY29sdW1uU3BhblwiOiB0cnVlLCBcImNvbHVtbldpZHRoXCI6IHRydWUsIFwiZmxleFwiOiB0cnVlLCBcImZsZXhCYXNpc1wiOiB0cnVlLCBcImZsZXhEaXJlY3Rpb25cIjogdHJ1ZSwgXCJmbGV4R3Jvd1wiOiB0cnVlLCBcImZsZXhGbG93XCI6IHRydWUsIFwiZmxleFNocmlua1wiOiB0cnVlLCBcImZsZXhXcmFwXCI6IHRydWUsIFwiYWxpZ25Db250ZW50XCI6IHRydWUsIFwiYWxpZ25JdGVtc1wiOiB0cnVlLCBcImFsaWduU2VsZlwiOiB0cnVlLCBcImp1c3RpZnlDb250ZW50XCI6IHRydWUsIFwib3JkZXJcIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uXCI6IHRydWUsIFwidHJhbnNpdGlvbkRlbGF5XCI6IHRydWUsIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IHRydWUsIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IHRydWUsIFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6IHRydWUsIFwiYmFja2Ryb3BGaWx0ZXJcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwVHlwZVwiOiB0cnVlLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1lcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogdHJ1ZSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiB0cnVlLCBcInNoYXBlSW1hZ2VUaHJlc2hvbGRcIjogdHJ1ZSwgXCJzaGFwZUltYWdlTWFyZ2luXCI6IHRydWUsIFwic2hhcGVJbWFnZU91dHNpZGVcIjogdHJ1ZSwgXCJoeXBoZW5zXCI6IHRydWUsIFwiZmxvd0ludG9cIjogdHJ1ZSwgXCJmbG93RnJvbVwiOiB0cnVlLCBcInJlZ2lvbkZyYWdtZW50XCI6IHRydWUsIFwidGV4dFNpemVBZGp1c3RcIjogdHJ1ZSB9LCBcIk1velwiOiB7IFwiYXBwZWFyYW5jZVwiOiB0cnVlLCBcInVzZXJTZWxlY3RcIjogdHJ1ZSwgXCJib3hTaXppbmdcIjogdHJ1ZSwgXCJ0ZXh0QWxpZ25MYXN0XCI6IHRydWUsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uTGluZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogdHJ1ZSwgXCJ0YWJTaXplXCI6IHRydWUsIFwiaHlwaGVuc1wiOiB0cnVlLCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogdHJ1ZSwgXCJicmVha0FmdGVyXCI6IHRydWUsIFwiYnJlYWtCZWZvcmVcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcImNvbHVtbkNvdW50XCI6IHRydWUsIFwiY29sdW1uRmlsbFwiOiB0cnVlLCBcImNvbHVtbkdhcFwiOiB0cnVlLCBcImNvbHVtblJ1bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogdHJ1ZSwgXCJjb2x1bW5SdWxlV2lkdGhcIjogdHJ1ZSwgXCJjb2x1bW5zXCI6IHRydWUsIFwiY29sdW1uU3BhblwiOiB0cnVlLCBcImNvbHVtbldpZHRoXCI6IHRydWUgfSwgXCJtc1wiOiB7IFwiZmxleFwiOiB0cnVlLCBcImZsZXhCYXNpc1wiOiBmYWxzZSwgXCJmbGV4RGlyZWN0aW9uXCI6IHRydWUsIFwiZmxleEdyb3dcIjogZmFsc2UsIFwiZmxleEZsb3dcIjogdHJ1ZSwgXCJmbGV4U2hyaW5rXCI6IGZhbHNlLCBcImZsZXhXcmFwXCI6IHRydWUsIFwiYWxpZ25Db250ZW50XCI6IGZhbHNlLCBcImFsaWduSXRlbXNcIjogZmFsc2UsIFwiYWxpZ25TZWxmXCI6IGZhbHNlLCBcImp1c3RpZnlDb250ZW50XCI6IGZhbHNlLCBcIm9yZGVyXCI6IGZhbHNlLCBcInRyYW5zZm9ybVwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpblwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpblhcIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IHRydWUsIFwidXNlclNlbGVjdFwiOiB0cnVlLCBcIndyYXBGbG93XCI6IHRydWUsIFwid3JhcFRocm91Z2hcIjogdHJ1ZSwgXCJ3cmFwTWFyZ2luXCI6IHRydWUsIFwic2Nyb2xsU25hcFR5cGVcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwUG9pbnRzWFwiOiB0cnVlLCBcInNjcm9sbFNuYXBQb2ludHNZXCI6IHRydWUsIFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCI6IHRydWUsIFwic2Nyb2xsU25hcENvb3JkaW5hdGVcIjogdHJ1ZSwgXCJ0b3VjaEFjdGlvblwiOiB0cnVlLCBcImh5cGhlbnNcIjogdHJ1ZSwgXCJmbG93SW50b1wiOiB0cnVlLCBcImZsb3dGcm9tXCI6IHRydWUsIFwiYnJlYWtCZWZvcmVcIjogdHJ1ZSwgXCJicmVha0FmdGVyXCI6IHRydWUsIFwiYnJlYWtJbnNpZGVcIjogdHJ1ZSwgXCJyZWdpb25GcmFnbWVudFwiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZUNvbHVtbnNcIjogdHJ1ZSwgXCJncmlkVGVtcGxhdGVSb3dzXCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlQXJlYXNcIjogdHJ1ZSwgXCJncmlkVGVtcGxhdGVcIjogdHJ1ZSwgXCJncmlkQXV0b0NvbHVtbnNcIjogdHJ1ZSwgXCJncmlkQXV0b1Jvd3NcIjogdHJ1ZSwgXCJncmlkQXV0b0Zsb3dcIjogdHJ1ZSwgXCJncmlkXCI6IHRydWUsIFwiZ3JpZFJvd1N0YXJ0XCI6IHRydWUsIFwiZ3JpZENvbHVtblN0YXJ0XCI6IHRydWUsIFwiZ3JpZFJvd0VuZFwiOiB0cnVlLCBcImdyaWRSb3dcIjogdHJ1ZSwgXCJncmlkQ29sdW1uXCI6IHRydWUsIFwiZ3JpZENvbHVtbkVuZFwiOiB0cnVlLCBcImdyaWRDb2x1bW5HYXBcIjogdHJ1ZSwgXCJncmlkUm93R2FwXCI6IHRydWUsIFwiZ3JpZEFyZWFcIjogdHJ1ZSwgXCJncmlkR2FwXCI6IHRydWUsIFwidGV4dFNpemVBZGp1c3RcIjogdHJ1ZSB9IH07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLy8gaGVscGVyIHRvIGNhcGl0YWxpemUgc3RyaW5nc1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9ib3dzZXIgPSByZXF1aXJlKCdib3dzZXInKTtcblxudmFyIF9ib3dzZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYm93c2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHZlbmRvclByZWZpeGVzID0ge1xuICBXZWJraXQ6IFsnY2hyb21lJywgJ3NhZmFyaScsICdpb3MnLCAnYW5kcm9pZCcsICdwaGFudG9tJywgJ29wZXJhJywgJ3dlYm9zJywgJ2JsYWNrYmVycnknLCAnYmFkYScsICd0aXplbicsICdjaHJvbWl1bScsICd2aXZhbGRpJ10sXG4gIE1vejogWydmaXJlZm94JywgJ3NlYW1vbmtleScsICdzYWlsZmlzaCddLFxuICBtczogWydtc2llJywgJ21zZWRnZSddXG59O1xudmFyIGJyb3dzZXJzID0ge1xuICBjaHJvbWU6IFtbJ2Nocm9tZSddLCBbJ2Nocm9taXVtJ11dLFxuICBzYWZhcmk6IFtbJ3NhZmFyaSddXSxcbiAgZmlyZWZveDogW1snZmlyZWZveCddXSxcbiAgZWRnZTogW1snbXNlZGdlJ11dLFxuICBvcGVyYTogW1snb3BlcmEnXSwgWyd2aXZhbGRpJ11dLFxuICBpb3Nfc2FmOiBbWydpb3MnLCAnbW9iaWxlJ10sIFsnaW9zJywgJ3RhYmxldCddXSxcbiAgaWU6IFtbJ21zaWUnXV0sXG4gIG9wX21pbmk6IFtbJ29wZXJhJywgJ21vYmlsZSddLCBbJ29wZXJhJywgJ3RhYmxldCddXSxcbiAgYW5kX3VjOiBbWydhbmRyb2lkJywgJ21vYmlsZSddLCBbJ2FuZHJvaWQnLCAndGFibGV0J11dLFxuICBhbmRyb2lkOiBbWydhbmRyb2lkJywgJ21vYmlsZSddLCBbJ2FuZHJvaWQnLCAndGFibGV0J11dXG59O1xuXG52YXIgYnJvd3NlckJ5SW5mbyA9IGZ1bmN0aW9uIGJyb3dzZXJCeUluZm8oaW5mbykge1xuICBpZiAoaW5mby5maXJlZm94KSB7XG4gICAgcmV0dXJuICdmaXJlZm94JztcbiAgfVxuICB2YXIgbmFtZSA9ICcnO1xuXG4gIE9iamVjdC5rZXlzKGJyb3dzZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChicm93c2VyKSB7XG4gICAgYnJvd3NlcnNbYnJvd3Nlcl0uZm9yRWFjaChmdW5jdGlvbiAoY29uZGl0aW9uKSB7XG4gICAgICB2YXIgbWF0Y2ggPSAwO1xuICAgICAgY29uZGl0aW9uLmZvckVhY2goZnVuY3Rpb24gKHNpbmdsZSkge1xuICAgICAgICBpZiAoaW5mb1tzaW5nbGVdKSB7XG4gICAgICAgICAgbWF0Y2ggKz0gMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoY29uZGl0aW9uLmxlbmd0aCA9PT0gbWF0Y2gpIHtcbiAgICAgICAgbmFtZSA9IGJyb3dzZXI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBuYW1lO1xufTtcblxuLyoqXG4gKiBVc2VzIGJvd3NlciB0byBnZXQgZGVmYXVsdCBicm93c2VyIGluZm9ybWF0aW9uIHN1Y2ggYXMgdmVyc2lvbiBhbmQgbmFtZVxuICogRXZhbHVhdGVzIGJvd3NlciBpbmZvIGFuZCBhZGRzIHZlbmRvclByZWZpeCBpbmZvcm1hdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJBZ2VudCAtIHVzZXJBZ2VudCB0aGF0IGdldHMgZXZhbHVhdGVkXG4gKi9cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHVzZXJBZ2VudCkge1xuICBpZiAoIXVzZXJBZ2VudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5mbyA9IF9ib3dzZXIyLmRlZmF1bHQuX2RldGVjdCh1c2VyQWdlbnQpO1xuXG4gIE9iamVjdC5rZXlzKHZlbmRvclByZWZpeGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICB2ZW5kb3JQcmVmaXhlc1twcmVmaXhdLmZvckVhY2goZnVuY3Rpb24gKGJyb3dzZXIpIHtcbiAgICAgIGlmIChpbmZvW2Jyb3dzZXJdKSB7XG4gICAgICAgIGluZm8ucHJlZml4ID0ge1xuICAgICAgICAgIGlubGluZTogcHJlZml4LFxuICAgICAgICAgIGNzczogJy0nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkgKyAnLSdcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgaW5mby5icm93c2VyID0gYnJvd3NlckJ5SW5mbyhpbmZvKTtcblxuICAvLyBGb3IgY29yZG92YSBJT1MgOCB0aGUgdmVyc2lvbiBpcyBtaXNzaW5nLCBzZXQgdHJ1bmNhdGVkIG9zdmVyc2lvbiB0byBwcmV2ZW50IE5hTlxuICBpbmZvLnZlcnNpb24gPSBpbmZvLnZlcnNpb24gPyBwYXJzZUZsb2F0KGluZm8udmVyc2lvbikgOiBwYXJzZUludChwYXJzZUZsb2F0KGluZm8ub3N2ZXJzaW9uKSwgMTApO1xuICBpbmZvLm9zdmVyc2lvbiA9IHBhcnNlRmxvYXQoaW5mby5vc3ZlcnNpb24pO1xuXG4gIC8vIGlPUyBmb3JjZXMgYWxsIGJyb3dzZXJzIHRvIHVzZSBTYWZhcmkgdW5kZXIgdGhlIGhvb2RcbiAgLy8gYXMgdGhlIFNhZmFyaSB2ZXJzaW9uIHNlZW1zIHRvIG1hdGNoIHRoZSBpT1MgdmVyc2lvblxuICAvLyB3ZSBqdXN0IGV4cGxpY2l0ZWx5IHVzZSB0aGUgb3N2ZXJzaW9uIGluc3RlYWRcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvZnJpc2NobWFubi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvaXNzdWVzLzcyXG4gIGlmIChpbmZvLmJyb3dzZXIgPT09ICdpb3Nfc2FmJyAmJiBpbmZvLnZlcnNpb24gPiBpbmZvLm9zdmVyc2lvbikge1xuICAgIGluZm8udmVyc2lvbiA9IGluZm8ub3N2ZXJzaW9uO1xuICAgIGluZm8uc2FmYXJpID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIHNlcGVyYXRlIG5hdGl2ZSBhbmRyb2lkIGNocm9tZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcm9mcmlzY2htYW5uL2lubGluZS1zdHlsZS1wcmVmaXhlci9pc3N1ZXMvNDVcbiAgaWYgKGluZm8uYnJvd3NlciA9PT0gJ2FuZHJvaWQnICYmIGluZm8uY2hyb21lICYmIGluZm8udmVyc2lvbiA+IDM3KSB7XG4gICAgaW5mby5icm93c2VyID0gJ2FuZF9jaHInO1xuICB9XG5cbiAgLy8gRm9yIGFuZHJvaWQgPCA0LjQgd2Ugd2FudCB0byBjaGVjayB0aGUgb3N2ZXJzaW9uXG4gIC8vIG5vdCB0aGUgY2hyb21lIHZlcnNpb24sIHNlZSBpc3N1ZSAjMjZcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvZnJpc2NobWFubi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvaXNzdWVzLzI2XG4gIGlmIChpbmZvLmJyb3dzZXIgPT09ICdhbmRyb2lkJyAmJiBpbmZvLm9zdmVyc2lvbiA8IDUpIHtcbiAgICBpbmZvLnZlcnNpb24gPSBpbmZvLm9zdmVyc2lvbjtcbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgYnJvd3NlciA9IF9yZWYuYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBfcmVmLnZlcnNpb247XG4gIHZhciBwcmVmaXggPSBfcmVmLnByZWZpeDtcblxuICB2YXIgcHJlZml4ZWRLZXlmcmFtZXMgPSAna2V5ZnJhbWVzJztcblxuICBpZiAoYnJvd3NlciA9PT0gJ2Nocm9tZScgJiYgdmVyc2lvbiA8IDQzIHx8IChicm93c2VyID09PSAnc2FmYXJpJyB8fCBicm93c2VyID09PSAnaW9zX3NhZicpICYmIHZlcnNpb24gPCA5IHx8IGJyb3dzZXIgPT09ICdvcGVyYScgJiYgdmVyc2lvbiA8IDMwIHx8IGJyb3dzZXIgPT09ICdhbmRyb2lkJyAmJiB2ZXJzaW9uIDw9IDQuNCB8fCBicm93c2VyID09PSAnYW5kX3VjJykge1xuICAgIHByZWZpeGVkS2V5ZnJhbWVzID0gcHJlZml4LmNzcyArIHByZWZpeGVkS2V5ZnJhbWVzO1xuICB9XG4gIHJldHVybiBwcmVmaXhlZEtleWZyYW1lcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAocHJlZml4ZWRWYWx1ZSwgdmFsdWUsIGtlZXBVbnByZWZpeGVkKSB7XG4gIHJldHVybiBrZWVwVW5wcmVmaXhlZCA/IFtwcmVmaXhlZFZhbHVlLCB2YWx1ZV0gOiBwcmVmaXhlZFZhbHVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gdmFsdWUuam9pbignLCcpO1xuXG4gIHJldHVybiB2YWx1ZS5tYXRjaCgvLXdlYmtpdC18LW1vei18LW1zLS8pICE9PSBudWxsO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyByZXR1cm5zIGEgc3R5bGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgY29uY2F0ZWQgcHJlZml4ZWQgdmFsdWUgc3RyaW5nXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgdmFyIHJlcGxhY2VyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKHByZWZpeCwgdmFsdWUpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgdmFsdWU7XG4gIH0gOiBhcmd1bWVudHNbMl07XG4gIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCBbJy13ZWJraXQtJywgJy1tb3otJywgJyddLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgcmV0dXJuIHJlcGxhY2VyKHByZWZpeCwgdmFsdWUpO1xuICB9KSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICB2YXIgdW5wcmVmaXhlZCA9IHByb3BlcnR5LnJlcGxhY2UoL14obXN8V2Via2l0fE1venxPKS8sICcnKTtcbiAgcmV0dXJuIHVucHJlZml4ZWQuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyB1bnByZWZpeGVkLnNsaWNlKDEpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImh0bWxcIjoge1xuICAgIFwiZm9udEZhbWlseVwiOiBcInNhbnMtc2VyaWZcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS4xNSxcbiAgICBcIm1zVGV4dFNpemVBZGp1c3RcIjogXCIxMDAlXCIsXG4gICAgXCJXZWJraXRUZXh0U2l6ZUFkanVzdFwiOiBcIjEwMCVcIlxuICB9LFxuICBcImJvZHlcIjoge1xuICAgIFwibWFyZ2luXCI6IDBcbiAgfSxcbiAgXCJhcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIG1haW4sICBtZW51LCBuYXYsIHNlY3Rpb24sIHN1bW1hcnlcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCJcbiAgfSxcbiAgXCJhdWRpbywgY2FudmFzLCBwcm9ncmVzcywgdmlkZW9cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiXG4gIH0sXG4gIFwiYXVkaW86bm90KFtjb250cm9sc10pXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJub25lXCIsXG4gICAgXCJoZWlnaHRcIjogMFxuICB9LFxuICBcInByb2dyZXNzXCI6IHtcbiAgICBcInZlcnRpY2FsQWxpZ25cIjogXCJiYXNlbGluZVwiXG4gIH0sXG4gIFwidGVtcGxhdGUsICBbaGlkZGVuXVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwibm9uZVwiXG4gIH0sXG4gIFwiYVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIFwiV2Via2l0VGV4dERlY29yYXRpb25Ta2lwXCI6IFwib2JqZWN0c1wiXG4gIH0sXG4gIFwiYTphY3RpdmUsIGE6aG92ZXJcIjoge1xuICAgIFwib3V0bGluZVdpZHRoXCI6IDBcbiAgfSxcbiAgXCJhYmJyW3RpdGxlXVwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21cIjogXCJub25lXCIsXG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcInVuZGVybGluZSBkb3R0ZWRcIlxuICB9LFxuICBcImIsIHN0cm9uZ1wiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZGVyXCJcbiAgfSxcbiAgXCJkZm5cIjoge1xuICAgIFwiZm9udFN0eWxlXCI6IFwiaXRhbGljXCJcbiAgfSxcbiAgXCJoMVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjJlbVwiLFxuICAgIFwibWFyZ2luXCI6IFwiMC42N2VtIDBcIlxuICB9LFxuICBcIm1hcmtcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwXCJcbiAgfSxcbiAgXCJzbWFsbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjgwJVwiXG4gIH0sXG4gIFwic3ViLCBzdXBcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI3NSVcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMCxcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInZlcnRpY2FsQWxpZ25cIjogXCJiYXNlbGluZVwiXG4gIH0sXG4gIFwic3ViXCI6IHtcbiAgICBcImJvdHRvbVwiOiBcIi0wLjI1ZW1cIlxuICB9LFxuICBcInN1cFwiOiB7XG4gICAgXCJ0b3BcIjogXCItMC41ZW1cIlxuICB9LFxuICBcImltZ1wiOiB7XG4gICAgXCJib3JkZXJTdHlsZVwiOiBcIm5vbmVcIlxuICB9LFxuICBcInN2Zzpub3QoOnJvb3QpXCI6IHtcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJjb2RlLCBrYmQsIHByZSwgc2FtcFwiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwibW9ub3NwYWNlLCBtb25vc3BhY2VcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMWVtXCJcbiAgfSxcbiAgXCJmaWd1cmVcIjoge1xuICAgIFwibWFyZ2luXCI6IFwiMWVtIDQwcHhcIlxuICB9LFxuICBcImhyXCI6IHtcbiAgICBcImJveFNpemluZ1wiOiBcImNvbnRlbnQtYm94XCIsXG4gICAgXCJoZWlnaHRcIjogMCxcbiAgICBcIm92ZXJmbG93XCI6IFwidmlzaWJsZVwiXG4gIH0sXG4gIFwiYnV0dG9uLCBpbnB1dCwgb3B0Z3JvdXAsIHNlbGVjdCwgdGV4dGFyZWFcIjoge1xuICAgIFwiZm9udFwiOiBcImluaGVyaXRcIixcbiAgICBcIm1hcmdpblwiOiAwXG4gIH0sXG4gIFwib3B0Z3JvdXBcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcImJ1dHRvbiwgaW5wdXRcIjoge1xuICAgIFwib3ZlcmZsb3dcIjogXCJ2aXNpYmxlXCJcbiAgfSxcbiAgXCJidXR0b24sIHNlbGVjdFwiOiB7XG4gICAgXCJ0ZXh0VHJhbnNmb3JtXCI6IFwibm9uZVwiXG4gIH0sXG4gIFwiYnV0dG9uLCBodG1sIFt0eXBlPVxcXCJidXR0b25cXFwiXSwgIFt0eXBlPVxcXCJyZXNldFxcXCJdLCBbdHlwZT1cXFwic3VibWl0XFxcIl1cIjoge1xuICAgIFwiV2Via2l0QXBwZWFyYW5jZVwiOiBcImJ1dHRvblwiXG4gIH0sXG4gIFwiYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLCBbdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsIFt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLCBbdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXJcIjoge1xuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJub25lXCIsXG4gICAgXCJwYWRkaW5nXCI6IDBcbiAgfSxcbiAgXCJidXR0b246LW1vei1mb2N1c3JpbmcsIFt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZywgW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsIFt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZ1wiOiB7XG4gICAgXCJvdXRsaW5lXCI6IFwiMXB4IGRvdHRlZCBCdXR0b25UZXh0XCJcbiAgfSxcbiAgXCJmaWVsZHNldFwiOiB7XG4gICAgXCJib3JkZXJcIjogXCIxcHggc29saWQgI2MwYzBjMFwiLFxuICAgIFwibWFyZ2luXCI6IFwiMCAycHhcIixcbiAgICBcInBhZGRpbmdcIjogXCIwLjM1ZW0gMC42MjVlbSAwLjc1ZW1cIlxuICB9LFxuICBcImxlZ2VuZFwiOiB7XG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJjb2xvclwiOiBcImluaGVyaXRcIixcbiAgICBcImRpc3BsYXlcIjogXCJ0YWJsZVwiLFxuICAgIFwibWF4V2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJwYWRkaW5nXCI6IDAsXG4gICAgXCJ3aGl0ZVNwYWNlXCI6IFwibm9ybWFsXCJcbiAgfSxcbiAgXCJ0ZXh0YXJlYVwiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImF1dG9cIlxuICB9LFxuICBcIlt0eXBlPVxcXCJjaGVja2JveFxcXCJdLCBbdHlwZT1cXFwicmFkaW9cXFwiXVwiOiB7XG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJwYWRkaW5nXCI6IDBcbiAgfSxcbiAgXCJbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvblwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCJhdXRvXCJcbiAgfSxcbiAgXCJbdHlwZT1cXFwic2VhcmNoXFxcIl1cIjoge1xuICAgIFwiV2Via2l0QXBwZWFyYW5jZVwiOiBcInRleHRmaWVsZFwiLFxuICAgIFwib3V0bGluZU9mZnNldFwiOiAtMlxuICB9LFxuICBcIlt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiwgW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uXCI6IHtcbiAgICBcIldlYmtpdEFwcGVhcmFuY2VcIjogXCJub25lXCJcbiAgfSxcbiAgXCI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCJpbmhlcml0XCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuNTRcbiAgfSxcbiAgXCI6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uXCI6IHtcbiAgICBcIldlYmtpdEFwcGVhcmFuY2VcIjogXCJidXR0b25cIixcbiAgICBcImZvbnRcIjogXCJpbmhlcml0XCJcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlO1xuXG52YXIgX2FwcGVuZFB4SWZOZWVkZWQgPSByZXF1aXJlKCcuL2FwcGVuZC1weC1pZi1uZWVkZWQnKTtcblxudmFyIF9hcHBlbmRQeElmTmVlZGVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FwcGVuZFB4SWZOZWVkZWQpO1xuXG52YXIgX21hcE9iamVjdCA9IHJlcXVpcmUoJy4vbWFwLW9iamVjdCcpO1xuXG52YXIgX21hcE9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXBPYmplY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBhcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZShzdHlsZSkge1xuICByZXR1cm4gKDAsIF9tYXBPYmplY3QyLmRlZmF1bHQpKHN0eWxlLCBmdW5jdGlvbiAocmVzdWx0LCBrZXkpIHtcbiAgICByZXR1cm4gKDAsIF9hcHBlbmRQeElmTmVlZGVkMi5kZWZhdWx0KShrZXksIHN0eWxlW2tleV0pICsgJyAhaW1wb3J0YW50JztcbiAgfSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBhcHBlbmRQeElmTmVlZGVkO1xuXG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL1xuLy8gMTAyY2QyOTE4OTlmOTk0MmE3NmM0MGEwZTc4OTIwYTZmZTU0NGRjMS9cbi8vIHNyYy9yZW5kZXJlcnMvZG9tL3NoYXJlZC9DU1NQcm9wZXJ0eS5qc1xudmFyIGlzVW5pdGxlc3NOdW1iZXIgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiB0cnVlLFxuICBib3hGbGV4OiB0cnVlLFxuICBib3hGbGV4R3JvdXA6IHRydWUsXG4gIGJveE9yZGluYWxHcm91cDogdHJ1ZSxcbiAgY29sdW1uQ291bnQ6IHRydWUsXG4gIGZsZXg6IHRydWUsXG4gIGZsZXhHcm93OiB0cnVlLFxuICBmbGV4UG9zaXRpdmU6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhOZWdhdGl2ZTogdHJ1ZSxcbiAgZmxleE9yZGVyOiB0cnVlLFxuICBncmlkUm93OiB0cnVlLFxuICBncmlkQ29sdW1uOiB0cnVlLFxuICBmb250V2VpZ2h0OiB0cnVlLFxuICBsaW5lQ2xhbXA6IHRydWUsXG4gIGxpbmVIZWlnaHQ6IHRydWUsXG4gIG9wYWNpdHk6IHRydWUsXG4gIG9yZGVyOiB0cnVlLFxuICBvcnBoYW5zOiB0cnVlLFxuICB0YWJTaXplOiB0cnVlLFxuICB3aWRvd3M6IHRydWUsXG4gIHpJbmRleDogdHJ1ZSxcbiAgem9vbTogdHJ1ZSxcblxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiB0cnVlLFxuICBzdG9wT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogdHJ1ZSxcbiAgc3Ryb2tlT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlV2lkdGg6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGFwcGVuZFB4SWZOZWVkZWQocHJvcGVydHlOYW1lLCB2YWx1ZSkge1xuICB2YXIgbmVlZHNQeFN1ZmZpeCA9ICFpc1VuaXRsZXNzTnVtYmVyW3Byb3BlcnR5TmFtZV0gJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gMDtcbiAgcmV0dXJuIG5lZWRzUHhTdWZmaXggPyB2YWx1ZSArICdweCcgOiB2YWx1ZTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuXG52YXIgX2NhbWVsQ2FzZVJlZ2V4ID0gLyhbYS16XSk/KFtBLVpdKS9nO1xuXG52YXIgX2NhbWVsQ2FzZVJlcGxhY2VyID0gZnVuY3Rpb24gX2NhbWVsQ2FzZVJlcGxhY2VyKG1hdGNoLCBwMSwgcDIpIHtcbiAgcmV0dXJuIChwMSB8fCAnJykgKyAnLScgKyBwMi50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIF9jYW1lbENhc2VUb0Rhc2hDYXNlID0gZnVuY3Rpb24gX2NhbWVsQ2FzZVRvRGFzaENhc2Uocykge1xuICByZXR1cm4gcy5yZXBsYWNlKF9jYW1lbENhc2VSZWdleCwgX2NhbWVsQ2FzZVJlcGxhY2VyKTtcbn07XG5cbnZhciBjYW1lbENhc2VQcm9wc1RvRGFzaENhc2UgPSBmdW5jdGlvbiBjYW1lbENhc2VQcm9wc1RvRGFzaENhc2UocHJlZml4ZWRTdHlsZSkge1xuICAvLyBTaW5jZSBwcmVmaXggaXMgZXhwZWN0ZWQgdG8gd29yayBvbiBpbmxpbmUgc3R5bGUgb2JqZWN0cywgd2UgbXVzdFxuICAvLyB0cmFuc2xhdGUgdGhlIGtleXMgdG8gZGFzaCBjYXNlIGZvciByZW5kZXJpbmcgdG8gQ1NTLlxuICByZXR1cm4gT2JqZWN0LmtleXMocHJlZml4ZWRTdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgIHZhciBkYXNoQ2FzZUtleSA9IF9jYW1lbENhc2VUb0Rhc2hDYXNlKGtleSk7XG5cbiAgICAvLyBGaXggSUUgdmVuZG9yIHByZWZpeFxuICAgIGlmICgvXm1zLS8udGVzdChkYXNoQ2FzZUtleSkpIHtcbiAgICAgIGRhc2hDYXNlS2V5ID0gJy0nICsgZGFzaENhc2VLZXk7XG4gICAgfVxuXG4gICAgcmVzdWx0W2Rhc2hDYXNlS2V5XSA9IHByZWZpeGVkU3R5bGVba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjYW1lbENhc2VQcm9wc1RvRGFzaENhc2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9lbmhhbmNlciA9IHJlcXVpcmUoJy4uL2VuaGFuY2VyJyk7XG5cbnZhciBfZW5oYW5jZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZW5oYW5jZXIpO1xuXG52YXIgX3N0eWxlS2VlcGVyID0gcmVxdWlyZSgnLi4vc3R5bGUta2VlcGVyJyk7XG5cbnZhciBfc3R5bGVLZWVwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVLZWVwZXIpO1xuXG52YXIgX3N0eWxlU2hlZXQgPSByZXF1aXJlKCcuL3N0eWxlLXNoZWV0Jyk7XG5cbnZhciBfc3R5bGVTaGVldDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZVNoZWV0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9nZXRTdHlsZUtlZXBlcihpbnN0YW5jZSkge1xuICBpZiAoIWluc3RhbmNlLl9yYWRpdW1TdHlsZUtlZXBlcikge1xuICAgIHZhciB1c2VyQWdlbnQgPSBpbnN0YW5jZS5wcm9wcy5yYWRpdW1Db25maWcgJiYgaW5zdGFuY2UucHJvcHMucmFkaXVtQ29uZmlnLnVzZXJBZ2VudCB8fCBpbnN0YW5jZS5jb250ZXh0Ll9yYWRpdW1Db25maWcgJiYgaW5zdGFuY2UuY29udGV4dC5fcmFkaXVtQ29uZmlnLnVzZXJBZ2VudDtcbiAgICBpbnN0YW5jZS5fcmFkaXVtU3R5bGVLZWVwZXIgPSBuZXcgX3N0eWxlS2VlcGVyMi5kZWZhdWx0KHVzZXJBZ2VudCk7XG4gIH1cblxuICByZXR1cm4gaW5zdGFuY2UuX3JhZGl1bVN0eWxlS2VlcGVyO1xufVxuXG52YXIgU3R5bGVSb290ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN0eWxlUm9vdCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3R5bGVSb290KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdHlsZVJvb3QpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgIF9nZXRTdHlsZUtlZXBlcihfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU3R5bGVSb290LnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHsgX3JhZGl1bVN0eWxlS2VlcGVyOiBfZ2V0U3R5bGVLZWVwZXIodGhpcykgfTtcbiAgfTtcblxuICBTdHlsZVJvb3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIC8vIFBhc3MgZG93biBhbGwgcHJvcHMgZXhjZXB0IGNvbmZpZyB0byB0aGUgcmVuZGVyZWQgZGl2LlxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciByYWRpdW1Db25maWcgPSBfcHJvcHMucmFkaXVtQ29uZmlnO1xuXG4gICAgdmFyIG90aGVyUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ3JhZGl1bUNvbmZpZyddKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIG90aGVyUHJvcHMsXG4gICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLFxuICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3N0eWxlU2hlZXQyLmRlZmF1bHQsIG51bGwpXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVSb290O1xufShfcmVhY3QuQ29tcG9uZW50KTtcblxuU3R5bGVSb290LmNvbnRleHRUeXBlcyA9IHtcbiAgX3JhZGl1bUNvbmZpZzogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIF9yYWRpdW1TdHlsZUtlZXBlcjogX3JlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKF9zdHlsZUtlZXBlcjIuZGVmYXVsdClcbn07XG5cblN0eWxlUm9vdC5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgX3JhZGl1bVN0eWxlS2VlcGVyOiBfcmVhY3QuUHJvcFR5cGVzLmluc3RhbmNlT2YoX3N0eWxlS2VlcGVyMi5kZWZhdWx0KVxufTtcblxuU3R5bGVSb290ID0gKDAsIF9lbmhhbmNlcjIuZGVmYXVsdCkoU3R5bGVSb290KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3R5bGVSb290O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdW5kZWZpbmVkO1xuXG52YXIgX2NsYXNzLCBfdGVtcDtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3N0eWxlS2VlcGVyID0gcmVxdWlyZSgnLi4vc3R5bGUta2VlcGVyJyk7XG5cbnZhciBfc3R5bGVLZWVwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVLZWVwZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBTdHlsZVNoZWV0ID0gKF90ZW1wID0gX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFN0eWxlU2hlZXQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0eWxlU2hlZXQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0gX3RoaXMuX2dldENTU1N0YXRlKCk7XG5cbiAgICBfdGhpcy5fb25DaGFuZ2UgPSBfdGhpcy5fb25DaGFuZ2UuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuY29udGV4dC5fcmFkaXVtU3R5bGVLZWVwZXIuc3Vic2NyaWJlKHRoaXMuX29uQ2hhbmdlKTtcbiAgICB0aGlzLl9vbkNoYW5nZSgpO1xuICB9O1xuXG4gIFN0eWxlU2hlZXQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fc3Vic2NyaXB0aW9uLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5fZ2V0Q1NTU3RhdGUgPSBmdW5jdGlvbiBfZ2V0Q1NTU3RhdGUoKSB7XG4gICAgcmV0dXJuIHsgY3NzOiB0aGlzLmNvbnRleHQuX3JhZGl1bVN0eWxlS2VlcGVyLmdldENTUygpIH07XG4gIH07XG5cbiAgU3R5bGVTaGVldC5wcm90b3R5cGUuX29uQ2hhbmdlID0gZnVuY3Rpb24gX29uQ2hhbmdlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIuX2lzTW91bnRlZCAmJiBfdGhpczIuc2V0U3RhdGUoX3RoaXMyLl9nZXRDU1NTdGF0ZSgpKTtcbiAgICB9LCAwKTtcbiAgfTtcblxuICBTdHlsZVNoZWV0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzdHlsZScsIHsgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHsgX19odG1sOiB0aGlzLnN0YXRlLmNzcyB9IH0pO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufShfcmVhY3QuQ29tcG9uZW50KSwgX2NsYXNzLmNvbnRleHRUeXBlcyA9IHtcbiAgX3JhZGl1bVN0eWxlS2VlcGVyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmluc3RhbmNlT2YoX3N0eWxlS2VlcGVyMi5kZWZhdWx0KVxufSwgX3RlbXApO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3R5bGVTaGVldDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3NzUnVsZVNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi4vY3NzLXJ1bGUtc2V0LXRvLXN0cmluZycpO1xuXG52YXIgX2Nzc1J1bGVTZXRUb1N0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NSdWxlU2V0VG9TdHJpbmcpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTdHlsZSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnU3R5bGUnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHJhZGl1bUNvbmZpZzogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgcnVsZXM6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIHNjb3BlU2VsZWN0b3I6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgX3JhZGl1bUNvbmZpZzogX3JlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NvcGVTZWxlY3RvcjogJydcbiAgICB9O1xuICB9LFxuICBfYnVpbGRTdHlsZXM6IGZ1bmN0aW9uIF9idWlsZFN0eWxlcyhzdHlsZXMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIHVzZXJBZ2VudCA9IHRoaXMucHJvcHMucmFkaXVtQ29uZmlnICYmIHRoaXMucHJvcHMucmFkaXVtQ29uZmlnLnVzZXJBZ2VudCB8fCB0aGlzLmNvbnRleHQgJiYgdGhpcy5jb250ZXh0Ll9yYWRpdW1Db25maWcgJiYgdGhpcy5jb250ZXh0Ll9yYWRpdW1Db25maWcudXNlckFnZW50O1xuXG4gICAgdmFyIHNjb3BlU2VsZWN0b3IgPSB0aGlzLnByb3BzLnNjb3BlU2VsZWN0b3I7XG5cbiAgICB2YXIgcm9vdFJ1bGVzID0gT2JqZWN0LmtleXMoc3R5bGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBzZWxlY3Rvcikge1xuICAgICAgaWYgKF90eXBlb2Yoc3R5bGVzW3NlbGVjdG9yXSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGFjY3VtdWxhdG9yW3NlbGVjdG9yXSA9IHN0eWxlc1tzZWxlY3Rvcl07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9LCB7fSk7XG4gICAgdmFyIHJvb3RTdHlsZXMgPSBPYmplY3Qua2V5cyhyb290UnVsZXMpLmxlbmd0aCA/ICgwLCBfY3NzUnVsZVNldFRvU3RyaW5nMi5kZWZhdWx0KShzY29wZVNlbGVjdG9yIHx8ICcnLCByb290UnVsZXMsIHVzZXJBZ2VudCkgOiAnJztcblxuICAgIHJldHVybiByb290U3R5bGVzICsgT2JqZWN0LmtleXMoc3R5bGVzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjY3VtdWxhdG9yLCBzZWxlY3Rvcikge1xuICAgICAgdmFyIHJ1bGVzID0gc3R5bGVzW3NlbGVjdG9yXTtcblxuICAgICAgaWYgKHNlbGVjdG9yID09PSAnbWVkaWFRdWVyaWVzJykge1xuICAgICAgICBhY2N1bXVsYXRvciArPSBfdGhpcy5fYnVpbGRNZWRpYVF1ZXJ5U3RyaW5nKHJ1bGVzKTtcbiAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihzdHlsZXNbc2VsZWN0b3JdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgdmFyIGNvbXBsZXRlU2VsZWN0b3IgPSBzY29wZVNlbGVjdG9yID8gc2VsZWN0b3Iuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgICByZXR1cm4gc2NvcGVTZWxlY3RvciArICcgJyArIHBhcnQudHJpbSgpO1xuICAgICAgICB9KS5qb2luKCcsJykgOiBzZWxlY3RvcjtcblxuICAgICAgICBhY2N1bXVsYXRvciArPSAoMCwgX2Nzc1J1bGVTZXRUb1N0cmluZzIuZGVmYXVsdCkoY29tcGxldGVTZWxlY3RvciwgcnVsZXMsIHVzZXJBZ2VudCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICB9LCAnJyk7XG4gIH0sXG4gIF9idWlsZE1lZGlhUXVlcnlTdHJpbmc6IGZ1bmN0aW9uIF9idWlsZE1lZGlhUXVlcnlTdHJpbmcoc3R5bGVzQnlNZWRpYVF1ZXJ5KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgbWVkaWFRdWVyeVN0cmluZyA9ICcnO1xuXG4gICAgT2JqZWN0LmtleXMoc3R5bGVzQnlNZWRpYVF1ZXJ5KS5mb3JFYWNoKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgICAgbWVkaWFRdWVyeVN0cmluZyArPSAnQG1lZGlhICcgKyBxdWVyeSArICd7JyArIF90aGlzMi5fYnVpbGRTdHlsZXMoc3R5bGVzQnlNZWRpYVF1ZXJ5W3F1ZXJ5XSkgKyAnfSc7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVkaWFRdWVyeVN0cmluZztcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLnJ1bGVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVzID0gdGhpcy5fYnVpbGRTdHlsZXModGhpcy5wcm9wcy5ydWxlcyk7XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJywgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IHN0eWxlcyB9IH0pO1xuICB9XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3R5bGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjc3NSdWxlU2V0VG9TdHJpbmc7XG5cbnZhciBfYXBwZW5kUHhJZk5lZWRlZCA9IHJlcXVpcmUoJy4vYXBwZW5kLXB4LWlmLW5lZWRlZCcpO1xuXG52YXIgX2FwcGVuZFB4SWZOZWVkZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXBwZW5kUHhJZk5lZWRlZCk7XG5cbnZhciBfY2FtZWxDYXNlUHJvcHNUb0Rhc2hDYXNlID0gcmVxdWlyZSgnLi9jYW1lbC1jYXNlLXByb3BzLXRvLWRhc2gtY2FzZScpO1xuXG52YXIgX2NhbWVsQ2FzZVByb3BzVG9EYXNoQ2FzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYW1lbENhc2VQcm9wc1RvRGFzaENhc2UpO1xuXG52YXIgX21hcE9iamVjdCA9IHJlcXVpcmUoJy4vbWFwLW9iamVjdCcpO1xuXG52YXIgX21hcE9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXBPYmplY3QpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JTdHlsZXMoc3R5bGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlKS5tYXAoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHByb3BlcnR5ICsgJzogJyArIHN0eWxlW3Byb3BlcnR5XSArICc7JztcbiAgfSkuam9pbignXFxuJyk7XG59XG5cbmZ1bmN0aW9uIGNzc1J1bGVTZXRUb1N0cmluZyhzZWxlY3RvciwgcnVsZXMsIHVzZXJBZ2VudCkge1xuICBpZiAoIXJ1bGVzKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIHJ1bGVzV2l0aFB4ID0gKDAsIF9tYXBPYmplY3QyLmRlZmF1bHQpKHJ1bGVzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIHJldHVybiAoMCwgX2FwcGVuZFB4SWZOZWVkZWQyLmRlZmF1bHQpKGtleSwgdmFsdWUpO1xuICB9KTtcbiAgdmFyIHByZWZpeGVkUnVsZXMgPSAoMCwgX3ByZWZpeGVyLmdldFByZWZpeGVkU3R5bGUpKHJ1bGVzV2l0aFB4LCB1c2VyQWdlbnQpO1xuICB2YXIgY3NzUHJlZml4ZWRSdWxlcyA9ICgwLCBfY2FtZWxDYXNlUHJvcHNUb0Rhc2hDYXNlMi5kZWZhdWx0KShwcmVmaXhlZFJ1bGVzKTtcbiAgdmFyIHNlcmlhbGl6ZWRSdWxlcyA9IGNyZWF0ZU1hcmt1cEZvclN0eWxlcyhjc3NQcmVmaXhlZFJ1bGVzKTtcblxuICByZXR1cm4gc2VsZWN0b3IgKyAneycgKyBzZXJpYWxpemVkUnVsZXMgKyAnfSc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBlbmhhbmNlV2l0aFJhZGl1bTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfc3R5bGVLZWVwZXIgPSByZXF1aXJlKCcuL3N0eWxlLWtlZXBlci5qcycpO1xuXG52YXIgX3N0eWxlS2VlcGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0eWxlS2VlcGVyKTtcblxudmFyIF9yZXNvbHZlU3R5bGVzID0gcmVxdWlyZSgnLi9yZXNvbHZlLXN0eWxlcy5qcycpO1xuXG52YXIgX3Jlc29sdmVTdHlsZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzb2x2ZVN0eWxlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEtFWVNfVE9fSUdOT1JFX1dIRU5fQ09QWUlOR19QUk9QRVJUSUVTID0gWydhcmd1bWVudHMnLCAnY2FsbGVlJywgJ2NhbGxlcicsICdsZW5ndGgnLCAnbmFtZScsICdwcm90b3R5cGUnLCAndHlwZSddO1xuXG5mdW5jdGlvbiBjb3B5UHJvcGVydGllcyhzb3VyY2UsIHRhcmdldCkge1xuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChLRVlTX1RPX0lHTk9SRV9XSEVOX0NPUFlJTkdfUFJPUEVSVElFUy5pbmRleE9mKGtleSkgPCAwICYmICF0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNTdGF0ZWxlc3MoY29tcG9uZW50KSB7XG4gIHJldHVybiAhY29tcG9uZW50LnJlbmRlciAmJiAhKGNvbXBvbmVudC5wcm90b3R5cGUgJiYgY29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIpO1xufVxuXG5mdW5jdGlvbiBlbmhhbmNlV2l0aFJhZGl1bShjb25maWdPckNvbXBvc2VkQ29tcG9uZW50KSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICBpZiAodHlwZW9mIGNvbmZpZ09yQ29tcG9zZWRDb21wb25lbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgX3JldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBuZXdDb25maWcgPSBfZXh0ZW5kcyh7fSwgY29uZmlnLCBjb25maWdPckNvbXBvc2VkQ29tcG9uZW50KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHY6IGZ1bmN0aW9uIHYoY29uZmlnT3JDb21wb25lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZW5oYW5jZVdpdGhSYWRpdW0oY29uZmlnT3JDb21wb25lbnQsIG5ld0NvbmZpZyk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSgpO1xuXG4gICAgaWYgKCh0eXBlb2YgX3JldCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoX3JldCkpID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICB9XG5cbiAgdmFyIGNvbXBvbmVudCA9IGNvbmZpZ09yQ29tcG9zZWRDb21wb25lbnQ7XG4gIHZhciBDb21wb3NlZENvbXBvbmVudCA9IGNvbXBvbmVudDtcblxuICAvLyBIYW5kbGUgc3RhdGVsZXNzIGNvbXBvbmVudHNcbiAgaWYgKGlzU3RhdGVsZXNzKENvbXBvc2VkQ29tcG9uZW50KSkge1xuICAgIENvbXBvc2VkQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhDb21wb3NlZENvbXBvbmVudCwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIENvbXBvc2VkQ29tcG9uZW50KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9zZWRDb21wb25lbnQpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfVxuXG4gICAgICBDb21wb3NlZENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50KHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQ29tcG9zZWRDb21wb25lbnQ7XG4gICAgfShfcmVhY3QuQ29tcG9uZW50KTtcbiAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IGNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBjb21wb25lbnQubmFtZTtcbiAgfVxuXG4gIHZhciBSYWRpdW1FbmhhbmNlciA9IChfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUmFkaXVtRW5oYW5jZXIsIF9Db21wb3NlZENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBSYWRpdW1FbmhhbmNlcigpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSYWRpdW1FbmhhbmNlcik7XG5cbiAgICAgIHZhciBfdGhpczIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9zZWRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgIF90aGlzMi5zdGF0ZSA9IF90aGlzMi5zdGF0ZSB8fCB7fTtcbiAgICAgIF90aGlzMi5zdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZSA9IHt9O1xuICAgICAgX3RoaXMyLl9yYWRpdW1Jc01vdW50ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIF90aGlzMjtcbiAgICB9XG5cbiAgICBSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmIChfQ29tcG9zZWRDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50KSB7XG4gICAgICAgIF9Db21wb3NlZENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQuY2FsbCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fcmFkaXVtSXNNb3VudGVkID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLl9yYWRpdW1Nb3VzZVVwTGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fcmFkaXVtTW91c2VVcExpc3RlbmVyLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcmFkaXVtTWVkaWFRdWVyeUxpc3RlbmVyc0J5UXVlcnkpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5fcmFkaXVtTWVkaWFRdWVyeUxpc3RlbmVyc0J5UXVlcnkpLmZvckVhY2goZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgICAgdGhpcy5fcmFkaXVtTWVkaWFRdWVyeUxpc3RlbmVyc0J5UXVlcnlbcXVlcnldLnJlbW92ZSgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgUmFkaXVtRW5oYW5jZXIucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgIHZhciBzdXBlckNoaWxkQ29udGV4dCA9IF9Db21wb3NlZENvbXBvbmVudC5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID8gX0NvbXBvc2VkQ29tcG9uZW50LnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQuY2FsbCh0aGlzKSA6IHt9O1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMucmFkaXVtQ29uZmlnKSB7XG4gICAgICAgIHJldHVybiBzdXBlckNoaWxkQ29udGV4dDtcbiAgICAgIH1cblxuICAgICAgdmFyIG5ld0NvbnRleHQgPSBfZXh0ZW5kcyh7fSwgc3VwZXJDaGlsZENvbnRleHQpO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5yYWRpdW1Db25maWcpIHtcbiAgICAgICAgbmV3Q29udGV4dC5fcmFkaXVtQ29uZmlnID0gdGhpcy5wcm9wcy5yYWRpdW1Db25maWc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdDb250ZXh0O1xuICAgIH07XG5cbiAgICBSYWRpdW1FbmhhbmNlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIHJlbmRlcmVkRWxlbWVudCA9IF9Db21wb3NlZENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICB2YXIgY3VycmVudENvbmZpZyA9IHRoaXMucHJvcHMucmFkaXVtQ29uZmlnIHx8IHRoaXMuY29udGV4dC5fcmFkaXVtQ29uZmlnIHx8IGNvbmZpZztcblxuICAgICAgaWYgKGNvbmZpZyAmJiBjdXJyZW50Q29uZmlnICE9PSBjb25maWcpIHtcbiAgICAgICAgY3VycmVudENvbmZpZyA9IF9leHRlbmRzKHt9LCBjb25maWcsIGN1cnJlbnRDb25maWcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKDAsIF9yZXNvbHZlU3R5bGVzMi5kZWZhdWx0KSh0aGlzLCByZW5kZXJlZEVsZW1lbnQsIGN1cnJlbnRDb25maWcpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUmFkaXVtRW5oYW5jZXI7XG4gIH0oQ29tcG9zZWRDb21wb25lbnQpLCBfY2xhc3MuX2lzUmFkaXVtRW5oYW5jZWQgPSB0cnVlLCBfdGVtcCk7XG5cbiAgLy8gQ2xhc3MgaW5oZXJpdGFuY2UgdXNlcyBPYmplY3QuY3JlYXRlIGFuZCBiZWNhdXNlIG9mIF9fcHJvdG9fXyBpc3N1ZXNcbiAgLy8gd2l0aCBJRSA8MTAgYW55IHN0YXRpYyBwcm9wZXJ0aWVzIG9mIHRoZSBzdXBlcmNsYXNzIGFyZW4ndCBpbmhlcml0ZWQgYW5kXG4gIC8vIHNvIG5lZWQgdG8gYmUgbWFudWFsbHkgcG9wdWxhdGVkLlxuICAvLyBTZWUgaHR0cDovL2JhYmVsanMuaW8vZG9jcy9hZHZhbmNlZC9jYXZlYXRzLyNjbGFzc2VzLTEwLWFuZC1iZWxvdy1cblxuICBjb3B5UHJvcGVydGllcyhjb21wb25lbnQsIFJhZGl1bUVuaGFuY2VyKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgYWxzbyBmaXhlcyBSZWFjdCBIb3QgTG9hZGVyIGJ5IGV4cG9zaW5nIHRoZSBvcmlnaW5hbCBjb21wb25lbnRzIHRvcFxuICAgIC8vIGxldmVsIHByb3RvdHlwZSBtZXRob2RzIG9uIHRoZSBSYWRpdW0gZW5oYW5jZWQgcHJvdG90eXBlIGFzIGRpc2N1c3NlZCBpblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3JtaWRhYmxlTGFicy9yYWRpdW0vaXNzdWVzLzIxOS5cbiAgICBjb3B5UHJvcGVydGllcyhDb21wb3NlZENvbXBvbmVudC5wcm90b3R5cGUsIFJhZGl1bUVuaGFuY2VyLnByb3RvdHlwZSk7XG4gIH1cblxuICBpZiAoUmFkaXVtRW5oYW5jZXIucHJvcFR5cGVzICYmIFJhZGl1bUVuaGFuY2VyLnByb3BUeXBlcy5zdHlsZSkge1xuICAgIFJhZGl1bUVuaGFuY2VyLnByb3BUeXBlcyA9IF9leHRlbmRzKHt9LCBSYWRpdW1FbmhhbmNlci5wcm9wVHlwZXMsIHtcbiAgICAgIHN0eWxlOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0LlByb3BUeXBlcy5hcnJheSwgX3JlYWN0LlByb3BUeXBlcy5vYmplY3RdKVxuICAgIH0pO1xuICB9XG5cbiAgUmFkaXVtRW5oYW5jZXIuZGlzcGxheU5hbWUgPSBjb21wb25lbnQuZGlzcGxheU5hbWUgfHwgY29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG5cbiAgUmFkaXVtRW5oYW5jZXIuY29udGV4dFR5cGVzID0gX2V4dGVuZHMoe30sIFJhZGl1bUVuaGFuY2VyLmNvbnRleHRUeXBlcywge1xuICAgIF9yYWRpdW1Db25maWc6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIF9yYWRpdW1TdHlsZUtlZXBlcjogX3JlYWN0LlByb3BUeXBlcy5pbnN0YW5jZU9mKF9zdHlsZUtlZXBlcjIuZGVmYXVsdClcbiAgfSk7XG5cbiAgUmFkaXVtRW5oYW5jZXIuY2hpbGRDb250ZXh0VHlwZXMgPSBfZXh0ZW5kcyh7fSwgUmFkaXVtRW5oYW5jZXIuY2hpbGRDb250ZXh0VHlwZXMsIHtcbiAgICBfcmFkaXVtQ29uZmlnOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBfcmFkaXVtU3R5bGVLZWVwZXI6IF9yZWFjdC5Qcm9wVHlwZXMuaW5zdGFuY2VPZihfc3R5bGVLZWVwZXIyLmRlZmF1bHQpXG4gIH0pO1xuXG4gIHJldHVybiBSYWRpdW1FbmhhbmNlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuXG52YXIgZ2V0U3RhdGVLZXkgPSBmdW5jdGlvbiBnZXRTdGF0ZUtleShlbGVtZW50S2V5KSB7XG4gIHJldHVybiBlbGVtZW50S2V5ID09PSBudWxsIHx8IGVsZW1lbnRLZXkgPT09IHVuZGVmaW5lZCA/ICdtYWluJyA6IGVsZW1lbnRLZXkudG9TdHJpbmcoKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGdldFN0YXRlS2V5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2dldFN0YXRlS2V5ID0gcmVxdWlyZSgnLi9nZXQtc3RhdGUta2V5Jyk7XG5cbnZhciBfZ2V0U3RhdGVLZXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0U3RhdGVLZXkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ2V0U3RhdGUgPSBmdW5jdGlvbiBnZXRTdGF0ZShzdGF0ZSwgZWxlbWVudEtleSwgdmFsdWUpIHtcbiAgdmFyIGtleSA9ICgwLCBfZ2V0U3RhdGVLZXkyLmRlZmF1bHQpKGVsZW1lbnRLZXkpO1xuXG4gIHJldHVybiAhIXN0YXRlICYmICEhc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGUgJiYgISFzdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZVtrZXldICYmIHN0YXRlLl9yYWRpdW1TdHlsZVN0YXRlW2tleV1bdmFsdWVdO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0U3RhdGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBoYXNoO1xuXG5cbi8vIGEgc2ltcGxlIGRqYjIgaGFzaCBiYXNlZCBvbiBoYXNoLXN0cmluZzpcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9NYXR0aGV3QmFya2VyL2hhc2gtc3RyaW5nL2Jsb2IvbWFzdGVyL3NvdXJjZS9oYXNoLXN0cmluZy5qc1xuLy8gcmV0dXJucyBhIGhleC1lbmNvZGVkIGhhc2hcbmZ1bmN0aW9uIGhhc2godGV4dCkge1xuICBpZiAoIXRleHQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB2YXIgaGFzaFZhbHVlID0gNTM4MTtcbiAgdmFyIGluZGV4ID0gdGV4dC5sZW5ndGggLSAxO1xuXG4gIHdoaWxlIChpbmRleCkge1xuICAgIGhhc2hWYWx1ZSA9IGhhc2hWYWx1ZSAqIDMzIF4gdGV4dC5jaGFyQ29kZUF0KGluZGV4KTtcbiAgICBpbmRleCAtPSAxO1xuICB9XG5cbiAgcmV0dXJuIChoYXNoVmFsdWUgPj4+IDApLnRvU3RyaW5nKDE2KTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9lbmhhbmNlciA9IHJlcXVpcmUoJy4vZW5oYW5jZXInKTtcblxudmFyIF9lbmhhbmNlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9lbmhhbmNlcik7XG5cbnZhciBfcGx1Z2lucyA9IHJlcXVpcmUoJy4vcGx1Z2lucycpO1xuXG52YXIgX3BsdWdpbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGx1Z2lucyk7XG5cbnZhciBfc3R5bGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvc3R5bGUnKTtcblxudmFyIF9zdHlsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHlsZSk7XG5cbnZhciBfc3R5bGVSb290ID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3N0eWxlLXJvb3QnKTtcblxudmFyIF9zdHlsZVJvb3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3R5bGVSb290KTtcblxudmFyIF9nZXRTdGF0ZSA9IHJlcXVpcmUoJy4vZ2V0LXN0YXRlJyk7XG5cbnZhciBfZ2V0U3RhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0U3RhdGUpO1xuXG52YXIgX2tleWZyYW1lcyA9IHJlcXVpcmUoJy4va2V5ZnJhbWVzJyk7XG5cbnZhciBfa2V5ZnJhbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleWZyYW1lcyk7XG5cbnZhciBfcmVzb2x2ZVN0eWxlcyA9IHJlcXVpcmUoJy4vcmVzb2x2ZS1zdHlsZXMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gUmFkaXVtKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gIHJldHVybiAoMCwgX2VuaGFuY2VyMi5kZWZhdWx0KShDb21wb3NlZENvbXBvbmVudCk7XG59XG5cblJhZGl1bS5QbHVnaW5zID0gX3BsdWdpbnMyLmRlZmF1bHQ7XG5SYWRpdW0uU3R5bGUgPSBfc3R5bGUyLmRlZmF1bHQ7XG5SYWRpdW0uU3R5bGVSb290ID0gX3N0eWxlUm9vdDIuZGVmYXVsdDtcblJhZGl1bS5nZXRTdGF0ZSA9IF9nZXRTdGF0ZTIuZGVmYXVsdDtcblJhZGl1bS5rZXlmcmFtZXMgPSBfa2V5ZnJhbWVzMi5kZWZhdWx0O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBSYWRpdW0uVGVzdE1vZGUgPSB7XG4gICAgY2xlYXJTdGF0ZTogX3Jlc29sdmVTdHlsZXMuX19jbGVhclN0YXRlRm9yVGVzdHMsXG4gICAgZGlzYWJsZTogX3Jlc29sdmVTdHlsZXMuX19zZXRUZXN0TW9kZS5iaW5kKG51bGwsIGZhbHNlKSxcbiAgICBlbmFibGU6IF9yZXNvbHZlU3R5bGVzLl9fc2V0VGVzdE1vZGUuYmluZChudWxsLCB0cnVlKVxuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBSYWRpdW07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBrZXlmcmFtZXM7XG5cbnZhciBfY3NzUnVsZVNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9jc3MtcnVsZS1zZXQtdG8tc3RyaW5nJyk7XG5cbnZhciBfY3NzUnVsZVNldFRvU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc1J1bGVTZXRUb1N0cmluZyk7XG5cbnZhciBfaGFzaCA9IHJlcXVpcmUoJy4vaGFzaCcpO1xuXG52YXIgX2hhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGFzaCk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGtleWZyYW1lcyhrZXlmcmFtZVJ1bGVzLCBuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgX19yYWRpdW1LZXlmcmFtZXM6IHRydWUsXG4gICAgX19wcm9jZXNzOiBmdW5jdGlvbiBfX3Byb2Nlc3ModXNlckFnZW50KSB7XG4gICAgICB2YXIga2V5ZnJhbWVzUHJlZml4ZWQgPSAoMCwgX3ByZWZpeGVyLmdldFByZWZpeGVkS2V5ZnJhbWVzKSh1c2VyQWdlbnQpO1xuICAgICAgdmFyIHJ1bGVzID0gT2JqZWN0LmtleXMoa2V5ZnJhbWVSdWxlcykubWFwKGZ1bmN0aW9uIChwZXJjZW50YWdlKSB7XG4gICAgICAgIHJldHVybiAoMCwgX2Nzc1J1bGVTZXRUb1N0cmluZzIuZGVmYXVsdCkocGVyY2VudGFnZSwga2V5ZnJhbWVSdWxlc1twZXJjZW50YWdlXSwgdXNlckFnZW50KTtcbiAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgdmFyIGFuaW1hdGlvbk5hbWUgPSAobmFtZSA/IG5hbWUgKyAnLScgOiAnJykgKyAncmFkaXVtLWFuaW1hdGlvbi0nICsgKDAsIF9oYXNoMi5kZWZhdWx0KShydWxlcyk7XG4gICAgICB2YXIgY3NzID0gJ0AnICsga2V5ZnJhbWVzUHJlZml4ZWQgKyAnICcgKyBhbmltYXRpb25OYW1lICsgJyB7XFxuJyArIHJ1bGVzICsgJ1xcbn1cXG4nO1xuICAgICAgcmV0dXJuIHsgY3NzOiBjc3MsIGFuaW1hdGlvbk5hbWU6IGFuaW1hdGlvbk5hbWUgfTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IG1hcE9iamVjdDtcbmZ1bmN0aW9uIG1hcE9iamVjdChvYmplY3QsIG1hcHBlcikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqZWN0KS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG4gICAgcmVzdWx0W2tleV0gPSBtYXBwZXIob2JqZWN0W2tleV0sIGtleSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmlzTmVzdGVkU3R5bGUgPSBpc05lc3RlZFN0eWxlO1xuZXhwb3J0cy5tZXJnZVN0eWxlcyA9IG1lcmdlU3R5bGVzO1xuZnVuY3Rpb24gaXNOZXN0ZWRTdHlsZSh2YWx1ZSkge1xuICAvLyBEb24ndCBtZXJnZSBvYmplY3RzIG92ZXJyaWRpbmcgdG9TdHJpbmcsIHNpbmNlIHRoZXkgc2hvdWxkIGJlIGNvbnZlcnRlZFxuICAvLyB0byBzdHJpbmcgdmFsdWVzLlxuICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCAmJiB2YWx1ZS50b1N0cmluZyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbn1cblxuLy8gTWVyZ2Ugc3R5bGUgb2JqZWN0cy4gRGVlcCBtZXJnZSBwbGFpbiBvYmplY3QgdmFsdWVzLlxuZnVuY3Rpb24gbWVyZ2VTdHlsZXMoc3R5bGVzKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcblxuICBzdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgICBpZiAoIXN0eWxlIHx8ICh0eXBlb2Ygc3R5bGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHN0eWxlKSkgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGUpKSB7XG4gICAgICBzdHlsZSA9IG1lcmdlU3R5bGVzKHN0eWxlKTtcbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAvLyBTaW1wbGUgY2FzZSwgbm90aGluZyBuZXN0ZWRcbiAgICAgIGlmICghaXNOZXN0ZWRTdHlsZShzdHlsZVtrZXldKSB8fCAhaXNOZXN0ZWRTdHlsZShyZXN1bHRba2V5XSkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBzdHlsZVtrZXldO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIG5lc3RlZCBtZWRpYSwgZG9uJ3QgbWVyZ2UgdGhlIG5lc3RlZCBzdHlsZXMsIGFwcGVuZCBhIHNwYWNlIHRvIHRoZVxuICAgICAgLy8gZW5kIChiZW5pZ24gd2hlbiBjb252ZXJ0ZWQgdG8gQ1NTKS4gVGhpcyB3YXkgd2UgZG9uJ3QgZW5kIHVwIG1lcmdpbmdcbiAgICAgIC8vIG1lZGlhIHF1ZXJpZXMgdGhhdCBhcHBlYXIgbGF0ZXIgaW4gdGhlIGNoYWluIHdpdGggdGhvc2UgdGhhdCBhcHBlYXJcbiAgICAgIC8vIGVhcmxpZXIuXG4gICAgICBpZiAoa2V5LmluZGV4T2YoJ0BtZWRpYScpID09PSAwKSB7XG4gICAgICAgIHZhciBuZXdLZXkgPSBrZXk7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICAgICAgICBuZXdLZXkgKz0gJyAnO1xuICAgICAgICAgIGlmICghcmVzdWx0W25ld0tleV0pIHtcbiAgICAgICAgICAgIHJlc3VsdFtuZXdLZXldID0gc3R5bGVba2V5XTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTWVyZ2UgYWxsIG90aGVyIG5lc3RlZCBzdHlsZXMgcmVjdXJzaXZlbHlcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2VTdHlsZXMoW3Jlc3VsdFtrZXldLCBzdHlsZVtrZXldXSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jaGVja1Byb3BzID0gZnVuY3Rpb24gY2hlY2tQcm9wcygpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIC8vIFdhcm4gaWYgeW91IHVzZSBsb25naGFuZCBhbmQgc2hvcnRoYW5kIHByb3BlcnRpZXMgaW4gdGhlIHNhbWUgc3R5bGVcbiAgICAvLyBvYmplY3QuXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1Nob3J0aGFuZF9wcm9wZXJ0aWVzXG5cbiAgICB2YXIgc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zID0ge1xuICAgICAgJ2JhY2tncm91bmQnOiBbJ2JhY2tncm91bmRBdHRhY2htZW50JywgJ2JhY2tncm91bmRCbGVuZE1vZGUnLCAnYmFja2dyb3VuZENsaXAnLCAnYmFja2dyb3VuZENvbG9yJywgJ2JhY2tncm91bmRJbWFnZScsICdiYWNrZ3JvdW5kT3JpZ2luJywgJ2JhY2tncm91bmRQb3NpdGlvbicsICdiYWNrZ3JvdW5kUG9zaXRpb25YJywgJ2JhY2tncm91bmRQb3NpdGlvblknLCAnYmFja2dyb3VuZFJlcGVhdCcsICdiYWNrZ3JvdW5kUmVwZWF0WCcsICdiYWNrZ3JvdW5kUmVwZWF0WScsICdiYWNrZ3JvdW5kU2l6ZSddLFxuICAgICAgJ2JvcmRlcic6IFsnYm9yZGVyQm90dG9tJywgJ2JvcmRlckJvdHRvbUNvbG9yJywgJ2JvcmRlckJvdHRvbVN0eWxlJywgJ2JvcmRlckJvdHRvbVdpZHRoJywgJ2JvcmRlckNvbG9yJywgJ2JvcmRlckxlZnQnLCAnYm9yZGVyTGVmdENvbG9yJywgJ2JvcmRlckxlZnRTdHlsZScsICdib3JkZXJMZWZ0V2lkdGgnLCAnYm9yZGVyUmlnaHQnLCAnYm9yZGVyUmlnaHRDb2xvcicsICdib3JkZXJSaWdodFN0eWxlJywgJ2JvcmRlclJpZ2h0V2lkdGgnLCAnYm9yZGVyU3R5bGUnLCAnYm9yZGVyVG9wJywgJ2JvcmRlclRvcENvbG9yJywgJ2JvcmRlclRvcFN0eWxlJywgJ2JvcmRlclRvcFdpZHRoJywgJ2JvcmRlcldpZHRoJ10sXG4gICAgICAnYm9yZGVySW1hZ2UnOiBbJ2JvcmRlckltYWdlT3V0c2V0JywgJ2JvcmRlckltYWdlUmVwZWF0JywgJ2JvcmRlckltYWdlU2xpY2UnLCAnYm9yZGVySW1hZ2VTb3VyY2UnLCAnYm9yZGVySW1hZ2VXaWR0aCddLFxuICAgICAgJ2JvcmRlclJhZGl1cyc6IFsnYm9yZGVyQm90dG9tTGVmdFJhZGl1cycsICdib3JkZXJCb3R0b21SaWdodFJhZGl1cycsICdib3JkZXJUb3BMZWZ0UmFkaXVzJywgJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJ10sXG4gICAgICAnZm9udCc6IFsnZm9udEZhbWlseScsICdmb250S2VybmluZycsICdmb250U2l6ZScsICdmb250U3RyZXRjaCcsICdmb250U3R5bGUnLCAnZm9udFZhcmlhbnQnLCAnZm9udFZhcmlhbnRMaWdhdHVyZXMnLCAnZm9udFdlaWdodCcsICdsaW5lSGVpZ2h0J10sXG4gICAgICAnbGlzdFN0eWxlJzogWydsaXN0U3R5bGVJbWFnZScsICdsaXN0U3R5bGVQb3NpdGlvbicsICdsaXN0U3R5bGVUeXBlJ10sXG4gICAgICAnbWFyZ2luJzogWydtYXJnaW5Cb3R0b20nLCAnbWFyZ2luTGVmdCcsICdtYXJnaW5SaWdodCcsICdtYXJnaW5Ub3AnXSxcbiAgICAgICdwYWRkaW5nJzogWydwYWRkaW5nQm90dG9tJywgJ3BhZGRpbmdMZWZ0JywgJ3BhZGRpbmdSaWdodCcsICdwYWRkaW5nVG9wJ10sXG4gICAgICAndHJhbnNpdGlvbic6IFsndHJhbnNpdGlvbkRlbGF5JywgJ3RyYW5zaXRpb25EdXJhdGlvbicsICd0cmFuc2l0aW9uUHJvcGVydHknLCAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJ11cbiAgICB9O1xuXG4gICAgX2NoZWNrUHJvcHMgPSBmdW5jdGlvbiBjaGVja1Byb3BzKGNvbmZpZykge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBjb25maWcuY29tcG9uZW50TmFtZTtcbiAgICAgIHZhciBzdHlsZSA9IGNvbmZpZy5zdHlsZTtcblxuICAgICAgaWYgKCh0eXBlb2Ygc3R5bGUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHN0eWxlKSkgIT09ICdvYmplY3QnIHx8ICFzdHlsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzdHlsZUtleXMgPSBPYmplY3Qua2V5cyhzdHlsZSk7XG4gICAgICBzdHlsZUtleXMuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGVLZXkpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zW3N0eWxlS2V5XSkgJiYgc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zW3N0eWxlS2V5XS5zb21lKGZ1bmN0aW9uIChzcCkge1xuICAgICAgICAgIHJldHVybiBzdHlsZUtleXMuaW5kZXhPZihzcCkgIT09IC0xO1xuICAgICAgICB9KSkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1JhZGl1bTogcHJvcGVydHkgXCInICsgc3R5bGVLZXkgKyAnXCIgaW4gc3R5bGUgb2JqZWN0Jywgc3R5bGUsICc6IGRvIG5vdCBtaXggbG9uZ2hhbmQgYW5kICcgKyAnc2hvcnRoYW5kIHByb3BlcnRpZXMgaW4gdGhlIHNhbWUgc3R5bGUgb2JqZWN0LiBDaGVjayB0aGUgcmVuZGVyICcgKyAnbWV0aG9kIG9mICcgKyBjb21wb25lbnROYW1lICsgJy4nLCAnU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3JtaWRhYmxlTGFicy9yYWRpdW0vaXNzdWVzLzk1IGZvciBtb3JlICcgKyAnaW5mb3JtYXRpb24uJyk7XG4gICAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzdHlsZUtleXMuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICByZXR1cm4gX2NoZWNrUHJvcHMoX2V4dGVuZHMoe30sIGNvbmZpZywgeyBzdHlsZTogc3R5bGVba10gfSkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2NoZWNrUHJvcHM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY2hlY2tQcm9wc1BsdWdpbiA9IHJlcXVpcmUoJy4vY2hlY2stcHJvcHMtcGx1Z2luJyk7XG5cbnZhciBfY2hlY2tQcm9wc1BsdWdpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaGVja1Byb3BzUGx1Z2luKTtcblxudmFyIF9rZXlmcmFtZXNQbHVnaW4gPSByZXF1aXJlKCcuL2tleWZyYW1lcy1wbHVnaW4nKTtcblxudmFyIF9rZXlmcmFtZXNQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfa2V5ZnJhbWVzUGx1Z2luKTtcblxudmFyIF9tZXJnZVN0eWxlQXJyYXlQbHVnaW4gPSByZXF1aXJlKCcuL21lcmdlLXN0eWxlLWFycmF5LXBsdWdpbicpO1xuXG52YXIgX21lcmdlU3R5bGVBcnJheVBsdWdpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tZXJnZVN0eWxlQXJyYXlQbHVnaW4pO1xuXG52YXIgX3ByZWZpeFBsdWdpbiA9IHJlcXVpcmUoJy4vcHJlZml4LXBsdWdpbicpO1xuXG52YXIgX3ByZWZpeFBsdWdpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhQbHVnaW4pO1xuXG52YXIgX3JlbW92ZU5lc3RlZFN0eWxlc1BsdWdpbiA9IHJlcXVpcmUoJy4vcmVtb3ZlLW5lc3RlZC1zdHlsZXMtcGx1Z2luJyk7XG5cbnZhciBfcmVtb3ZlTmVzdGVkU3R5bGVzUGx1Z2luMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlbW92ZU5lc3RlZFN0eWxlc1BsdWdpbik7XG5cbnZhciBfcmVzb2x2ZUludGVyYWN0aW9uU3R5bGVzUGx1Z2luID0gcmVxdWlyZSgnLi9yZXNvbHZlLWludGVyYWN0aW9uLXN0eWxlcy1wbHVnaW4nKTtcblxudmFyIF9yZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXNQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVzb2x2ZUludGVyYWN0aW9uU3R5bGVzUGx1Z2luKTtcblxudmFyIF9yZXNvbHZlTWVkaWFRdWVyaWVzUGx1Z2luID0gcmVxdWlyZSgnLi9yZXNvbHZlLW1lZGlhLXF1ZXJpZXMtcGx1Z2luJyk7XG5cbnZhciBfcmVzb2x2ZU1lZGlhUXVlcmllc1BsdWdpbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZXNvbHZlTWVkaWFRdWVyaWVzUGx1Z2luKTtcblxudmFyIF92aXNpdGVkUGx1Z2luID0gcmVxdWlyZSgnLi92aXNpdGVkLXBsdWdpbicpO1xuXG52YXIgX3Zpc2l0ZWRQbHVnaW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmlzaXRlZFBsdWdpbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgY2hlY2tQcm9wczogX2NoZWNrUHJvcHNQbHVnaW4yLmRlZmF1bHQsXG4gIGtleWZyYW1lczogX2tleWZyYW1lc1BsdWdpbjIuZGVmYXVsdCxcbiAgbWVyZ2VTdHlsZUFycmF5OiBfbWVyZ2VTdHlsZUFycmF5UGx1Z2luMi5kZWZhdWx0LFxuICBwcmVmaXg6IF9wcmVmaXhQbHVnaW4yLmRlZmF1bHQsXG4gIHJlbW92ZU5lc3RlZFN0eWxlczogX3JlbW92ZU5lc3RlZFN0eWxlc1BsdWdpbjIuZGVmYXVsdCxcbiAgcmVzb2x2ZUludGVyYWN0aW9uU3R5bGVzOiBfcmVzb2x2ZUludGVyYWN0aW9uU3R5bGVzUGx1Z2luMi5kZWZhdWx0LFxuICByZXNvbHZlTWVkaWFRdWVyaWVzOiBfcmVzb2x2ZU1lZGlhUXVlcmllc1BsdWdpbjIuZGVmYXVsdCxcbiAgdmlzaXRlZDogX3Zpc2l0ZWRQbHVnaW4yLmRlZmF1bHRcbn07XG4vKiBlc2xpbnQtZGlzYWJsZSBibG9jay1zY29wZWQtY29uc3QgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0ga2V5ZnJhbWVzUGx1Z2luO1xuZnVuY3Rpb24ga2V5ZnJhbWVzUGx1Z2luKF9yZWYgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zaGFkb3dcbikge1xuICB2YXIgYWRkQ1NTID0gX3JlZi5hZGRDU1M7XG4gIHZhciBjb25maWcgPSBfcmVmLmNvbmZpZztcbiAgdmFyIHN0eWxlID0gX3JlZi5zdHlsZTtcblxuICB2YXIgbmV3U3R5bGUgPSBPYmplY3Qua2V5cyhzdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChuZXdTdHlsZUluUHJvZ3Jlc3MsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlW2tleV07XG4gICAgaWYgKGtleSA9PT0gJ2FuaW1hdGlvbk5hbWUnICYmIHZhbHVlICYmIHZhbHVlLl9fcmFkaXVtS2V5ZnJhbWVzKSB7XG4gICAgICB2YXIga2V5ZnJhbWVzVmFsdWUgPSB2YWx1ZTtcblxuICAgICAgdmFyIF9rZXlmcmFtZXNWYWx1ZSRfX3BybyA9IGtleWZyYW1lc1ZhbHVlLl9fcHJvY2Vzcyhjb25maWcudXNlckFnZW50KTtcblxuICAgICAgdmFyIGFuaW1hdGlvbk5hbWUgPSBfa2V5ZnJhbWVzVmFsdWUkX19wcm8uYW5pbWF0aW9uTmFtZTtcbiAgICAgIHZhciBjc3MgPSBfa2V5ZnJhbWVzVmFsdWUkX19wcm8uY3NzO1xuXG4gICAgICBhZGRDU1MoY3NzKTtcbiAgICAgIHZhbHVlID0gYW5pbWF0aW9uTmFtZTtcbiAgICB9XG5cbiAgICBuZXdTdHlsZUluUHJvZ3Jlc3Nba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBuZXdTdHlsZUluUHJvZ3Jlc3M7XG4gIH0sIHt9KTtcbiAgcmV0dXJuIHsgc3R5bGU6IG5ld1N0eWxlIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cblxuLy8gQ29udmVuaWVudCBzeW50YXggZm9yIG11bHRpcGxlIHN0eWxlczogYHN0eWxlPXtbc3R5bGUxLCBzdHlsZTIsIGV0Y119YFxuLy8gSWdub3JlcyBub24tb2JqZWN0cywgc28geW91IGNhbiBkbyBgdGhpcy5zdGF0ZS5pc0Nvb2wgJiYgc3R5bGVzLmNvb2xgLlxudmFyIG1lcmdlU3R5bGVBcnJheVBsdWdpbiA9IGZ1bmN0aW9uIG1lcmdlU3R5bGVBcnJheVBsdWdpbihfcmVmKSB7XG4gIHZhciBzdHlsZSA9IF9yZWYuc3R5bGU7XG4gIHZhciBtZXJnZVN0eWxlcyA9IF9yZWYubWVyZ2VTdHlsZXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2hhZG93XG4gIHZhciBuZXdTdHlsZSA9IEFycmF5LmlzQXJyYXkoc3R5bGUpID8gbWVyZ2VTdHlsZXMoc3R5bGUpIDogc3R5bGU7XG4gIHJldHVybiB7IHN0eWxlOiBuZXdTdHlsZSB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbWVyZ2VTdHlsZUFycmF5UGx1Z2luO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5cbnZhciBfY2FsbGJhY2tzID0gW107XG52YXIgX21vdXNlVXBMaXN0ZW5lcklzQWN0aXZlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIF9oYW5kbGVNb3VzZVVwKCkge1xuICBfY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfSk7XG59XG5cbnZhciBzdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUoY2FsbGJhY2spIHtcbiAgaWYgKF9jYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjaykgPT09IC0xKSB7XG4gICAgX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGlmICghX21vdXNlVXBMaXN0ZW5lcklzQWN0aXZlKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfaGFuZGxlTW91c2VVcCk7XG4gICAgX21vdXNlVXBMaXN0ZW5lcklzQWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICB2YXIgaW5kZXggPSBfY2FsbGJhY2tzLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgX2NhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICBpZiAoX2NhbGxiYWNrcy5sZW5ndGggPT09IDAgJiYgX21vdXNlVXBMaXN0ZW5lcklzQWN0aXZlKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgX2hhbmRsZU1vdXNlVXApO1xuICAgICAgICBfbW91c2VVcExpc3RlbmVySXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICBfX3RyaWdnZXJGb3JUZXN0czogX2hhbmRsZU1vdXNlVXBcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwcmVmaXhQbHVnaW47XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuLi9wcmVmaXhlcicpO1xuXG5mdW5jdGlvbiBwcmVmaXhQbHVnaW4oX3JlZiAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvd1xuKSB7XG4gIHZhciBjb25maWcgPSBfcmVmLmNvbmZpZztcbiAgdmFyIHN0eWxlID0gX3JlZi5zdHlsZTtcblxuICB2YXIgbmV3U3R5bGUgPSAoMCwgX3ByZWZpeGVyLmdldFByZWZpeGVkU3R5bGUpKHN0eWxlLCBjb25maWcudXNlckFnZW50KTtcbiAgcmV0dXJuIHsgc3R5bGU6IG5ld1N0eWxlIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByZW1vdmVOZXN0ZWRTdHlsZXM7XG5mdW5jdGlvbiByZW1vdmVOZXN0ZWRTdHlsZXMoX3JlZikge1xuICB2YXIgaXNOZXN0ZWRTdHlsZSA9IF9yZWYuaXNOZXN0ZWRTdHlsZTtcbiAgdmFyIHN0eWxlID0gX3JlZi5zdHlsZTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zaGFkb3dcbiAgdmFyIG5ld1N0eWxlID0gT2JqZWN0LmtleXMoc3R5bGUpLnJlZHVjZShmdW5jdGlvbiAobmV3U3R5bGVJblByb2dyZXNzLCBrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVtrZXldO1xuICAgIGlmICghaXNOZXN0ZWRTdHlsZSh2YWx1ZSkpIHtcbiAgICAgIG5ld1N0eWxlSW5Qcm9ncmVzc1trZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBuZXdTdHlsZUluUHJvZ3Jlc3M7XG4gIH0sIHt9KTtcblxuICByZXR1cm4ge1xuICAgIHN0eWxlOiBuZXdTdHlsZVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX21vdXNlVXBMaXN0ZW5lciA9IHJlcXVpcmUoJy4vbW91c2UtdXAtbGlzdGVuZXInKTtcblxudmFyIF9tb3VzZVVwTGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbW91c2VVcExpc3RlbmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIF9pc0ludGVyYWN0aXZlU3R5bGVGaWVsZCA9IGZ1bmN0aW9uIF9pc0ludGVyYWN0aXZlU3R5bGVGaWVsZChzdHlsZUZpZWxkTmFtZSkge1xuICByZXR1cm4gc3R5bGVGaWVsZE5hbWUgPT09ICc6aG92ZXInIHx8IHN0eWxlRmllbGROYW1lID09PSAnOmFjdGl2ZScgfHwgc3R5bGVGaWVsZE5hbWUgPT09ICc6Zm9jdXMnO1xufTtcblxudmFyIHJlc29sdmVJbnRlcmFjdGlvblN0eWxlcyA9IGZ1bmN0aW9uIHJlc29sdmVJbnRlcmFjdGlvblN0eWxlcyhjb25maWcpIHtcbiAgdmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gY29uZmlnLkV4ZWN1dGlvbkVudmlyb25tZW50O1xuICB2YXIgZ2V0Q29tcG9uZW50RmllbGQgPSBjb25maWcuZ2V0Q29tcG9uZW50RmllbGQ7XG4gIHZhciBnZXRTdGF0ZSA9IGNvbmZpZy5nZXRTdGF0ZTtcbiAgdmFyIG1lcmdlU3R5bGVzID0gY29uZmlnLm1lcmdlU3R5bGVzO1xuICB2YXIgcHJvcHMgPSBjb25maWcucHJvcHM7XG4gIHZhciBzZXRTdGF0ZSA9IGNvbmZpZy5zZXRTdGF0ZTtcbiAgdmFyIHN0eWxlID0gY29uZmlnLnN0eWxlO1xuXG5cbiAgdmFyIG5ld0NvbXBvbmVudEZpZWxkcyA9IHt9O1xuICB2YXIgbmV3UHJvcHMgPSB7fTtcblxuICAvLyBPbmx5IGFkZCBoYW5kbGVycyBpZiBuZWNlc3NhcnlcbiAgaWYgKHN0eWxlWyc6aG92ZXInXSkge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBBbHdheXMgY2FsbCB0aGUgZXhpc3RpbmcgaGFuZGxlciBpZiBvbmUgaXMgYWxyZWFkeSBkZWZpbmVkLlxuICAgICAgLy8gVGhpcyBjb2RlLCBhbmQgdGhlIHZlcnkgc2ltaWxhciBvbmVzIGJlbG93LCBjb3VsZCBiZSBhYnN0cmFjdGVkIGEgYml0XG4gICAgICAvLyBtb3JlLCBidXQgaXQgaHVydHMgcmVhZGFiaWxpdHkgSU1PLlxuICAgICAgdmFyIGV4aXN0aW5nT25Nb3VzZUVudGVyID0gcHJvcHMub25Nb3VzZUVudGVyO1xuICAgICAgbmV3UHJvcHMub25Nb3VzZUVudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXhpc3RpbmdPbk1vdXNlRW50ZXIgJiYgZXhpc3RpbmdPbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIHNldFN0YXRlKCc6aG92ZXInLCB0cnVlKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBleGlzdGluZ09uTW91c2VMZWF2ZSA9IHByb3BzLm9uTW91c2VMZWF2ZTtcbiAgICAgIG5ld1Byb3BzLm9uTW91c2VMZWF2ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGV4aXN0aW5nT25Nb3VzZUxlYXZlICYmIGV4aXN0aW5nT25Nb3VzZUxlYXZlKGUpO1xuICAgICAgICBzZXRTdGF0ZSgnOmhvdmVyJywgZmFsc2UpO1xuICAgICAgfTtcbiAgICB9KSgpO1xuICB9XG5cbiAgaWYgKHN0eWxlWyc6YWN0aXZlJ10pIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGV4aXN0aW5nT25Nb3VzZURvd24gPSBwcm9wcy5vbk1vdXNlRG93bjtcbiAgICAgIG5ld1Byb3BzLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXhpc3RpbmdPbk1vdXNlRG93biAmJiBleGlzdGluZ09uTW91c2VEb3duKGUpO1xuICAgICAgICBuZXdDb21wb25lbnRGaWVsZHMuX2xhc3RNb3VzZURvd24gPSBEYXRlLm5vdygpO1xuICAgICAgICBzZXRTdGF0ZSgnOmFjdGl2ZScsICd2aWFtb3VzZWRvd24nKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBleGlzdGluZ09uS2V5RG93biA9IHByb3BzLm9uS2V5RG93bjtcbiAgICAgIG5ld1Byb3BzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGV4aXN0aW5nT25LZXlEb3duICYmIGV4aXN0aW5nT25LZXlEb3duKGUpO1xuICAgICAgICBpZiAoZS5rZXkgPT09ICcgJyB8fCBlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgIHNldFN0YXRlKCc6YWN0aXZlJywgJ3ZpYWtleWRvd24nKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIGV4aXN0aW5nT25LZXlVcCA9IHByb3BzLm9uS2V5VXA7XG4gICAgICBuZXdQcm9wcy5vbktleVVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZXhpc3RpbmdPbktleVVwICYmIGV4aXN0aW5nT25LZXlVcChlKTtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnICcgfHwgZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICBzZXRTdGF0ZSgnOmFjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpO1xuICB9XG5cbiAgaWYgKHN0eWxlWyc6Zm9jdXMnXSkge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZXhpc3RpbmdPbkZvY3VzID0gcHJvcHMub25Gb2N1cztcbiAgICAgIG5ld1Byb3BzLm9uRm9jdXMgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBleGlzdGluZ09uRm9jdXMgJiYgZXhpc3RpbmdPbkZvY3VzKGUpO1xuICAgICAgICBzZXRTdGF0ZSgnOmZvY3VzJywgdHJ1ZSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgZXhpc3RpbmdPbkJsdXIgPSBwcm9wcy5vbkJsdXI7XG4gICAgICBuZXdQcm9wcy5vbkJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBleGlzdGluZ09uQmx1ciAmJiBleGlzdGluZ09uQmx1cihlKTtcbiAgICAgICAgc2V0U3RhdGUoJzpmb2N1cycsIGZhbHNlKTtcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgfVxuXG4gIGlmIChzdHlsZVsnOmFjdGl2ZSddICYmICFnZXRDb21wb25lbnRGaWVsZCgnX3JhZGl1bU1vdXNlVXBMaXN0ZW5lcicpICYmIEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZUV2ZW50TGlzdGVuZXJzKSB7XG4gICAgbmV3Q29tcG9uZW50RmllbGRzLl9yYWRpdW1Nb3VzZVVwTGlzdGVuZXIgPSBfbW91c2VVcExpc3RlbmVyMi5kZWZhdWx0LnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICBPYmplY3Qua2V5cyhnZXRDb21wb25lbnRGaWVsZCgnc3RhdGUnKS5fcmFkaXVtU3R5bGVTdGF0ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChnZXRTdGF0ZSgnOmFjdGl2ZScsIGtleSkgPT09ICd2aWFtb3VzZWRvd24nKSB7XG4gICAgICAgICAgc2V0U3RhdGUoJzphY3RpdmUnLCBmYWxzZSwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBNZXJnZSB0aGUgc3R5bGVzIGluIHRoZSBvcmRlciB0aGV5IHdlcmUgZGVmaW5lZFxuICB2YXIgaW50ZXJhY3Rpb25TdHlsZXMgPSBwcm9wcy5kaXNhYmxlZCA/IFtzdHlsZVsnOmRpc2FibGVkJ11dIDogT2JqZWN0LmtleXMoc3R5bGUpLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBfaXNJbnRlcmFjdGl2ZVN0eWxlRmllbGQobmFtZSkgJiYgZ2V0U3RhdGUobmFtZSk7XG4gIH0pLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBzdHlsZVtuYW1lXTtcbiAgfSk7XG5cbiAgdmFyIG5ld1N0eWxlID0gbWVyZ2VTdHlsZXMoW3N0eWxlXS5jb25jYXQoaW50ZXJhY3Rpb25TdHlsZXMpKTtcblxuICAvLyBSZW1vdmUgaW50ZXJhY3RpdmUgc3R5bGVzXG4gIG5ld1N0eWxlID0gT2JqZWN0LmtleXMobmV3U3R5bGUpLnJlZHVjZShmdW5jdGlvbiAoc3R5bGVXaXRob3V0SW50ZXJhY3Rpb25zLCBuYW1lKSB7XG4gICAgaWYgKCFfaXNJbnRlcmFjdGl2ZVN0eWxlRmllbGQobmFtZSkgJiYgbmFtZSAhPT0gJzpkaXNhYmxlZCcpIHtcbiAgICAgIHN0eWxlV2l0aG91dEludGVyYWN0aW9uc1tuYW1lXSA9IG5ld1N0eWxlW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gc3R5bGVXaXRob3V0SW50ZXJhY3Rpb25zO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjb21wb25lbnRGaWVsZHM6IG5ld0NvbXBvbmVudEZpZWxkcyxcbiAgICBwcm9wczogbmV3UHJvcHMsXG4gICAgc3R5bGU6IG5ld1N0eWxlXG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSByZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHJlc29sdmVNZWRpYVF1ZXJpZXM7XG5cblxudmFyIF93aW5kb3dNYXRjaE1lZGlhID0gdm9pZCAwO1xuZnVuY3Rpb24gX2dldFdpbmRvd01hdGNoTWVkaWEoRXhlY3V0aW9uRW52aXJvbm1lbnQpIHtcbiAgaWYgKF93aW5kb3dNYXRjaE1lZGlhID09PSB1bmRlZmluZWQpIHtcbiAgICBfd2luZG93TWF0Y2hNZWRpYSA9ICEhRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NICYmICEhd2luZG93ICYmICEhd2luZG93Lm1hdGNoTWVkaWEgJiYgZnVuY3Rpb24gKG1lZGlhUXVlcnlTdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5U3RyaW5nKTtcbiAgICB9IHx8IG51bGw7XG4gIH1cbiAgcmV0dXJuIF93aW5kb3dNYXRjaE1lZGlhO1xufVxuXG5mdW5jdGlvbiBfZmlsdGVyT2JqZWN0KG9iaiwgcHJlZGljYXRlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHByZWRpY2F0ZShvYmpba2V5XSwga2V5KTtcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGtleSkge1xuICAgIHJlc3VsdFtrZXldID0gb2JqW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBfcmVtb3ZlTWVkaWFRdWVyaWVzKHN0eWxlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChzdHlsZVdpdGhvdXRNZWRpYSwga2V5KSB7XG4gICAgaWYgKGtleS5pbmRleE9mKCdAbWVkaWEnKSAhPT0gMCkge1xuICAgICAgc3R5bGVXaXRob3V0TWVkaWFba2V5XSA9IHN0eWxlW2tleV07XG4gICAgfVxuICAgIHJldHVybiBzdHlsZVdpdGhvdXRNZWRpYTtcbiAgfSwge30pO1xufVxuXG5mdW5jdGlvbiBfdG9wTGV2ZWxSdWxlc1RvQ1NTKF9yZWYpIHtcbiAgdmFyIGFkZENTUyA9IF9yZWYuYWRkQ1NTO1xuICB2YXIgYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUgPSBfcmVmLmFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlO1xuICB2YXIgY3NzUnVsZVNldFRvU3RyaW5nID0gX3JlZi5jc3NSdWxlU2V0VG9TdHJpbmc7XG4gIHZhciBoYXNoID0gX3JlZi5oYXNoO1xuICB2YXIgaXNOZXN0ZWRTdHlsZSA9IF9yZWYuaXNOZXN0ZWRTdHlsZTtcbiAgdmFyIHN0eWxlID0gX3JlZi5zdHlsZTtcbiAgdmFyIHVzZXJBZ2VudCA9IF9yZWYudXNlckFnZW50O1xuXG4gIHZhciBjbGFzc05hbWUgPSAnJztcbiAgT2JqZWN0LmtleXMoc3R5bGUpLmZpbHRlcihmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBuYW1lLmluZGV4T2YoJ0BtZWRpYScpID09PSAwO1xuICB9KS5tYXAoZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgdmFyIHRvcExldmVsUnVsZXMgPSBhcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZShfZmlsdGVyT2JqZWN0KHN0eWxlW3F1ZXJ5XSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gIWlzTmVzdGVkU3R5bGUodmFsdWUpO1xuICAgIH0pKTtcblxuICAgIGlmICghT2JqZWN0LmtleXModG9wTGV2ZWxSdWxlcykubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJ1bGVDU1MgPSBjc3NSdWxlU2V0VG9TdHJpbmcoJycsIHRvcExldmVsUnVsZXMsIHVzZXJBZ2VudCk7XG5cbiAgICAvLyBDU1MgY2xhc3NlcyBjYW5ub3Qgc3RhcnQgd2l0aCBhIG51bWJlclxuICAgIHZhciBtZWRpYVF1ZXJ5Q2xhc3NOYW1lID0gJ3JtcS0nICsgaGFzaChxdWVyeSArIHJ1bGVDU1MpO1xuICAgIHZhciBjc3MgPSBxdWVyeSArICd7IC4nICsgbWVkaWFRdWVyeUNsYXNzTmFtZSArIHJ1bGVDU1MgKyAnfSc7XG5cbiAgICBhZGRDU1MoY3NzKTtcblxuICAgIGNsYXNzTmFtZSArPSAoY2xhc3NOYW1lID8gJyAnIDogJycpICsgbWVkaWFRdWVyeUNsYXNzTmFtZTtcbiAgfSk7XG4gIHJldHVybiBjbGFzc05hbWU7XG59XG5cbmZ1bmN0aW9uIF9zdWJzY3JpYmVUb01lZGlhUXVlcnkoX3JlZjIpIHtcbiAgdmFyIGxpc3RlbmVyID0gX3JlZjIubGlzdGVuZXI7XG4gIHZhciBsaXN0ZW5lcnNCeVF1ZXJ5ID0gX3JlZjIubGlzdGVuZXJzQnlRdWVyeTtcbiAgdmFyIG1hdGNoTWVkaWEgPSBfcmVmMi5tYXRjaE1lZGlhO1xuICB2YXIgbWVkaWFRdWVyeUxpc3RzQnlRdWVyeSA9IF9yZWYyLm1lZGlhUXVlcnlMaXN0c0J5UXVlcnk7XG4gIHZhciBxdWVyeSA9IF9yZWYyLnF1ZXJ5O1xuXG4gIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgnQG1lZGlhICcsICcnKTtcblxuICB2YXIgbXFsID0gbWVkaWFRdWVyeUxpc3RzQnlRdWVyeVtxdWVyeV07XG4gIGlmICghbXFsICYmIG1hdGNoTWVkaWEpIHtcbiAgICBtZWRpYVF1ZXJ5TGlzdHNCeVF1ZXJ5W3F1ZXJ5XSA9IG1xbCA9IG1hdGNoTWVkaWEocXVlcnkpO1xuICB9XG5cbiAgaWYgKCFsaXN0ZW5lcnNCeVF1ZXJ5IHx8ICFsaXN0ZW5lcnNCeVF1ZXJ5W3F1ZXJ5XSkge1xuICAgIG1xbC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICBsaXN0ZW5lcnNCeVF1ZXJ5W3F1ZXJ5XSA9IHtcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgICBtcWwucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIG1xbDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU1lZGlhUXVlcmllcyhfcmVmMykge1xuICB2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSBfcmVmMy5FeGVjdXRpb25FbnZpcm9ubWVudDtcbiAgdmFyIGFkZENTUyA9IF9yZWYzLmFkZENTUztcbiAgdmFyIGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlID0gX3JlZjMuYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWU7XG4gIHZhciBjb25maWcgPSBfcmVmMy5jb25maWc7XG4gIHZhciBjc3NSdWxlU2V0VG9TdHJpbmcgPSBfcmVmMy5jc3NSdWxlU2V0VG9TdHJpbmc7XG4gIHZhciBnZXRDb21wb25lbnRGaWVsZCA9IF9yZWYzLmdldENvbXBvbmVudEZpZWxkO1xuICB2YXIgZ2V0R2xvYmFsU3RhdGUgPSBfcmVmMy5nZXRHbG9iYWxTdGF0ZTtcbiAgdmFyIGhhc2ggPSBfcmVmMy5oYXNoO1xuICB2YXIgaXNOZXN0ZWRTdHlsZSA9IF9yZWYzLmlzTmVzdGVkU3R5bGU7XG4gIHZhciBtZXJnZVN0eWxlcyA9IF9yZWYzLm1lcmdlU3R5bGVzO1xuICB2YXIgcHJvcHMgPSBfcmVmMy5wcm9wcztcbiAgdmFyIHNldFN0YXRlID0gX3JlZjMuc2V0U3RhdGU7XG4gIHZhciBzdHlsZSA9IF9yZWYzLnN0eWxlO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNoYWRvd1xuICB2YXIgbmV3U3R5bGUgPSBfcmVtb3ZlTWVkaWFRdWVyaWVzKHN0eWxlKTtcbiAgdmFyIG1lZGlhUXVlcnlDbGFzc05hbWVzID0gX3RvcExldmVsUnVsZXNUb0NTUyh7XG4gICAgYWRkQ1NTOiBhZGRDU1MsXG4gICAgYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWU6IGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlLFxuICAgIGNzc1J1bGVTZXRUb1N0cmluZzogY3NzUnVsZVNldFRvU3RyaW5nLFxuICAgIGhhc2g6IGhhc2gsXG4gICAgaXNOZXN0ZWRTdHlsZTogaXNOZXN0ZWRTdHlsZSxcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgdXNlckFnZW50OiBjb25maWcudXNlckFnZW50XG4gIH0pO1xuXG4gIHZhciBuZXdQcm9wcyA9IG1lZGlhUXVlcnlDbGFzc05hbWVzID8ge1xuICAgIGNsYXNzTmFtZTogbWVkaWFRdWVyeUNsYXNzTmFtZXMgKyAocHJvcHMuY2xhc3NOYW1lID8gJyAnICsgcHJvcHMuY2xhc3NOYW1lIDogJycpXG4gIH0gOiBudWxsO1xuXG4gIHZhciBtYXRjaE1lZGlhID0gY29uZmlnLm1hdGNoTWVkaWEgfHwgX2dldFdpbmRvd01hdGNoTWVkaWEoRXhlY3V0aW9uRW52aXJvbm1lbnQpO1xuXG4gIGlmICghbWF0Y2hNZWRpYSkge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogbmV3UHJvcHMsXG4gICAgICBzdHlsZTogbmV3U3R5bGVcbiAgICB9O1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyc0J5UXVlcnkgPSBfZXh0ZW5kcyh7fSwgZ2V0Q29tcG9uZW50RmllbGQoJ19yYWRpdW1NZWRpYVF1ZXJ5TGlzdGVuZXJzQnlRdWVyeScpKTtcbiAgdmFyIG1lZGlhUXVlcnlMaXN0c0J5UXVlcnkgPSBnZXRHbG9iYWxTdGF0ZSgnbWVkaWFRdWVyeUxpc3RzQnlRdWVyeScpIHx8IHt9O1xuXG4gIE9iamVjdC5rZXlzKHN0eWxlKS5maWx0ZXIoZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZS5pbmRleE9mKCdAbWVkaWEnKSA9PT0gMDtcbiAgfSkubWFwKGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIHZhciBuZXN0ZWRSdWxlcyA9IF9maWx0ZXJPYmplY3Qoc3R5bGVbcXVlcnldLCBpc05lc3RlZFN0eWxlKTtcblxuICAgIGlmICghT2JqZWN0LmtleXMobmVzdGVkUnVsZXMpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtcWwgPSBfc3Vic2NyaWJlVG9NZWRpYVF1ZXJ5KHtcbiAgICAgIGxpc3RlbmVyOiBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgICAgcmV0dXJuIHNldFN0YXRlKHF1ZXJ5LCBtcWwubWF0Y2hlcywgJ19hbGwnKTtcbiAgICAgIH0sXG4gICAgICBsaXN0ZW5lcnNCeVF1ZXJ5OiBsaXN0ZW5lcnNCeVF1ZXJ5LFxuICAgICAgbWF0Y2hNZWRpYTogbWF0Y2hNZWRpYSxcbiAgICAgIG1lZGlhUXVlcnlMaXN0c0J5UXVlcnk6IG1lZGlhUXVlcnlMaXN0c0J5UXVlcnksXG4gICAgICBxdWVyeTogcXVlcnlcbiAgICB9KTtcblxuICAgIC8vIEFwcGx5IG1lZGlhIHF1ZXJ5IHN0YXRlc1xuICAgIGlmIChtcWwubWF0Y2hlcykge1xuICAgICAgbmV3U3R5bGUgPSBtZXJnZVN0eWxlcyhbbmV3U3R5bGUsIG5lc3RlZFJ1bGVzXSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGNvbXBvbmVudEZpZWxkczoge1xuICAgICAgX3JhZGl1bU1lZGlhUXVlcnlMaXN0ZW5lcnNCeVF1ZXJ5OiBsaXN0ZW5lcnNCeVF1ZXJ5XG4gICAgfSxcbiAgICBnbG9iYWxTdGF0ZTogeyBtZWRpYVF1ZXJ5TGlzdHNCeVF1ZXJ5OiBtZWRpYVF1ZXJ5TGlzdHNCeVF1ZXJ5IH0sXG4gICAgcHJvcHM6IG5ld1Byb3BzLFxuICAgIHN0eWxlOiBuZXdTdHlsZVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdmlzaXRlZDtcbmZ1bmN0aW9uIHZpc2l0ZWQoX3JlZikge1xuICB2YXIgYWRkQ1NTID0gX3JlZi5hZGRDU1M7XG4gIHZhciBhcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZSA9IF9yZWYuYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWU7XG4gIHZhciBjb25maWcgPSBfcmVmLmNvbmZpZztcbiAgdmFyIGNzc1J1bGVTZXRUb1N0cmluZyA9IF9yZWYuY3NzUnVsZVNldFRvU3RyaW5nO1xuICB2YXIgaGFzaCA9IF9yZWYuaGFzaDtcbiAgdmFyIHByb3BzID0gX3JlZi5wcm9wcztcbiAgdmFyIHN0eWxlID0gX3JlZi5zdHlsZTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zaGFkb3dcbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZTtcblxuICB2YXIgbmV3U3R5bGUgPSBPYmplY3Qua2V5cyhzdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChuZXdTdHlsZUluUHJvZ3Jlc3MsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlW2tleV07XG4gICAgaWYgKGtleSA9PT0gJzp2aXNpdGVkJykge1xuICAgICAgdmFsdWUgPSBhcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZSh2YWx1ZSk7XG4gICAgICB2YXIgcnVsZUNTUyA9IGNzc1J1bGVTZXRUb1N0cmluZygnJywgdmFsdWUsIGNvbmZpZy51c2VyQWdlbnQpO1xuICAgICAgdmFyIHZpc2l0ZWRDbGFzc05hbWUgPSAncmFkLScgKyBoYXNoKHJ1bGVDU1MpO1xuICAgICAgdmFyIGNzcyA9ICcuJyArIHZpc2l0ZWRDbGFzc05hbWUgKyAnOnZpc2l0ZWQnICsgcnVsZUNTUztcblxuICAgICAgYWRkQ1NTKGNzcyk7XG4gICAgICBjbGFzc05hbWUgPSAoY2xhc3NOYW1lID8gY2xhc3NOYW1lICsgJyAnIDogJycpICsgdmlzaXRlZENsYXNzTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVJblByb2dyZXNzW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3U3R5bGVJblByb2dyZXNzO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogY2xhc3NOYW1lID09PSBwcm9wcy5jbGFzc05hbWUgPyBudWxsIDogeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuICAgIHN0eWxlOiBuZXdTdHlsZVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgLyoqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9qc3N0eWxlcy9jc3MtdmVuZG9yLCBidXQgd2l0aG91dCBoYXZpbmcgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogY29udmVydCBiZXR3ZWVuIGRpZmZlcmVudCBjYXNlcyBhbGwgdGhlIHRpbWUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxuZXhwb3J0cy5nZXRQcmVmaXhlZEtleWZyYW1lcyA9IGdldFByZWZpeGVkS2V5ZnJhbWVzO1xuZXhwb3J0cy5nZXRQcmVmaXhlZFN0eWxlID0gZ2V0UHJlZml4ZWRTdHlsZTtcblxudmFyIF9pbmxpbmVTdHlsZVByZWZpeGVyID0gcmVxdWlyZSgnaW5saW5lLXN0eWxlLXByZWZpeGVyJyk7XG5cbnZhciBfaW5saW5lU3R5bGVQcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbmxpbmVTdHlsZVByZWZpeGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdHJhbnNmb3JtVmFsdWVzKHN0eWxlKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZSkucmVkdWNlKGZ1bmN0aW9uIChuZXdTdHlsZSwga2V5KSB7XG4gICAgdmFyIHZhbHVlID0gc3R5bGVba2V5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuam9pbignOycgKyBrZXkgKyAnOicpO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgbmV3U3R5bGVba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiBuZXdTdHlsZTtcbiAgfSwge30pO1xufVxuXG52YXIgX2hhc1dhcm5lZEFib3V0VXNlckFnZW50ID0gZmFsc2U7XG52YXIgX2xhc3RVc2VyQWdlbnQgPSB2b2lkIDA7XG52YXIgX2NhY2hlZFByZWZpeGVyID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBnZXRQcmVmaXhlcih1c2VyQWdlbnQpIHtcbiAgdmFyIGFjdHVhbFVzZXJBZ2VudCA9IHVzZXJBZ2VudCB8fCBnbG9iYWwgJiYgZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnVzZXJBZ2VudDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghYWN0dWFsVXNlckFnZW50ICYmICFfaGFzV2FybmVkQWJvdXRVc2VyQWdlbnQpIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIGNvbnNvbGUud2FybignUmFkaXVtOiB1c2VyQWdlbnQgc2hvdWxkIGJlIHN1cHBsaWVkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuIFNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9Gb3JtaWRhYmxlTGFicy9yYWRpdW0vdHJlZS9tYXN0ZXIvZG9jcy9hcGkjcmFkaXVtICcgKyAnZm9yIG1vcmUgaW5mb3JtYXRpb24uJyk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgIF9oYXNXYXJuZWRBYm91dFVzZXJBZ2VudCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFfY2FjaGVkUHJlZml4ZXIgfHwgYWN0dWFsVXNlckFnZW50ICE9PSBfbGFzdFVzZXJBZ2VudCkge1xuICAgIGlmIChhY3R1YWxVc2VyQWdlbnQgPT09ICdhbGwnKSB7XG4gICAgICBfY2FjaGVkUHJlZml4ZXIgPSB7XG4gICAgICAgIHByZWZpeDogX2lubGluZVN0eWxlUHJlZml4ZXIyLmRlZmF1bHQucHJlZml4QWxsLFxuICAgICAgICBwcmVmaXhlZEtleWZyYW1lczogJ2tleWZyYW1lcydcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIF9jYWNoZWRQcmVmaXhlciA9IG5ldyBfaW5saW5lU3R5bGVQcmVmaXhlcjIuZGVmYXVsdCh7IHVzZXJBZ2VudDogYWN0dWFsVXNlckFnZW50IH0pO1xuICAgIH1cbiAgICBfbGFzdFVzZXJBZ2VudCA9IGFjdHVhbFVzZXJBZ2VudDtcbiAgfVxuICByZXR1cm4gX2NhY2hlZFByZWZpeGVyO1xufVxuXG5mdW5jdGlvbiBnZXRQcmVmaXhlZEtleWZyYW1lcyh1c2VyQWdlbnQpIHtcbiAgcmV0dXJuIGdldFByZWZpeGVyKHVzZXJBZ2VudCkucHJlZml4ZWRLZXlmcmFtZXM7XG59XG5cbi8vIFJldHVybnMgYSBuZXcgc3R5bGUgb2JqZWN0IHdpdGggdmVuZG9yIHByZWZpeGVzIGFkZGVkIHRvIHByb3BlcnR5IG5hbWVzXG4vLyBhbmQgdmFsdWVzLlxuZnVuY3Rpb24gZ2V0UHJlZml4ZWRTdHlsZShzdHlsZSwgdXNlckFnZW50KSB7XG4gIHZhciBzdHlsZVdpdGhGYWxsYmFja3MgPSB0cmFuc2Zvcm1WYWx1ZXMoc3R5bGUpO1xuICB2YXIgcHJlZml4ZXIgPSBnZXRQcmVmaXhlcih1c2VyQWdlbnQpO1xuICB2YXIgcHJlZml4ZWRTdHlsZSA9IHByZWZpeGVyLnByZWZpeChzdHlsZVdpdGhGYWxsYmFja3MpO1xuICByZXR1cm4gcHJlZml4ZWRTdHlsZTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG52YXIgX2FwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlID0gcmVxdWlyZSgnLi9hcHBlbmQtaW1wb3J0YW50LXRvLWVhY2gtdmFsdWUnKTtcblxudmFyIF9hcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hcHBlbmRJbXBvcnRhbnRUb0VhY2hWYWx1ZSk7XG5cbnZhciBfY3NzUnVsZVNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9jc3MtcnVsZS1zZXQtdG8tc3RyaW5nJyk7XG5cbnZhciBfY3NzUnVsZVNldFRvU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc1J1bGVTZXRUb1N0cmluZyk7XG5cbnZhciBfZ2V0U3RhdGUgPSByZXF1aXJlKCcuL2dldC1zdGF0ZScpO1xuXG52YXIgX2dldFN0YXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFN0YXRlKTtcblxudmFyIF9nZXRTdGF0ZUtleSA9IHJlcXVpcmUoJy4vZ2V0LXN0YXRlLWtleScpO1xuXG52YXIgX2dldFN0YXRlS2V5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldFN0YXRlS2V5KTtcblxudmFyIF9oYXNoID0gcmVxdWlyZSgnLi9oYXNoJyk7XG5cbnZhciBfaGFzaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oYXNoKTtcblxudmFyIF9tZXJnZVN0eWxlcyA9IHJlcXVpcmUoJy4vbWVyZ2Utc3R5bGVzJyk7XG5cbnZhciBfcGx1Z2lucyA9IHJlcXVpcmUoJy4vcGx1Z2lucy8nKTtcblxudmFyIF9wbHVnaW5zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsdWdpbnMpO1xuXG52YXIgX2V4ZW52ID0gcmVxdWlyZSgnZXhlbnYnKTtcblxudmFyIF9leGVudjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leGVudik7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIERFRkFVTFRfQ09ORklHID0ge1xuICBwbHVnaW5zOiBbX3BsdWdpbnMyLmRlZmF1bHQubWVyZ2VTdHlsZUFycmF5LCBfcGx1Z2luczIuZGVmYXVsdC5jaGVja1Byb3BzLCBfcGx1Z2luczIuZGVmYXVsdC5yZXNvbHZlTWVkaWFRdWVyaWVzLCBfcGx1Z2luczIuZGVmYXVsdC5yZXNvbHZlSW50ZXJhY3Rpb25TdHlsZXMsIF9wbHVnaW5zMi5kZWZhdWx0LmtleWZyYW1lcywgX3BsdWdpbnMyLmRlZmF1bHQudmlzaXRlZCwgX3BsdWdpbnMyLmRlZmF1bHQucmVtb3ZlTmVzdGVkU3R5bGVzLCBfcGx1Z2luczIuZGVmYXVsdC5wcmVmaXgsIF9wbHVnaW5zMi5kZWZhdWx0LmNoZWNrUHJvcHNdXG59O1xuXG4vLyBHcm9zc1xudmFyIGdsb2JhbFN0YXRlID0ge307XG5cbi8vIERlY2xhcmUgZWFybHkgZm9yIHJlY3Vyc2l2ZSBoZWxwZXJzLlxudmFyIHJlc29sdmVTdHlsZXMgPSBudWxsO1xuXG52YXIgX3Nob3VsZFJlc29sdmVTdHlsZXMgPSBmdW5jdGlvbiBfc2hvdWxkUmVzb2x2ZVN0eWxlcyhjb21wb25lbnQpIHtcbiAgcmV0dXJuIGNvbXBvbmVudC50eXBlICYmICFjb21wb25lbnQudHlwZS5faXNSYWRpdW1FbmhhbmNlZDtcbn07XG5cbnZhciBfcmVzb2x2ZUNoaWxkcmVuID0gZnVuY3Rpb24gX3Jlc29sdmVDaGlsZHJlbihfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBjb21wb25lbnQgPSBfcmVmLmNvbXBvbmVudDtcbiAgdmFyIGNvbmZpZyA9IF9yZWYuY29uZmlnO1xuICB2YXIgZXhpc3RpbmdLZXlNYXAgPSBfcmVmLmV4aXN0aW5nS2V5TWFwO1xuXG4gIGlmICghY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgY2hpbGRyZW5UeXBlID0gdHlwZW9mIGNoaWxkcmVuID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjaGlsZHJlbik7XG5cbiAgaWYgKGNoaWxkcmVuVHlwZSA9PT0gJ3N0cmluZycgfHwgY2hpbGRyZW5UeXBlID09PSAnbnVtYmVyJykge1xuICAgIC8vIERvbid0IGRvIGFueXRoaW5nIHdpdGggYSBzaW5nbGUgcHJpbWl0aXZlIGNoaWxkXG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgaWYgKGNoaWxkcmVuVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIFdyYXAgdGhlIGZ1bmN0aW9uLCByZXNvbHZpbmcgc3R5bGVzIG9uIHRoZSByZXN1bHRcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IGNoaWxkcmVuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KHJlc3VsdCkpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVTdHlsZXMoY29tcG9uZW50LCByZXN1bHQsIGNvbmZpZywgZXhpc3RpbmdLZXlNYXAsIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9XG5cbiAgaWYgKF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPT09IDEgJiYgY2hpbGRyZW4udHlwZSkge1xuICAgIC8vIElmIGEgUmVhY3QgRWxlbWVudCBpcyBhbiBvbmx5IGNoaWxkLCBkb24ndCB3cmFwIGl0IGluIGFuIGFycmF5IGZvclxuICAgIC8vIFJlYWN0LkNoaWxkcmVuLm1hcCgpIGZvciBSZWFjdC5DaGlsZHJlbi5vbmx5KCkgY29tcGF0aWJpbGl0eS5cbiAgICB2YXIgb25seUNoaWxkID0gX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIHJldHVybiByZXNvbHZlU3R5bGVzKGNvbXBvbmVudCwgb25seUNoaWxkLCBjb25maWcsIGV4aXN0aW5nS2V5TWFwLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuIHJlc29sdmVTdHlsZXMoY29tcG9uZW50LCBjaGlsZCwgY29uZmlnLCBleGlzdGluZ0tleU1hcCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcbn07XG5cbi8vIFJlY3Vyc2Ugb3ZlciBwcm9wcywganVzdCBsaWtlIGNoaWxkcmVuXG52YXIgX3Jlc29sdmVQcm9wcyA9IGZ1bmN0aW9uIF9yZXNvbHZlUHJvcHMoX3JlZjIpIHtcbiAgdmFyIGNvbXBvbmVudCA9IF9yZWYyLmNvbXBvbmVudDtcbiAgdmFyIGNvbmZpZyA9IF9yZWYyLmNvbmZpZztcbiAgdmFyIGV4aXN0aW5nS2V5TWFwID0gX3JlZjIuZXhpc3RpbmdLZXlNYXA7XG4gIHZhciBwcm9wcyA9IF9yZWYyLnByb3BzO1xuXG4gIHZhciBuZXdQcm9wcyA9IHByb3BzO1xuXG4gIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgLy8gV2UgYWxyZWFkeSByZWN1cnNlIG92ZXIgY2hpbGRyZW4gYWJvdmVcbiAgICBpZiAocHJvcCA9PT0gJ2NoaWxkcmVuJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wXTtcbiAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgIG5ld1Byb3BzID0gX2V4dGVuZHMoe30sIG5ld1Byb3BzKTtcbiAgICAgIG5ld1Byb3BzW3Byb3BdID0gcmVzb2x2ZVN0eWxlcyhjb21wb25lbnQsIHByb3BWYWx1ZSwgY29uZmlnLCBleGlzdGluZ0tleU1hcCwgdHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbmV3UHJvcHM7XG59O1xuXG52YXIgX2J1aWxkR2V0S2V5ID0gZnVuY3Rpb24gX2J1aWxkR2V0S2V5KF9yZWYzKSB7XG4gIHZhciBjb21wb25lbnROYW1lID0gX3JlZjMuY29tcG9uZW50TmFtZTtcbiAgdmFyIGV4aXN0aW5nS2V5TWFwID0gX3JlZjMuZXhpc3RpbmdLZXlNYXA7XG4gIHZhciByZW5kZXJlZEVsZW1lbnQgPSBfcmVmMy5yZW5kZXJlZEVsZW1lbnQ7XG5cbiAgLy8gV2UgbmVlZCBhIHVuaXF1ZSBrZXkgdG8gY29ycmVsYXRlIHN0YXRlIGNoYW5nZXMgZHVlIHRvIHVzZXIgaW50ZXJhY3Rpb25cbiAgLy8gd2l0aCB0aGUgcmVuZGVyZWQgZWxlbWVudCwgc28gd2Uga25vdyB0byBhcHBseSB0aGUgcHJvcGVyIGludGVyYWN0aXZlXG4gIC8vIHN0eWxlcy5cbiAgdmFyIG9yaWdpbmFsS2V5ID0gdHlwZW9mIHJlbmRlcmVkRWxlbWVudC5yZWYgPT09ICdzdHJpbmcnID8gcmVuZGVyZWRFbGVtZW50LnJlZiA6IHJlbmRlcmVkRWxlbWVudC5rZXk7XG4gIHZhciBrZXkgPSAoMCwgX2dldFN0YXRlS2V5Mi5kZWZhdWx0KShvcmlnaW5hbEtleSk7XG5cbiAgdmFyIGFscmVhZHlHb3RLZXkgPSBmYWxzZTtcbiAgdmFyIGdldEtleSA9IGZ1bmN0aW9uIGdldEtleSgpIHtcbiAgICBpZiAoYWxyZWFkeUdvdEtleSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG5cbiAgICBhbHJlYWR5R290S2V5ID0gdHJ1ZTtcblxuICAgIGlmIChleGlzdGluZ0tleU1hcFtrZXldKSB7XG4gICAgICB2YXIgZWxlbWVudE5hbWUgPSB2b2lkIDA7XG4gICAgICBpZiAodHlwZW9mIHJlbmRlcmVkRWxlbWVudC50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50TmFtZSA9IHJlbmRlcmVkRWxlbWVudC50eXBlO1xuICAgICAgfSBlbHNlIGlmIChyZW5kZXJlZEVsZW1lbnQudHlwZS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICBlbGVtZW50TmFtZSA9IHJlbmRlcmVkRWxlbWVudC50eXBlLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IHJlbmRlcmVkRWxlbWVudC50eXBlLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcignUmFkaXVtIHJlcXVpcmVzIGVhY2ggZWxlbWVudCB3aXRoIGludGVyYWN0aXZlIHN0eWxlcyB0byBoYXZlIGEgdW5pcXVlICcgKyAna2V5LCBzZXQgdXNpbmcgZWl0aGVyIHRoZSByZWYgb3Iga2V5IHByb3AuICcgKyAob3JpZ2luYWxLZXkgPyAnS2V5IFwiJyArIG9yaWdpbmFsS2V5ICsgJ1wiIGlzIGEgZHVwbGljYXRlLicgOiAnTXVsdGlwbGUgZWxlbWVudHMgaGF2ZSBubyBrZXkgc3BlY2lmaWVkLicpICsgJyAnICsgJ0NvbXBvbmVudDogXCInICsgY29tcG9uZW50TmFtZSArICdcIi4gJyArIChlbGVtZW50TmFtZSA/ICdFbGVtZW50OiBcIicgKyBlbGVtZW50TmFtZSArICdcIi4nIDogJycpKTtcbiAgICB9XG5cbiAgICBleGlzdGluZ0tleU1hcFtrZXldID0gdHJ1ZTtcblxuICAgIHJldHVybiBrZXk7XG4gIH07XG5cbiAgcmV0dXJuIGdldEtleTtcbn07XG5cbnZhciBfc2V0U3R5bGVTdGF0ZSA9IGZ1bmN0aW9uIF9zZXRTdHlsZVN0YXRlKGNvbXBvbmVudCwga2V5LCBzdGF0ZUtleSwgdmFsdWUpIHtcbiAgaWYgKCFjb21wb25lbnQuX3JhZGl1bUlzTW91bnRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBleGlzdGluZyA9IGNvbXBvbmVudC5fbGFzdFJhZGl1bVN0YXRlIHx8IGNvbXBvbmVudC5zdGF0ZSAmJiBjb21wb25lbnQuc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGUgfHwge307XG5cbiAgdmFyIHN0YXRlID0geyBfcmFkaXVtU3R5bGVTdGF0ZTogX2V4dGVuZHMoe30sIGV4aXN0aW5nKSB9O1xuICBzdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZVtrZXldID0gX2V4dGVuZHMoe30sIHN0YXRlLl9yYWRpdW1TdHlsZVN0YXRlW2tleV0pO1xuICBzdGF0ZS5fcmFkaXVtU3R5bGVTdGF0ZVtrZXldW3N0YXRlS2V5XSA9IHZhbHVlO1xuXG4gIGNvbXBvbmVudC5fbGFzdFJhZGl1bVN0YXRlID0gc3RhdGUuX3JhZGl1bVN0eWxlU3RhdGU7XG4gIGNvbXBvbmVudC5zZXRTdGF0ZShzdGF0ZSk7XG59O1xuXG52YXIgX3J1blBsdWdpbnMgPSBmdW5jdGlvbiBfcnVuUGx1Z2lucyhfcmVmNCkge1xuICB2YXIgY29tcG9uZW50ID0gX3JlZjQuY29tcG9uZW50O1xuICB2YXIgY29uZmlnID0gX3JlZjQuY29uZmlnO1xuICB2YXIgZXhpc3RpbmdLZXlNYXAgPSBfcmVmNC5leGlzdGluZ0tleU1hcDtcbiAgdmFyIHByb3BzID0gX3JlZjQucHJvcHM7XG4gIHZhciByZW5kZXJlZEVsZW1lbnQgPSBfcmVmNC5yZW5kZXJlZEVsZW1lbnQ7XG5cbiAgLy8gRG9uJ3QgcnVuIHBsdWdpbnMgaWYgcmVuZGVyZWRFbGVtZW50IGlzIG5vdCBhIHNpbXBsZSBSZWFjdERPTUVsZW1lbnQgb3IgaGFzXG4gIC8vIG5vIHN0eWxlLlxuICBpZiAoIV9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChyZW5kZXJlZEVsZW1lbnQpIHx8IHR5cGVvZiByZW5kZXJlZEVsZW1lbnQudHlwZSAhPT0gJ3N0cmluZycgfHwgIXByb3BzLnN0eWxlKSB7XG4gICAgcmV0dXJuIHByb3BzO1xuICB9XG5cbiAgdmFyIG5ld1Byb3BzID0gcHJvcHM7XG5cbiAgdmFyIHBsdWdpbnMgPSBjb25maWcucGx1Z2lucyB8fCBERUZBVUxUX0NPTkZJRy5wbHVnaW5zO1xuXG4gIHZhciBjb21wb25lbnROYW1lID0gY29tcG9uZW50LmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuICB2YXIgZ2V0S2V5ID0gX2J1aWxkR2V0S2V5KHsgcmVuZGVyZWRFbGVtZW50OiByZW5kZXJlZEVsZW1lbnQsIGV4aXN0aW5nS2V5TWFwOiBleGlzdGluZ0tleU1hcCwgY29tcG9uZW50TmFtZTogY29tcG9uZW50TmFtZSB9KTtcbiAgdmFyIGdldENvbXBvbmVudEZpZWxkID0gZnVuY3Rpb24gZ2V0Q29tcG9uZW50RmllbGQoa2V5KSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudFtrZXldO1xuICB9O1xuICB2YXIgZ2V0R2xvYmFsU3RhdGUgPSBmdW5jdGlvbiBnZXRHbG9iYWxTdGF0ZShrZXkpIHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGVba2V5XTtcbiAgfTtcbiAgdmFyIGNvbXBvbmVudEdldFN0YXRlID0gZnVuY3Rpb24gY29tcG9uZW50R2V0U3RhdGUoc3RhdGVLZXksIGVsZW1lbnRLZXkpIHtcbiAgICByZXR1cm4gKDAsIF9nZXRTdGF0ZTIuZGVmYXVsdCkoY29tcG9uZW50LnN0YXRlLCBlbGVtZW50S2V5IHx8IGdldEtleSgpLCBzdGF0ZUtleSk7XG4gIH07XG4gIHZhciBzZXRTdGF0ZSA9IGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlS2V5LCB2YWx1ZSwgZWxlbWVudEtleSkge1xuICAgIHJldHVybiBfc2V0U3R5bGVTdGF0ZShjb21wb25lbnQsIGVsZW1lbnRLZXkgfHwgZ2V0S2V5KCksIHN0YXRlS2V5LCB2YWx1ZSk7XG4gIH07XG5cbiAgdmFyIGFkZENTUyA9IGZ1bmN0aW9uIGFkZENTUyhjc3MpIHtcbiAgICB2YXIgc3R5bGVLZWVwZXIgPSBjb21wb25lbnQuX3JhZGl1bVN0eWxlS2VlcGVyIHx8IGNvbXBvbmVudC5jb250ZXh0Ll9yYWRpdW1TdHlsZUtlZXBlcjtcbiAgICBpZiAoIXN0eWxlS2VlcGVyKSB7XG4gICAgICBpZiAoX19pc1Rlc3RNb2RlRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUbyB1c2UgcGx1Z2lucyByZXF1aXJpbmcgYGFkZENTU2AgKGUuZy4ga2V5ZnJhbWVzLCBtZWRpYSBxdWVyaWVzKSwgJyArICdwbGVhc2Ugd3JhcCB5b3VyIGFwcGxpY2F0aW9uIGluIHRoZSBTdHlsZVJvb3QgY29tcG9uZW50LiBDb21wb25lbnQgJyArICduYW1lOiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVLZWVwZXIuYWRkQ1NTKGNzcyk7XG4gIH07XG5cbiAgdmFyIG5ld1N0eWxlID0gcHJvcHMuc3R5bGU7XG5cbiAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICB2YXIgcmVzdWx0ID0gcGx1Z2luKHtcbiAgICAgIEV4ZWN1dGlvbkVudmlyb25tZW50OiBfZXhlbnYyLmRlZmF1bHQsXG4gICAgICBhZGRDU1M6IGFkZENTUyxcbiAgICAgIGFwcGVuZEltcG9ydGFudFRvRWFjaFZhbHVlOiBfYXBwZW5kSW1wb3J0YW50VG9FYWNoVmFsdWUyLmRlZmF1bHQsXG4gICAgICBjb21wb25lbnROYW1lOiBjb21wb25lbnROYW1lLFxuICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICBjc3NSdWxlU2V0VG9TdHJpbmc6IF9jc3NSdWxlU2V0VG9TdHJpbmcyLmRlZmF1bHQsXG4gICAgICBnZXRDb21wb25lbnRGaWVsZDogZ2V0Q29tcG9uZW50RmllbGQsXG4gICAgICBnZXRHbG9iYWxTdGF0ZTogZ2V0R2xvYmFsU3RhdGUsXG4gICAgICBnZXRTdGF0ZTogY29tcG9uZW50R2V0U3RhdGUsXG4gICAgICBoYXNoOiBfaGFzaDIuZGVmYXVsdCxcbiAgICAgIG1lcmdlU3R5bGVzOiBfbWVyZ2VTdHlsZXMubWVyZ2VTdHlsZXMsXG4gICAgICBwcm9wczogbmV3UHJvcHMsXG4gICAgICBzZXRTdGF0ZTogc2V0U3RhdGUsXG4gICAgICBpc05lc3RlZFN0eWxlOiBfbWVyZ2VTdHlsZXMuaXNOZXN0ZWRTdHlsZSxcbiAgICAgIHN0eWxlOiBuZXdTdHlsZVxuICAgIH0pIHx8IHt9O1xuXG4gICAgbmV3U3R5bGUgPSByZXN1bHQuc3R5bGUgfHwgbmV3U3R5bGU7XG5cbiAgICBuZXdQcm9wcyA9IHJlc3VsdC5wcm9wcyAmJiBPYmplY3Qua2V5cyhyZXN1bHQucHJvcHMpLmxlbmd0aCA/IF9leHRlbmRzKHt9LCBuZXdQcm9wcywgcmVzdWx0LnByb3BzKSA6IG5ld1Byb3BzO1xuXG4gICAgdmFyIG5ld0NvbXBvbmVudEZpZWxkcyA9IHJlc3VsdC5jb21wb25lbnRGaWVsZHMgfHwge307XG4gICAgT2JqZWN0LmtleXMobmV3Q29tcG9uZW50RmllbGRzKS5mb3JFYWNoKGZ1bmN0aW9uIChmaWVsZE5hbWUpIHtcbiAgICAgIGNvbXBvbmVudFtmaWVsZE5hbWVdID0gbmV3Q29tcG9uZW50RmllbGRzW2ZpZWxkTmFtZV07XG4gICAgfSk7XG5cbiAgICB2YXIgbmV3R2xvYmFsU3RhdGUgPSByZXN1bHQuZ2xvYmFsU3RhdGUgfHwge307XG4gICAgT2JqZWN0LmtleXMobmV3R2xvYmFsU3RhdGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZ2xvYmFsU3RhdGVba2V5XSA9IG5ld0dsb2JhbFN0YXRlW2tleV07XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmIChuZXdTdHlsZSAhPT0gcHJvcHMuc3R5bGUpIHtcbiAgICBuZXdQcm9wcyA9IF9leHRlbmRzKHt9LCBuZXdQcm9wcywgeyBzdHlsZTogbmV3U3R5bGUgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3UHJvcHM7XG59O1xuXG4vLyBXcmFwcGVyIGFyb3VuZCBSZWFjdC5jbG9uZUVsZW1lbnQuIFRvIGF2b2lkIHByb2Nlc3NpbmcgdGhlIHNhbWUgZWxlbWVudFxuLy8gdHdpY2UsIHdoZW5ldmVyIHdlIGNsb25lIGFuIGVsZW1lbnQgYWRkIGEgc3BlY2lhbCBwcm9wIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndFxuLy8gcHJvY2VzcyB0aGlzIGVsZW1lbnQgYWdhaW4uXG52YXIgX2Nsb25lRWxlbWVudCA9IGZ1bmN0aW9uIF9jbG9uZUVsZW1lbnQocmVuZGVyZWRFbGVtZW50LCBuZXdQcm9wcywgbmV3Q2hpbGRyZW4pIHtcbiAgLy8gT25seSBhZGQgZmxhZyBpZiB0aGlzIGlzIGEgbm9ybWFsIERPTSBlbGVtZW50XG4gIGlmICh0eXBlb2YgcmVuZGVyZWRFbGVtZW50LnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgbmV3UHJvcHMgPSBfZXh0ZW5kcyh7fSwgbmV3UHJvcHMsIHsgJ2RhdGEtcmFkaXVtJzogdHJ1ZSB9KTtcbiAgfVxuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KHJlbmRlcmVkRWxlbWVudCwgbmV3UHJvcHMsIG5ld0NoaWxkcmVuKTtcbn07XG5cbi8vXG4vLyBUaGUgbnVjbGV1cyBvZiBSYWRpdW0uIHJlc29sdmVTdHlsZXMgaXMgY2FsbGVkIG9uIHRoZSByZW5kZXJlZCBlbGVtZW50c1xuLy8gYmVmb3JlIHRoZXkgYXJlIHJldHVybmVkIGluIHJlbmRlci4gSXQgaXRlcmF0ZXMgb3ZlciB0aGUgZWxlbWVudHMgYW5kXG4vLyBjaGlsZHJlbiwgcmV3cml0aW5nIHByb3BzIHRvIGFkZCBldmVudCBoYW5kbGVycyByZXF1aXJlZCB0byBjYXB0dXJlIHVzZXJcbi8vIGludGVyYWN0aW9ucyAoZS5nLiBtb3VzZSBvdmVyKS4gSXQgYWxzbyByZXBsYWNlcyB0aGUgc3R5bGUgcHJvcCBiZWNhdXNlIGl0XG4vLyBhZGRzIGluIHRoZSB2YXJpb3VzIGludGVyYWN0aW9uIHN0eWxlcyAoZS5nLiA6aG92ZXIpLlxuLy9cbnJlc29sdmVTdHlsZXMgPSBmdW5jdGlvbiByZXNvbHZlU3R5bGVzKGNvbXBvbmVudCwgLy8gUmVhY3RDb21wb25lbnQsIGZsb3crZXNsaW50IGNvbXBsYWluaW5nXG5yZW5kZXJlZEVsZW1lbnQpIHtcbiAgdmFyIGNvbmZpZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfQ09ORklHIDogYXJndW1lbnRzWzJdO1xuICB2YXIgZXhpc3RpbmdLZXlNYXAgPSBhcmd1bWVudHNbM107XG4gIHZhciBzaG91bGRDaGVja0JlZm9yZVJlc29sdmUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDQgfHwgYXJndW1lbnRzWzRdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1s0XTtcbiAgLy8gUmVhY3RFbGVtZW50XG4gIGV4aXN0aW5nS2V5TWFwID0gZXhpc3RpbmdLZXlNYXAgfHwge307XG4gIGlmICghcmVuZGVyZWRFbGVtZW50IHx8XG4gIC8vIEJhaWwgaWYgd2UndmUgYWxyZWFkeSBwcm9jZXNzZWQgdGhpcyBlbGVtZW50LiBUaGlzIGVuc3VyZXMgdGhhdCBvbmx5IHRoZVxuICAvLyBvd25lciBvZiBhbiBlbGVtZW50IHByb2Nlc3NlcyB0aGF0IGVsZW1lbnQsIHNpbmNlIHRoZSBvd25lcidzIHJlbmRlclxuICAvLyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBmaXJzdCAod2hpY2ggd2lsbCBhbHdheXMgYmUgdGhlIGNhc2UsIHNpbmNlIHlvdVxuICAvLyBjYW4ndCBrbm93IHdoYXQgZWxzZSB0byByZW5kZXIgdW50aWwgeW91IHJlbmRlciB0aGUgcGFyZW50IGNvbXBvbmVudCkuXG4gIHJlbmRlcmVkRWxlbWVudC5wcm9wcyAmJiByZW5kZXJlZEVsZW1lbnQucHJvcHNbJ2RhdGEtcmFkaXVtJ10gfHxcblxuICAvLyBCYWlsIGlmIHRoaXMgZWxlbWVudCBpcyBhIHJhZGl1bSBlbmhhbmNlZCBlbGVtZW50LCBiZWNhdXNlIGlmIGl0IGlzLFxuICAvLyB0aGVuIGl0IHdpbGwgdGFrZSBjYXJlIG9mIHJlc29sdmluZyBpdHMgb3duIHN0eWxlcy5cbiAgc2hvdWxkQ2hlY2tCZWZvcmVSZXNvbHZlICYmICFfc2hvdWxkUmVzb2x2ZVN0eWxlcyhyZW5kZXJlZEVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIHJlbmRlcmVkRWxlbWVudDtcbiAgfVxuXG4gIHZhciBuZXdDaGlsZHJlbiA9IF9yZXNvbHZlQ2hpbGRyZW4oe1xuICAgIGNoaWxkcmVuOiByZW5kZXJlZEVsZW1lbnQucHJvcHMuY2hpbGRyZW4sXG4gICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgY29uZmlnOiBjb25maWcsXG4gICAgZXhpc3RpbmdLZXlNYXA6IGV4aXN0aW5nS2V5TWFwXG4gIH0pO1xuXG4gIHZhciBuZXdQcm9wcyA9IF9yZXNvbHZlUHJvcHMoe1xuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgIGNvbmZpZzogY29uZmlnLFxuICAgIGV4aXN0aW5nS2V5TWFwOiBleGlzdGluZ0tleU1hcCxcbiAgICBwcm9wczogcmVuZGVyZWRFbGVtZW50LnByb3BzXG4gIH0pO1xuXG4gIG5ld1Byb3BzID0gX3J1blBsdWdpbnMoe1xuICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgIGNvbmZpZzogY29uZmlnLFxuICAgIGV4aXN0aW5nS2V5TWFwOiBleGlzdGluZ0tleU1hcCxcbiAgICBwcm9wczogbmV3UHJvcHMsXG4gICAgcmVuZGVyZWRFbGVtZW50OiByZW5kZXJlZEVsZW1lbnRcbiAgfSk7XG5cbiAgLy8gSWYgbm90aGluZyBjaGFuZ2VkLCBkb24ndCBib3RoZXIgY2xvbmluZyB0aGUgZWxlbWVudC4gTWlnaHQgYmUgYSBiaXRcbiAgLy8gd2FzdGVmdWwsIGFzIHdlIGFkZCB0aGUgc2VudGluYWwgdG8gc3RvcCBkb3VibGUtcHJvY2Vzc2luZyB3aGVuIHdlIGNsb25lLlxuICAvLyBBc3N1bWUgYmVuaWduIGRvdWJsZS1wcm9jZXNzaW5nIGlzIGJldHRlciB0aGFuIHVubmVlZGVkIGNsb25pbmcuXG4gIGlmIChuZXdDaGlsZHJlbiA9PT0gcmVuZGVyZWRFbGVtZW50LnByb3BzLmNoaWxkcmVuICYmIG5ld1Byb3BzID09PSByZW5kZXJlZEVsZW1lbnQucHJvcHMpIHtcbiAgICByZXR1cm4gcmVuZGVyZWRFbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIF9jbG9uZUVsZW1lbnQocmVuZGVyZWRFbGVtZW50LCBuZXdQcm9wcyAhPT0gcmVuZGVyZWRFbGVtZW50LnByb3BzID8gbmV3UHJvcHMgOiB7fSwgbmV3Q2hpbGRyZW4pO1xufTtcblxuLy8gT25seSBmb3IgdXNlIGJ5IHRlc3RzXG52YXIgX19pc1Rlc3RNb2RlRW5hYmxlZCA9IGZhbHNlO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcmVzb2x2ZVN0eWxlcy5fX2NsZWFyU3RhdGVGb3JUZXN0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBnbG9iYWxTdGF0ZSA9IHt9O1xuICB9O1xuICByZXNvbHZlU3R5bGVzLl9fc2V0VGVzdE1vZGUgPSBmdW5jdGlvbiAoaXNFbmFibGVkKSB7XG4gICAgX19pc1Rlc3RNb2RlRW5hYmxlZCA9IGlzRW5hYmxlZDtcbiAgfTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gcmVzb2x2ZVN0eWxlcztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFN0eWxlS2VlcGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTdHlsZUtlZXBlcih1c2VyQWdlbnQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3R5bGVLZWVwZXIpO1xuXG4gICAgdGhpcy5fdXNlckFnZW50ID0gdXNlckFnZW50O1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IFtdO1xuICAgIHRoaXMuX2Nzc1NldCA9IHt9O1xuICB9XG5cbiAgU3R5bGVLZWVwZXIucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5fbGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgdGhpcy5fbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAvLyBNdXN0IGJlIGZhdCBhcnJvdyB0byBjYXB0dXJlIGB0aGlzYFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lckluZGV4ID0gX3RoaXMuX2xpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgaWYgKGxpc3RlbmVySW5kZXggPiAtMSkge1xuICAgICAgICAgIF90aGlzLl9saXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVySW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBTdHlsZUtlZXBlci5wcm90b3R5cGUuYWRkQ1NTID0gZnVuY3Rpb24gYWRkQ1NTKGNzcykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLl9jc3NTZXRbY3NzXSkge1xuICAgICAgdGhpcy5fY3NzU2V0W2Nzc10gPSB0cnVlO1xuICAgICAgdGhpcy5fZW1pdENoYW5nZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAvLyBNdXN0IGJlIGZhdCBhcnJvdyB0byBjYXB0dXJlIGB0aGlzYFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICAgIGRlbGV0ZSBfdGhpczIuX2Nzc1NldFtjc3NdO1xuICAgICAgICBfdGhpczIuX2VtaXRDaGFuZ2UoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIFN0eWxlS2VlcGVyLnByb3RvdHlwZS5nZXRDU1MgPSBmdW5jdGlvbiBnZXRDU1MoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX2Nzc1NldCkuam9pbignXFxuJyk7XG4gIH07XG5cbiAgU3R5bGVLZWVwZXIucHJvdG90eXBlLl9lbWl0Q2hhbmdlID0gZnVuY3Rpb24gX2VtaXRDaGFuZ2UoKSB7XG4gICAgdGhpcy5fbGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gbGlzdGVuZXIoKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gU3R5bGVLZWVwZXI7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFN0eWxlS2VlcGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIF9pbmxpbmVTdHlsZVByZWZpeEFsbCA9IHJlcXVpcmUoJ2lubGluZS1zdHlsZS1wcmVmaXgtYWxsJyk7XG5cbnZhciBfaW5saW5lU3R5bGVQcmVmaXhBbGwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5saW5lU3R5bGVQcmVmaXhBbGwpO1xuXG52YXIgX3V0aWxzR2V0QnJvd3NlckluZm9ybWF0aW9uID0gcmVxdWlyZSgnLi91dGlscy9nZXRCcm93c2VySW5mb3JtYXRpb24nKTtcblxudmFyIF91dGlsc0dldEJyb3dzZXJJbmZvcm1hdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0dldEJyb3dzZXJJbmZvcm1hdGlvbik7XG5cbnZhciBfdXRpbHNHZXRQcmVmaXhlZEtleWZyYW1lcyA9IHJlcXVpcmUoJy4vdXRpbHMvZ2V0UHJlZml4ZWRLZXlmcmFtZXMnKTtcblxudmFyIF91dGlsc0dldFByZWZpeGVkS2V5ZnJhbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzR2V0UHJlZml4ZWRLZXlmcmFtZXMpO1xuXG52YXIgX3V0aWxzQ2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4vdXRpbHMvY2FwaXRhbGl6ZVN0cmluZycpO1xuXG52YXIgX3V0aWxzQ2FwaXRhbGl6ZVN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0NhcGl0YWxpemVTdHJpbmcpO1xuXG52YXIgX3V0aWxzQXNzaWduID0gcmVxdWlyZSgnLi91dGlscy9hc3NpZ24nKTtcblxudmFyIF91dGlsc0Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsc0Fzc2lnbik7XG5cbnZhciBfcHJlZml4UHJvcHMgPSByZXF1aXJlKCcuL3ByZWZpeFByb3BzJyk7XG5cbnZhciBfcHJlZml4UHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4UHJvcHMpO1xuXG52YXIgX3BsdWdpbnNDYWxjID0gcmVxdWlyZSgnLi9wbHVnaW5zL2NhbGMnKTtcblxudmFyIF9wbHVnaW5zQ2FsYzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zQ2FsYyk7XG5cbnZhciBfcGx1Z2luc0N1cnNvciA9IHJlcXVpcmUoJy4vcGx1Z2lucy9jdXJzb3InKTtcblxudmFyIF9wbHVnaW5zQ3Vyc29yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsdWdpbnNDdXJzb3IpO1xuXG52YXIgX3BsdWdpbnNGbGV4ID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXgnKTtcblxudmFyIF9wbHVnaW5zRmxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zRmxleCk7XG5cbnZhciBfcGx1Z2luc1NpemluZyA9IHJlcXVpcmUoJy4vcGx1Z2lucy9zaXppbmcnKTtcblxudmFyIF9wbHVnaW5zU2l6aW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BsdWdpbnNTaXppbmcpO1xuXG52YXIgX3BsdWdpbnNHcmFkaWVudCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9ncmFkaWVudCcpO1xuXG52YXIgX3BsdWdpbnNHcmFkaWVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zR3JhZGllbnQpO1xuXG52YXIgX3BsdWdpbnNUcmFuc2l0aW9uID0gcmVxdWlyZSgnLi9wbHVnaW5zL3RyYW5zaXRpb24nKTtcblxudmFyIF9wbHVnaW5zVHJhbnNpdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zVHJhbnNpdGlvbik7XG5cbi8vIHNwZWNpYWwgZmxleGJveCBzcGVjaWZpY2F0aW9uc1xuXG52YXIgX3BsdWdpbnNGbGV4Ym94SUUgPSByZXF1aXJlKCcuL3BsdWdpbnMvZmxleGJveElFJyk7XG5cbnZhciBfcGx1Z2luc0ZsZXhib3hJRTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wbHVnaW5zRmxleGJveElFKTtcblxudmFyIF9wbHVnaW5zRmxleGJveE9sZCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9mbGV4Ym94T2xkJyk7XG5cbnZhciBfcGx1Z2luc0ZsZXhib3hPbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGx1Z2luc0ZsZXhib3hPbGQpO1xuXG52YXIgcGx1Z2lucyA9IFtfcGx1Z2luc0NhbGMyWydkZWZhdWx0J10sIF9wbHVnaW5zQ3Vyc29yMlsnZGVmYXVsdCddLCBfcGx1Z2luc1NpemluZzJbJ2RlZmF1bHQnXSwgX3BsdWdpbnNHcmFkaWVudDJbJ2RlZmF1bHQnXSwgX3BsdWdpbnNUcmFuc2l0aW9uMlsnZGVmYXVsdCddLCBfcGx1Z2luc0ZsZXhib3hJRTJbJ2RlZmF1bHQnXSwgX3BsdWdpbnNGbGV4Ym94T2xkMlsnZGVmYXVsdCddLFxuLy8gdGhpcyBtdXN0IGJlIHJ1biBBRlRFUiB0aGUgZmxleGJveCBzcGVjc1xuX3BsdWdpbnNGbGV4MlsnZGVmYXVsdCddXTtcblxudmFyIFByZWZpeGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEluc3RhbnRpYW50ZSBhIG5ldyBwcmVmaXhlclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlckFnZW50IC0gdXNlckFnZW50IHRvIGdhdGhlciBwcmVmaXggaW5mb3JtYXRpb24gYWNjb3JkaW5nIHRvIGNhbml1c2UuY29tXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZWVwVW5wcmVmaXhlZCAtIGtlZXBzIHVucHJlZml4ZWQgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAqL1xuXG4gIGZ1bmN0aW9uIFByZWZpeGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByZWZpeGVyKTtcblxuICAgIHZhciBkZWZhdWx0VXNlckFnZW50ID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgPyBuYXZpZ2F0b3IudXNlckFnZW50IDogdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5fdXNlckFnZW50ID0gb3B0aW9ucy51c2VyQWdlbnQgfHwgZGVmYXVsdFVzZXJBZ2VudDtcbiAgICB0aGlzLl9rZWVwVW5wcmVmaXhlZCA9IG9wdGlvbnMua2VlcFVucHJlZml4ZWQgfHwgZmFsc2U7XG5cbiAgICB0aGlzLl9icm93c2VySW5mbyA9ICgwLCBfdXRpbHNHZXRCcm93c2VySW5mb3JtYXRpb24yWydkZWZhdWx0J10pKHRoaXMuX3VzZXJBZ2VudCk7XG5cbiAgICAvLyBDaGVja3MgaWYgdGhlIHVzZXJBZ2VudCB3YXMgcmVzb2x2ZWQgY29ycmVjdGx5XG4gICAgaWYgKHRoaXMuX2Jyb3dzZXJJbmZvICYmIHRoaXMuX2Jyb3dzZXJJbmZvLnByZWZpeCkge1xuICAgICAgLy8gc2V0IGFkZGl0aW9uYWwgcHJlZml4IGluZm9ybWF0aW9uXG4gICAgICB0aGlzLmNzc1ByZWZpeCA9IHRoaXMuX2Jyb3dzZXJJbmZvLnByZWZpeC5jc3M7XG4gICAgICB0aGlzLmpzUHJlZml4ID0gdGhpcy5fYnJvd3NlckluZm8ucHJlZml4LmlubGluZTtcbiAgICAgIHRoaXMucHJlZml4ZWRLZXlmcmFtZXMgPSAoMCwgX3V0aWxzR2V0UHJlZml4ZWRLZXlmcmFtZXMyWydkZWZhdWx0J10pKHRoaXMuX2Jyb3dzZXJJbmZvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXNlUHJlZml4QWxsRmFsbGJhY2sgPSB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBkYXRhID0gdGhpcy5fYnJvd3NlckluZm8uYnJvd3NlciAmJiBfcHJlZml4UHJvcHMyWydkZWZhdWx0J11bdGhpcy5fYnJvd3NlckluZm8uYnJvd3Nlcl07XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHRoaXMuX3JlcXVpcmVzUHJlZml4ID0gT2JqZWN0LmtleXMoZGF0YSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFba2V5XSA+PSBfdGhpcy5fYnJvd3NlckluZm8udmVyc2lvbjtcbiAgICAgIH0pLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBuYW1lKSB7XG4gICAgICAgIHJlc3VsdFtuYW1lXSA9IHRydWU7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LCB7fSk7XG4gICAgICB0aGlzLl9oYXNQcm9wc1JlcXVpcmluZ1ByZWZpeCA9IE9iamVjdC5rZXlzKHRoaXMuX3JlcXVpcmVzUHJlZml4KS5sZW5ndGggPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl91c2VQcmVmaXhBbGxGYWxsYmFjayA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBwcmVmaXhlZCB2ZXJzaW9uIG9mIHRoZSBzdHlsZSBvYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyAtIFN0eWxlIG9iamVjdCB0aGF0IGdldHMgcHJlZml4ZWQgcHJvcGVydGllcyBhZGRlZFxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFN0eWxlIG9iamVjdCB3aXRoIHByZWZpeGVkIHByb3BlcnRpZXMgYW5kIHZhbHVlc1xuICAgKi9cblxuICBfY3JlYXRlQ2xhc3MoUHJlZml4ZXIsIFt7XG4gICAga2V5OiAncHJlZml4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJlZml4KHN0eWxlcykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIC8vIHVzZSBwcmVmaXhBbGwgYXMgZmFsbGJhY2sgaWYgdXNlckFnZW50IGNhbiBub3QgYmUgcmVzb2x2ZWRcbiAgICAgIGlmICh0aGlzLl91c2VQcmVmaXhBbGxGYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gKDAsIF9pbmxpbmVTdHlsZVByZWZpeEFsbDJbJ2RlZmF1bHQnXSkoc3R5bGVzKTtcbiAgICAgIH1cblxuICAgICAgLy8gb25seSBhZGQgcHJlZml4ZXMgaWYgbmVlZGVkXG4gICAgICBpZiAoIXRoaXMuX2hhc1Byb3BzUmVxdWlyaW5nUHJlZml4KSB7XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlcyA9ICgwLCBfdXRpbHNBc3NpZ24yWydkZWZhdWx0J10pKHt9LCBzdHlsZXMpO1xuXG4gICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlc1twcm9wZXJ0eV07XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgIC8vIHJlY3Vyc2UgdGhyb3VnaCBuZXN0ZWQgc3R5bGUgb2JqZWN0c1xuICAgICAgICAgIHN0eWxlc1twcm9wZXJ0eV0gPSBfdGhpczIucHJlZml4KHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBhZGQgcHJlZml4ZXMgaWYgbmVlZGVkXG4gICAgICAgICAgaWYgKF90aGlzMi5fcmVxdWlyZXNQcmVmaXhbcHJvcGVydHldKSB7XG4gICAgICAgICAgICBzdHlsZXNbX3RoaXMyLmpzUHJlZml4ICsgKDAsIF91dGlsc0NhcGl0YWxpemVTdHJpbmcyWydkZWZhdWx0J10pKHByb3BlcnR5KV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICghX3RoaXMyLl9rZWVwVW5wcmVmaXhlZCkge1xuICAgICAgICAgICAgICBkZWxldGUgc3R5bGVzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyByZXNvbHZlIHBsdWdpbnNcbiAgICAgICAgICBwbHVnaW5zLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikge1xuICAgICAgICAgICAgLy8gZ2VuZXJhdGVzIGEgbmV3IHBsdWdpbiBpbnRlcmZhY2Ugd2l0aCBjdXJyZW50IGRhdGFcbiAgICAgICAgICAgIHZhciByZXNvbHZlZFN0eWxlcyA9IHBsdWdpbih7XG4gICAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlcyxcbiAgICAgICAgICAgICAgYnJvd3NlckluZm86IF90aGlzMi5fYnJvd3NlckluZm8sXG4gICAgICAgICAgICAgIHByZWZpeDoge1xuICAgICAgICAgICAgICAgIGpzOiBfdGhpczIuanNQcmVmaXgsXG4gICAgICAgICAgICAgICAgY3NzOiBfdGhpczIuY3NzUHJlZml4LFxuICAgICAgICAgICAgICAgIGtleWZyYW1lczogX3RoaXMyLnByZWZpeGVkS2V5ZnJhbWVzXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGtlZXBVbnByZWZpeGVkOiBfdGhpczIuX2tlZXBVbnByZWZpeGVkLFxuICAgICAgICAgICAgICByZXF1aXJlc1ByZWZpeDogX3RoaXMyLl9yZXF1aXJlc1ByZWZpeFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAoMCwgX3V0aWxzQXNzaWduMlsnZGVmYXVsdCddKShzdHlsZXMsIHJlc29sdmVkU3R5bGVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByZWZpeGVkIHZlcnNpb24gb2YgdGhlIHN0eWxlIG9iamVjdCB1c2luZyBhbGwgdmVuZG9yIHByZWZpeGVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyAtIFN0eWxlIG9iamVjdCB0aGF0IGdldHMgcHJlZml4ZWQgcHJvcGVydGllcyBhZGRlZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IC0gU3R5bGUgb2JqZWN0IHdpdGggcHJlZml4ZWQgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAgICovXG4gIH1dLCBbe1xuICAgIGtleTogJ3ByZWZpeEFsbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZWZpeEFsbChzdHlsZXMpIHtcbiAgICAgIHJldHVybiAoMCwgX2lubGluZVN0eWxlUHJlZml4QWxsMlsnZGVmYXVsdCddKShzdHlsZXMpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQcmVmaXhlcjtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFByZWZpeGVyO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNhbGM7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIF91dGlsc0NhbWVsVG9EYXNoQ2FzZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhbWVsVG9EYXNoQ2FzZScpO1xuXG52YXIgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlKTtcblxuZnVuY3Rpb24gY2FsYyhfcmVmMikge1xuICB2YXIgcHJvcGVydHkgPSBfcmVmMi5wcm9wZXJ0eTtcbiAgdmFyIHZhbHVlID0gX3JlZjIudmFsdWU7XG4gIHZhciBfcmVmMiRicm93c2VySW5mbyA9IF9yZWYyLmJyb3dzZXJJbmZvO1xuICB2YXIgYnJvd3NlciA9IF9yZWYyJGJyb3dzZXJJbmZvLmJyb3dzZXI7XG4gIHZhciB2ZXJzaW9uID0gX3JlZjIkYnJvd3NlckluZm8udmVyc2lvbjtcbiAgdmFyIGNzcyA9IF9yZWYyLnByZWZpeC5jc3M7XG4gIHZhciBrZWVwVW5wcmVmaXhlZCA9IF9yZWYyLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2NhbGMoJykgPiAtMSAmJiAoYnJvd3NlciA9PT0gJ2ZpcmVmb3gnICYmIHZlcnNpb24gPCAxNSB8fCBicm93c2VyID09PSAnY2hyb21lJyAmJiB2ZXJzaW9uIDwgMjUgfHwgYnJvd3NlciA9PT0gJ3NhZmFyaScgJiYgdmVyc2lvbiA8IDYuMSB8fCBicm93c2VyID09PSAnaW9zX3NhZicgJiYgdmVyc2lvbiA8IDcpKSB7XG4gICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIHZhbHVlLnJlcGxhY2UoL2NhbGNcXCgvZywgY3NzICsgJ2NhbGMoJykgKyAoa2VlcFVucHJlZml4ZWQgPyAnOycgKyAoMCwgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlMlsnZGVmYXVsdCddKShwcm9wZXJ0eSkgKyAnOicgKyB2YWx1ZSA6ICcnKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGN1cnNvcjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FtZWxUb0Rhc2hDYXNlJyk7XG5cbnZhciBfdXRpbHNDYW1lbFRvRGFzaENhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDYW1lbFRvRGFzaENhc2UpO1xuXG52YXIgdmFsdWVzID0ge1xuICAnem9vbS1pbic6IHRydWUsXG4gICd6b29tLW91dCc6IHRydWUsXG4gICdncmFiJzogdHJ1ZSxcbiAgJ2dyYWJiaW5nJzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gY3Vyc29yKF9yZWYpIHtcbiAgdmFyIHByb3BlcnR5ID0gX3JlZi5wcm9wZXJ0eTtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZTtcbiAgdmFyIF9yZWYkYnJvd3NlckluZm8gPSBfcmVmLmJyb3dzZXJJbmZvO1xuICB2YXIgYnJvd3NlciA9IF9yZWYkYnJvd3NlckluZm8uYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBfcmVmJGJyb3dzZXJJbmZvLnZlcnNpb247XG4gIHZhciBjc3MgPSBfcmVmLnByZWZpeC5jc3M7XG4gIHZhciBrZWVwVW5wcmVmaXhlZCA9IF9yZWYua2VlcFVucHJlZml4ZWQ7XG5cbiAgaWYgKHByb3BlcnR5ID09PSAnY3Vyc29yJyAmJiB2YWx1ZXNbdmFsdWVdICYmIChicm93c2VyID09PSAnZmlyZWZveCcgJiYgdmVyc2lvbiA8IDI0IHx8IGJyb3dzZXIgPT09ICdjaHJvbWUnICYmIHZlcnNpb24gPCAzNyB8fCBicm93c2VyID09PSAnc2FmYXJpJyAmJiB2ZXJzaW9uIDwgOSB8fCBicm93c2VyID09PSAnb3BlcmEnICYmIHZlcnNpb24gPCAyNCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3Vyc29yOiBjc3MgKyB2YWx1ZSArIChrZWVwVW5wcmVmaXhlZCA/ICc7JyArICgwLCBfdXRpbHNDYW1lbFRvRGFzaENhc2UyWydkZWZhdWx0J10pKHByb3BlcnR5KSArICc6JyArIHZhbHVlIDogJycpXG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZmxleDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FtZWxUb0Rhc2hDYXNlJyk7XG5cbnZhciBfdXRpbHNDYW1lbFRvRGFzaENhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDYW1lbFRvRGFzaENhc2UpO1xuXG52YXIgdmFsdWVzID0ge1xuICAnZmxleCc6IHRydWUsXG4gICdpbmxpbmUtZmxleCc6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGZsZXgoX3JlZikge1xuICB2YXIgcHJvcGVydHkgPSBfcmVmLnByb3BlcnR5O1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlO1xuICB2YXIgX3JlZiRicm93c2VySW5mbyA9IF9yZWYuYnJvd3NlckluZm87XG4gIHZhciBicm93c2VyID0gX3JlZiRicm93c2VySW5mby5icm93c2VyO1xuICB2YXIgdmVyc2lvbiA9IF9yZWYkYnJvd3NlckluZm8udmVyc2lvbjtcbiAgdmFyIGNzcyA9IF9yZWYucHJlZml4LmNzcztcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gX3JlZi5rZWVwVW5wcmVmaXhlZDtcblxuICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiB2YWx1ZXNbdmFsdWVdICYmIChicm93c2VyID09PSAnY2hyb21lJyAmJiB2ZXJzaW9uIDwgMjkgJiYgdmVyc2lvbiA+IDIwIHx8IChicm93c2VyID09PSAnc2FmYXJpJyB8fCBicm93c2VyID09PSAnaW9zX3NhZicpICYmIHZlcnNpb24gPCA5ICYmIHZlcnNpb24gPiA2IHx8IGJyb3dzZXIgPT09ICdvcGVyYScgJiYgKHZlcnNpb24gPT0gMTUgfHwgdmVyc2lvbiA9PSAxNikpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IGNzcyArIHZhbHVlICsgKGtlZXBVbnByZWZpeGVkID8gJzsnICsgKDAsIF91dGlsc0NhbWVsVG9EYXNoQ2FzZTJbJ2RlZmF1bHQnXSkocHJvcGVydHkpICsgJzonICsgdmFsdWUgOiAnJylcbiAgICB9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzWydkZWZhdWx0J10gPSBmbGV4Ym94SUU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIF91dGlsc0NhbWVsVG9EYXNoQ2FzZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhbWVsVG9EYXNoQ2FzZScpO1xuXG52YXIgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlKTtcblxudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2Rpc3RyaWJ1dGUnLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJyxcbiAgZmxleDogJ2ZsZXhib3gnLFxuICAnaW5saW5lLWZsZXgnOiAnaW5saW5lLWZsZXhib3gnXG59O1xudmFyIGFsdGVybmF0aXZlUHJvcHMgPSB7XG4gIGFsaWduQ29udGVudDogJ21zRmxleExpbmVQYWNrJyxcbiAgYWxpZ25TZWxmOiAnbXNGbGV4SXRlbUFsaWduJyxcbiAgYWxpZ25JdGVtczogJ21zRmxleEFsaWduJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdtc0ZsZXhQYWNrJyxcbiAgb3JkZXI6ICdtc0ZsZXhPcmRlcicsXG4gIGZsZXhHcm93OiAnbXNGbGV4UG9zaXRpdmUnLFxuICBmbGV4U2hyaW5rOiAnbXNGbGV4TmVnYXRpdmUnLFxuICBmbGV4QmFzaXM6ICdtc1ByZWZlcnJlZFNpemUnXG59O1xuXG52YXIgcHJvcGVydGllcyA9IE9iamVjdC5rZXlzKGFsdGVybmF0aXZlUHJvcHMpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBwcm9wKSB7XG4gIHJlc3VsdFtwcm9wXSA9IHRydWU7XG4gIHJldHVybiByZXN1bHQ7XG59LCB7fSk7XG5cbmZ1bmN0aW9uIGZsZXhib3hJRShfcmVmMikge1xuICB2YXIgcHJvcGVydHkgPSBfcmVmMi5wcm9wZXJ0eTtcbiAgdmFyIHZhbHVlID0gX3JlZjIudmFsdWU7XG4gIHZhciBzdHlsZXMgPSBfcmVmMi5zdHlsZXM7XG4gIHZhciBfcmVmMiRicm93c2VySW5mbyA9IF9yZWYyLmJyb3dzZXJJbmZvO1xuICB2YXIgYnJvd3NlciA9IF9yZWYyJGJyb3dzZXJJbmZvLmJyb3dzZXI7XG4gIHZhciB2ZXJzaW9uID0gX3JlZjIkYnJvd3NlckluZm8udmVyc2lvbjtcbiAgdmFyIGNzcyA9IF9yZWYyLnByZWZpeC5jc3M7XG4gIHZhciBrZWVwVW5wcmVmaXhlZCA9IF9yZWYyLmtlZXBVbnByZWZpeGVkO1xuXG4gIGlmICgocHJvcGVydGllc1twcm9wZXJ0eV0gfHwgcHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2ZsZXgnKSA+IC0xKSAmJiAoYnJvd3NlciA9PT0gJ2llX21vYicgfHwgYnJvd3NlciA9PT0gJ2llJykgJiYgdmVyc2lvbiA9PSAxMCkge1xuICAgIGlmICgha2VlcFVucHJlZml4ZWQpIHtcbiAgICAgIGRlbGV0ZSBzdHlsZXNbcHJvcGVydHldO1xuICAgIH1cbiAgICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6IGNzcyArIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSArIChrZWVwVW5wcmVmaXhlZCA/ICc7JyArICgwLCBfdXRpbHNDYW1lbFRvRGFzaENhc2UyWydkZWZhdWx0J10pKHByb3BlcnR5KSArICc6JyArIHZhbHVlIDogJycpXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0pIHtcbiAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldLCBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gfHwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZmxleGJveE9sZDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FtZWxUb0Rhc2hDYXNlJyk7XG5cbnZhciBfdXRpbHNDYW1lbFRvRGFzaENhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDYW1lbFRvRGFzaENhc2UpO1xuXG52YXIgYWx0ZXJuYXRpdmVWYWx1ZXMgPSB7XG4gICdzcGFjZS1hcm91bmQnOiAnanVzdGlmeScsXG4gICdzcGFjZS1iZXR3ZWVuJzogJ2p1c3RpZnknLFxuICAnZmxleC1zdGFydCc6ICdzdGFydCcsXG4gICdmbGV4LWVuZCc6ICdlbmQnLFxuICAnd3JhcC1yZXZlcnNlJzogJ211bHRpcGxlJyxcbiAgd3JhcDogJ211bHRpcGxlJyxcbiAgZmxleDogJ2JveCcsXG4gICdpbmxpbmUtZmxleCc6ICdpbmxpbmUtYm94J1xufTtcblxudmFyIGFsdGVybmF0aXZlUHJvcHMgPSB7XG4gIGFsaWduSXRlbXM6ICdXZWJraXRCb3hBbGlnbicsXG4gIGp1c3RpZnlDb250ZW50OiAnV2Via2l0Qm94UGFjaycsXG4gIGZsZXhXcmFwOiAnV2Via2l0Qm94TGluZXMnXG59O1xuXG52YXIgb3RoZXJQcm9wcyA9IFsnYWxpZ25Db250ZW50JywgJ2FsaWduU2VsZicsICdvcmRlcicsICdmbGV4R3JvdycsICdmbGV4U2hyaW5rJywgJ2ZsZXhCYXNpcycsICdmbGV4RGlyZWN0aW9uJ107XG5cbnZhciBwcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoYWx0ZXJuYXRpdmVQcm9wcykuY29uY2F0KG90aGVyUHJvcHMpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBwcm9wKSB7XG4gIHJlc3VsdFtwcm9wXSA9IHRydWU7XG4gIHJldHVybiByZXN1bHQ7XG59LCB7fSk7XG5cbmZ1bmN0aW9uIGZsZXhib3hPbGQoX3JlZjIpIHtcbiAgdmFyIHByb3BlcnR5ID0gX3JlZjIucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IF9yZWYyLnZhbHVlO1xuICB2YXIgc3R5bGVzID0gX3JlZjIuc3R5bGVzO1xuICB2YXIgX3JlZjIkYnJvd3NlckluZm8gPSBfcmVmMi5icm93c2VySW5mbztcbiAgdmFyIGJyb3dzZXIgPSBfcmVmMiRicm93c2VySW5mby5icm93c2VyO1xuICB2YXIgdmVyc2lvbiA9IF9yZWYyJGJyb3dzZXJJbmZvLnZlcnNpb247XG4gIHZhciBjc3MgPSBfcmVmMi5wcmVmaXguY3NzO1xuICB2YXIga2VlcFVucHJlZml4ZWQgPSBfcmVmMi5rZWVwVW5wcmVmaXhlZDtcblxuICBpZiAoKHByb3BlcnRpZXNbcHJvcGVydHldIHx8IHByb3BlcnR5ID09PSAnZGlzcGxheScgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmRleE9mKCdmbGV4JykgPiAtMSkgJiYgKGJyb3dzZXIgPT09ICdmaXJlZm94JyAmJiB2ZXJzaW9uIDwgMjIgfHwgYnJvd3NlciA9PT0gJ2Nocm9tZScgJiYgdmVyc2lvbiA8IDIxIHx8IChicm93c2VyID09PSAnc2FmYXJpJyB8fCBicm93c2VyID09PSAnaW9zX3NhZicpICYmIHZlcnNpb24gPD0gNi4xIHx8IGJyb3dzZXIgPT09ICdhbmRyb2lkJyAmJiB2ZXJzaW9uIDwgNC40IHx8IGJyb3dzZXIgPT09ICdhbmRfdWMnKSkge1xuICAgIGlmICgha2VlcFVucHJlZml4ZWQpIHtcbiAgICAgIGRlbGV0ZSBzdHlsZXNbcHJvcGVydHldO1xuICAgIH1cbiAgICBpZiAocHJvcGVydHkgPT09ICdmbGV4RGlyZWN0aW9uJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgV2Via2l0Qm94T3JpZW50OiB2YWx1ZS5pbmRleE9mKCdjb2x1bW4nKSA+IC0xID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJyxcbiAgICAgICAgV2Via2l0Qm94RGlyZWN0aW9uOiB2YWx1ZS5pbmRleE9mKCdyZXZlcnNlJykgPiAtMSA/ICdyZXZlcnNlJyA6ICdub3JtYWwnXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRpc3BsYXk6IGNzcyArIGFsdGVybmF0aXZlVmFsdWVzW3ZhbHVlXSArIChrZWVwVW5wcmVmaXhlZCA/ICc7JyArICgwLCBfdXRpbHNDYW1lbFRvRGFzaENhc2UyWydkZWZhdWx0J10pKHByb3BlcnR5KSArICc6JyArIHZhbHVlIDogJycpXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0pIHtcbiAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIGFsdGVybmF0aXZlUHJvcHNbcHJvcGVydHldLCBhbHRlcm5hdGl2ZVZhbHVlc1t2YWx1ZV0gfHwgdmFsdWUpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gZ3JhZGllbnQ7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIF91dGlsc0NhbWVsVG9EYXNoQ2FzZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhbWVsVG9EYXNoQ2FzZScpO1xuXG52YXIgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlKTtcblxudmFyIHZhbHVlcyA9IC9saW5lYXItZ3JhZGllbnR8cmFkaWFsLWdyYWRpZW50fHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnR8cmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudC87XG5cbmZ1bmN0aW9uIGdyYWRpZW50KF9yZWYyKSB7XG4gIHZhciBwcm9wZXJ0eSA9IF9yZWYyLnByb3BlcnR5O1xuICB2YXIgdmFsdWUgPSBfcmVmMi52YWx1ZTtcbiAgdmFyIF9yZWYyJGJyb3dzZXJJbmZvID0gX3JlZjIuYnJvd3NlckluZm87XG4gIHZhciBicm93c2VyID0gX3JlZjIkYnJvd3NlckluZm8uYnJvd3NlcjtcbiAgdmFyIHZlcnNpb24gPSBfcmVmMiRicm93c2VySW5mby52ZXJzaW9uO1xuICB2YXIgY3NzID0gX3JlZjIucHJlZml4LmNzcztcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gX3JlZjIua2VlcFVucHJlZml4ZWQ7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubWF0Y2godmFsdWVzKSAhPT0gbnVsbCAmJiAoYnJvd3NlciA9PT0gJ2ZpcmVmb3gnICYmIHZlcnNpb24gPCAxNiB8fCBicm93c2VyID09PSAnY2hyb21lJyAmJiB2ZXJzaW9uIDwgMjYgfHwgKGJyb3dzZXIgPT09ICdzYWZhcmknIHx8IGJyb3dzZXIgPT09ICdpb3Nfc2FmJykgJiYgdmVyc2lvbiA8IDcgfHwgKGJyb3dzZXIgPT09ICdvcGVyYScgfHwgYnJvd3NlciA9PT0gJ29wX21pbmknKSAmJiB2ZXJzaW9uIDwgMTIuMSB8fCBicm93c2VyID09PSAnYW5kcm9pZCcgJiYgdmVyc2lvbiA8IDQuNCB8fCBicm93c2VyID09PSAnYW5kX3VjJykpIHtcbiAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBwcm9wZXJ0eSwgY3NzICsgdmFsdWUgKyAoa2VlcFVucHJlZml4ZWQgPyAnOycgKyAoMCwgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlMlsnZGVmYXVsdCddKShwcm9wZXJ0eSkgKyAnOicgKyB2YWx1ZSA6ICcnKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHNpemluZztcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FtZWxUb0Rhc2hDYXNlJyk7XG5cbnZhciBfdXRpbHNDYW1lbFRvRGFzaENhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDYW1lbFRvRGFzaENhc2UpO1xuXG52YXIgcHJvcGVydGllcyA9IHtcbiAgbWF4SGVpZ2h0OiB0cnVlLFxuICBtYXhXaWR0aDogdHJ1ZSxcbiAgd2lkdGg6IHRydWUsXG4gIGhlaWdodDogdHJ1ZSxcbiAgY29sdW1uV2lkdGg6IHRydWUsXG4gIG1pbldpZHRoOiB0cnVlLFxuICBtaW5IZWlnaHQ6IHRydWVcbn07XG52YXIgdmFsdWVzID0ge1xuICAnbWluLWNvbnRlbnQnOiB0cnVlLFxuICAnbWF4LWNvbnRlbnQnOiB0cnVlLFxuICAnZmlsbC1hdmFpbGFibGUnOiB0cnVlLFxuICAnZml0LWNvbnRlbnQnOiB0cnVlLFxuICAnY29udGFpbi1mbG9hdHMnOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBzaXppbmcoX3JlZjIpIHtcbiAgdmFyIHByb3BlcnR5ID0gX3JlZjIucHJvcGVydHk7XG4gIHZhciB2YWx1ZSA9IF9yZWYyLnZhbHVlO1xuICB2YXIgY3NzID0gX3JlZjIucHJlZml4LmNzcztcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gX3JlZjIua2VlcFVucHJlZml4ZWQ7XG5cbiAgLy8gVGhpcyBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZVxuICAvLyBLZWVwIGFuIGV5ZSBvbiBpdFxuICBpZiAocHJvcGVydGllc1twcm9wZXJ0eV0gJiYgdmFsdWVzW3ZhbHVlXSkge1xuICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCBjc3MgKyB2YWx1ZSArIChrZWVwVW5wcmVmaXhlZCA/ICc7JyArICgwLCBfdXRpbHNDYW1lbFRvRGFzaENhc2UyWydkZWZhdWx0J10pKHByb3BlcnR5KSArICc6JyArIHZhbHVlIDogJycpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gdHJhbnNpdGlvbjtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgX3V0aWxzQ2FtZWxUb0Rhc2hDYXNlID0gcmVxdWlyZSgnLi4vdXRpbHMvY2FtZWxUb0Rhc2hDYXNlJyk7XG5cbnZhciBfdXRpbHNDYW1lbFRvRGFzaENhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDYW1lbFRvRGFzaENhc2UpO1xuXG52YXIgX3V0aWxzQ2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF91dGlsc0NhcGl0YWxpemVTdHJpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbHNDYXBpdGFsaXplU3RyaW5nKTtcblxudmFyIF91dGlsc1VucHJlZml4UHJvcGVydHkgPSByZXF1aXJlKCcuLi91dGlscy91bnByZWZpeFByb3BlcnR5Jyk7XG5cbnZhciBfdXRpbHNVbnByZWZpeFByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxzVW5wcmVmaXhQcm9wZXJ0eSk7XG5cbnZhciBwcm9wZXJ0aWVzID0geyB0cmFuc2l0aW9uOiB0cnVlLCB0cmFuc2l0aW9uUHJvcGVydHk6IHRydWUgfTtcblxuZnVuY3Rpb24gdHJhbnNpdGlvbihfcmVmMikge1xuICB2YXIgcHJvcGVydHkgPSBfcmVmMi5wcm9wZXJ0eTtcbiAgdmFyIHZhbHVlID0gX3JlZjIudmFsdWU7XG4gIHZhciBjc3MgPSBfcmVmMi5wcmVmaXguY3NzO1xuICB2YXIgcmVxdWlyZXNQcmVmaXggPSBfcmVmMi5yZXF1aXJlc1ByZWZpeDtcbiAgdmFyIGtlZXBVbnByZWZpeGVkID0gX3JlZjIua2VlcFVucHJlZml4ZWQ7XG5cbiAgLy8gYWxzbyBjaGVjayBmb3IgYWxyZWFkeSBwcmVmaXhlZCB0cmFuc2l0aW9uc1xuICB2YXIgdW5wcmVmaXhlZFByb3BlcnR5ID0gKDAsIF91dGlsc1VucHJlZml4UHJvcGVydHkyWydkZWZhdWx0J10pKHByb3BlcnR5KTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgcHJvcGVydGllc1t1bnByZWZpeGVkUHJvcGVydHldKSB7XG4gICAgdmFyIF9yZXQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlcXVpcmVzUHJlZml4RGFzaENhc2VkID0gT2JqZWN0LmtleXMocmVxdWlyZXNQcmVmaXgpLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlsc0NhbWVsVG9EYXNoQ2FzZTJbJ2RlZmF1bHQnXSkocHJvcCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gb25seSBzcGxpdCBtdWx0aSB2YWx1ZXMsIG5vdCBjdWJpYyBiZXppZXJzXG4gICAgICB2YXIgbXVsdGlwbGVWYWx1ZXMgPSB2YWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKTtcblxuICAgICAgcmVxdWlyZXNQcmVmaXhEYXNoQ2FzZWQuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgICAgbXVsdGlwbGVWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgICAgICAgIGlmICh2YWwuaW5kZXhPZihwcm9wZXJ0eSkgPiAtMSkge1xuICAgICAgICAgICAgbXVsdGlwbGVWYWx1ZXNbaW5kZXhdID0gdmFsLnJlcGxhY2UocHJvcGVydHksIGNzcyArIHByb3BlcnR5KSArIChrZWVwVW5wcmVmaXhlZCA/ICcsJyArIHZhbCA6ICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHY6IF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIG11bHRpcGxlVmFsdWVzLmpvaW4oJywnKSlcbiAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIGlmICh0eXBlb2YgX3JldCA9PT0gJ29iamVjdCcpIHJldHVybiBfcmV0LnY7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHsgXCJjaHJvbWVcIjogeyBcInRyYW5zZm9ybVwiOiAzNSwgXCJ0cmFuc2Zvcm1PcmlnaW5cIjogMzUsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiAzNSwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IDM1LCBcImJhY2tmYWNlVmlzaWJpbGl0eVwiOiAzNSwgXCJwZXJzcGVjdGl2ZVwiOiAzNSwgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiAzNSwgXCJ0cmFuc2Zvcm1TdHlsZVwiOiAzNSwgXCJ0cmFuc2Zvcm1PcmlnaW5aXCI6IDM1LCBcImFuaW1hdGlvblwiOiA0MiwgXCJhbmltYXRpb25EZWxheVwiOiA0MiwgXCJhbmltYXRpb25EaXJlY3Rpb25cIjogNDIsIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogNDIsIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogNDIsIFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogNDIsIFwiYW5pbWF0aW9uTmFtZVwiOiA0MiwgXCJhbmltYXRpb25QbGF5U3RhdGVcIjogNDIsIFwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb25cIjogNDIsIFwiYXBwZWFyYW5jZVwiOiA1MiwgXCJ1c2VyU2VsZWN0XCI6IDUyLCBcImZvbnRLZXJuaW5nXCI6IDMyLCBcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6IDUyLCBcInRleHRFbXBoYXNpc1wiOiA1MiwgXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOiA1MiwgXCJ0ZXh0RW1waGFzaXNDb2xvclwiOiA1MiwgXCJib3hEZWNvcmF0aW9uQnJlYWtcIjogNTIsIFwiY2xpcFBhdGhcIjogNTIsIFwibWFza0ltYWdlXCI6IDUyLCBcIm1hc2tNb2RlXCI6IDUyLCBcIm1hc2tSZXBlYXRcIjogNTIsIFwibWFza1Bvc2l0aW9uXCI6IDUyLCBcIm1hc2tDbGlwXCI6IDUyLCBcIm1hc2tPcmlnaW5cIjogNTIsIFwibWFza1NpemVcIjogNTIsIFwibWFza0NvbXBvc2l0ZVwiOiA1MiwgXCJtYXNrXCI6IDUyLCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogNTIsIFwibWFza0JvcmRlck1vZGVcIjogNTIsIFwibWFza0JvcmRlclNsaWNlXCI6IDUyLCBcIm1hc2tCb3JkZXJXaWR0aFwiOiA1MiwgXCJtYXNrQm9yZGVyT3V0c2V0XCI6IDUyLCBcIm1hc2tCb3JkZXJSZXBlYXRcIjogNTIsIFwibWFza0JvcmRlclwiOiA1MiwgXCJtYXNrVHlwZVwiOiA1MiwgXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6IDUyLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiA1MiwgXCJ0ZXh0RGVjb3JhdGlvbkxpbmVcIjogNTIsIFwidGV4dERlY29yYXRpb25Db2xvclwiOiA1MiwgXCJmaWx0ZXJcIjogNTIsIFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOiA0NywgXCJicmVha0FmdGVyXCI6IDUyLCBcImJyZWFrQmVmb3JlXCI6IDUyLCBcImJyZWFrSW5zaWRlXCI6IDUyLCBcImNvbHVtbkNvdW50XCI6IDUyLCBcImNvbHVtbkZpbGxcIjogNTIsIFwiY29sdW1uR2FwXCI6IDUyLCBcImNvbHVtblJ1bGVcIjogNTIsIFwiY29sdW1uUnVsZUNvbG9yXCI6IDUyLCBcImNvbHVtblJ1bGVTdHlsZVwiOiA1MiwgXCJjb2x1bW5SdWxlV2lkdGhcIjogNTIsIFwiY29sdW1uc1wiOiA1MiwgXCJjb2x1bW5TcGFuXCI6IDUyLCBcImNvbHVtbldpZHRoXCI6IDUyIH0sIFwic2FmYXJpXCI6IHsgXCJmbGV4XCI6IDgsIFwiZmxleEJhc2lzXCI6IDgsIFwiZmxleERpcmVjdGlvblwiOiA4LCBcImZsZXhHcm93XCI6IDgsIFwiZmxleEZsb3dcIjogOCwgXCJmbGV4U2hyaW5rXCI6IDgsIFwiZmxleFdyYXBcIjogOCwgXCJhbGlnbkNvbnRlbnRcIjogOCwgXCJhbGlnbkl0ZW1zXCI6IDgsIFwiYWxpZ25TZWxmXCI6IDgsIFwianVzdGlmeUNvbnRlbnRcIjogOCwgXCJvcmRlclwiOiA4LCBcInRyYW5zaXRpb25cIjogNiwgXCJ0cmFuc2l0aW9uRGVsYXlcIjogNiwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogNiwgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogNiwgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogNiwgXCJ0cmFuc2Zvcm1cIjogOCwgXCJ0cmFuc2Zvcm1PcmlnaW5cIjogOCwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IDgsIFwidHJhbnNmb3JtT3JpZ2luWVwiOiA4LCBcImJhY2tmYWNlVmlzaWJpbGl0eVwiOiA4LCBcInBlcnNwZWN0aXZlXCI6IDgsIFwicGVyc3BlY3RpdmVPcmlnaW5cIjogOCwgXCJ0cmFuc2Zvcm1TdHlsZVwiOiA4LCBcInRyYW5zZm9ybU9yaWdpblpcIjogOCwgXCJhbmltYXRpb25cIjogOCwgXCJhbmltYXRpb25EZWxheVwiOiA4LCBcImFuaW1hdGlvbkRpcmVjdGlvblwiOiA4LCBcImFuaW1hdGlvbkZpbGxNb2RlXCI6IDgsIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogOCwgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiA4LCBcImFuaW1hdGlvbk5hbWVcIjogOCwgXCJhbmltYXRpb25QbGF5U3RhdGVcIjogOCwgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiA4LCBcImFwcGVhcmFuY2VcIjogOS4xLCBcInVzZXJTZWxlY3RcIjogOS4xLCBcImJhY2tkcm9wRmlsdGVyXCI6IDkuMSwgXCJmb250S2VybmluZ1wiOiA5LjEsIFwic2Nyb2xsU25hcFR5cGVcIjogOS4xLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IDkuMSwgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiA5LjEsIFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCI6IDkuMSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiA5LjEsIFwidGV4dEVtcGhhc2lzUG9zaXRpb25cIjogNywgXCJ0ZXh0RW1waGFzaXNcIjogNywgXCJ0ZXh0RW1waGFzaXNTdHlsZVwiOiA3LCBcInRleHRFbXBoYXNpc0NvbG9yXCI6IDcsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IDkuMSwgXCJjbGlwUGF0aFwiOiA5LjEsIFwibWFza0ltYWdlXCI6IDkuMSwgXCJtYXNrTW9kZVwiOiA5LjEsIFwibWFza1JlcGVhdFwiOiA5LjEsIFwibWFza1Bvc2l0aW9uXCI6IDkuMSwgXCJtYXNrQ2xpcFwiOiA5LjEsIFwibWFza09yaWdpblwiOiA5LjEsIFwibWFza1NpemVcIjogOS4xLCBcIm1hc2tDb21wb3NpdGVcIjogOS4xLCBcIm1hc2tcIjogOS4xLCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogOS4xLCBcIm1hc2tCb3JkZXJNb2RlXCI6IDkuMSwgXCJtYXNrQm9yZGVyU2xpY2VcIjogOS4xLCBcIm1hc2tCb3JkZXJXaWR0aFwiOiA5LjEsIFwibWFza0JvcmRlck91dHNldFwiOiA5LjEsIFwibWFza0JvcmRlclJlcGVhdFwiOiA5LjEsIFwibWFza0JvcmRlclwiOiA5LjEsIFwibWFza1R5cGVcIjogOS4xLCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogOS4xLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiA5LjEsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IDkuMSwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IDkuMSwgXCJzaGFwZUltYWdlVGhyZXNob2xkXCI6IDkuMSwgXCJzaGFwZUltYWdlTWFyZ2luXCI6IDkuMSwgXCJzaGFwZUltYWdlT3V0c2lkZVwiOiA5LjEsIFwiZmlsdGVyXCI6IDksIFwiaHlwaGVuc1wiOiA5LjEsIFwiZmxvd0ludG9cIjogOS4xLCBcImZsb3dGcm9tXCI6IDkuMSwgXCJicmVha0JlZm9yZVwiOiA4LCBcImJyZWFrQWZ0ZXJcIjogOCwgXCJicmVha0luc2lkZVwiOiA4LCBcInJlZ2lvbkZyYWdtZW50XCI6IDkuMSwgXCJjb2x1bW5Db3VudFwiOiA4LCBcImNvbHVtbkZpbGxcIjogOCwgXCJjb2x1bW5HYXBcIjogOCwgXCJjb2x1bW5SdWxlXCI6IDgsIFwiY29sdW1uUnVsZUNvbG9yXCI6IDgsIFwiY29sdW1uUnVsZVN0eWxlXCI6IDgsIFwiY29sdW1uUnVsZVdpZHRoXCI6IDgsIFwiY29sdW1uc1wiOiA4LCBcImNvbHVtblNwYW5cIjogOCwgXCJjb2x1bW5XaWR0aFwiOiA4IH0sIFwiZmlyZWZveFwiOiB7IFwiYXBwZWFyYW5jZVwiOiA0NywgXCJ1c2VyU2VsZWN0XCI6IDQ3LCBcImJveFNpemluZ1wiOiAyOCwgXCJ0ZXh0QWxpZ25MYXN0XCI6IDQ3LCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogMzUsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IDM1LCBcInRleHREZWNvcmF0aW9uTGluZVwiOiAzNSwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IDM1LCBcInRhYlNpemVcIjogNDcsIFwiaHlwaGVuc1wiOiA0MiwgXCJmb250RmVhdHVyZVNldHRpbmdzXCI6IDMzLCBcImJyZWFrQWZ0ZXJcIjogNDcsIFwiYnJlYWtCZWZvcmVcIjogNDcsIFwiYnJlYWtJbnNpZGVcIjogNDcsIFwiY29sdW1uQ291bnRcIjogNDcsIFwiY29sdW1uRmlsbFwiOiA0NywgXCJjb2x1bW5HYXBcIjogNDcsIFwiY29sdW1uUnVsZVwiOiA0NywgXCJjb2x1bW5SdWxlQ29sb3JcIjogNDcsIFwiY29sdW1uUnVsZVN0eWxlXCI6IDQ3LCBcImNvbHVtblJ1bGVXaWR0aFwiOiA0NywgXCJjb2x1bW5zXCI6IDQ3LCBcImNvbHVtblNwYW5cIjogNDcsIFwiY29sdW1uV2lkdGhcIjogNDcgfSwgXCJvcGVyYVwiOiB7IFwiZmxleFwiOiAxNiwgXCJmbGV4QmFzaXNcIjogMTYsIFwiZmxleERpcmVjdGlvblwiOiAxNiwgXCJmbGV4R3Jvd1wiOiAxNiwgXCJmbGV4Rmxvd1wiOiAxNiwgXCJmbGV4U2hyaW5rXCI6IDE2LCBcImZsZXhXcmFwXCI6IDE2LCBcImFsaWduQ29udGVudFwiOiAxNiwgXCJhbGlnbkl0ZW1zXCI6IDE2LCBcImFsaWduU2VsZlwiOiAxNiwgXCJqdXN0aWZ5Q29udGVudFwiOiAxNiwgXCJvcmRlclwiOiAxNiwgXCJ0cmFuc2Zvcm1cIjogMjIsIFwidHJhbnNmb3JtT3JpZ2luXCI6IDIyLCBcInRyYW5zZm9ybU9yaWdpblhcIjogMjIsIFwidHJhbnNmb3JtT3JpZ2luWVwiOiAyMiwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogMjIsIFwicGVyc3BlY3RpdmVcIjogMjIsIFwicGVyc3BlY3RpdmVPcmlnaW5cIjogMjIsIFwidHJhbnNmb3JtU3R5bGVcIjogMjIsIFwidHJhbnNmb3JtT3JpZ2luWlwiOiAyMiwgXCJhbmltYXRpb25cIjogMjksIFwiYW5pbWF0aW9uRGVsYXlcIjogMjksIFwiYW5pbWF0aW9uRGlyZWN0aW9uXCI6IDI5LCBcImFuaW1hdGlvbkZpbGxNb2RlXCI6IDI5LCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDI5LCBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IDI5LCBcImFuaW1hdGlvbk5hbWVcIjogMjksIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IDI5LCBcImFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uXCI6IDI5LCBcImFwcGVhcmFuY2VcIjogMzcsIFwidXNlclNlbGVjdFwiOiAzNywgXCJmb250S2VybmluZ1wiOiAxOSwgXCJ0ZXh0RW1waGFzaXNQb3NpdGlvblwiOiAzNywgXCJ0ZXh0RW1waGFzaXNcIjogMzcsIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogMzcsIFwidGV4dEVtcGhhc2lzQ29sb3JcIjogMzcsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IDM3LCBcImNsaXBQYXRoXCI6IDM3LCBcIm1hc2tJbWFnZVwiOiAzNywgXCJtYXNrTW9kZVwiOiAzNywgXCJtYXNrUmVwZWF0XCI6IDM3LCBcIm1hc2tQb3NpdGlvblwiOiAzNywgXCJtYXNrQ2xpcFwiOiAzNywgXCJtYXNrT3JpZ2luXCI6IDM3LCBcIm1hc2tTaXplXCI6IDM3LCBcIm1hc2tDb21wb3NpdGVcIjogMzcsIFwibWFza1wiOiAzNywgXCJtYXNrQm9yZGVyU291cmNlXCI6IDM3LCBcIm1hc2tCb3JkZXJNb2RlXCI6IDM3LCBcIm1hc2tCb3JkZXJTbGljZVwiOiAzNywgXCJtYXNrQm9yZGVyV2lkdGhcIjogMzcsIFwibWFza0JvcmRlck91dHNldFwiOiAzNywgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IDM3LCBcIm1hc2tCb3JkZXJcIjogMzcsIFwibWFza1R5cGVcIjogMzcsIFwiZmlsdGVyXCI6IDM3LCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogMzcsIFwiYnJlYWtBZnRlclwiOiAzNywgXCJicmVha0JlZm9yZVwiOiAzNywgXCJicmVha0luc2lkZVwiOiAzNywgXCJjb2x1bW5Db3VudFwiOiAzNywgXCJjb2x1bW5GaWxsXCI6IDM3LCBcImNvbHVtbkdhcFwiOiAzNywgXCJjb2x1bW5SdWxlXCI6IDM3LCBcImNvbHVtblJ1bGVDb2xvclwiOiAzNywgXCJjb2x1bW5SdWxlU3R5bGVcIjogMzcsIFwiY29sdW1uUnVsZVdpZHRoXCI6IDM3LCBcImNvbHVtbnNcIjogMzcsIFwiY29sdW1uU3BhblwiOiAzNywgXCJjb2x1bW5XaWR0aFwiOiAzNyB9LCBcImllXCI6IHsgXCJncmlkVGVtcGxhdGVSb3dzXCI6IDExLCBcImJyZWFrSW5zaWRlXCI6IDExLCBcInRyYW5zZm9ybU9yaWdpbllcIjogOSwgXCJncmlkUm93U3RhcnRcIjogMTEsIFwiZ3JpZENvbHVtblwiOiAxMSwgXCJyZWdpb25GcmFnbWVudFwiOiAxMSwgXCJicmVha0JlZm9yZVwiOiAxMSwgXCJ1c2VyU2VsZWN0XCI6IDExLCBcImdyaWRDb2x1bW5FbmRcIjogMTEsIFwiZ3JpZFJvd0VuZFwiOiAxMSwgXCJncmlkVGVtcGxhdGVDb2x1bW5zXCI6IDExLCBcImdyaWRDb2x1bW5TdGFydFwiOiAxMSwgXCJncmlkQXJlYVwiOiAxMSwgXCJmbGV4RGlyZWN0aW9uXCI6IDEwLCBcImdyaWRSb3dHYXBcIjogMTEsIFwiZ3JpZFRlbXBsYXRlQXJlYXNcIjogMTEsIFwiZ3JpZEF1dG9Sb3dzXCI6IDExLCBcImdyaWRSb3dcIjogMTEsIFwic2Nyb2xsU25hcERlc3RpbmF0aW9uXCI6IDExLCBcInNjcm9sbFNuYXBQb2ludHNZXCI6IDExLCBcInRvdWNoQWN0aW9uXCI6IDEwLCBcImdyaWRHYXBcIjogMTEsIFwiZ3JpZENvbHVtbkdhcFwiOiAxMSwgXCJ3cmFwRmxvd1wiOiAxMSwgXCJzY3JvbGxTbmFwUG9pbnRzWFwiOiAxMSwgXCJmbG93RnJvbVwiOiAxMSwgXCJ0cmFuc2Zvcm1cIjogOSwgXCJicmVha0FmdGVyXCI6IDExLCBcIndyYXBNYXJnaW5cIjogMTEsIFwic2Nyb2xsU25hcENvb3JkaW5hdGVcIjogMTEsIFwiZmxleFdyYXBcIjogMTAsIFwic2Nyb2xsU25hcFR5cGVcIjogMTEsIFwiZmxleFwiOiAxMCwgXCJ3cmFwVGhyb3VnaFwiOiAxMSwgXCJncmlkQXV0b0NvbHVtbnNcIjogMTEsIFwiZmxleEZsb3dcIjogMTAsIFwiZ3JpZFRlbXBsYXRlXCI6IDExLCBcImh5cGhlbnNcIjogMTEsIFwiZ3JpZFwiOiAxMSwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IDksIFwiZmxvd0ludG9cIjogMTEsIFwidHJhbnNmb3JtT3JpZ2luXCI6IDksIFwiZ3JpZEF1dG9GbG93XCI6IDExLCBcInRleHRTaXplQWRqdXN0XCI6IDExIH0sIFwiZWRnZVwiOiB7IFwidXNlclNlbGVjdFwiOiAxNCwgXCJ3cmFwRmxvd1wiOiAxNCwgXCJ3cmFwVGhyb3VnaFwiOiAxNCwgXCJ3cmFwTWFyZ2luXCI6IDE0LCBcInNjcm9sbFNuYXBUeXBlXCI6IDE0LCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IDE0LCBcInNjcm9sbFNuYXBQb2ludHNZXCI6IDE0LCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiAxNCwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiAxNCwgXCJoeXBoZW5zXCI6IDE0LCBcImZsb3dJbnRvXCI6IDE0LCBcImZsb3dGcm9tXCI6IDE0LCBcImJyZWFrQmVmb3JlXCI6IDE0LCBcImJyZWFrQWZ0ZXJcIjogMTQsIFwiYnJlYWtJbnNpZGVcIjogMTQsIFwicmVnaW9uRnJhZ21lbnRcIjogMTQsIFwiZ3JpZFRlbXBsYXRlQ29sdW1uc1wiOiAxNCwgXCJncmlkVGVtcGxhdGVSb3dzXCI6IDE0LCBcImdyaWRUZW1wbGF0ZUFyZWFzXCI6IDE0LCBcImdyaWRUZW1wbGF0ZVwiOiAxNCwgXCJncmlkQXV0b0NvbHVtbnNcIjogMTQsIFwiZ3JpZEF1dG9Sb3dzXCI6IDE0LCBcImdyaWRBdXRvRmxvd1wiOiAxNCwgXCJncmlkXCI6IDE0LCBcImdyaWRSb3dTdGFydFwiOiAxNCwgXCJncmlkQ29sdW1uU3RhcnRcIjogMTQsIFwiZ3JpZFJvd0VuZFwiOiAxNCwgXCJncmlkUm93XCI6IDE0LCBcImdyaWRDb2x1bW5cIjogMTQsIFwiZ3JpZENvbHVtbkVuZFwiOiAxNCwgXCJncmlkQ29sdW1uR2FwXCI6IDE0LCBcImdyaWRSb3dHYXBcIjogMTQsIFwiZ3JpZEFyZWFcIjogMTQsIFwiZ3JpZEdhcFwiOiAxNCB9LCBcImlvc19zYWZcIjogeyBcImZsZXhcIjogOC4xLCBcImZsZXhCYXNpc1wiOiA4LjEsIFwiZmxleERpcmVjdGlvblwiOiA4LjEsIFwiZmxleEdyb3dcIjogOC4xLCBcImZsZXhGbG93XCI6IDguMSwgXCJmbGV4U2hyaW5rXCI6IDguMSwgXCJmbGV4V3JhcFwiOiA4LjEsIFwiYWxpZ25Db250ZW50XCI6IDguMSwgXCJhbGlnbkl0ZW1zXCI6IDguMSwgXCJhbGlnblNlbGZcIjogOC4xLCBcImp1c3RpZnlDb250ZW50XCI6IDguMSwgXCJvcmRlclwiOiA4LjEsIFwidHJhbnNpdGlvblwiOiA2LCBcInRyYW5zaXRpb25EZWxheVwiOiA2LCBcInRyYW5zaXRpb25EdXJhdGlvblwiOiA2LCBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiA2LCBcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOiA2LCBcInRyYW5zZm9ybVwiOiA4LjEsIFwidHJhbnNmb3JtT3JpZ2luXCI6IDguMSwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IDguMSwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IDguMSwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogOC4xLCBcInBlcnNwZWN0aXZlXCI6IDguMSwgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiA4LjEsIFwidHJhbnNmb3JtU3R5bGVcIjogOC4xLCBcInRyYW5zZm9ybU9yaWdpblpcIjogOC4xLCBcImFuaW1hdGlvblwiOiA4LjEsIFwiYW5pbWF0aW9uRGVsYXlcIjogOC4xLCBcImFuaW1hdGlvbkRpcmVjdGlvblwiOiA4LjEsIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogOC4xLCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDguMSwgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiA4LjEsIFwiYW5pbWF0aW9uTmFtZVwiOiA4LjEsIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IDguMSwgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiA4LjEsIFwiYXBwZWFyYW5jZVwiOiA5LjMsIFwidXNlclNlbGVjdFwiOiA5LjMsIFwiYmFja2Ryb3BGaWx0ZXJcIjogOS4zLCBcImZvbnRLZXJuaW5nXCI6IDkuMywgXCJzY3JvbGxTbmFwVHlwZVwiOiA5LjMsIFwic2Nyb2xsU25hcFBvaW50c1hcIjogOS4zLCBcInNjcm9sbFNuYXBQb2ludHNZXCI6IDkuMywgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogOS4zLCBcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6IDkuMywgXCJib3hEZWNvcmF0aW9uQnJlYWtcIjogOS4zLCBcImNsaXBQYXRoXCI6IDkuMywgXCJtYXNrSW1hZ2VcIjogOS4zLCBcIm1hc2tNb2RlXCI6IDkuMywgXCJtYXNrUmVwZWF0XCI6IDkuMywgXCJtYXNrUG9zaXRpb25cIjogOS4zLCBcIm1hc2tDbGlwXCI6IDkuMywgXCJtYXNrT3JpZ2luXCI6IDkuMywgXCJtYXNrU2l6ZVwiOiA5LjMsIFwibWFza0NvbXBvc2l0ZVwiOiA5LjMsIFwibWFza1wiOiA5LjMsIFwibWFza0JvcmRlclNvdXJjZVwiOiA5LjMsIFwibWFza0JvcmRlck1vZGVcIjogOS4zLCBcIm1hc2tCb3JkZXJTbGljZVwiOiA5LjMsIFwibWFza0JvcmRlcldpZHRoXCI6IDkuMywgXCJtYXNrQm9yZGVyT3V0c2V0XCI6IDkuMywgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IDkuMywgXCJtYXNrQm9yZGVyXCI6IDkuMywgXCJtYXNrVHlwZVwiOiA5LjMsIFwidGV4dFNpemVBZGp1c3RcIjogOS4zLCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogOS4zLCBcInRleHREZWNvcmF0aW9uU2tpcFwiOiA5LjMsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IDkuMywgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IDkuMywgXCJzaGFwZUltYWdlVGhyZXNob2xkXCI6IDkuMywgXCJzaGFwZUltYWdlTWFyZ2luXCI6IDkuMywgXCJzaGFwZUltYWdlT3V0c2lkZVwiOiA5LjMsIFwiZmlsdGVyXCI6IDksIFwiaHlwaGVuc1wiOiA5LjMsIFwiZmxvd0ludG9cIjogOS4zLCBcImZsb3dGcm9tXCI6IDkuMywgXCJicmVha0JlZm9yZVwiOiA4LjEsIFwiYnJlYWtBZnRlclwiOiA4LjEsIFwiYnJlYWtJbnNpZGVcIjogOC4xLCBcInJlZ2lvbkZyYWdtZW50XCI6IDkuMywgXCJjb2x1bW5Db3VudFwiOiA4LjEsIFwiY29sdW1uRmlsbFwiOiA4LjEsIFwiY29sdW1uR2FwXCI6IDguMSwgXCJjb2x1bW5SdWxlXCI6IDguMSwgXCJjb2x1bW5SdWxlQ29sb3JcIjogOC4xLCBcImNvbHVtblJ1bGVTdHlsZVwiOiA4LjEsIFwiY29sdW1uUnVsZVdpZHRoXCI6IDguMSwgXCJjb2x1bW5zXCI6IDguMSwgXCJjb2x1bW5TcGFuXCI6IDguMSwgXCJjb2x1bW5XaWR0aFwiOiA4LjEgfSwgXCJhbmRyb2lkXCI6IHsgXCJib3JkZXJJbWFnZVwiOiA0LjIsIFwiYm9yZGVySW1hZ2VPdXRzZXRcIjogNC4yLCBcImJvcmRlckltYWdlUmVwZWF0XCI6IDQuMiwgXCJib3JkZXJJbWFnZVNsaWNlXCI6IDQuMiwgXCJib3JkZXJJbWFnZVNvdXJjZVwiOiA0LjIsIFwiYm9yZGVySW1hZ2VXaWR0aFwiOiA0LjIsIFwiZmxleFwiOiA0LjIsIFwiZmxleEJhc2lzXCI6IDQuMiwgXCJmbGV4RGlyZWN0aW9uXCI6IDQuMiwgXCJmbGV4R3Jvd1wiOiA0LjIsIFwiZmxleEZsb3dcIjogNC4yLCBcImZsZXhTaHJpbmtcIjogNC4yLCBcImZsZXhXcmFwXCI6IDQuMiwgXCJhbGlnbkNvbnRlbnRcIjogNC4yLCBcImFsaWduSXRlbXNcIjogNC4yLCBcImFsaWduU2VsZlwiOiA0LjIsIFwianVzdGlmeUNvbnRlbnRcIjogNC4yLCBcIm9yZGVyXCI6IDQuMiwgXCJ0cmFuc2l0aW9uXCI6IDQuMiwgXCJ0cmFuc2l0aW9uRGVsYXlcIjogNC4yLCBcInRyYW5zaXRpb25EdXJhdGlvblwiOiA0LjIsIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IDQuMiwgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogNC4yLCBcInRyYW5zZm9ybVwiOiA0LjQsIFwidHJhbnNmb3JtT3JpZ2luXCI6IDQuNCwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IDQuNCwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IDQuNCwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogNC40LCBcInBlcnNwZWN0aXZlXCI6IDQuNCwgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiA0LjQsIFwidHJhbnNmb3JtU3R5bGVcIjogNC40LCBcInRyYW5zZm9ybU9yaWdpblpcIjogNC40LCBcImFuaW1hdGlvblwiOiA0LjQsIFwiYW5pbWF0aW9uRGVsYXlcIjogNC40LCBcImFuaW1hdGlvbkRpcmVjdGlvblwiOiA0LjQsIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogNC40LCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDQuNCwgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiA0LjQsIFwiYW5pbWF0aW9uTmFtZVwiOiA0LjQsIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IDQuNCwgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiA0LjQsIFwiYXBwZWFyYW5jZVwiOiA0NywgXCJ1c2VyU2VsZWN0XCI6IDQ3LCBcImZvbnRLZXJuaW5nXCI6IDQuNCwgXCJ0ZXh0RW1waGFzaXNQb3NpdGlvblwiOiA0NywgXCJ0ZXh0RW1waGFzaXNcIjogNDcsIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogNDcsIFwidGV4dEVtcGhhc2lzQ29sb3JcIjogNDcsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IDQ3LCBcImNsaXBQYXRoXCI6IDQ3LCBcIm1hc2tJbWFnZVwiOiA0NywgXCJtYXNrTW9kZVwiOiA0NywgXCJtYXNrUmVwZWF0XCI6IDQ3LCBcIm1hc2tQb3NpdGlvblwiOiA0NywgXCJtYXNrQ2xpcFwiOiA0NywgXCJtYXNrT3JpZ2luXCI6IDQ3LCBcIm1hc2tTaXplXCI6IDQ3LCBcIm1hc2tDb21wb3NpdGVcIjogNDcsIFwibWFza1wiOiA0NywgXCJtYXNrQm9yZGVyU291cmNlXCI6IDQ3LCBcIm1hc2tCb3JkZXJNb2RlXCI6IDQ3LCBcIm1hc2tCb3JkZXJTbGljZVwiOiA0NywgXCJtYXNrQm9yZGVyV2lkdGhcIjogNDcsIFwibWFza0JvcmRlck91dHNldFwiOiA0NywgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IDQ3LCBcIm1hc2tCb3JkZXJcIjogNDcsIFwibWFza1R5cGVcIjogNDcsIFwiZmlsdGVyXCI6IDQ3LCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogNDcsIFwiYnJlYWtBZnRlclwiOiA0NywgXCJicmVha0JlZm9yZVwiOiA0NywgXCJicmVha0luc2lkZVwiOiA0NywgXCJjb2x1bW5Db3VudFwiOiA0NywgXCJjb2x1bW5GaWxsXCI6IDQ3LCBcImNvbHVtbkdhcFwiOiA0NywgXCJjb2x1bW5SdWxlXCI6IDQ3LCBcImNvbHVtblJ1bGVDb2xvclwiOiA0NywgXCJjb2x1bW5SdWxlU3R5bGVcIjogNDcsIFwiY29sdW1uUnVsZVdpZHRoXCI6IDQ3LCBcImNvbHVtbnNcIjogNDcsIFwiY29sdW1uU3BhblwiOiA0NywgXCJjb2x1bW5XaWR0aFwiOiA0NyB9LCBcImFuZF9jaHJcIjogeyBcImFwcGVhcmFuY2VcIjogNDcsIFwidXNlclNlbGVjdFwiOiA0NywgXCJ0ZXh0RW1waGFzaXNQb3NpdGlvblwiOiA0NywgXCJ0ZXh0RW1waGFzaXNcIjogNDcsIFwidGV4dEVtcGhhc2lzU3R5bGVcIjogNDcsIFwidGV4dEVtcGhhc2lzQ29sb3JcIjogNDcsIFwiYm94RGVjb3JhdGlvbkJyZWFrXCI6IDQ3LCBcImNsaXBQYXRoXCI6IDQ3LCBcIm1hc2tJbWFnZVwiOiA0NywgXCJtYXNrTW9kZVwiOiA0NywgXCJtYXNrUmVwZWF0XCI6IDQ3LCBcIm1hc2tQb3NpdGlvblwiOiA0NywgXCJtYXNrQ2xpcFwiOiA0NywgXCJtYXNrT3JpZ2luXCI6IDQ3LCBcIm1hc2tTaXplXCI6IDQ3LCBcIm1hc2tDb21wb3NpdGVcIjogNDcsIFwibWFza1wiOiA0NywgXCJtYXNrQm9yZGVyU291cmNlXCI6IDQ3LCBcIm1hc2tCb3JkZXJNb2RlXCI6IDQ3LCBcIm1hc2tCb3JkZXJTbGljZVwiOiA0NywgXCJtYXNrQm9yZGVyV2lkdGhcIjogNDcsIFwibWFza0JvcmRlck91dHNldFwiOiA0NywgXCJtYXNrQm9yZGVyUmVwZWF0XCI6IDQ3LCBcIm1hc2tCb3JkZXJcIjogNDcsIFwibWFza1R5cGVcIjogNDcsIFwidGV4dERlY29yYXRpb25TdHlsZVwiOiA0NywgXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjogNDcsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IDQ3LCBcInRleHREZWNvcmF0aW9uQ29sb3JcIjogNDcsIFwiZmlsdGVyXCI6IDQ3LCBcImZvbnRGZWF0dXJlU2V0dGluZ3NcIjogNDcsIFwiYnJlYWtBZnRlclwiOiA0NywgXCJicmVha0JlZm9yZVwiOiA0NywgXCJicmVha0luc2lkZVwiOiA0NywgXCJjb2x1bW5Db3VudFwiOiA0NywgXCJjb2x1bW5GaWxsXCI6IDQ3LCBcImNvbHVtbkdhcFwiOiA0NywgXCJjb2x1bW5SdWxlXCI6IDQ3LCBcImNvbHVtblJ1bGVDb2xvclwiOiA0NywgXCJjb2x1bW5SdWxlU3R5bGVcIjogNDcsIFwiY29sdW1uUnVsZVdpZHRoXCI6IDQ3LCBcImNvbHVtbnNcIjogNDcsIFwiY29sdW1uU3BhblwiOiA0NywgXCJjb2x1bW5XaWR0aFwiOiA0NyB9LCBcImFuZF91Y1wiOiB7IFwiZmxleFwiOiA5LjksIFwiZmxleEJhc2lzXCI6IDkuOSwgXCJmbGV4RGlyZWN0aW9uXCI6IDkuOSwgXCJmbGV4R3Jvd1wiOiA5LjksIFwiZmxleEZsb3dcIjogOS45LCBcImZsZXhTaHJpbmtcIjogOS45LCBcImZsZXhXcmFwXCI6IDkuOSwgXCJhbGlnbkNvbnRlbnRcIjogOS45LCBcImFsaWduSXRlbXNcIjogOS45LCBcImFsaWduU2VsZlwiOiA5LjksIFwianVzdGlmeUNvbnRlbnRcIjogOS45LCBcIm9yZGVyXCI6IDkuOSwgXCJ0cmFuc2l0aW9uXCI6IDkuOSwgXCJ0cmFuc2l0aW9uRGVsYXlcIjogOS45LCBcInRyYW5zaXRpb25EdXJhdGlvblwiOiA5LjksIFwidHJhbnNpdGlvblByb3BlcnR5XCI6IDkuOSwgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogOS45LCBcInRyYW5zZm9ybVwiOiA5LjksIFwidHJhbnNmb3JtT3JpZ2luXCI6IDkuOSwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IDkuOSwgXCJ0cmFuc2Zvcm1PcmlnaW5ZXCI6IDkuOSwgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogOS45LCBcInBlcnNwZWN0aXZlXCI6IDkuOSwgXCJwZXJzcGVjdGl2ZU9yaWdpblwiOiA5LjksIFwidHJhbnNmb3JtU3R5bGVcIjogOS45LCBcInRyYW5zZm9ybU9yaWdpblpcIjogOS45LCBcImFuaW1hdGlvblwiOiA5LjksIFwiYW5pbWF0aW9uRGVsYXlcIjogOS45LCBcImFuaW1hdGlvbkRpcmVjdGlvblwiOiA5LjksIFwiYW5pbWF0aW9uRmlsbE1vZGVcIjogOS45LCBcImFuaW1hdGlvbkR1cmF0aW9uXCI6IDkuOSwgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiA5LjksIFwiYW5pbWF0aW9uTmFtZVwiOiA5LjksIFwiYW5pbWF0aW9uUGxheVN0YXRlXCI6IDkuOSwgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiA5LjksIFwiYXBwZWFyYW5jZVwiOiA5LjksIFwidXNlclNlbGVjdFwiOiA5LjksIFwiZm9udEtlcm5pbmdcIjogOS45LCBcInRleHRFbXBoYXNpc1Bvc2l0aW9uXCI6IDkuOSwgXCJ0ZXh0RW1waGFzaXNcIjogOS45LCBcInRleHRFbXBoYXNpc1N0eWxlXCI6IDkuOSwgXCJ0ZXh0RW1waGFzaXNDb2xvclwiOiA5LjksIFwibWFza0ltYWdlXCI6IDkuOSwgXCJtYXNrTW9kZVwiOiA5LjksIFwibWFza1JlcGVhdFwiOiA5LjksIFwibWFza1Bvc2l0aW9uXCI6IDkuOSwgXCJtYXNrQ2xpcFwiOiA5LjksIFwibWFza09yaWdpblwiOiA5LjksIFwibWFza1NpemVcIjogOS45LCBcIm1hc2tDb21wb3NpdGVcIjogOS45LCBcIm1hc2tcIjogOS45LCBcIm1hc2tCb3JkZXJTb3VyY2VcIjogOS45LCBcIm1hc2tCb3JkZXJNb2RlXCI6IDkuOSwgXCJtYXNrQm9yZGVyU2xpY2VcIjogOS45LCBcIm1hc2tCb3JkZXJXaWR0aFwiOiA5LjksIFwibWFza0JvcmRlck91dHNldFwiOiA5LjksIFwibWFza0JvcmRlclJlcGVhdFwiOiA5LjksIFwibWFza0JvcmRlclwiOiA5LjksIFwibWFza1R5cGVcIjogOS45LCBcInRleHRTaXplQWRqdXN0XCI6IDkuOSwgXCJmaWx0ZXJcIjogOS45LCBcImh5cGhlbnNcIjogOS45LCBcImZsb3dJbnRvXCI6IDkuOSwgXCJmbG93RnJvbVwiOiA5LjksIFwiYnJlYWtCZWZvcmVcIjogOS45LCBcImJyZWFrQWZ0ZXJcIjogOS45LCBcImJyZWFrSW5zaWRlXCI6IDkuOSwgXCJyZWdpb25GcmFnbWVudFwiOiA5LjksIFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOiA5LjksIFwiY29sdW1uQ291bnRcIjogOS45LCBcImNvbHVtbkZpbGxcIjogOS45LCBcImNvbHVtbkdhcFwiOiA5LjksIFwiY29sdW1uUnVsZVwiOiA5LjksIFwiY29sdW1uUnVsZUNvbG9yXCI6IDkuOSwgXCJjb2x1bW5SdWxlU3R5bGVcIjogOS45LCBcImNvbHVtblJ1bGVXaWR0aFwiOiA5LjksIFwiY29sdW1uc1wiOiA5LjksIFwiY29sdW1uU3BhblwiOiA5LjksIFwiY29sdW1uV2lkdGhcIjogOS45IH0sIFwib3BfbWluaVwiOiB7IFwiYm9yZGVySW1hZ2VcIjogNSwgXCJib3JkZXJJbWFnZU91dHNldFwiOiA1LCBcImJvcmRlckltYWdlUmVwZWF0XCI6IDUsIFwiYm9yZGVySW1hZ2VTbGljZVwiOiA1LCBcImJvcmRlckltYWdlU291cmNlXCI6IDUsIFwiYm9yZGVySW1hZ2VXaWR0aFwiOiA1LCBcInRhYlNpemVcIjogNSwgXCJvYmplY3RGaXRcIjogNSwgXCJvYmplY3RQb3NpdGlvblwiOiA1IH0gfTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiLy8gbGVpZ2h0IHBvbHlmaWxsIGZvciBPYmplY3QuYXNzaWduXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoYmFzZSkge1xuICB2YXIgZXh0ZW5kID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgT2JqZWN0LmtleXMoZXh0ZW5kKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gYmFzZVtrZXldID0gZXh0ZW5kW2tleV07XG4gIH0pO1xuICByZXR1cm4gYmFzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2Jvd3NlciA9IHJlcXVpcmUoJ2Jvd3NlcicpO1xuXG52YXIgX2Jvd3NlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ib3dzZXIpO1xuXG52YXIgdmVuZG9yUHJlZml4ZXMgPSB7XG4gIFdlYmtpdDogWydjaHJvbWUnLCAnc2FmYXJpJywgJ2lvcycsICdhbmRyb2lkJywgJ3BoYW50b20nLCAnb3BlcmEnLCAnd2Vib3MnLCAnYmxhY2tiZXJyeScsICdiYWRhJywgJ3RpemVuJ10sXG4gIE1vejogWydmaXJlZm94JywgJ3NlYW1vbmtleScsICdzYWlsZmlzaCddLFxuICBtczogWydtc2llJywgJ21zZWRnZSddXG59O1xuXG52YXIgYnJvd3NlcnMgPSB7XG4gIGNocm9tZTogW1snY2hyb21lJ11dLFxuICBzYWZhcmk6IFtbJ3NhZmFyaSddXSxcbiAgZmlyZWZveDogW1snZmlyZWZveCddXSxcbiAgaWU6IFtbJ21zaWUnXV0sXG4gIGVkZ2U6IFtbJ21zZWRnZSddXSxcbiAgb3BlcmE6IFtbJ29wZXJhJ11dLFxuICBpb3Nfc2FmOiBbWydpb3MnLCAnbW9iaWxlJ10sIFsnaW9zJywgJ3RhYmxldCddXSxcbiAgaWVfbW9iOiBbWyd3aW5kb3dzcGhvbmUnLCAnbW9iaWxlJywgJ21zaWUnXSwgWyd3aW5kb3dzcGhvbmUnLCAndGFibGV0JywgJ21zaWUnXSwgWyd3aW5kb3dzcGhvbmUnLCAnbW9iaWxlJywgJ21zZWRnZSddLCBbJ3dpbmRvd3NwaG9uZScsICd0YWJsZXQnLCAnbXNlZGdlJ11dLFxuICBvcF9taW5pOiBbWydvcGVyYScsICdtb2JpbGUnXSwgWydvcGVyYScsICd0YWJsZXQnXV0sXG4gIGFuZF91YzogW1snYW5kcm9pZCcsICdtb2JpbGUnXSwgWydhbmRyb2lkJywgJ3RhYmxldCddXSxcbiAgYW5kcm9pZDogW1snYW5kcm9pZCcsICdtb2JpbGUnXSwgWydhbmRyb2lkJywgJ3RhYmxldCddXVxufTtcblxuLyoqXG4gKiBVc2VzIGJvd3NlciB0byBnZXQgZGVmYXVsdCBicm93c2VyIGluZm9ybWF0aW9uIHN1Y2ggYXMgdmVyc2lvbiBhbmQgbmFtZVxuICogRXZhbHVhdGVzIGJvd3NlciBpbmZvIGFuZCBhZGRzIHZlbmRvclByZWZpeCBpbmZvcm1hdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHVzZXJBZ2VudCAtIHVzZXJBZ2VudCB0aGF0IGdldHMgZXZhbHVhdGVkXG4gKi9cblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKHVzZXJBZ2VudCkge1xuICBpZiAoIXVzZXJBZ2VudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBpbmZvID0gX2Jvd3NlcjJbJ2RlZmF1bHQnXS5fZGV0ZWN0KHVzZXJBZ2VudCk7XG5cbiAgT2JqZWN0LmtleXModmVuZG9yUHJlZml4ZXMpLmZvckVhY2goZnVuY3Rpb24gKHByZWZpeCkge1xuICAgIHZlbmRvclByZWZpeGVzW3ByZWZpeF0uZm9yRWFjaChmdW5jdGlvbiAoYnJvd3Nlcikge1xuICAgICAgaWYgKGluZm9bYnJvd3Nlcl0pIHtcbiAgICAgICAgaW5mby5wcmVmaXggPSB7XG4gICAgICAgICAgaW5saW5lOiBwcmVmaXgsXG4gICAgICAgICAgY3NzOiAnLScgKyBwcmVmaXgudG9Mb3dlckNhc2UoKSArICctJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICB2YXIgbmFtZSA9ICcnO1xuICBPYmplY3Qua2V5cyhicm93c2VycykuZm9yRWFjaChmdW5jdGlvbiAoYnJvd3Nlcikge1xuICAgIGJyb3dzZXJzW2Jyb3dzZXJdLmZvckVhY2goZnVuY3Rpb24gKGNvbmRpdGlvbikge1xuICAgICAgdmFyIG1hdGNoID0gMDtcbiAgICAgIGNvbmRpdGlvbi5mb3JFYWNoKGZ1bmN0aW9uIChzaW5nbGUpIHtcbiAgICAgICAgaWYgKGluZm9bc2luZ2xlXSkge1xuICAgICAgICAgIG1hdGNoICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKGNvbmRpdGlvbi5sZW5ndGggPT09IG1hdGNoKSB7XG4gICAgICAgIG5hbWUgPSBicm93c2VyO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBpbmZvLmJyb3dzZXIgPSBuYW1lO1xuICAvLyBGb3IgY29yZG92YSBJT1MgOCB0aGUgdmVyc2lvbiBpcyBtaXNzaW5nLCBzZXQgdHJ1bmNhdGVkIG9zdmVyc2lvbiB0byBwcmV2ZW50IE5hTlxuICBpbmZvLnZlcnNpb24gPSBpbmZvLnZlcnNpb24gPyBwYXJzZUZsb2F0KGluZm8udmVyc2lvbikgOiBwYXJzZUludChwYXJzZUZsb2F0KGluZm8ub3N2ZXJzaW9uKSwgMTApO1xuXG4gIC8vIHNlcGVyYXRlIG5hdGl2ZSBhbmRyb2lkIGNocm9tZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vcm9mcmlzY2htYW5uL2lubGluZS1zdHlsZS1wcmVmaXhlci9pc3N1ZXMvNDVcbiAgaWYgKGluZm8uYnJvd3NlciA9PT0gJ2FuZHJvaWQnICYmIGluZm8uY2hyb21lICYmIGluZm8udmVyc2lvbiA+IDM3KSB7XG4gICAgaW5mby5icm93c2VyID0gJ2FuZF9jaHInO1xuICB9XG4gIGluZm8udmVyc2lvbiA9IHBhcnNlRmxvYXQoaW5mby52ZXJzaW9uKTtcbiAgaW5mby5vc3ZlcnNpb24gPSBwYXJzZUZsb2F0KGluZm8ub3N2ZXJzaW9uKTtcbiAgLy8gRm9yIGFuZHJvaWQgPCA0LjQgd2Ugd2FudCB0byBjaGVjayB0aGUgb3N2ZXJzaW9uXG4gIC8vIG5vdCB0aGUgY2hyb21lIHZlcnNpb24sIHNlZSBpc3N1ZSAjMjZcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvZnJpc2NobWFubi9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvaXNzdWVzLzI2XG4gIGlmIChpbmZvLmJyb3dzZXIgPT09ICdhbmRyb2lkJyAmJiBpbmZvLm9zdmVyc2lvbiA8IDUpIHtcbiAgICBpbmZvLnZlcnNpb24gPSBpbmZvLm9zdmVyc2lvbjtcbiAgfVxuXG4gIHJldHVybiBpbmZvO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIGJyb3dzZXIgPSBfcmVmLmJyb3dzZXI7XG4gIHZhciB2ZXJzaW9uID0gX3JlZi52ZXJzaW9uO1xuICB2YXIgcHJlZml4ID0gX3JlZi5wcmVmaXg7XG5cbiAgdmFyIHByZWZpeGVkS2V5ZnJhbWVzID0gJ2tleWZyYW1lcyc7XG5cbiAgaWYgKGJyb3dzZXIgPT09ICdjaHJvbWUnICYmIHZlcnNpb24gPCA0MyB8fCAoYnJvd3NlciA9PT0gJ3NhZmFyaScgfHwgYnJvd3NlciA9PT0gJ2lvc19zYWYnKSAmJiB2ZXJzaW9uIDwgOSB8fCBicm93c2VyID09PSAnb3BlcmEnICYmIHZlcnNpb24gPCAzMCB8fCBicm93c2VyID09PSAnYW5kcm9pZCcgJiYgdmVyc2lvbiA8PSA0LjQgfHwgYnJvd3NlciA9PT0gJ2FuZF91YycpIHtcbiAgICBwcmVmaXhlZEtleWZyYW1lcyA9IHByZWZpeC5jc3MgKyBwcmVmaXhlZEtleWZyYW1lcztcbiAgfVxuICByZXR1cm4gcHJlZml4ZWRLZXlmcmFtZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgdmFyIHVucHJlZml4ZWQgPSBwcm9wZXJ0eS5yZXBsYWNlKC9eKG1zfFdlYmtpdHxNb3p8TykvLCAnJyk7XG4gIHJldHVybiB1bnByZWZpeGVkLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgdW5wcmVmaXhlZC5zbGljZSgxKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyJdfQ==
