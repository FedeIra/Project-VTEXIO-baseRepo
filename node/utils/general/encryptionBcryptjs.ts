// Functions to encrypt and decrypt using bcryptjs library:
// import bcryptjs from 'bcryptjs'

// import {
//   ENCRYPT_ALGORITHM,
//   CRYPT_SECURITY_KEY,
// } from '../../packages/generalPackages/variablesGeneral'

// Function to encrypt with bcryptjs:
// export const encryptWithBcrypt = async (value: string): Promise<string> => {
//   const hashedValue = await bcryptjs.hash(value, 10)

//   return hashedValue
// }

// Second function to encrypt with bcryptjs:
// export function encryptWithBcrypt2(text: string): string {
//   const secretKey = CRYPT_SECURITY_KEY
//   const iv: Buffer = crypto.randomBytes(16)
//   const cipher = crypto.createCipheriv(
//     ENCRYPT_ALGORITHM,
//     Buffer.from(secretKey),
//     iv
//   )

//   let encrypted = cipher.update(text)

//   encrypted = Buffer.concat([encrypted, cipher.final()])

//   return `${iv.toString('hex')}:${encrypted.toString('hex')}`
// }

// Function to decrypt with bcryptjs:
// export const decryptWithBcrypt = async (
//   value: string,
//   hashedValue: string
// ): Promise<boolean> => {
//   const isMatch = await bcryptjs.compare(value, hashedValue)

//   return isMatch
// }
