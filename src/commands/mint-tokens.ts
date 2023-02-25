import {
  createMintToInstruction,
  getAssociatedTokenAddress,
} from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';
import { createAndSendTransaction, getKeypair } from '../utils';
import { toUserNumber } from '../utils/decimals';

export async function mintTokens(
  name: string,
  password: string,
  mint: string,
  toPublicKey: string,
  amount: number
) {
  console.log(`Creating token...`);
  const keypair = await getKeypair(name, password);
  const associatedTokenAddress = await getAssociatedTokenAddress(
    new PublicKey(mint),
    new PublicKey(toPublicKey)
  );
  const signature = await createAndSendTransaction(
    keypair,
    [
      createMintToInstruction(
        new PublicKey(mint),
        associatedTokenAddress,
        keypair.publicKey,
        toUserNumber(amount)
      ),
    ],
    [keypair]
  );
  console.log(`A total of ${amount} tokens of ${mint} minted.`);
  console.log(`Signature: ${signature}.`);
}
