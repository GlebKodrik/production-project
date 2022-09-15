import {RuleSetRule} from "webpack";

const buildLoaders = (): RuleSetRule[] => {
  const typeScriptLoader = {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
  }

  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
  }

  return [
    typeScriptLoader,
    cssLoader
  ]
}

export default buildLoaders;