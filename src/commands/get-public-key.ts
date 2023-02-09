import { getKeypair } from '../utils';

export async function getPublicKey(name: string, password: string) {
  const { publicKey } = await getKeypair(name, password);
  console.log(`Public Key (base58): ${publicKey.toBase58()}`);
  console.log(
    `Public Key (base64): ${publicKey.toBuffer().toString('base64')}`
  );
}
