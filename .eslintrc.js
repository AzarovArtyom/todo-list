module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    /*overrides: [
        {
            "files": ["*.jsx", "*.js"]
        }
    ],*/
    rules: {
        /*'react/no-this-in-sfc': 0,*/
        /*'react/jsx-filename-extension': 0,*/
        /*'react/destructuring-assignment': 0,*/
        /*'react/prop-types': 0,*/
        /*'react/no-unused-prop-types': 0,*/
        /*'react/require-default-props': 0,*/
        /*'react/no-array-index-key': 0,*/
        /*'react/button-has-type': 0,*/
        /*'react/forbid-prop-types': 0,*/
        /*'react/require-default-props': 0,*/
        /*'react/no-access-state-in-setstate': 0,*/
    },
};
