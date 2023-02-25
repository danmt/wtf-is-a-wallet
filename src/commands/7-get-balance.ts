import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { connection, toUserNumber } from '../utils';

export async function getBalance(publicKey: string) {
  // Use getBalance method from connection to get the balance.
  const balance = await connection.getBalance(new PublicKey(publicKey));
  console.log(`Balance: ${toUserNumber(balance, LAMPORTS_PER_SOL)} SOL.`);
}
