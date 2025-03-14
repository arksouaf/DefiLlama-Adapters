const ADDRESSES = require('../helper/coreAssets.json')
const { nullAddress, treasuryExports } = require("../helper/treasury");

const treasury = "0x4971DD016127F390a3EF6b956Ff944d0E2e1e462";
const treasury1 = "0x0DA0C3e52C977Ed3cBc641fF02DD271c3ED55aFe";
const treasury2 = "0x849D52316331967b6fF1198e5E32A0eB168D039d";
const treasury3= "0xBc79855178842FDBA0c353494895DEEf509E26bB";
const vestingAddress = "0x849d52316331967b6ff1198e5e32a0eb168d039d";
const GNO= "0x6810e776880C02933D47DB1b9fc05908e5386b96";
const LP = "0x6256518aE9a97C408a03AAF1A244989Ce6B937F6"
const LP2 = "0x228054e9c056F024FC724F515A2a8764Ae175ED6"


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESSES.ethereum.USDC, //USDC
        '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643',//cDAI
        '0x39AA39c021dfbaE8faC545936693aC917d5E7563',//cUSDC
        '0xc944E90C64B2c07662A292be6244BDf05Cda44a7',//GRT
        ADDRESSES.ethereum.CRV,//CRV
        '0xba100000625a3754423978a60c9317c58a424e3D',//BAL
        '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',//CVX
        '0xDEf1CA1fb7FBcDC777520aa7f396b4E015F497aB',//COW
        ADDRESSES.ethereum.STETH,//stETH
        '0xE95A203B1a91a908F9B9CE46459d101078c2c3cb',//ankETH
        '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',//ENS
        '0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d',//PNK
        ADDRESSES.ethereum.WSTETH,//wstETH
        '0xC0c293ce456fF0ED870ADd98a0828Dd4d2903DBF',//AURA
        '0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf',//GEN
        '0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6',//RDN
        '0x6f40d4A6237C257fff2dB00FA0510DeEECd303eb',//INST
        '0x6243d8CEA23066d098a15582d81a598b4e8391F4',//FLX
        ADDRESSES.ethereum.LIDO,//LDO
        '0x1982b2F5814301d4e9a8b0201555376e62F82428',
        "0x712CC5BeD99aA06fC4D5FB50Aea3750fA5161D0f"
     ],
    owners: [treasury, treasury1, treasury2, treasury3, vestingAddress],
    ownTokens: [GNO, LP, LP2],
    resolveUniV3: true,
  },
})