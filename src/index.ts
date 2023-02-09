import {
  generateKeypair,
  getPublicKey,
  listKeys,
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
  console.log(`6) Transfer SOL. (devnet)`);
  console.log(`7) Exit.`);

  while (true) {
    const option = await question('\nOption: ');

    console.log('');

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
        const publicKey = await question('Public Key (base64): ');
        const message = await question('Message: ');
        const signature = await question('Signature: ');
        console.log('');
        await verifySignature(signature, message, publicKey);
        break;
      }
      case '6': {
        const name = await question('Name: ');
        const password = await question('Password: ');
        const publicKey = await question('Public Key (base64): ');
        const amount = await question('Amount (in SOL): ');
        console.log('');
        await transferSol(name, password, publicKey, Number(amount));
        break;
      }
      case '7': {
        console.log(`Bye...`);
        process.exit(1);
      }
      default: {
        console.log('Unknown option.');
        break;
      }
    }
  }
}

main();
