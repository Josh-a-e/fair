<template>

<article>
  <section id="intro">
    <div class="intro-header">
      <h1>Fairlayer: Two-Layered Payment Network</h1>
    </div>
  </section>

  <section id="services">
    <div class="content-section-a">
      <div class="container">
        <div class="row">
          <div>
     
            <hr class="section-heading-spacer">
                      
            <p>
            <a href="https://github.com/fairlayer/fair"><img style="width:32px" src="../img/github.svg"></a> 
            &nbsp;<a href="https://medium.com/fairlayer"><img style="width:32px" src="../img/medium.svg"></a> 
            &nbsp;<a href="https://twitter.com/fairlayer_com"><img style="width:32px" src="../img/twitter.svg"></a>
            &nbsp;<a href="https://www.reddit.com/r/fairlayer/"><img style="width:32px" src="../img/reddit.svg"></a> 
            </p>

            <p>Fairlayer is a decentralized payment network that combines the best of both worlds: instant transfers and stability of traditional finance with security of a blockchain.</p>

            <p><strong>Two Layers</strong>: globally shared onchain state and zero-overhead peer-to-peer offchain protocol. It repurposes the blockchain from daily payments to work as insurance and court layer for disputes, moving all payments to be processed instantly through the hubs.</p>

            <p><strong>Everyone is a Full Node</strong>. Full nodes of most blockchains become unusable on consumer devices when they get popular, and everyone moves to insecure light clients, destroying decentralization principles. Our full node is built to routinely run on consumer hardware - laptops and mobile phones. The wallet processes very few insurance rebalances and requires negligible resources and bandwidth.</p>

            <p><strong>Extended Lightning Network</strong>. Fairlayer implements XLN scaling concept - we've fixed <a href="https://medium.com/fairlayer/xln-extended-lightning-network-80fa7acf80f3">original Lightning's capacity/liquidity issues with uninsured balances</a>. Also, payment channel functionality is implemented natively, instead of running it on top of a virtual machine opcodes. This dramatically reduces the complexity and makes the codebase easier to audit and maintain.</p>



          </div>
        </div>
      </div>
    </div>
  </section>
</article>

</template>
