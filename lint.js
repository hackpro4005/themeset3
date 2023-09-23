const ESLint = require('eslint');

async function lint() {
  const linter = new ESLint({
    configPath: './.eslintrc.json',
  });

  const results = await linter.lintFiles([
    'src/**/*.js',
  ]);

  if (results.length > 0) {
    console.error('Linting errors found:');
    for (const result of results) {
      for (const error of result.messages) {
        console.error(`${error.line}:${error.column} - ${error.message}`);
      }
    }
    process.exit(1);
  }
}

lint();