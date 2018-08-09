
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'collabhelp',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: 'Collabhelp will help you find all the collaboration tools you need',
    color: '#2FA44F',
    text: '`/collabhelp help` returns all the commands you can do \n`/collabhelp how to use lifesize` will show you how to use lifesize',
    mrkdwn_in: ['text']
  },
  {
    title: 'Configuring Collabhelp',
    color: '#E3E4E6',
    text: '`/collabhelp help` ... you\'re lookin at it! \n',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /help/ig, handler: handler }
