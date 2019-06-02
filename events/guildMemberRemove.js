module.exports = member => {
    let guild = member.guild;
    member.send('Sunucudan Ayrıldı!');// mesajda düzenlemeler yapabilirsiniz
    guild.defaultChannel.send(``);
  };
  