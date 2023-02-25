import {
  createMintToInstruction,
  getAssociatedTokenAddress,
} from '@solana/spl-token';
import { PublicKey } from '@solana/web3.js';
import { createAndSendTransaction, getKeypair } from '../utils';
import { fromUserNumber } from '../utils/decimals';

export async function mintTokens(
  name: string,
  password: string,
  mint: string,
  toPublicKey: string,
  amount: number
) {
  console.log(`Creating token...`);
  // Use getKeypair method from utils and access the keypair.
  const keypair = await getKeypair(name, password);
  // Use getAssociatedTokenAddress method to get the address of an associated
  // token account for the receiver with the mint.
  const associatedTokenAddress = await getAssociatedTokenAddress(
    new PublicKey(mint),
    new PublicKey(toPublicKey)
  );
  // Use createMintToInstruction to create the instruction that will be used
  // to mint the tokens into the receiver's token account.
  const mintToInstruction = createMintToInstruction(
    new PublicKey(mint),
    associatedTokenAddress,
    keypair.publicKey,
    fromUserNumber(amount)
  );
  // Create a transaction where the keypair is the payer, the list of instructions
  // and a list of signers.
  const signature = await createAndSendTransaction(
    keypair,
    [mintToInstruction],
    [keypair]
  );
  console.log(`A total of ${amount} tokens of ${mint} minted.`);
  console.log(`Signature: ${signature}.`);
}
