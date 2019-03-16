module.exports.name = "inv";
module.exports.run = async (client, message) => {
    message.author.send(`رآبط البوت - Bot Invite link
- https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=268523584&scope=bot`);
};