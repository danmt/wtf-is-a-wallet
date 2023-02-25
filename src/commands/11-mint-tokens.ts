export async function mintTokens(
  name: string,
  password: string,
  mint: string,
  toPublicKey: string,
  amount: number
) {
  console.log(`Creating token...`);
  // 1. Use getKeypair method from utils and access the keypair.
  // 2. Use getAssociatedTokenAddress method to get the address of an associated
  //    token account for the receiver with the mint.
  // 3. Use createMintToInstruction to create the instruction that will be used
  //    to mint the tokens into the receiver's token account.
  // 4. Create a transaction where the keypair is the payer, the list of instructions
  //    and a list of signers.
  // 5. Print signature in the console
  console.log(`A total of ${amount} tokens of ${mint} minted.`);
}
