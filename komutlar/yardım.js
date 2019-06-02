const ayarlar = require('../ayarlar.json');
const Discord = require('discord.js');

const sql = require('sql');
module.exports.run = async function(client, message, args) {
  const hexcols = [0xFFB6C1, 0x4C84C0, 0xAD1A2C, 0x20b046, 0xf2e807, 0xf207d1, 0xee8419];
  const sql = require('sqlite');
  if (message.channel.type == "dm") {
    var prefix = ayarlar.prefix;
  } else {
  }
  function eglence(msg, author) {
    msg.edit(`Tüm komutlara ulaşmak için \`+yardım full\`\n\nVeya \`+yardım [komut]\` yazarak komut hakkında bilgi alabilirsiniz.\n\n| :information_source: Bilgi | :game_die: Eğlence | :musical_note: Müzik | :tools: Yetkili |\n
:game_die: **Eğlence Komutları**\n
\`\`\`
alkış  emojiyazı   mcskin  slots  tersrenk  roblox
şifre  balık  csgo  8ball  asci  hesapla
\`\`\``).then(m => {
      m.awaitReactions((reaction, user) => user.id === author.id, {
        max: 1,
        time: 60000
      }).then(reactions => {
        if(reactions.first() == undefined) return;
        if (reactions.first().emoji.name == "🎲") {
          eglence(m, author);
        } else if (reactions.first().emoji.name == "ℹ") {
          bilgi(m, author);
        } else if (reactions.first().emoji.name == "🎵") {
          müzik(m, author);
        } else if (reactions.first().emoji.name == "🛠") {
          yetkili(m, author);
        }
      })
    });
  };

  function bilgi(msg, author) {
    msg.edit(`Tüm komutlara ulaşmak için \`+yardım full\`\n\nVeya \`+yardım [komut]\` yazarak komut hakkında bilgi alabilirsiniz.\n\n| :information_source: Bilgi | :game_die: Eğlence | :musical_note: Müzik | :tools: Yetkili |\n
:information_source: **Bilgi Komutları**\n
\`\`\`
yardım  istatistik   üyeler   üyebilgi   havadurumu
sunucu    davet    ping    yetkilerim   çeviri
\`\`\``).then(m => {
      m.awaitReactions((reaction, user) => user.id === author.id, {
        max: 1,
        time: 60000
      }).then(reactions => {
        if(reactions.first() == undefined) return;
        if (reactions.first().emoji.name == "🎲") {
          eglence(m, author);
        } else if (reactions.first().emoji.name == "ℹ") {
          bilgi(m, author);
        } else if (reactions.first().emoji.name == "🎵") {
          müzik(m, author);
        } else if (reactions.first().emoji.name == "🛠") {
          yetkili(m, author);
        }
      });
    });
  };

  function müzik(msg, author) {
    msg.edit(`Tüm komutlara ulaşmak için \`+yardım full\`\n\nVeya \`+yardım [komut]\` yazarak komut hakkında bilgi alabilirsiniz.\n\n| :information_source: Bilgi | :game_die: Eğlence | :musical_note: Müzik | :tools: Yetkili |\n
:musical_note: **Müzik Komutları**\n
\`\`\`
katıl  ayrıl   çal   durdur
duraklat   ses   geç  devamet  kuyruk  çalan
\`\`\``).then(m => {
      m.awaitReactions((reaction, user) => user.id === author.id, {
        max: 1,
        time: 60000
      }).then(reactions => {
        if(reactions.first() == undefined) return;
        if (reactions.first().emoji.name == "🎲") {
          eglence(m, author);
        } else if (reactions.first().emoji.name == "ℹ") {
          bilgi(m, author);
        } else if (reactions.first().emoji.name == "🎵") {
          müzik(m, author);
        } else if (reactions.first().emoji.name == "🛠") {
          yetkili(m, author);
        }
      });
    });
  };

  function yetkili(msg, author) {
    msg.edit(`Tüm komutlara ulaşmak için \`+yardım full\`\n\nVeya \`+yardım [komut]\` yazarak komut hakkında bilgi alabilirsiniz.\n\n| :information_source: Bilgi | :game_die: Eğlence | :musical_note: Müzik | :tools: Yetkili |\n
:tools: **Yetkili Komutları**\n
\`\`\`
ban  uyar  sustur   yaz   kilitle
temizle   yavaş-mod   otorol   rolver  clear
\`\`\``).then(m => {
      m.awaitReactions((reaction, user) => user.id === author.id, {
        max: 1,
        time: 60000
      }).then(reactions => {
        if(reactions.first() == undefined) return;
        if (reactions.first().emoji.name == "🎲") {
          eglence(m, author);
        } else if (reactions.first().emoji.name == "ℹ") {
          bilgi(m, message.author);
        } else if (reactions.first().emoji.name == "🎵") {
          müzik(m, author);
        } else if (reactions.first().emoji.name == "🛠") {
          yetkili(m, author);
        }
      });
    });
  };

  if (!args[0]) {

    message.channel.send(`Tüm komutlara ulaşmak için \`+yardım full\`\n\nVeya \`+yardım [komut]\` yazarak komut hakkında bilgi alırsınız.\n\n| :information_source: Bilgi | :game_die: Eğlence | :musical_note: Müzik | :tools: Yetkili |\n
:information_source: **Bilgi Komutları**\n
\`\`\`
yardım  istatistik   üyeler   üyebilgi   havadurumu
sunucu    davet    ping    yetkilerim   çeviri
\`\`\``).then(m => {
      m.react("\u2139");
      m.react("\uD83C\uDFB2");
      m.react("\uD83C\uDFB5");
      m.react("\uD83D\uDEE0");
      m.awaitReactions((reaction, user) => user.id === message.author.id, {
        max: 1,
        time: 60000
      }).then(reactions => {
        if(reactions.first() == undefined) return;
        if (reactions.first().emoji.name == "🎲") {
          eglence(m, message.author);
        } else if (reactions.first().emoji.name == "ℹ") {
          bilgi(m, message.author);
        } else if (reactions.first().emoji.name == "🎵") {
          müzik(m, message.author);
        } else if (reactions.first().emoji.name == "🛠") {
          yetkili(m, message.author);
        }
      });
    });

  } else {
    if(args == "full") {

    const bilgi = new Discord.RichEmbed()
    .setTitle("Bilgi Komutları")
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .addField(ayarlar.prefix + `yardım [komut]`, 'Komut hakkında bilgi alırsınız')
    .addField(ayarlar.prefix + `istatistik`, 'Bot hakkında bilgi alırsınız')
    .addField(ayarlar.prefix + `sunucu`, 'Sunucu hakkında bilgi verir')
    .addField(ayarlar.prefix + `üyebilgi <kullanıcı>`, 'Üye hakkında bilgi alırsınız')
    .addField(ayarlar.prefix + `hava <şehir>`, 'Shows you the weather forecast for the location specified')
    .addField(ayarlar.prefix + `davet`, 'Sunucunun Davet linkini oluşturur')
    .addField(ayarlar.prefix + `çeviri`, 'Çeviri yaparsınız')
    .addField(ayarlar.prefix + `ping`, 'Botun pingini öğrenirsiniz')
    message.author.send({embed: bilgi});

    const genel = new Discord.RichEmbed()
    .setTitle("Genel Komutlar")
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .addField(ayarlar.prefix + `asci`, 'Yazıyı farklı şekilde yazar.!')
    .addField(ayarlar.prefix + `csgo`, 'Csgo bilgilerinizi gösterir')
    .addField(ayarlar.prefix + `hesapla`, 'Hesap yaparsınız')
    .addField(ayarlar.prefix + `kısalt`, 'Link kısaltırsınız');
    message.author.send({embed: genel});

    const yetkili = new Discord.RichEmbed()
    .setTitle("Moderatör Komutları")
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .addField(ayarlar.prefix + `temizle <0-100>`, 'Mesaj silersiniz 0 ve 100 arasında bir değer girmeniz gerekmektedir')
    .addField(ayarlar.prefix + `ban <kullanıcı> <sebep>`, 'Kullanıcıyı sunucudan atarsınız')
    .addField(ayarlar.prefix + `uyarı <kullanıcı> <sebep>`, 'Kullanıcıya uyarıda bulunursunuz');
    message.author.send('', {embed: yetkili});

    const admin = new Discord.RichEmbed()
    .setTitle("Admin Komutları")
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .addField(ayarlar.prefix + `yaz`, 'Bota yazı yadırırsınız')
    .addField(ayarlar.prefix + `unban`, 'Ban kaldırırsınız')
    .addField(ayarlar.prefix + `kilitle`, 'Kanalı kilitlersiniz')
    .addField(ayarlar.prefix + `otorol`, 'Sunucuya giren kişilere otomatik olarak belirlediğiniz rolü verir')
    .addField(ayarlar.prefix + `yavaş-mod <0-120>`, 'Kanalı yavaş moda geçirirsiniz');
    message.author.send({embed: admin});

    const müzik = new Discord.RichEmbed()
    .setTitle('Müzik Komutları')
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .addField(ayarlar.prefix + `katıl`, 'Bulunduğunuz sesli kanala katılır')
    .addField(ayarlar.prefix + `ayrıl`, 'Sesli kanaldan ayrılır')
    .addField(ayarlar.prefix + `çal`, 'Müzik dinlersiniz')
    .addField(ayarlar.prefix + `durdur`, 'Çalan müziği durdurur')
    .addField(ayarlar.prefix + `kuyruk`, 'Şarkı kuyruğunu gösterir')
    .addField(ayarlar.prefix + `geç`, 'Bir sonraki müziğe geçer');
    message.author.send({embed: müzik});

    const eglence = new Discord.RichEmbed()
    .setTitle("Eğlence Komutları")
    .setColor(hexcols[~~(Math.random() * hexcols.length)])
    .addField(ayarlar.prefix + `sor`, 'Botla konuşursunuz')
    .addField(ayarlar.prefix + `sahtemesaj`, 'Belirlediğiniz kişi hakkında sahte mesaj gönderir')
    .addField(ayarlar.prefix + `alkış`, 'Alkış resmi gönderir')
    .addField(ayarlar.prefix + `mesajdöndür`, 'Yazdığınız yazıyı döndürür')
    .addField(ayarlar.prefix + 'emojiyazı', 'Yazdığınız yazıyı emoji şeklinde yazar')
    .addField(ayarlar.prefix + `slots`, 'Slot oyunu oynarsınız')
    .addField(ayarlar.prefix + `sigara`, 'Sigara içersiniz')
    .addField(ayarlar.prefix + `efkar`, 'Efkar mesajı gönderir')
    .addField(ayarlar.prefix + `tersrenk`, 'Avatarınızın rengini değiştirir');
    return message.author.send({embed: eglence});
    }
    let commands = args[0];
    if (client.commands.has(commands)) {
      commands = client.commands.get(commands);
      const komutbilgi = new Discord.RichEmbed()
      .setAuthor(`${message.author.username}`, message.author.avatarURL)
      .setTitle("Komut Hakkında Bilgiler")
      .setColor("BLUE")
      .setThumbnail("https://i.postimg.cc/6Q6CY3pQ/pff-xir.gif")
      .addField("**Komut İsmi**",`${commands.help.name}`)
      .addField("**Komut Açıklaması**",`${commands.help.description}`)
      .addField("**Komut Kullanımı**",`${commands.help.usage}`)
      message.channel.send(komutbilgi);
    }
  }
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help","y","h"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Yardım komutlarını görürsünüz',
  usage: 'yardım'
};