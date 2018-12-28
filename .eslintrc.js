module.exports = {
    parser: 'babel-eslint',
    "extends": "airbnb",
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    "rules": {
        'react/prop-types': 0,
    }
};