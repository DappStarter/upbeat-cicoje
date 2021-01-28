require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift random pitch hospital heavy civil army ghost'; 
let testAccounts = [
"0x9c932b4f0ef20339d6d63073fc4c7185d02e702240aafc06a9599807717d63a7",
"0x6ec2a84fec2ea89b06d84012f9b022d9693b0d259fa3e1ae863226c7ca26bbb6",
"0xa7ec913a48b3918e7608c6cf96c93d12dc02e493617564a7ab92d95e45d00acc",
"0xdddc6d8bb61a35ad8515b3d065640eb91b2a12e2fce726a9b8be005f5a087826",
"0x11fd2e3bbffdbe85cbd757e9f5d67471a85278308689f90e1e74d6289f54c5c2",
"0xf33b1d47102cdf57a3f19a3356863ab3722552cf9b5dcc16140ba2e0488e9796",
"0x0f64646c897482ccb134fc1fb896cf716e34a5303ddf88d2558a971036b427a0",
"0x60deb5ee1cf6ff4c6c45f661e1bf74f143ca39904172862650123b8b08a0cffb",
"0xea3911c965b12592c5f10a0e5ee28f58e4f8b25e70498047bb2a4f6859d69f16",
"0xd19331c2a61775b82d9edd53ca5ad3c9c4ee908a39384b53108fd560a40cb9f9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
