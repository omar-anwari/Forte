const { MessageAttachment } = require('discord.js');

module.exports = {
  name: 'why',
  category: 'fun',
  description: 'Why bruh',
  usage: 'Just throw in the command man',
  run: async (client, message, args) => {
    const attachment = new MessageAttachment(
        'https://i.imgur.com/89XcQzT.png'
    );
    message.channel.send(attachment);
  },
};
