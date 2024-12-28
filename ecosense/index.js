const config = require(process.env.CONFIG_PATH)

global.log_level = config.log_level;
global.logger = require('pino')({level: config.log_level});

const express = require('express')
const app = express()
const port = 3000

app.put('/*', (req, res) => {
  console.log('Got a put', req, res);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})