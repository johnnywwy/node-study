const redis = require('redis')
// import { REDIS_CONF } from '../config/db';
const REDIS_CONF = require('../config/db');

console.log('REDIS_CONF', REDIS_CONF);


const client = redis.createClient(REDIS_CONF)

client.on('error', (err) => {
  console.log('redis error', err)
})

client.on('connect', () => {
  console.log('redis connect')
})

// const getRedis = (key) => {
//   return new Promise((resolve, reject) => {
//     client.get(key, (err, res) => {
//       if (err) {
//         reject(err)
//       } else {
//         // resolve(result)
//         if (res == null) {
//           resolve(null)
//         }

//         try {
//           resolve(JSON.parse(res))
//         }
//         catch (e) {
//           resolve(res)
//         }
//       }
//     })
//   })
// }
// const setRedis = (key, value) => {
//   if (typeof value === 'object') {
//     client.set(key, JSON.stringify(value), redis.print)
//   }
// }


module.exports = client
