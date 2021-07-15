const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')

// Automatically allow cross-origin requests
app.use(cors({ origin: true }))

// build multiple CRUD interfaces:
app.get('/:twitchId', async (req, res) => {
  const { twitchId } = req.params
  try {
    const result = await axios.get(
      'https://api.twitch.tv/kraken/users?login=maltec_',

      {
        headers: {
          Accept: 'application/vnd.twitchtv.v5+json',
          'Client-ID': k1aoxlbd1uzb8zb4aqtrkuqav44jvl,
        },
      }
    )

    res.json(result.data)
  } catch (error) {
    res.json(error)
  }
})

// Expose Express API as a single Cloud Function:
exports.twitch = functions.https.onRequest(app)
