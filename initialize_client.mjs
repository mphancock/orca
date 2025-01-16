import { Connection, Keypair } from "@solana/web3.js";
import { WhirlpoolContext, ORCA_WHIRLPOOL_PROGRAM_ID } from "@orca-so/whirlpools-sdk";
import fs from "fs";

// 1) Load your secret key
const secretKey = JSON.parse(fs.readFileSync("/Users/matthew/Documents/personal/private/solana-keypair.json", "utf-8"));
const payer = Keypair.fromSecretKey(new Uint8Array(secretKey));

// // 2) Create a Solana connection
// const RPC_ENDPOINT = "https://api.mainnet-beta.solana.com";
// const connection = new Connection(RPC_ENDPOINT);

// // 3) Create the WhirlpoolContext
// const whirlpoolCtx = WhirlpoolContext.from(connection, payer, ORCA_WHIRLPOOL_PROGRAM_ID);

// import { buildWhirlpoolClient } from "@orca-so/whirlpools-sdk";
// import { PriceMath } from "@orca-so/whirlpools-sdk";

// import { getMint } from "@solana/spl-token"; // Utility from the SPL Token library

// import BN from "bn.js";

// async function getWhirlpoolTokenDecimals() {
//     // 4. Retrieve the Whirlpool object
//     const client = buildWhirlpoolClient(whirlpoolCtx);
//     const WHIRLPOOL_PUBKEY = "Czfq3xZZDmsdGdUyrNLtRhGc47cXcZtLG4crryfu44zE";
//     const whirlpool = await client.getPool(WHIRLPOOL_PUBKEY);

//     // 5. Extract token mints from the Whirlpool data
//     const { tokenMintA, tokenMintB } = whirlpool.getData();

//     // 6. Get MintInfo for each token mint (SPL Token library)
//     const mintInfoA = await getMint(connection, tokenMintA);
//     const mintInfoB = await getMint(connection, tokenMintB);

//     // 7. Extract decimals
//     const decimalsA = mintInfoA.decimals;
//     const decimalsB = mintInfoB.decimals;

//     console.log(decimalsA);
//     console.log(decimalsB);

//     // console.log("Token A Mint:", tokenMintA.toBase58(), "Decimals:", decimalsA);
//     // console.log("Token B Mint:", tokenMintB.toBase58(), "Decimals:", decimalsB);

//     return { decimalsA, decimalsB };
// }

// (async () => {
// //     const client = buildWhirlpoolClient(whirlpoolCtx);

// //     // Example: If you already know the Whirlpool's public key for SOL/USDC
// //     const WHIRLPOOL_PUBKEY = "Czfq3xZZDmsdGdUyrNLtRhGc47cXcZtLG4crryfu44zE";
// //     const whirlpool = await client.getPool(WHIRLPOOL_PUBKEY);

// //     console.log("Whirlpool fetched:", whirlpool.getAddress().toBase58());

// //     const whirlpoolData = whirlpool.getData();
// //     const sqrtPriceX64 = whirlpoolData.sqrtPrice;
// //     const tokenAMint = whirlpoolData.tokenMintA;
// //     const tokenBMint = whirlpoolData.tokenMintB;
// //     const tickSpacing = whirlpoolData.tickSpacing;
// //     console.log("Sqrt price:", sqrtPriceX64.toString())

// //     const { decimalsA, decimalsB } = await getWhirlpoolTokenDecimals();
// //     console.log(decimalsA);
// //     console.log(decimalsB);

// // //   Convert to real price
// //     const cur_price = PriceMath.sqrtPriceX64ToPrice(sqrtPriceX64, decimalsA, decimalsB);
// //     console.log("Current price:", cur_price.toString());


//     const cur_price = 204.1992988059185903989203674173856261658;
//     const decimalsA = 9;
//     const decimalsB = 6;

//     // Example: choose a price range +/- 2% around the current price
//     const lowerPrice = cur_price * 0.98;
//     const upperPrice = cur_price * 1.02;

//     console.log("Lower price:", lowerPrice, "Upper price:", upperPrice);

//     // need to put into a big number
//     // You may want to scale by (decimalsA + decimalsB) or some other logic
//     const decimals = decimalsA + decimalsB;

//     // Step 1: Scale the number
//     // e.g. 1.2345 * 10^(4) = 12345 if decimals=4
//     // Use Math.round or Math.floor depending on how you want to handle fractional cents
//     // const scaled = Math.round(lowerPrice * 10 ** decimals);
//     // // const scaled = 200115312830;

//     // console.log("Scaled lower price:", scaled);

//     const scaled = 200115312829800220;

//     // Step 2: Convert to BN
//     const lowerPriceBN = new BN(lowerPrice.toString());

//     console.log("Lower price BN:", lowerPriceBN.toString());

//     // // Convert prices to ticks (based on the tick spacing)
//     // // This is a simplified example. In production code, you should ensure your tick boundaries are multiples of `tickSpacing`.
//     const lowerTickIndex = PriceMath.priceToTickIndex(lowerPriceBN, decimalsA, decimalsB);
//     // // const upperTickIndex = PriceMath.priceToTickIndex(upperPrice, decimalsA, decimalsB);

//     // console.log("Lower tick:", lowerTickIndex, "Upper tick:", upperTickIndex);
// })();

// // import { openPosition, PDAUtil, TickUtil } from "@orca-so/whirlpools-sdk";

// // (async () => {
// //   // Round tick indexes to multiples of tickSpacing
// //   const validLowerTick = TickUtil.getLowerTickFromTickIndex(lowerTickIndex, tickSpacing);
// //   const validUpperTick = TickUtil.getUpperTickFromTickIndex(upperTickIndex, tickSpacing);

// //   // This calculates the token amounts needed for the specified liquidity.
// //   // Alternatively, you can specify max token A & B amounts to deposit.
// //   // For example:
// //   const liquidityAmount = 10_000_000; // Arbitrary example, you'd calculate this based on how much $ you want to deposit

// //   const { transaction, signers } = await whirlpool.openPositionWithLiquidity({
// //     tickLowerIndex: validLowerTick,
// //     tickUpperIndex: validUpperTick,
// //     // Provide one of these deposit methods:
// //     tokenMaxA: new BN(/* your deposit limit for token A */),
// //     tokenMaxB: new BN(/* your deposit limit for token B */),
// //     liquidityAmount: new BN(liquidityAmount),
// //     // The address that will hold the Position NFT
// //     positionMintKeypair: Keypair.generate(),
// //   });

// //   // Send transaction to Solana
// //   const txSig = await transaction.buildAndExecute();
// //   console.log("Opened position with tx:", txSig);
// // })();