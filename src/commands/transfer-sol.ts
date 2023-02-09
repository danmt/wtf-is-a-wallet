import {
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
} from '@solana/web3.js';
import { getKeypair } from '../utils';

export async function transferSol(
  name: string,
  password: string,
  toPublicKey: string,
  amount: number
) {
  console.log(`Transfering (${amount} SOL)...`);
  const keypair = await getKeypair(name, password);
  const connection = new Connection('https://api.devnet.solana.com');
  const { blockhash } = await connection.getLatestBlockhash();
  const messageV0 = new TransactionMessage({
    payerKey: keypair.publicKey,
    recentBlockhash: blockhash,
    instructions: [
      SystemProgram.transfer({
        fromPubkey: keypair.publicKey,
        lamports: LAMPORTS_PER_SOL * amount,
        toPubkey: new PublicKey(
          new Uint8Array(Buffer.from(toPublicKey, 'base64'))
        ),
      }),
    ],
  }).compileToV0Message();
  const transaction = new VersionedTransaction(messageV0);
  transaction.sign([keypair]);
  const signature = await connection.sendTransaction(transaction);
  console.log(`Signature: ${signature}.`);
}
