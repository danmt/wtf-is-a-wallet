import { Keypair } from '@solana/web3.js';
import { promises } from 'fs';
import { encrypt, passwordToKey } from '../utils';

export async function generateKeypair(name: string, password: string) {
  console.log(`Generating a new keypair for you...`);
  const keypair = new Keypair();
  const secretKeyAsBase64 = Buffer.from(keypair.secretKey).toString('base64');
  const key = passwordToKey(password);
  const encryptedSecretKey = encrypt(secretKeyAsBase64, key);
  await promises.writeFile(
    `./keys/${name}.json`,
    JSON.stringify(encryptedSecretKey)
  );
  console.log(`Keypair generated.`);
}
