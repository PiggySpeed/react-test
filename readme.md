#  React-Test
`react-test` is a development environment that lets you prototype
components within an electron-react application.

This will also help teach you about some of the web development
technologies out there.

(I'm considering changing the name of this repo to react + electron =
`reactron`)

## Start
To start using this code:
1. Ensure you have the latest version of nodejs/npm installed
2. Open a console and enter "npm install"
3. Open a console and enter "npm run-script watch"
4. Open another console and enter "npm start"

To run the code in the future, you only need to run steps 3 and 4.

## Introduction
We are using a tech stack that allows us to build a responsive desktop
application using web technologies. This document with help you become
familiarized with all the different libraries and modules that we are 
using.

* node.js
* npm
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

* react-devtools

## node.js

## npm

## ECMAScript 6/2015 (ES6)
Scripting language specification for languages such as JavaScript. It
was published in June 2015.

## jsx

## Babel
Some browsers are not updated to understand ECMAScript 2015 code. Babel
translates ECMAScript 6 code into ECMAScript 5 so that your code is
compatible with modern web browsers. Babel can also translate jsx into
javascript, which is perfect for our react components. You have to
create a .babelrc file in order to use the loaders. 

## Electron
Electron lets us create a desktop application using web technologies.
It is built using Chromium (the codebase from which Google Chrome draws
much of its code), and it also incorporates native features. 

## React
React makes rendering web pages faster. React creates a copy of the DOM,
called the virtual DOM, and uses it to calculate any changes that happen
with the DOM. 

## Less
The same as CSS, except with the option to add more functionality.

## Material-UI
Material-UI is a set of react components designed with Google's Material
Design framework in mind. It is picking up momentum in the current web
landscape. Material-UI does not provide anything for layout (unlike
Bootstrap's grid). Therefore, you will need to import `flexboxgrid` if
you want to structure things within a grid. 

## Flexboxgrid

## Webpack
Instead of having to send all of your files and node modules to the
client, you can use Webpack to pick out the parts of code your
application uses, and stitch it all together into a single giant file.
This file get sent to the client, and makes load times faster. You can
set Webpack configurations to translate your code into ECMAScript 6
(by using Babel's loaders) prior to bundling it all together. You can
do many other things as well.

## Webpack-Dev-Server and Hot Module Replacement (HMR)



