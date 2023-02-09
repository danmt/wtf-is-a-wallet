import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function question(question: string) {
  return new Promise<string>((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}
