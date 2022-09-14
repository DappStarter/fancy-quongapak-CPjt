require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture strike rival sad smooth gesture loan food gentle'; 
let testAccounts = [
"0xd2cb715d42769ab4baaee0563e2c0c0b5dfd92a57d5667253a3d8d76707bcf98",
"0xea85f7c847da6bac54de650b985fa34bdb2fd527ccca83094fcc3ab0d5cbdd9d",
"0x3bf94de8df66ee7906ae34750bf8b4f2834c4342471fefc769a028c2290edc7a",
"0x721e54aa6425b5e89eb512d4bcf0b1a8dce255b52e0d4aad6bd924773a14638f",
"0xf8abde8ed222ad666271772bced33ab789e2ad8ae7661be51c4ae1a07bbde069",
"0x6d49297f4a0007d9dab14b4e0d79f47c6f53df6deb96f26a56d9d9c8a00bc423",
"0xee28f0e0159ad426994be7c7dda8fe04550a7463d84c0641ee1d124f5734533d",
"0x97abb851d602961606bd7d8aa3180fd0539068ed6eb062e671e78e697bda0367",
"0xe0a7f74db783984ef486144980324e455474e1e64c5b44371c9d04466e754297",
"0x5e8f90a2ffd12873b5f48697195c7e51a12f5e84b7ccd5b4bc1dd68c010bfee0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


