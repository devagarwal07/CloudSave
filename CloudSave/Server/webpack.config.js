const path = require('path');

module.exports = {
    mode: 'production',
    entry: './server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target: 'node',
};
