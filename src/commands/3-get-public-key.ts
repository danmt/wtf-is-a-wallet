import { getKeypair } from '../utils';

export async function getPublicKey(name: string, password: string) {
  // 1. Use getKeypair method from utils and access the publicKey.
  const { publicKey } = await getKeypair(name, password);
  // 2. Print the public key in the console.
  console.log(`Public Key (base58): ${publicKey.toBase58()}`);
  console.log(
    `Public Key (base64): ${publicKey.toBuffer().toString('base64')}`
  );
}
