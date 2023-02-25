import { verify } from '@noble/ed25519';
import { PublicKey } from '@solana/web3.js';

export async function verifySignature(
  signature: string,
  message: string,
  publicKey: string
) {
  console.log(`Verifying signature...`);
  // Transform signature in array of bytes.
  const signatureAsBytes = new Uint8Array(Buffer.from(signature, 'base64'));
  // Transform text message in array of bytes.
  const messageAsBytes = Uint8Array.from(Buffer.from(message, 'utf-8'));
  // Transform public key from string into an array of bytes.
  const publicKeyAsBytes = new PublicKey(publicKey).toBytes();
  // Use verify method from @noble/ed25519 to check the integrity of the signature provided.
  const isVerified = await verify(
    signatureAsBytes,
    messageAsBytes,
    publicKeyAsBytes
  );
  console.log(`Signature ${isVerified ? 'valid' : 'invalid'}.`);
}
