#  Reactron
`reactron` is a development environment that lets you prototype components
within an electron-react application.

This will also help teach you about some of the web development
technologies out there.

## Start
To start using this code
1. Ensure you have the latest version of nodejs/npm installed
2. Open a console and enter "npm install"
3. Open a console and enter "npm run-script watch"
4. Open another console and enter "npm start"
5. HMR should be working, in which case any changes to the code (that have
nothing to do with package.json or webpack.config.js) will be reflected
instantly in the runtime.

To run the code in the future, you only need to run steps 3 and 4.

## Introduction
We are using a tech stack that allows us to build a responsive desktop
application using web technologies. This document with help you become
familiarized with all the different libraries and modules that we are
using.

* ECMAScript 2015 (ES6)
* jsx
* Babel

* Electron
* React
* Less
* Material-UI
* flexboxgrid
* Webpack

* Express
* jquery
* mysql

## ECMAScript 6/2015 (ES6)
Scripting language specification for languages such as JavaScript. It
was published in June 2015.
- Online Book: http://exploringjs.com/es6/

## JSX
JSX is an XML syntax extension to ECMAScript. It is XML that you put into
your JavaScript code so that you can easily see what your React components
will look like when they're rendered.
- Tutorial: https://facebook.github.io/react/docs/jsx-in-depth.html

## Babel
Some browsers are not updated to understand ECMAScript 2015 code.
Babel translates ECMAScript 6 code into ECMAScript 5 so that your code
is compatible with modern web browsers. Babel can also translate jsx
into javascript, which is perfect for our react components. You have to
create a .babelrc file in order to use the loaders. 
- Understanding Babel Polyfill: https://medium.com/@jcse/clearing-up-the-babel-6-ecosystem-c7678a314bf3#.56pyf7yxv

## Electron
Electron lets us create a desktop application using web technologies.
It is built using Chromium (the codebase from which Google Chrome draws
much of its code), and it also incorporates native features. 

## React
React is a front-end framework developed by Facebook. It is essentially
the view in MVC. React makes rendering web pages faster. React creates a
copy of the DOM, called the Virtual DOM. Differences that are calculated by
comparing the Virtual DOM vs. the real DOM (e.g. such as when you want a
sidepanel component to appear/disappear) allow re-rendering of just the
parent nodes, rather than the entire page.
- Tutorial: https://blog.risingstack.com/the-react-way-getting-started-tutorial/

Note: React components are case-sensitive.

## Less
Less is essentially CSS with the added ability to use functions, declare
variables, and many other things to make it more customizable and
maintainable.
- Why you should use a preprocessor: https://www.urbaninsight.com/2012/04/12/ten-reasons-you-should-be-using-css-preprocessor
- Less vs Sass: https://blog.logentries.com/2014/10/which-css-preprocessor-should-you-choose/
- How to get Less working with Webpack: https://christianalfoni.github.io/react-webpack-cookbook/Loading-LESS-or-SASS.html
- Official Site: http://lesscss.org/

## Material-UI
Material-UI is a set of react components designed with Google's Material
Design framework in mind. It is picking up momentum in the current web
landscape. Material-UI does not provide anything for layout (unlike
Bootstrap's grid). Therefore, you will need to import `flexboxgrid` if
you want to structure things within a grid.
- Tutorial: https://www.google.com/design/spec/material-design/introduction.html#

Note: I am currently unsure of the advantages of using `react-flexbox-grid`
over `flexboxgrid`. It seems that `flexboxgrid` does the trick, but you
will need to replace the `class` attribute with `className` so that it
doesn't conflict with ES6 standards (ES6 uses `class` as a reserved keyword).
- Flexboxgrid: http://flexboxgrid.com/
- Complete Guide to Flexboxgrid: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- React Conference (mentions Flexbox): https://www.youtube.com/watch?v=7rDsRXj9-cU&t=996

Note: Some of the code in `material-ui` includes ES6 features that are not
completely supported in Babel (e.g. arrow functions the LeftNav code).
When you encounter syntax and parsing errors, see if it is related to
using ES6 syntax. You can use Babel's online code transpiler to help.
- Online Transpiler: https://babeljs.io/repl/

## Webpack
Instead of having to send all of your files and node modules to the
client, you can use Webpack to pick out the parts of code your
application uses, and stitch it all together into a single giant file.
This file get sent to the client, and makes load times faster. You can
set Webpack configurations to translate your code into ECMAScript 6
(by using Babel's loaders) prior to bundling it all together. You can
do many other things as well.

## Webpack-Dev-Server and Hot Module Replacement (HMR)
Normally we would have to terminate the application and re-run it every
we make changes in our code. With `webpack-dev-server` hosting our code
through a development server, we can specify some configurations that allow
changes to be implemented during runtime. This is where
`webpack-hot-middleware` comes in. While the application is still running,
this module takes whatever code you changed, updates those changes on
the bundle.js file hosted on `webpack-dev-server`, and refreshes the
application to reflect the latest changes. This is called Hot Module
Replacement. This means you can instantly see the results of your
programming in real time. Allowing HMR boosts productivity, especially for
development in React (it preserves the application state while updating).

Note that changes to webpack.config.js, index.html, and package.json
can't undergo HMR. Therefore you will have to restart the application
completely or refresh the web page if you make changes to these files.

Changes:
- The HotModuleReplacement plugin in webpack.config.js is unnecessary. 


