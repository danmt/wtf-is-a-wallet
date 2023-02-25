export async function generateKeypair(name: string, password: string) {
  console.log(`Generating a new keypair for you...`);
  // 1. Generate a new keypair using Solana JS SDK.
  // 2. Transform the secret key into a base64 string.
  // 3. Transform password into a valid key.
  // 4. Encrypt the secret key in base64 using the password as key.
  // 5. Write encrypted secret in /keys folder.
  console.log(`Keypair generated.`);
}
