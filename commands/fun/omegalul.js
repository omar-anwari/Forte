const { MessageAttachment } = require('discord.js');

module.exports = {
  name: 'omegalul',
  aliases: 'OMEGALUL',
  category: 'fun',
  description: 'Twitch emote',
  usage: 'Just throw in the command man',
  run: async (client, message, args) => {
    const attachment = new MessageAttachment(
        'https://i.imgur.com/totViOf.png'
    );
    message.channel.send(attachment);
  },
};
