module.exports.name = "setting";
module.exports.run = async (client, message) => {
    var role = message.guild.roles.find(role => role.name == "RainbowRole .");
    var status = role ? "ON" : "OFF";
    var emoji = role ? ":white_check_mark:": ":x:";
    message.channel.send(`** ${emoji}| حالة الرتبة : ${status} **`);
};