<img src='https://imgur.com/VksHmn2.jpg' />

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# Fairlayer

Fairlayer is a new **scalable blockchain** that comes with Lightning-inspired offchain layer out-of-box. It fixes the liquidity problem - Fairlayer state channels support transfering beyond the capacity (insurance), which induces manageable risk and removes scalability caps.

Fairlayer has no virtual machine for smart contracts, instead uses onchain governance and amendments to implement new functionality.

Fairlayer has **a native token FSD to pay for transaction fees** and hub fees for transfer mediations, but the goal is to focus on 3rd party issued tokens (just like issuances in Ripple): **to move bank-backed and government-backed fiat currencies to our blockchain** which ensures fairness and security of first layer yet providing all the needed controls and introspection for financial institutions to remain compliant.

Unlike "fake" bloated blockchains with high tps, in Fairlayer the tokens are transfered instantly **offchain through the hubs** and hubs are responsible for rebalancing "insurances" onchain to reduce the collective risk over time. **This allows unlimited transactions per second with a hub-and-spoke topology of hubs.** Not 100k tps, not 300k, not 1M, it is in fact unlimited.

It is the same how the Internet topology looks like, and it has no central point of failure.

You can think of it as FDIC insurance, but not up to a specific amount of $250k - instead it can be any user-chosen amount, and the rules are seamlessly enforced by the blockchain instead of the government. You can always enforce and take your money from one hub and send to another.

## Local Simulation

`./install` then run `./simulate` to bootstrap local dev blockchain with 4 validators on different ports (8443, 8001, 8002, 8003). Look into `tools/genesis.js` for all the configurable network parameters such as blocksize or timeouts. Install ttab for convenient debugging.

## Wiki

See <a href="https://github.com/fairlayer/fair/wiki">Wiki</a>

## Tests

Fairlayer ./simulate is one giant e2e test. Different users at different times turn on different times and verify the result with setTimeout. Some of the things that are tested:

1.  onchain consensus

1.1 1 validator is byzantine.

2.  offchain payments

Perfect way to run new code against old blockchain:

```
rm -rf fs
id=fs
f=Fair-1.tar.gz
mkdir $id && cd $id && curl https://fairlayer.com/$f -o $f
tar -xzf $f && rm $f
ln -s ~/work/fs/node_modules
ln -s ~/work/fs/wallet/node_modules wallet/node_modules
rm -rf ./src
ln -s ~/work/fs/src
node fs -p8001
```
