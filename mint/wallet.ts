import { Keypair, LAMPORTS_PER_SOL, Connection } from "@solana/web3.js";
import * as fs from "fs";
import bs58 from "bs58";

// Connect to SOLANA DEVNET
const enpoint = "https://api.devnet.solana.com/";
const solanaConnection = new Connection(enpoint);

// Generate a NEW SOLANA WALLET
const keypair = Keypair.generate();
console.log("New KeyPair, Wallet Public Key: " + keypair.publicKey.toString());

// Convert Private Key to base58
const privateKey = bs58.encode(keypair.secretKey);
console.log("Wallet Private Key: " + privateKey);

// Write Wallet Secret Key to a JSON
const secret_array = keypair.secretKey
  .toString()
  .split(",")
  .map((value) => Number(value));
const secret = JSON.stringify(secret_array);

fs.writeFile("guideSecret.json", secret, "utf8", function (err) {
  if (err) throw err;
  console.log("Wrote Secret Key to guideSecret.json");
});

// AIRDROP 1 SOL to new wallet

(async () => {
  const airdropSignature = solanaConnection.requestAirdrop(
    keypair.publicKey,
    LAMPORTS_PER_SOL
  );
  try {
    const txId = await airdropSignature;
    console.log("Airdrop Transaction ID: " + txId);
    console.log(`https://explorer.solana.com/tx/${txId}?cluster=devnet`);
  } catch (err) {
    console.log(err);
  }
})();

/*
This script will perform 5 tasks: 

Connect to the Solana Network (Make sure you replace the example URL on Line 6 with your actual QuickNode Endpoint URL that you saved in the previous step).
Generate a new Wallet Keypair.
Convert the Private key to Base58 and print it to the console.
Write the Secret Key to a .json file that we'll use in the next step. Lines 16-22 are necessary to format the key as an array of numbers. Lines 24-27 use fs to export the array to a .json file.
Airdrop 1 SOL to the new Wallet. 
*/
