import run from '@rollup/plugin-run'
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

const dev = process.env.NODE_ENV !== 'production'

export default {
  input: 'server.js',
  output: {
    file: 'bundle.server.js',
    format: 'cjs',
    sourcemap: 'inline',
  },

  external: [
    'apollo-server-express',
    'graphql-tools',
    'express',
    'dotenv',
    'colors',
    'body-parser',
    'graphql',
    '@apollo/client',
    'mongoose',
    'regenerator-runtime'
  ],

  plugins: [
    dev &&
      run({
        execArgv: ['-r', 'dotenv/config'],
      }),
    babel({
      babelHelpers: 'bundled',
      exclude: /node_modules/,
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    }),
    nodeResolve({ preferBuiltins: false }),
    nodePolyfills(),
    commonjs({
      include: /node_modules/,
    }),
    json(),
  ],
}
