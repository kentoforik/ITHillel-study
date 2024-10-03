import chalk from 'chalk';

const baseString = 'Hello world!';

console.log(`Not formatted string: ${baseString}`);

console.log(chalk.blue(`Blue color: ${baseString}`));

console.log(chalk.blue.bgRed.bold(`Blue color bold text on red background: ${baseString}`))
