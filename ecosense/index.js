import pino from 'pino';
import express from 'express';
import fs from 'node:fs';

const config = JSON.parse(fs.readFileSync(process.env.CONFIG_PATH || "./config.json", 'utf8'));
const logger = pino({level: config.log_level});

const app = express()

app.put('/*', (req, res) => {
  console.log('Got a put', req, res);
  // https://embeddedartistry.com/blog/2024/11/04/reclaim-your-data-freeing-a-wi-fi-sensor-from-the-cloud/#Replacing-Their-Servers-With-Our-Own
});

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})