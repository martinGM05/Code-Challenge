# Code Challenge - Visual Thinking API Courses

This exercise was proposed by CarloGilmar on behalf of LaunchX.

## Some dependencies are used in this project such as: 
| Dependency | Description |
|---|---|
| [Express](https://www.npmjs.com/package/express) | `npm i --save express` |
| [EsLint](https://jestjs.io/) | `npm i eslint --save-dev` |
| [Jest](https://eslint.org/) | `npm install jest@26.0.0 --save` |

If you want to download the project don't forget to run **`npm i`** to install the necessary dependencies.

```javascript
"scripts": {
    "test": "node ./node_modules/jest/bin/jest.js",
    "linter": "node ./node_modules/eslint/bin/eslint.js .",
    "linter-fix": "node ./node_modules/eslint/bin/eslint.js . --fix",
    "server": "node ./lib/server.js"
},
```

- `npm run test` = To run the tests
- `npm run linter` = To examine the code according to the rules imposed in the .eslintrc.js file
- `npm run linter-fix` = To resolve errors according to the rules
- `npm run server` = To stand up the server