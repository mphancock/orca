import { createKeyPairSignerFromBytes } from '@solana/web3.js';
import fs from 'fs';

const keyPairBytes = new Uint8Array(JSON.parse(fs.readFileSync('/Users/matthew/my-solana-wallet/my-keypair.json', 'utf8')));
const wallet = await createKeyPairSignerFromBytes(keyPairBytes);

import { setWhirlpoolsConfig } from '@orca-so/whirlpools';

await setWhirlpoolsConfig('solanaDevnet');

import { generateKeyPair, createSolanaRpc, devnet, getAddressFromPublicKey } from '@solana/web3.js';

const devnetRpc = createSolanaRpc(devnet('https://api.devnet.solana.com'));
devnetRpc.requestAirdrop(
    wallet.address,
    1
).send()