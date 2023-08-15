module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        indent: ["error", 4],
        semi: ["error", "always"],
        quotes: ["error", "double", { allowTemplateLiterals: true, }],
        "comma-dangle": ["error", {
            arrays: "never",
            objects: "always",
            imports: "never",
            exports: "never",
            functions: "never",
        }],
        "no-multiple-empty-lines": ["error", {
            max: 1,
            maxEOF: 0,
            maxBOF: 0,
        }],
        "eol-last": "error",
        "quote-props": ["error", "as-needed"],
        "key-spacing": "error",
        "spaced-comment": "error",
        "space-infix-ops": "error",
        "no-trailing-spaces": "error",
        "func-call-spacing": ["error", "never"],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "comma-spacing": ["error", { before: false, after: true, }],
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/ban-types": "warn",
    },
};
