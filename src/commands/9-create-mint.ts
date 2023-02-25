export async function createMint(name: string, password: string) {
  console.log(`Creating mint...`);
  // 1. Use getKeypair method from utils and access the keypair.
  // 2. Generate new keypair for the mint.
  // 3. Get the rent costs of a mint.
  // 4. Use createAccount to create the instruction that will create the new account
  //    that will later become a mint.
  // 5. Use createInitializeMintInstruction to create the instruction that will
  //    turn our new account into a mint account.
  // 6. Create a transaction where the keypair is the payer, the list of instructions
  //    and a list of signers.
  // 7. Print signature in the console.
  // 8. Print mint public key in the console.
  console.log('Mint created.');
}
