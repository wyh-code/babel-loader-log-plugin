module.exports = ({ types }) => {
  return {
    visitor: {
      CallExpression(path) {
        const { node } = path;
        if (types.isMemberExpression(node.callee) && node.callee.object.name === 'console') {
          if (['log', 'info', 'warn', 'error', 'debug'].includes(node.callee.property.name)) {
            path.replaceWithMultiple([])
          }
        }
      },
    }
  }
}