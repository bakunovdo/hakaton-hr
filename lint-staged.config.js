module.exports = {
  '*.{js,ts,tsx,css,md}': 'prettier --write',
  '**/*.ts?(x)': () => 'tsc --noEmit -p tsconfig.json',
  '**/*.{ts?(x),js?(x)}': (filenames) => `eslint ${filenames?.join(' ')} --fix`,
};
