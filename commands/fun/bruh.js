const { MessageAttachment } = require('discord.js');

module.exports = {
  name: 'bruh',
  category: 'fun',
  description: 'Bruh_Sound_Effect_2.mp4',
  usage: 'Just throw in the command man',
  run: async (client, message, args) => {
    const attachment = new MessageAttachment(
      'https://cdn.discordapp.com/attachments/649620218376880152/649627775908577280/Bruh_Sound_Effect_2.mp4'
    );
    message.channel.send(attachment);
  },
};
