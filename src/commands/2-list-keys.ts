import { promises } from 'fs';

export async function listKeys() {
  console.log(`List of keys: \n`);
  // Read directory at /keys.
  const keys = await promises.readdir('./keys');
  // Loop through the files an print their names without the .json extension
  // in an ordered list
  keys.forEach((key, index) => {
    console.log(`${index + 1}) ${key.split('.json')[0]}`);
  });
}
