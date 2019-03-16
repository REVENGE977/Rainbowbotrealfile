module.exports.name = "delete";
module.exports.run = async (client, message) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
        message.reply("**:x: You do not have permissions - ليس لديك صلاحيات**");
        return [];
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
        message.reply("**:x: I do not have permissions - ليس لدي صلاحيات**");
        return [];
    }
    var role = message.guild.roles.find(role => role.name == "RainbowRole .");
    if (role) {
        role.delete();
    }
    message.channel.send("**:white_check_mark:| Role deleted successfully - تم حذف الرتبة بنجاح**");
};