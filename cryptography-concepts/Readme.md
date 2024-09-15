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
