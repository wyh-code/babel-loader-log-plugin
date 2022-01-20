module.exports = ({ types }) => {
  return {
    visitor: {
      CallExpression(path, state) {
        const { node } = path;
        if (types.isMemberExpression(node.callee) && node.callee.object.name === 'console') {
          if (['log', 'info', 'warn', 'error', 'debug'].includes(node.callee.property.name)) {
            const { line, column } = node.loc.start;
            const { filename, cwd } = state;
            const relativeFileName = filename.replace(cwd, '').replace(/\\/g, '/');
            node.arguments.unshift(types.stringLiteral(`${relativeFileName} ${line}:${column}`));
          }
        }
      },
    }
  }
}