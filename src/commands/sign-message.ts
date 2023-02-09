import { sign } from '@noble/ed25519';
import { getKeypair } from '../utils';

export async function signMessage(
  name: string,
  password: string,
  message: string
) {
  console.log(`Signing a message...`);
  const { secretKey } = await getKeypair(name, password);
  const signature = await sign(
    Uint8Array.from(Buffer.from(message, 'utf-8')),
    secretKey.slice(0, 32)
  );
  console.log('Message signed.');
  console.log(`Signature: ${Buffer.from(signature).toString('base64')}`);
}
