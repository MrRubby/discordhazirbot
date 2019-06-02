const Discord = require('discord.js') 
exports.run = (client, message, args) => {


  var user = message.mentions.users.first() || message.author;
        
        if (!user.presence.game.name === 'Spotify' && user.presence.game.type === 2){ 
            
            return message.channel.send("Hey Adamım.")};
    
    if (user.presence.game.name === 'Spotify' && user.presence.game.type === 2) {
        try {
            var trackImg = user.presence.game.assets.largeImageURL;
            var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            var trackName = user.presence.game.details;
            var trackAlbum = user.presence.game.assets.largeText;
            var trackAuthor = user.presence.game.state;

            const embed = new Discord.RichEmbed()
                .setAuthor('Spotify şarkı Bilgi')
                .setColor('FF0000')
                .setThumbnail(trackImg)
                .setDescription(`
\`🎵\` **Şarkı Adı :**  \`${trackName}\`
\`📀\` **Album :**  \`${trackAlbum}\`
\`🎤\` **Yazar(lar) :**  \`${trackAuthor}\`
`)
                .addField('Dinlenen Şarkı :', `[${trackUrl}](${trackUrl})`, false);

            return message.channel.send(embed);
   

        } catch (error) {
            return message.channel.send(`\`[ERROR ❌]\`, ${user.username} Rapor Verilemedi Çünkü : ${error}`);
        }

    } 
    
       
   
    
    else {
        return message.channel.send(`${user.username} Kullanımı spotify`);
    }
  };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['spotifyaç','spotify'],
  permLevel: 0
};

exports.help = {
  name: 'Spotify',
  description: 'spotify tracker XİR ',
  usage: 'spotify'
};