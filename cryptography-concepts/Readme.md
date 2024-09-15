# Cryptography

cryptography is a process of securing data using some algorithm.

## Hash

same-input -> same-output
With hash it is easy to observe patterns between different hashes and commonly used value, this thing makes it a bit unsecure.
Hashing: Transforms data into a fixed-size string of characters, typically used for verifying the integrity of data and securely storing passwords.

## Salt

same input -> random-salt + same-output
Salting: Adds random data to a password before hashing, providing increased protection from attacks like rainbow table lookups.
isn't salting just hashing the hash?
a salt is inserted randomly into a password before hashing to make it harder to crack.

## HMAC

Hash-based message authentication code (or HMAC) is a cryptographic authentication technique that uses a hash function and a secret key. With HMAC, you can achieve authentication and verify that data is correct and authentic with shared secrets, as opposed to approaches that use signatures and asymmetric cryptography.

What if we want to decrypt the message with the key? above techniques are hash based and a hash cannot be decrypted but only compared.

What is encryption?
Encryption defined. At its most basic level, encryption is the process of protecting information or data by using mathematical models to scramble it in such a way that only the parties who have the key to unscramble it can access it.

## Keypairs

Key pairs are generated with cryptographic algorithms based on mathematical problems termed one-way functions. Security of public-key cryptography depends on keeping the private key secret; the public key can be openly distributed without compromising security.

## Asymmetric Encryption

Asymmetric encryption is the process of using a public key from a public/private key pair to encrypt plaintext, and then using the corresponding private key to decrypt the ciphertext. Asymmetric encryption relies on asymmetric cryptography, also known as public key cryptography.

Symmetric Encryption: Uses the same key for both encryption and decryption. It's fast but requires secure key sharing. Example: AES.

Asymmetric Encryption: Uses a public key for encryption and a private key for decryption. It's more secure for key exchange but slower. Example: RSA.
