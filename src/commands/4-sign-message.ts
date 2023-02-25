import { sign } from '@noble/ed25519';
import { getKeypair } from '../utils';

export async function signMessage(
  name: string,
  password: string,
  message: string
) {
  console.log(`Signing a message...`);
  // 1. Use the getKeypair method and access the secret key.
  const { secretKey } = await getKeypair(name, password);
  // 2. Transform the text message into an array of bytes.
  const messageAsBytes = Uint8Array.from(Buffer.from(message, 'utf-8'));
  // 3. Use the sign method from @noble/ed25519 to create a digital signature
  //    of the message using the secret key.
  const signature = await sign(messageAsBytes, secretKey.slice(0, 32));
  // 4. Print the signature in the console.
  console.log(`Signature: ${Buffer.from(signature).toString('base64')}`);
  console.log('Message signed.');
}
