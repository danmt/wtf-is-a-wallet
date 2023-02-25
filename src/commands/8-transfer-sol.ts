import { LAMPORTS_PER_SOL, PublicKey, SystemProgram } from '@solana/web3.js';
import { createAndSendTransaction, fromUserNumber, getKeypair } from '../utils';

export async function transferSol(
  name: string,
  password: string,
  toPublicKey: string,
  amount: number
) {
  console.log(`Transfering (${amount} SOL)...`);
  // 1. Use getKeypair method from utils and access the keypair.
  const keypair = await getKeypair(name, password);
  // 2. Transform amount of SOL into lamports.
  const amountAsLamports = fromUserNumber(amount, LAMPORTS_PER_SOL);
  // 3. Create a system transfer instruction.
  const transferInstruction = SystemProgram.transfer({
    fromPubkey: keypair.publicKey,
    lamports: amountAsLamports,
    toPubkey: new PublicKey(toPublicKey),
  });
  // 4. Create a transaction where the keypair is the payer, the list of instructions
  //    and a list of signers.
  const signature = await createAndSendTransaction(
    keypair,
    [transferInstruction],
    [keypair]
  );
  // 5. Print signature in the console.
  console.log(`Signature: ${signature}.`);
  console.log('Transfer sent.');
}
