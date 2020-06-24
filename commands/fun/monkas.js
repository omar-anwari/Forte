const { MessageAttachment } = require('discord.js');

module.exports = {
  name: 'monkas',
  aliases: 'monkaS',
  category: 'fun',
  description: 'Akbar says this all the time - Twitch emote',
  usage: 'Just throw in the command man',
  run: async (client, message, args) => {
    const attachment = new MessageAttachment(
        'https://i.imgur.com/lvhaKMW.png'
    );
    message.channel.send(attachment);
  },
};
