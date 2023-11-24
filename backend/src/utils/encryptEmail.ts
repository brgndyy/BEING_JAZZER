import * as crypto from 'crypto';

export const encryptEmail = async (userEmail: string) => {
  const key = crypto.randomBytes(24);
  const iv = crypto.randomBytes(16);

  const derivedKey = crypto.scryptSync(key.toString('hex'), 'salt', 24);

  const cipher = crypto.createCipheriv('aes-192-cbc', derivedKey, iv);
  const encryptedBuffer = Buffer.concat([cipher.update(userEmail, 'utf8'), cipher.final()]);

  const encrypted = encryptedBuffer.toString('base64');

  return encrypted;
};
