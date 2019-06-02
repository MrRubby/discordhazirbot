module.exports = member => {
    let username = member.user.username;
    member.send('Sunucuya Hoş Geldin!' + username ); //measjda düzenlemeler yapabilirsiniz
    member.guild.defaultChannel.send('');
};
