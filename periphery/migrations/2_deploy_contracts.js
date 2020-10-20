const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
    let weth;
    const FACTORY_ADDRESS = '0x63c4abB6F50b85FD0dc770A314915762B558D690';

    if(network === 'mainnet') {
        weth = await WETH.at(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
    }
    else {
        await deployer.deploy(WETH);
        weth = await WETH.deployed();
    }

    await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
};
