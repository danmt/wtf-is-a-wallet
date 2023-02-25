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
  // Use getKeypair method from utils and access the keypair.
  const keypair = await getKeypair(name, password);
  // Use getAssociatedTokenAddress method to get the address of an associated
  // token account for the owner with the mint.
  const associatedTokenAddress = await getAssociatedTokenAddress(
    new PublicKey(mint),
    new PublicKey(ownerPublicKey)
  );
  // Use createAssociatedTokenAccountInstruction to create the instruction
  // that will create the token account.
  const createTokenInstruction = createAssociatedTokenAccountInstruction(
    keypair.publicKey,
    associatedTokenAddress,
    new PublicKey(ownerPublicKey),
    new PublicKey(mint)
  );
  // Create a transaction where the keypair is the payer, the list of instructions
  // and a list of signers.
  const signature = await createAndSendTransaction(
    keypair,
    [createTokenInstruction],
    [keypair]
  );
  console.log(`Token ${associatedTokenAddress.toBase58()} created.`);
  console.log(`Signature: ${signature}.`);
}
