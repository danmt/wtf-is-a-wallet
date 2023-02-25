import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

const ENCRYPTION_ALGORITHM = 'aes-256-cbc';

export interface EncryptedMessage {
  iv: string;
  data: string;
}

export function encrypt(data: string, key: string): EncryptedMessage {
  const iv = randomBytes(16);
  const cipher = createCipheriv(ENCRYPTION_ALGORITHM, key, iv);
  let encrypted = cipher.update(data);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString('hex'), data: encrypted.toString('hex') };
}

export function decrypt({ data, iv }: EncryptedMessage, key: string): string {
  let encryptedText = Buffer.from(data, 'hex');
  let decipher = createDecipheriv(
    ENCRYPTION_ALGORITHM,
    key,
    Buffer.from(iv, 'hex')
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

export function passwordToKey(password: string): string {
  if (password.length > 32) {
    throw new Error('Password is too long');
  }

  return `${password}${new Array(32 - password.length).fill(' ').join('')}`;
}
