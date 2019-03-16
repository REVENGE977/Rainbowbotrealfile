module.exports.name = "set";
module.exports.run = async (client, message) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
        message.reply("**:x: You do not have permissions - ليس لديك صلاحيات**");
        return [];
    }
    if (message.guild.roles.find(role => role.name == "RainbowRole .")) {
        message.channel.send("**:x:| I can't create the role because the role already exists - لا يمكنني إنشاء الرتبة بسبب تواجد الرتبة بالفعل **");
        return [];
    }
    try {
        var role;
        message.guild.createRole({
            name: "RainbowRole .",
            color: "RANDOM"
        }).then(role1 => {
            role = role1;
        });
        message.channel.send("**:white_check_mark:| Role created successfully - تم إنشاء الرتبة بنجاح**");
    } catch (error) {
        message.reply("**:x: I do not have permissions - ليس لدي صلاحيات**");
        return [];
    }
    var interval = setInterval(() => {
        if (role) {
            role.edit({
                color: "RANDOM"
            });
            return [];
        }
        clearInterval(interval);
    }, 8000);
};