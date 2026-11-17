const assert = require('assert');
const { execFileSync } = require('child_process');

const output = execFileSync('node', ['index.js'], { encoding: 'utf8' });

assert(output.includes('SEMESTER 3 RESULT'));
assert(output.includes('Mathematics: 82/100 (82.0%) - Grade B'));
assert(output.includes('Average: 82.3%'));

console.log('Result report works!');
