
// set the Oracle address for the OmniCounter
task("omniCounterSetOracle", "set the UA (an OmniCounter contract) to use the specified oracle for the destination chain",
    require("./omniCounterSetOracle"))
    .addParam("targetNetwork", "the target network name, ie: fuji, or mumbai, etc (from hardhat.config.js)")
    .addParam("oracle", "the Oracle address for the specified targetNetwork")

// get the Oracle for sending to the destination chain
task("omniCounterGetOracle", "get the Oracle address being used by the OmniCounter",
    require("./omniCounterGetOracle"))
    .addParam("targetNetwork", "the target network name, ie: fuji, or mumbai, etc (from hardhat.config.js)")

//
task("omniCounterIncrementCounter", "increment the destination OmniCounter",
    require("./omniCounterIncrementCounter"))
    .addParam("targetNetwork", "the target network name, ie: fuji, or mumbai, etc (from hardhat.config.js)")
    .addOptionalParam("n", "number of tx", 1, types.int)

//
task("omniCounterIncrementMultiCounter", "increment the destination OmniCounter",
    require("./omniCounterIncrementMultiCounter"))
    .addParam("targetNetworks", "target network names, separated by comma (no spaces)")

//
task("omniCounterSetDestination", "setTrustedSource(chainId, sourceAddr) to allow the local contract to receive messages from known source contracts",
    require("./omniCounterSetTrustedSource"))
    .addParam("targetNetwork", "the target network to let this instance receive messages from")

//
task("omnichainFungibleTokenSetDestination", "setTrustedSource(chainId, sourceAddr) to allow the local contract to receive messages from known source contracts",
    require("./omnichainFungibleTokenSetTrustedSource"))
    .addParam("targetNetwork", "the target network to let this instance receive messages from")

//
task("omnichainFungibleTokenSendTokens", "omnichainFungibleTokenSendTokens() send tokens to another chain",
    require("./omnichainFungibleTokenSendTokens"))
    .addParam("qty", "qty of tokens to send")
    .addParam("targetNetwork", "the target network to let this instance receive messages from")

//
task("omnichainNonFungibleTokenSetTrustedSource", "setTrustedSource(chainId, sourceAddr) to allow the local contract to receive messages from known source contracts",
    require("./omnichainNonFungibleTokenSetTrustedSource"))
    .addParam("targetNetwork", "the target network to let this instance receive messages from")

//
task("omnichainNonFungibleTokenOwnerOf", "ownerOf(tokenId) to get the owner of a token",
    require("./omnichainNonFungibleTokenOwnerOf"))
    .addParam("tokenId", "the tokenId of ONFT")

//
task("omnichainNonFungibleTokenMint", "mint() mint ONFT",
    require("./omnichainNonFungibleTokenMint"))

//
task("omnichainNonFungibleTokenTransfer", "transferOmnichainNFT(chainId, tokenId) transfer ONFT from one chain to another",
    require("./omnichainNonFungibleTokenTransfer"))
    .addParam("targetNetwork", "the chainId to transfer to")
    .addParam("tokenId", "the tokenId of ONFT")

//
task("omniCounterPoll", "poll the counter of the OmniCounter",
    require("./omniCounterPoll"))

//
task("omniCounterIncrementWithParamsV1", "increment the destination OmniCounter with gas amount param",
    require("./omniCounterIncrementWithParamsV1"))
    .addParam("targetNetwork", "the target network name, ie: fuji, or mumbai, etc (from hardhat.config.js)")
    .addParam("gasAmount", "the gas amount for the destination chain")

//
task("omniCounterIncrementWithParamsV2", "increment the destination OmniCounter with gas amount param",
    require("./omniCounterIncrementWithParamsV2"))
    .addParam("targetNetwork", "the target network name, ie: fuji, or mumbai, etc (from hardhat.config.js)")
    .addParam("gasAmount", "the gas amount for the destination chain")
    .addParam("airDropEthQty", "the amount of eth to drop")
    .addParam("airDropAddr", "the air drop address")

// task("deleteAndRedeploy", "remove contracts from folder and redeploy", require("./deleteAndRedeploy"))
//     .addParam("e", "the environment ie: mainnet, testnet")
//     .addOptionalParam("contract", "the contract to delete and redeploy")
//     .addOptionalParam("ignore", "csv of network names to ignore", "", types.string)