import { Keypair } from '@solana/web3.js';
import { promises } from 'fs';
import { decrypt, passwordToKey } from './encrypt';

export async function getKeypair(name: string, password: string) {
  const encryptedKeyFile = await promises.readFile(`./keys/${name}.json`);
  const encryptedSecretKey = JSON.parse(encryptedKeyFile.toString());
  const key = passwordToKey(password);
  const decryptedSecretKey = decrypt(encryptedSecretKey, key);
  return Keypair.fromSecretKey(
    new Uint8Array(Buffer.from(decryptedSecretKey, 'base64'))
  );
}
