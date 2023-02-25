import {
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
} from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';
import { createAndSendTransaction, getKeypair } from '../utils';

export async function createToken(
  name: string,
  password: string,
  mint: string,
  ownerPublicKey: string
) {
  console.log(`Creating token...`);
  const keypair = await getKeypair(name, password);
  const associatedTokenAddress = await getAssociatedTokenAddress(
    new PublicKey(mint),
    new PublicKey(ownerPublicKey)
  );
  const signature = await createAndSendTransaction(
    keypair,
    [
      createAssociatedTokenAccountInstruction(
        keypair.publicKey,
        associatedTokenAddress,
        new PublicKey(ownerPublicKey),
        new PublicKey(mint)
      ),
    ],
    [keypair]
  );
  console.log(`Token ${associatedTokenAddress.toBase58()} created.`);
  console.log(`Signature: ${signature}.`);
}
