const { MessageAttachment } = require('discord.js');

module.exports = {
  name: '!pepega',
  aliases: 'PEPEGA',
  category: 'fun',
  description: 'Akbar says this all the time - Twitch emote',
  usage: 'Just throw in the command man',
  run: async (client, message, args) => {
    const attachment = new MessageAttachment(
        'https://i.imgur.com/oEvmypZ.png'
    );
    message.channel.send(attachment);
  },
};
