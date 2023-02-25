export async function signMessage(
  name: string,
  password: string,
  message: string
) {
  console.log(`Signing a message...`);
  // 1. Use the getKeypair method and access the secret key.
  // 2. Transform the text message into an array of bytes.
  // 3. Use the sign method from @noble/ed25519 to create a digital signature
  //    of the message using the secret key.
  // 4. Print the signature in the console.
  console.log('Message signed.');
}
