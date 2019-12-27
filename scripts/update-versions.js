const { readJSON, writeFile, writeJSON } = require('fs-extra');

const run = async () => {
  let temp;
  const packageJSON = await readJSON('./package.json');
  const packageLockJSON = await readJSON('./package-lock.json');

  let [major, minor, patch] = packageJSON.version.split('.').map(v => Number(v));

  patch++;

  const newVersion = `${major}.${minor}.${patch}`;

  console.log(`update versions | version.ts: set to ${newVersion}`);

  // package.json
  temp = packageJSON.version;
  packageJSON.version = newVersion;
  console.log(`update versions | package.json: 'version' from ${temp} to ${newVersion}`);

  // package-lock.json
  temp = packageLockJSON.version;
  packageLockJSON.version = newVersion;
  console.log(`update versions | package-lock.json: 'version' from ${temp} tp ${newVersion}`);

  // Write files
  await writeFile(
    './src/app/constants/version.ts',
    `// Do not modify, file content will be overwritten automatically\nexport const appVersion = '${newVersion}';\n`
  );
  await writeJSON('./package.json', packageJSON, { spaces: 2 });
  await writeJSON('./package-lock.json', packageLockJSON, { spaces: 2 });

  console.log(`update versions | successfully saved files`);
};

run()
  .then(() => {
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
