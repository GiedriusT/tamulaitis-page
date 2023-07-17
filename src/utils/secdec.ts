import { parse as parseHexString } from 'crypto-js/enc-hex';
import { decrypt as decryptAes } from 'crypto-js/aes';
import secrets from '../secrets';

export function decryptText(encryptedText: string, key: string, ivString: string): string {
  const iv = parseHexString(ivString);
  const decrypted = decryptAes(encryptedText, key, { iv }).toString(CryptoJS.enc.Utf8);
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
