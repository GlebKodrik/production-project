import { NodePath } from '@babel/core';

export const babelRemoveProperties = () => ({
  visitor: {
    Program(path: NodePath, state: { opts: { properties: any[]; property: any; }; }) {
      const properties = state.opts.properties || [];

      if (state.opts.property) {
        properties.push(state.opts.property);
      }

      if (properties.length === 0) {
        properties.push(/^data-test/);
      }

      path.traverse({
        JSXIdentifier(path2) {
          properties.forEach((property) => {
            const regularExpressionMatch = property instanceof RegExp && property.test(path2.node.name);
            const stringMatch = property === path2.node.name;
            if (regularExpressionMatch || stringMatch) path2.parentPath.remove();
          });
        },
      });
    },
  },
});
