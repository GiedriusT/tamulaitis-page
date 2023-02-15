import CryptoJS from 'crypto-js';
import secrets from './secrets';

export function decryptText(encryptedText: string, key: string, ivString: string): string {
  const iv = CryptoJS.enc.Hex.parse(ivString);
  const decrypted = CryptoJS.AES.decrypt(encryptedText, key, { iv }).toString(CryptoJS.enc.Utf8);
  return decrypted;
}

export function secretBySlug(slug: string): string | null {
  const [key, ivString] = slug.split('-');
  for (let i = 0; i < secrets.length; i++) {
    try {
      const decrypted = decryptText(secrets[i], key, ivString);
      if (decrypted)
        return decrypted;
    } catch (e) {
      continue;
    }
  }
  return null;
}
