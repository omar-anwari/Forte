const { MessageAttachment } = require('discord.js');

module.exports = {
  name: 'poggers',
  aliases: 'POGGERS',
  category: 'fun',
  description: 'Akbar says this all the time - Twitch Emote',
  usage: 'Just throw in the command man',
  run: async (client, message, args) => {
    const attachment = new MessageAttachment(
        'https://i.imgur.com/w0pkR5k.png'
    );
    message.channel.send(attachment);
  },
};
