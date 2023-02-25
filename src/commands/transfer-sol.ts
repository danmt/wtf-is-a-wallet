import { LAMPORTS_PER_SOL, PublicKey, SystemProgram } from '@solana/web3.js';
import { createAndSendTransaction, getKeypair } from '../utils';

export async function transferSol(
  name: string,
  password: string,
  toPublicKey: string,
  amount: number
) {
  console.log(`Transfering (${amount} SOL)...`);
  const keypair = await getKeypair(name, password);
  const signature = await createAndSendTransaction(
    keypair,
    [
      SystemProgram.transfer({
        fromPubkey: keypair.publicKey,
        lamports: LAMPORTS_PER_SOL * amount,
        toPubkey: new PublicKey(toPublicKey),
      }),
    ],
    [keypair]
  );
  console.log(`Signature: ${signature}.`);
}
