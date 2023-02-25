import { promises } from 'fs';

export async function listKeys() {
  console.log(`List of keys: \n`);
  // 1. Read directory at /keys.
  const keys = await promises.readdir('./keys');
  // 2. Loop through the files an print their names without the .json extension
  //    in an ordered list
  keys.forEach((key, index) => {
    console.log(`${index + 1}) ${key.split('.json')[0]}`);
  });
}
