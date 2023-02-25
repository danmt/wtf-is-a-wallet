export async function transferSol(
  name: string,
  password: string,
  toPublicKey: string,
  amount: number
) {
  console.log(`Transfering (${amount} SOL)...`);
  // 1. Use getKeypair method from utils and access the keypair.
  // 2. Transform amount of SOL into lamports.
  // 3. Create a system transfer instruction.
  // 4. Create a transaction where the keypair is the payer, the list of instructions
  //    and a list of signers.
  // 5. Print signature in the console.
  console.log('Transfer sent.');
}
