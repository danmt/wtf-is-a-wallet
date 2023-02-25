import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { connection, fromUserNumber } from '../utils';

export async function requestAirdrop(toPublicKey: string, amount: number) {
  console.log(`Requesting airdrop (${amount} SOL)...`);
  // Transform amount of SOL into lamports.
  const amountAsLamports = fromUserNumber(amount, LAMPORTS_PER_SOL);
  // Use method requestAirdrop from connection to make the request.
  const signature = await connection.requestAirdrop(
    new PublicKey(toPublicKey),
    amountAsLamports
  );
  console.log(`Signature: ${signature}.`);
}
