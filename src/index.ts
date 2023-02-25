import {
  createMint,
  createToken,
  generateKeypair,
  getBalance,
  getPublicKey,
  listKeys,
  mintTokens,
  requestAirdrop,
  signMessage,
  transferSol,
  verifySignature,
} from './commands';
import { question } from './utils';

async function main() {
  console.log(`Welcome to your keychain. \n`);
  console.log(`1) Generate new keypair.`);
  console.log(`2) List keys.`);
  console.log(`3) Get Public Key.`);
  console.log(`4) Sign message.`);
  console.log(`5) Verify signature.`);
  console.log(`6) Request airdrop.`);
  console.log(`7) Get balance.`);
  console.log(`8) Transfer SOL.`);
  console.log(`9) Create mint.`);
  console.log(`10) Create token.`);
  console.log(`11) Mint tokens.`);
  console.log(`12) Exit.`);

  while (true) {
    const option = await question('\nOption: ');

    console.log('');

    try {
      switch (option) {
        case '1': {
          const name = await question('Name: ');
          const password = await question('Password: ');
          console.log('');
          await generateKeypair(name, password);

          break;
        }
        case '2': {
          await listKeys();

          break;
        }
        case '3': {
          const name = await question('Name: ');
          const password = await question('Password: ');
          console.log('');
          await getPublicKey(name, password);

          break;
        }
        case '4': {
          const name = await question('Name: ');
          const password = await question('Password: ');
          const message = await question('Message: ');
          console.log('');
          await signMessage(name, password, message);
          break;
        }
        case '5': {
          const publicKey = await question('Public Key: ');
          const message = await question('Message: ');
          const signature = await question('Signature: ');
          console.log('');
          await verifySignature(signature, message, publicKey);
          break;
        }
        case '6': {
          const publicKey = await question('Public Key: ');
          const amount = await question('Amount (in SOL): ');
          console.log('');
          await requestAirdrop(publicKey, Number(amount));
          break;
        }
        case '7': {
          const publicKey = await question('Public Key: ');
          console.log('');
          await getBalance(publicKey);
          break;
        }
        case '8': {
          const name = await question('Name: ');
          const password = await question('Password: ');
          const publicKey = await question('Public Key: ');
          const amount = await question('Amount (in SOL): ');
          console.log('');
          await transferSol(name, password, publicKey, Number(amount));
          break;
        }
        case '9': {
          const name = await question('Name: ');
          const password = await question('Password: ');
          console.log('');
          await createMint(name, password);
          break;
        }
        case '10': {
          const name = await question('Name: ');
          const password = await question('Password: ');
          const mint = await question('Mint: ');
          const publicKey = await question('Public Key: ');
          console.log('');
          await createToken(name, password, mint, publicKey);
          break;
        }
        case '11': {
          const name = await question('Name: ');
          const password = await question('Password: ');
          const mint = await question('Mint: ');
          const publicKey = await question('Public Key: ');
          const amount = await question('Amount: ');
          console.log('');
          await mintTokens(name, password, mint, publicKey, Number(amount));
          break;
        }
        case '12': {
          console.log(`Bye...`);
          process.exit(1);
        }
        default: {
          console.log('Unknown option.');
          break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}

main();
