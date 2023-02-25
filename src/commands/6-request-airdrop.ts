import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { connection, fromUserNumber } from '../utils';

export async function requestAirdrop(toPublicKey: string, amount: number) {
  console.log(`Requesting airdrop (${amount} SOL)...`);
  // 1. Transform amount of SOL into lamports.
  const amountAsLamports = fromUserNumber(amount, LAMPORTS_PER_SOL);
  // 2. Use method requestAirdrop from connection to make the request.
  const signature = await connection.requestAirdrop(
    new PublicKey(toPublicKey),
    amountAsLamports
  );
  // 3. Print signature in the console.
  console.log(`Signature: ${signature}.`);
  console.log(`Airdrop request sent.`);
}
