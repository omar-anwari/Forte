const { Client, Collection } = require('discord.js');
const { config } = require('dotenv');
const fs = require('fs');
const client = new Client({
  disableEveryone: true,
});
config({
  path: __dirname + '/.env',
});
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync('./commands/');

['command'].forEach((handler) => {
  require(`./handler/${handler}`)(client);
});
client.on('ready', () => {
  console.log(`I'm online! My name is ${client.user.tag}!`);
  client.user.setPresence({
    activity: {
      type: 'WATCHING',
      name: 'myself be overhauled',
    },
    status: 'idle',
  });
  // .then(console.log)
  // .catch(console.error)
});
client.on('message', async (message) => {
  // console.log(`${message.author.username} said ${message.content}`);
  const prefix = '!';
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args);
});
// Dumb "secret" commands
client.on('message', (message) => {
  if (message.content === 'Thank you Forte') {
    const msg = message.reply(`Your welcome! ☺️`);
    // .then(console.log)
    // .catch(console.error);
  } else if (message.content === 'Thanks Forte') {
    const msg = message.reply(`Your welcome! ☺️`);
    // .then(console.log)
    // .catch(console.error)
  } else if (message.content === `Who's the biggest Chad?`) {
    const msg = message.channel.send(`<@595781002601955343> of course!`);
  } else if (message.content === `Who's the biggest nerd?`) {
    const msg = message.reply(`is the biggest fucking nerd 😘`);
  }
});
client.login(process.env.TOKEN);
