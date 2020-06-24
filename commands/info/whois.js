const { getMember, formatDate } = require('../../function');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
module.exports = {
  name: 'whois',
  aliases: ['userinfo', 'user', 'who'],
  category: 'info',
  description: 'Sends out information about that user',
  usage: '!whois [username | id | mention]',
  run: async (client, message, args) => {
    const member = getMember(message, args.join(' '));
    //   Member Vars
    const joined = formatDate(member.joinedAt);
    const roles =
      member.roles.cache
        .filter((r) => r.id !== message.guild.id)
        .map((r) => r)
        .join(', ') || 'none';
    // User Vars
    const created = formatDate(member.user.createdAt);
    const embed = new MessageEmbed()
      .setFooter(member.displayName, member.user.displayAvatarURL())
      .setThumbnail(member.user.displayAvatarURL())
      .setColor(
        member.displayHexColor === '#000000'
          ? '#579DB3'
          : message.guild.me.displayHexColor
      )
      .addField(
        'Member info',
        stripIndents`**> Display Name:** ${member.displayName}
          **> Joined at:** ${joined}
          **> Roles:** ${roles}`,
        true
      )
      .addField(
        'User info',
        stripIndents`**> ID:** ${member.user.id}
          **> Username:** ${member.user.username}
          **> Discord tag:** ${member.user.tag}
          **> Created on:** ${created}`,
        true
      )
      .setTimestamp();
    if (member.user.presence.game)
      embed.addField(
        'Currently playing',
        stripIndents`**> Name:** ${member.user.presence.game.name}`
      );
    message.channel.send(embed);
  },
};
