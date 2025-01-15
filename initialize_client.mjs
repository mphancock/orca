import { Connection, Keypair } from "@solana/web3.js";
import { WhirlpoolContext, ORCA_WHIRLPOOL_PROGRAM_ID } from "@orca-so/whirlpools-sdk";
import fs from "fs";

// 1) Load your secret key
const secretKey = JSON.parse(fs.readFileSync("/Users/matthew/Documents/personal/private/solana-keypair.json", "utf-8"));
const payer = Keypair.fromSecretKey(new Uint8Array(secretKey));

// 2) Create a Solana connection
const RPC_ENDPOINT = "https://api.mainnet-beta.solana.com";
const connection = new Connection(RPC_ENDPOINT);

// 3) Create the WhirlpoolContext
const whirlpoolCtx = WhirlpoolContext.from(connection, payer, ORCA_WHIRLPOOL_PROGRAM_ID);