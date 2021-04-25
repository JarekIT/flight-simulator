/* eslint-disable  */
module.exports = {
    "root": true,                 // Make sure eslint picks up the config at the root of the directory
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        'plugin:jsx-a11y/recommended',
        "plugin:@typescript-eslint/recommended",
        'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        'react-hooks',
        "eslint-plugin-react",
        "eslint-plugin-jsx-a11y",
        "@typescript-eslint"
    ],
    "rules": {
        // suppress errors for missing 'import React' in files
        "react/react-in-jsx-scope": "off",
        // allow jsx syntax in js files (for next.js project)
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "ts", "tsx"] }], //should add ".ts" if typescript project
        'react-hooks/rules-of-hooks': "error",
        'react-hooks/exhaustive-deps': "warn",
        'react/prop-types': "off",
        'prettier/prettier': "warn"
    }
};

// module.exports = {
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaVersion: 2018,
//     sourceType: "module"
//   },
//   plugins: [
//     '@typescript-eslint',
//     'react-hooks'
//   ],
//   extends: [
//     'plugin:react/recommended',
//     'plugin:@typescript-eslint/recommended'
//   ],
//   rules: {
//     'react-hooks/rules-of-hooks': "error",
//     'react-hooks/exhaustive-deps': "warn",
//     'react/prop-types': "off"
//   },
//   settings: {
//     react: {
//       pragma: "React",
//       version: "detect"
//     }
//   }
// };
/*
  https://www.carlrippon.com/creating-react-app-with-typescript-eslint-with-webpack5/
*/

// module.exports = {
//   root: true,                 // Make sure eslint picks up the config at the root of the directory
//   parserOptions: {
//       ecmaVersion: 2020,      // Use the latest ecmascript standard
//       sourceType: 'module',   // Allows using import/export statements
//       ecmaFeatures: {
//           jsx: true           // Enable JSX since we're using React
//       }
//   },
//   settings: {
//       react: {
//           version: 'detect'   // Automatically detect the react version
//       }
//   },
//   env: {
//       browser: true,          // Enables browser globals like window and document
//       amd: true,              // Enables require() and define() as global variables as per the amd spec.
//       node: true              // Enables Node.js global variables and Node.js scoping.
//   },
//   extends: [
//       'eslint:recommended',
//       'plugin:react/recommended',
//       'plugin:jsx-a11y/recommended',
//       'plugin:prettier/recommended' // Make this the last element so prettier config overrides other formatting rules
//   ],
//   rules: {
//       'prettier/prettier': ['error', {}, { usePrettierrc: true }]  // Use our .prettierrc file as source
//   }
// };
/*
  https://create-react-app.dev/docs/setting-up-your-editor/
*/