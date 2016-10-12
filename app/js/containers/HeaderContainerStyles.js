import Prefixer from 'inline-style-prefixer';
import { colors, fonts } from './../utils/styleVariables';
var styles = {
  '.header': {
    backgroundColor: colors.cyan + ' !important',
    color: colors.pink + ' !important',
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
const prefixer = new Prefixer({ userAgent: navigator.userAgent});
const prefixedStyles = prefixer.prefix(styles);
export default prefixedStyles;
