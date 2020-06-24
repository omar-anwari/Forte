const { MessageAttachment } = require('discord.js');

module.exports = {
  name: 'monkaw',
  aliases: 'monkaW',
  category: 'fun',
  description: 'Twitch emote',
  usage: 'Just throw in the command man',
  run: async (client, message, args) => {
    const attachment = new MessageAttachment(
        'https://i.imgur.com/S1ZMhMD.png'
    );
    message.channel.send(attachment);
  },
};
