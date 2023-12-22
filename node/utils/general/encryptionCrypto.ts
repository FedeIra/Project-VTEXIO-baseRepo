// Functions to encrypt and decrypt using crypto library:
import crypto from 'crypto'

import { GeneralVariables } from '../../packages/index'

// Function to encrypt with crypto:
export const encryptWithCrypto = (text: string): string => {
  try {
    const algorithm = GeneralVariables.ENCRYPT_ALGORITHM
    const initVector = crypto.randomBytes(16)

    const cipher = crypto.createCipheriv(
      algorithm,
      GeneralVariables.CRYPT_SECURITY_KEY,
      initVector
    )

    let encryptedData = cipher.update(text, 'utf8', 'hex')

    encryptedData += cipher.final('hex')

    return `${initVector.toString('hex')}:${encryptedData}`
  } catch (error) {
    throw new Error(error)
  }
}

// Function to decrypt with crypto:
export const decryptWithCrypto = (encryptedTextWithIv: string): string => {
  try {
    const textParts = encryptedTextWithIv.split(':')
    const initVector = Buffer.from(textParts[0], 'hex')
    const encryptedText = Buffer.from(textParts[1], 'hex')
    const algorithm = GeneralVariables.ENCRYPT_ALGORITHM
    const decipher = crypto.createDecipheriv(
      algorithm,
      GeneralVariables.CRYPT_SECURITY_KEY,
      initVector
    )

    let decryptedData = decipher.update(encryptedText, 'hex', 'utf8')

    decryptedData += decipher.final('utf8')

    return decryptedData
  } catch (error) {
    throw new Error(error)
  }
}
