const Discord = require('discord.js');
const fs = require('fs');
let küfürEngel = JSON.parse(fs.readFileSync("./jsonlar/küfürEngelle.json", "utf8"));

var ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);


	let args = message.content.split(' ').slice(1);
	const secenekler = args.slice(0).join(' ');

	var errembed = new Discord.RichEmbed()
	.setColor("RED")
	.setDescription(`Yanlış Kullanım!`)
	.addField(`Doğru Kullanım:`, `${ayarlar.prefix}küfürengelle aç veya kapat`)
	if(secenekler.length < 1) return message.channel.send(errembed);
  	if(secenekler.length < 1) return message.reply("Link Engelleme Açmak İçin `::küfür-engelle aç` kapatmak için `::küfür-engelle kapat`").then(m => m.delete(10000));

    message.delete();

			if (secenekler === "aç") {
		message.channel.send(`Küfür Engelleme Sistemi: **açık**!`).then(m => m.delete(5000));
		küfürEngel[message.guild.id] = {
			küfürEngel: "acik"
		  };

		  fs.writeFile("././jsonlar/küfürEngelle.json", JSON.stringify(küfürEngel), (err) => {
			if (err) console.log(err)
		  });
	};

	if (secenekler === "kapat") {
		message.channel.send(`Küfür Engelleme Sistemi: **kapalı**!`).then(m => m.delete(5000));
		küfürEngel[message.guild.id] = {
			küfürEngel: "kapali"
		  };

		fs.writeFile("./jsonlar/küfürEngelle.json", JSON.stringify(küfürEngel), (err) => {
			if (err) console.log(err)
		  });
	};
}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['küfürengel'],
		permLevel: 3
	  };

	  exports.help = {
		name: 'Küfür Engelleme',
      kategori: "admin",
		description: 'Küfür engelleme sistemini açıp kapatmanızı sağlar.',
		usage: 'x+küfür-engelle <aç> veya <kapat>'
	  };