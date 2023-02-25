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
  const keypair = await getKeypair(name, password);
  const mintKeypair = new Keypair();
  const lamportsForMint = await connection.getMinimumBalanceForRentExemption(
    MintLayout.span
  );
  const signature = await createAndSendTransaction(
    keypair,
    [
      SystemProgram.createAccount({
        programId: TOKEN_PROGRAM_ID,
        space: MintLayout.span,
        fromPubkey: keypair.publicKey,
        newAccountPubkey: mintKeypair.publicKey,
        lamports: lamportsForMint,
      }),
      createInitializeMintInstruction(
        mintKeypair.publicKey,
        MINT_DECIMALS,
        keypair.publicKey,
        keypair.publicKey
      ),
    ],
    [keypair, mintKeypair]
  );
  console.log(`Mint ${mintKeypair.publicKey.toBase58()} created.`);
  console.log(`Signature: ${signature}.`);
}
