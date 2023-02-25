import {
  Keypair,
  TransactionInstruction,
  TransactionMessage,
  VersionedTransaction,
} from '@solana/web3.js';
import { connection } from './connection';

export async function createAndSendTransaction(
  keypair: Keypair,
  instructions: TransactionInstruction[],
  signers: Keypair[]
) {
  const { blockhash } = await connection.getLatestBlockhash();
  const messageV0 = new TransactionMessage({
    payerKey: keypair.publicKey,
    recentBlockhash: blockhash,
    instructions,
  }).compileToV0Message();
  const transaction = new VersionedTransaction(messageV0);
  transaction.sign(signers);
  const signature = await connection.sendTransaction(transaction, {
    preflightCommitment: 'confirmed',
  });
  return signature;
}
