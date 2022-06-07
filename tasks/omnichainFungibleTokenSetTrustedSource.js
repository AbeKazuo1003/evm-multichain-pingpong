const CHAIN_ID = require('../constants/chainIds.json')
const {getDeploymentAddresses} = require('../utils/readStatic')

module.exports = async function (taskArgs, hre) {
    const dstChainId = CHAIN_ID[taskArgs.targetNetwork]
    const dstAddr = getDeploymentAddresses(taskArgs.targetNetwork)["OmnichainFungibleToken"]
    // get local contract instance
    const omnichainFungibleToken = await ethers.getContract("OmnichainFungibleToken")
    console.log(`[source] omnichainFungibleToken.address: ${omnichainFungibleToken.address}`)

    // setTrustedSource() on the local contract, so it can receive message from the source contract
    try {
        let tx = await (await omnichainFungibleToken.setTrustedSource(
            dstChainId,
            dstAddr
        )).wait()
        console.log(`✅ [${hre.network.name}] setTrustedSource(${dstChainId}, ${dstAddr})`)
        console.log(` tx: ${tx.transactionHash}`)
    } catch(e){
        if(e.error.message.includes("The source address has already been set for the chainId")){ console.log('*source already set*') }
        else { console.log(e)}
    }
}
