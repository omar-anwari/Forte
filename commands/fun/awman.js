const { MessageAttachment } = require('discord.js');

module.exports = {
  name: '!awwman',
  category: 'fun',
  description: `Don't tell dad`,
  usage: 'Just throw in the command man',
  run: async (client, message, args) => {
    const attachment = new MessageAttachment(
        'https://i.imgur.com/A99CLCU.png'
    );
    message.channel.send(attachment);
  },
};
