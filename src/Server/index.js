const app = require('./app')
const os = require('os')
const getIp = require('./Utils/getAddressIp')

const init = async (ifNetwork) => {
  const addrs = getIp(ifNetwork)
  await app.listen(app.get('port'))
  console.log(
    `🖥  server run on ${addrs.localIp}:${app.get('port')}\n🌎 server run on ${addrs.publicIp}:${app.get('port')}`
  )
}

init(os.networkInterfaces())
