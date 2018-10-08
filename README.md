### React NPM Module Boilerplate
All you need to build a react npm module. Includes a sandbox app for convenient developing.

**This boilerplate is running:**

    • React
    • Webpack 4
    • Babel 7
    • ES6
    • Node v10
    • Eslint
    • Jest
    • CSS Modules (Using Less)

#### Get Started
```sh
yarn install
```

```sh
yarn start
```

Develop the module in `src/index.js`

Develop the module in the sandbox app in `app/App.js`

#### Run Commands
command | description |
--- | --- |
` yarn dev` | create development build of `src/index.js`
` yarn build` | create production build of `src/index.js`
` yarn app:dev` | start sandbox app dev server running `app/App.js`
` yarn app:build` | create sandbox app production build of `app/App.js`. For when you need to test the app independently of the dev server. Just open `app/index.html` in a browser.
` yarn start` | runs `yarn dev` and `yarn app:dev`
` yarn test` | runs `jest --watch`

#### Unit Testing
Ready for snapshot testing using `react-test-renderer`

#### Publishing
Refer to https://docs.npmjs.com/cli/publish for latest documentation on publishing a package
```sh
npm publish
```
