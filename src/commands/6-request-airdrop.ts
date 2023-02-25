export async function requestAirdrop(toPublicKey: string, amount: number) {
  console.log(`Requesting airdrop (${amount} SOL)...`);
  // 1. Transform amount of SOL into lamports.
  // 2. Use method requestAirdrop from connection to make the request.
  // 3. Print signature in the console.
  console.log(`Airdrop request sent.`);
}
