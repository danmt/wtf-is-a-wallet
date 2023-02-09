import { promises } from 'fs';

export async function listKeys() {
  console.log(`List of keys: \n`);
  const keys = await promises.readdir('./keys');
  keys.forEach((key, index) => {
    console.log(`${index + 1}) ${key.split('.json')[0]}`);
  });
}
