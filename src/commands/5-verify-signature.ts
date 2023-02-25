export async function verifySignature(
  signature: string,
  message: string,
  publicKey: string
) {
  console.log(`Verifying signature...`);
  // 1. Transform signature in array of bytes.
  // 2. Transform text message in array of bytes.
  // 3. Transform public key from string into an array of bytes.
  // 4. Use verify method from @noble/ed25519 to check the integrity of
  //    the signature provided.
  // 5. Print validity status in the console
  console.log(`Signature verified.`);
}
