import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import { connection, fromUserNumber } from '../utils';

export async function requestAirdrop(toPublicKey: string, amount: number) {
  console.log(amount, fromUserNumber(amount, LAMPORTS_PER_SOL));
  const signature = await connection.requestAirdrop(
    new PublicKey(toPublicKey),
    fromUserNumber(amount, LAMPORTS_PER_SOL)
  );
  console.log(`Signature: ${signature}.`);
}
