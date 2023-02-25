import { LAMPORTS_PER_SOL, PublicKey, SystemProgram } from '@solana/web3.js';
import { createAndSendTransaction, fromUserNumber, getKeypair } from '../utils';

export async function transferSol(
  name: string,
  password: string,
  toPublicKey: string,
  amount: number
) {
  console.log(`Transfering (${amount} SOL)...`);
  // Use getKeypair method from utils and access the keypair.
  const keypair = await getKeypair(name, password);
  // Transform amount of SOL into lamports.
  const amountAsLamports = fromUserNumber(amount, LAMPORTS_PER_SOL);
  // Create a system transfer instruction.
  const transferInstruction = SystemProgram.transfer({
    fromPubkey: keypair.publicKey,
    lamports: amountAsLamports,
    toPubkey: new PublicKey(toPublicKey),
  });
  // Create a transaction where the keypair is the payer, the list of instructions
  // and a list of signers.
  const signature = await createAndSendTransaction(
    keypair,
    [transferInstruction],
    [keypair]
  );
  console.log(`Signature: ${signature}.`);
}
