import {
  createInitializeMintInstruction,
  MintLayout,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { Keypair, SystemProgram } from '@solana/web3.js';
import { connection, createAndSendTransaction, getKeypair } from '../utils';
import { MINT_DECIMALS } from '../utils/decimals';

export async function createMint(name: string, password: string) {
  console.log(`Creating mint...`);
  // 1. Use getKeypair method from utils and access the keypair.
  const keypair = await getKeypair(name, password);
  // 2. Generate new keypair for the mint.
  const mintKeypair = new Keypair();
  // 3. Get the rent costs of a mint.
  const mintRent = await connection.getMinimumBalanceForRentExemption(
    MintLayout.span
  );
  // 4. Use createAccount to create the instruction that will create the new account
  //    that will later become a mint.
  const createAccountInstruction = SystemProgram.createAccount({
    programId: TOKEN_PROGRAM_ID,
    space: MintLayout.span,
    fromPubkey: keypair.publicKey,
    newAccountPubkey: mintKeypair.publicKey,
    lamports: mintRent,
  });
  // 5. Use createInitializeMintInstruction to create the instruction that will
  //    turn our new account into a mint account.
  const initializeMintInstruction = createInitializeMintInstruction(
    mintKeypair.publicKey,
    MINT_DECIMALS,
    keypair.publicKey,
    keypair.publicKey
  );
  // 6. Create a transaction where the keypair is the payer, the list of instructions
  //    and a list of signers.
  const signature = await createAndSendTransaction(
    keypair,
    [createAccountInstruction, initializeMintInstruction],
    [keypair, mintKeypair]
  );
  // 7. Print signature in the console.
  console.log(`Signature: ${signature}.`);
  // 8. Print mint public key in the console.
  console.log(`Mint ${mintKeypair.publicKey.toBase58()} created.`);
  console.log('Mint created.');
}
