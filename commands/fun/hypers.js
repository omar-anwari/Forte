const { MessageAttachment } = require('discord.js');

module.exports = {
  name: 'hypers',
  aliases: 'HYPERS',
  category: 'fun',
  description: 'Twitch emote',
  usage: 'Just throw in the command man',
  run: async (client, message, args) => {
    const attachment = new MessageAttachment(
        'https://i.imgur.com/GFJxx2J.png'
    );
    message.channel.send(attachment);
  },
};
