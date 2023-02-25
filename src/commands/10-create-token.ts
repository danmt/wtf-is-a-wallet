export async function createToken(
  name: string,
  password: string,
  mint: string,
  ownerPublicKey: string
) {
  console.log(`Creating token...`);
  // 1. Use getKeypair method from utils and access the keypair.
  // 2. Use getAssociatedTokenAddress method to get the address of an associated
  //    token account for the owner with the mint.
  // 3. Use createAssociatedTokenAccountInstruction to create the instruction
  //    that will create the token account.
  // 4. Create a transaction where the keypair is the payer, the list of instructions
  //    and a list of signers.
  // 5. Print token address in the console.
  // 6. Print signature in the console.
  console.log('Token created.');
}
