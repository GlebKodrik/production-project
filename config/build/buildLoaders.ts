import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";

const buildLoaders = ({isDev}: BuildOptions): RuleSetRule[] => {
  const typeScriptLoader = {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
  }

  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        {
          loader:  MiniCssExtractPlugin.loader,
          options: {
            esModule: !isDev,
          },
        },
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: true,
              localIdentName: isDev ? "[name]__[local]" : '[hash:base64:5]',
            },
          },
        },
        "sass-loader",
      ],
  }

  return [
    typeScriptLoader,
    cssLoader
  ]
}

export default buildLoaders;