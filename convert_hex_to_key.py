import base58
import json

# 1. Paste your 88-character Backpack key here:
base58_key_str = "XX"

# 2. Decode the Base58 string into raw bytes
key_bytes = base58.b58decode(base58_key_str)

# 3. Check length
key_len = len(key_bytes)
print(f"Decoded key is {key_len} bytes.")

# 4. For a full Solana keypair, we expect 64 bytes (private + public)
if key_len not in (32, 64):
    raise ValueError(
        f"Unexpected key length: {key_len}. Must be 32 (seed) or 64 (full keypair)."
    )

if key_len == 64:
    # Great, we already have a full keypair
    solana_keypair = list(key_bytes)
else:
    # If you have only 32 bytes, it's just the seed and you need to derive the pubkey
    import nacl.signing
    signing_key = nacl.signing.SigningKey(key_bytes)
    public_key_bytes = signing_key.verify_key.encode()
    solana_keypair = list(signing_key._seed + public_key_bytes)

# 5. Write the key to a JSON file
filename = "/Users/matthew/Documents/personal/private/solana-keypair.json"
with open(filename, "w") as f:
    json.dump(solana_keypair, f)

print(f"Solana keypair saved to {filename}")