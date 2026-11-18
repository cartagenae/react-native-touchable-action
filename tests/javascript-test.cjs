
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const pkg = require(path.join(root, 'package.json'));

const jsEntry = path.resolve(root, pkg.main);
const typesEntry = path.resolve(root, pkg.types);

// Verify both package entry points exist.
assert.ok(fs.existsSync(jsEntry), 'JavaScript entry point is missing');
assert.ok(fs.existsSync(typesEntry), 'TypeScript entry point is missing');

// Verify that generated JavaScript is syntactically valid.
const { execFileSync } = require('node:child_process');

execFileSync(process.execPath, ['--check', jsEntry]);
execFileSync(
  process.execPath,
  ['--check', path.join(root, 'dist/FloatingActionButton.js')]
);

// Verify expected exports in generated entry-point source.
const jsSource = fs.readFileSync(jsEntry, 'utf8');

assert.match(jsSource, /exports\.default/);
assert.match(jsSource, /FloatingActionButton/);

console.log('JavaScript build and entry-point checks passed!');
