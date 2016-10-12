import Radium from 'radium';


export default (component) => {
  const styleLogger = ({componentName, style}) => {
    console.log('Name: ' + componentName, style);
  }
  return (Radium({
    plugins: [
      Radium.Plugins.mergeStyleArray,
      Radium.Plugins.checkProps,
      Radium.Plugins.resolveMediaQueries,
      Radium.Plugins.resolveInteractionStyles,
      Radium.Plugins.keyframes,
      Radium.Plugins.visited,
      Radium.Plugins.removeNestedStyles,
      // styleLogger,
      Radium.Plugins.checkProps,
    ]
  })(component)
)};
