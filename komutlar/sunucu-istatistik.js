const Discord = require('discord.js'); 
const ayarlar = require('../ayarlar.json');

module.exports.run = async (bot, message, args) => {
  let guild = message.guild;
  let icon = message.guild.iconURL;

  let createdAtRaw = guild.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");
  let bots = message.guild.members.filter(m => m.user.bot).size;
  let humans = message.guild.members.filter(m => !m.user.bot).size;
  let channels = message.guild.channels.size;
  let textChannels = message.guild.channels.filter(m => m.type == "text").size;
  let voiceChannels = message.guild.channels.filter(i => i.type == "voice").size;
  let emojis = [];
  guild.emojis.forEach(emoji => {
  emojis.push(`\`${emoji}\``);
  });
  emojis.length === 0 ? emojis = "None" : emojis = emojis.join(", ");

  let roles = [];
  guild.roles.forEach(role => {
    roles.push(`\`${role.name}\``);
  });
  roles = roles.join(", ");

  let embed = new Discord.RichEmbed()
  .setTitle(`**Sunucu İstatistikleri**`)
  .setColor("GREEN")
  .setThumbnail(icon)
  .addField('📇Sunucu İsmi', guild.name, true)
  .addField('🆔Sunucu ID', guild.id, true)
  .addField('👑Sunucu Sahibi', `${guild.owner.user.tag}`, true)
  .addField('📅Oluşturma Tarihi', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
  .addField('🎯Bölge', guild.region.toUpperCase(), true)
  .addField('👥Toplam Kişi:', guild.memberCount, true)
  .addField('🤖Botlar:', bots, true)
  .addField('👥Kullanıcılar:', humans, true)
  .addField('🔐Güvenlik Seviyesi', guild.verificationLevel, true)
  .addField('📜Yazı Kanalları', textChannels, true)
  .addField('🎤Ses Kanalları', voiceChannels, true)
  .addField(`🎉Roller`, `${guild.roles.size}`, true)
  .addField(`📿Emojiler`, `${guild.emojis.size}`, true)

  return message.channel.send(embed);
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["si","sunucu-bilgi","sunucuistatistik","sunucu"],
  permLevel: 0
};

module.exports.help = {
  name: 'Sunucu İstatistik',
  description: 'Bulunduğunuz Sunucu hakkında bilgi verir.',
  usage: 'sunucu'
};