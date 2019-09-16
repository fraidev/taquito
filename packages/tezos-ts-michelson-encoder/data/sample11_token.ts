export const rpcContractResponse = { "manager": "tz1Z1nn9Y7vzyvtf6rAYMPhPNGqMJXw88xGH", "balance": "0", "spendable": false, "delegate": { "setable": false }, "script": { "code": [{ "prim": "parameter", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "address" }, { "prim": "pair", "args": [{ "prim": "address" }, { "prim": "nat" }] }] }, { "prim": "address" }] }] }, { "prim": "storage", "args": [{ "prim": "pair", "args": [{ "prim": "big_map", "args": [{ "prim": "address" }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "map", "args": [{ "prim": "address" }, { "prim": "nat" }] }] }] }, { "prim": "pair", "args": [{ "prim": "nat" }, { "prim": "pair", "args": [{ "prim": "string" }, { "prim": "string" }] }] }] }] }, { "prim": "code", "args": [[{ "prim": "DUP" }, { "prim": "CAR" }, { "prim": "DIP", "args": [[{ "prim": "CDR" }]] }, { "prim": "IF_LEFT", "args": [[{ "prim": "DUP" }, { "prim": "CAR" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CAR" }]] }, { "prim": "GET" }, { "prim": "IF_NONE", "args": [[{ "prim": "EMPTY_MAP", "args": [{ "prim": "address" }, { "prim": "nat" }] }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }, { "prim": "PAIR" }], []] }, { "prim": "DUP" }, { "prim": "CAR" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "SUB" }, { "prim": "ISNAT" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "performTransfer: not enough tokens for transfer to" }] }, { "prim": "FAILWITH" }], [{ "prim": "DIP", "args": [[{ "prim": "SWAP" }, { "prim": "CDR" }]] }, { "prim": "PAIR" }]] }, { "prim": "SOME" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CAR" }]] }, { "prim": "SWAP" }, { "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CAR" }]] }, { "prim": "SWAP" }]] }]] }, { "prim": "UPDATE" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CAR" }]] }, { "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }]] }, { "prim": "SWAP" }, { "prim": "GET" }, { "prim": "IF_NONE", "args": [[{ "prim": "EMPTY_MAP", "args": [{ "prim": "address" }, { "prim": "nat" }] }, { "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }, { "prim": "PAIR" }], []] }, { "prim": "DIP", "args": [[{ "prim": "SWAP" }, { "prim": "DUP" }, { "prim": "CDR" }, { "prim": "CDR" }]] }, { "prim": "SWAP" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CAR" }]] }, { "prim": "ADD" }, { "prim": "DIP", "args": [[{ "prim": "CDR" }]] }, { "prim": "PAIR" }, { "prim": "SWAP" }, { "prim": "CDR" }, { "prim": "CAR" }, { "prim": "DIP", "args": [[{ "prim": "SOME" }]] }, { "prim": "UPDATE" }, { "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "DIP", "args": [[{ "prim": "CDR" }]] }, { "prim": "CAR" }]] }, { "prim": "DIP", "args": [[{ "prim": "DROP" }]] }, { "prim": "PAIR" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "PAIR" }], [{ "prim": "DIP", "args": [[{ "prim": "DUP" }, { "prim": "CAR" }]] }, { "prim": "GET" }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "nat" }, { "int": "0" }] }], [{ "prim": "CAR" }]] }, { "prim": "RIGHT", "args": [{ "prim": "pair", "args": [{ "prim": "address" }, { "prim": "contract", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "address" }, { "prim": "pair", "args": [{ "prim": "address" }, { "prim": "nat" }] }] }, { "prim": "address" }] }] }] }] }, { "prim": "DIP", "args": [[{ "prim": "SENDER" }, { "prim": "CONTRACT", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "address" }, { "prim": "contract", "args": [{ "prim": "or", "args": [{ "prim": "pair", "args": [{ "prim": "address" }, { "prim": "pair", "args": [{ "prim": "address" }, { "prim": "nat" }] }] }, { "prim": "address" }] }] }] }, { "prim": "nat" }] }] }, { "prim": "IF_NONE", "args": [[{ "prim": "PUSH", "args": [{ "prim": "string" }, { "string": "GetBalance: sender contract does not match the expected type, first try." }] }, { "prim": "FAILWITH" }], []] }, { "prim": "PUSH", "args": [{ "prim": "mutez" }, { "int": "0" }] }]] }, { "prim": "TRANSFER_TOKENS" }, { "prim": "NIL", "args": [{ "prim": "operation" }] }, { "prim": "SWAP" }, { "prim": "CONS" }, { "prim": "PAIR" }]] }]] }], "storage": { "prim": "Pair", "args": [[], { "prim": "Pair", "args": [{ "int": "1000000" }, { "prim": "Pair", "args": [{ "string": "Tezos Gold" }, { "string": "TGD" }] }] }] } }, "counter": "0" }

export const storage = rpcContractResponse.script.code.find(
    x => x.prim === 'storage'
)!.args[0] as any;

export const params = rpcContractResponse.script.code.find(
    x => x.prim === 'parameter'
)!.args[0];