// Fairlayer runs e2e tests on itself, 
// different nodes acting like "monkeys" and doing different overlapping scenarios

if (argv.monkey) {
  if (me.record) {
    if (me.record.id == 4) {
      // trigger the dispute from hub
      me.CHEAT_dontack = true
      me.CHEAT_dontwithdraw = true
      me.payChannel({
        amount: 20000,
        address: randos[0],
        asset: 1
      })

      // create an asset
      me.batch.push([
        'createAsset',
        ['TEST2', 13371337, 'Test coin', 'No goal']
      ])
    }

    if (me.record.id == 3) {
      var xss = '\'"><img src=x onerror=alert(0)>'
      me.batch.push([
        'createAsset',
        ['XSS', 10000000, xss, xss]
      ])

      // buying bunch of FRB for $4
      me.batch.push(['createOrder', [1, 400, 2, 0.001 * 1000000]])
    }
  }

  // if we are hub: plan a test check, otherwise start paying randomly.
  if (me.my_hub) {
    // adding onchain balances to randos
    for (var dest of randos) {
      let [box_pubkey, pubkey] = r(base58.decode(dest))
      me.batch.push(['depositTo', 1, [[1000000, pubkey, 0]]])
    }

    // creating an initial FRB sell for FRD
    me.batch.push(['createOrder', [2, 10000000, 1, 0.001 * 1000000]])

    setTimeout(async () => {
      // making sure in 30 sec that all test payments were successful by looking at the metrics

      await me.syncdb()
      update_cache()

      let monkey5 = await User.idOrKey(5)
      let monkey5ins = await Insurance.sumForUser(5)

      // must be >100 after expected rebalance
      var alert = `${me.metrics.settle.total}/${me.metrics.fail.total}\n
Monkey5: ${monkey5 ? monkey5.asset(1) : 'N/A'}/${monkey5ins}\n
Blocks: ${await Block.count()}\n
Payments: ${await Payment.count()}\n
Orders: ${await Order.count()}\n
Assets: ${await Asset.count()}\n
Deltas: ${await Delta.count()}\n
      `

      l(alert)

      //child_process.exec(`osascript -e 'display notification "${alert}"'`)
    }, 80000)
  } else if (parseInt(base_port) > 8003) {
    randos.splice(randos.indexOf(me.address), 1) // *except our addr

    setTimeout(() => {
      me.getCoins(1, 10000000)
    }, 6000)

    setTimeout(() => {
      me.payRando()

      // intended to fail
      me.payChannel({
        address:
          'ZUp5PARsn4X2xs8fEjYSRtWSTQqgkMnVax7CaLsBmp9kR36Jqon7NbqCakQ5jQ9w1t5gtGo3zfhTtQ2123123123DJJjZ',
        amount: 100,
        asset: 1
      })
    }, 17000)
  }
}