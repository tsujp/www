/* STYLED COMPONENTS OPTIONS
 *
 *   PURE - really do remove dead-code, tell it there are no side-effects
 *   DISPLAYNAME - shows the semantic name in React Dev Tools
 *   FILENAME - prefixes class names with the semantic name
 *   MINIFY - self explanatory
 *   TRANSPILETEMPLATELITERALS - also minify template literals
 */

const trueInProd = process.env.NODE_ENV === 'production'

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        pure: trueInProd,
        displayName: !trueInProd,
        fileName: !trueInProd,
        minify: trueInProd,
        transpileTemplateLiterals: trueInProd,
      },
    ],
  ],
}
