import { verify } from '@noble/ed25519';
import { PublicKey } from '@solana/web3.js';

export async function verifySignature(
  signature: string,
  message: string,
  publicKey: string
) {
  console.log(`Verifying signature...`);
  const isVerified = await verify(
    new Uint8Array(Buffer.from(signature, 'base64')),
    Uint8Array.from(Buffer.from(message, 'utf-8')),
    new PublicKey(publicKey).toBytes()
  );
  console.log(`Signature ${isVerified ? 'valid' : 'invalid'}.`);
}
