const shell = require('shelljs');
const path = require('path');
const appRoot = path.resolve(process.cwd());

const SOURCE = `${appRoot}/node_modules/pty-themes/dist/*`;
const TARGET = `${appRoot}/.storybook/static/`;

shell.set('-e');
shell.mkdir('-p', TARGET);
shell.cp('-r', SOURCE, TARGET);
