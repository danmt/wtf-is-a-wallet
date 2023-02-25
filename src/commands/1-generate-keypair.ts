import { Keypair } from '@solana/web3.js';
import { promises } from 'fs';
import { encrypt, passwordToKey } from '../utils';

export async function generateKeypair(name: string, password: string) {
  console.log(`Generating a new keypair for you...`);
  // Generate a new keypair using Solana JS SDK.
  const keypair = new Keypair();
  // Transform the secret key into a base64 string.
  const secretKeyAsBase64 = Buffer.from(keypair.secretKey).toString('base64');
  // Transform password into a valid key.
  const key = passwordToKey(password);
  // Encrypt the secret key in base64 using the password as key.
  const encryptedSecretKey = encrypt(secretKeyAsBase64, key);
  // Write encrypted secret in /keys folder.
  await promises.writeFile(
    `./keys/${name}.json`,
    JSON.stringify(encryptedSecretKey)
  );
  console.log(`Keypair generated.`);
}