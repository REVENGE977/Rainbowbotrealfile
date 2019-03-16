module.exports.name = "help";
module.exports.run = async (client, message) => {
    try {
        message.author.send(`**\`#set\`:
- لإنشاء رتبة الرينبو
- To create the role of the Rainbow
\`${client.config.prefix}delete\` :
- لحذف رتبة الرينبو
- To delete the role of the Rainbow
\`${client.config.prefix}setting\` :
- لمعرفة حالة الرتبة
- To see the role status
\`${client.config.prefix}inv\` :
- لدعوة البوت
- To Invite the bot

خطوات لو الرتبة م أشتغلت .!!
1- ضع رتبة الرينبو فوق الالوان أو الرتب الملونه لو فيه
2- ضع رتبة البوت فوق رتبة الرينبو
The steps of the role did not worked .!!
1 - Place the role of the Rainbow above the colors or colored ranks if it
2 - Put the bot role above the role of the Rainbow **
        
رآبط البوت - Bot Invite link
- https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=268523584&scope=bot`);
    } catch (error) {
        message.channel.send("**:x:| I can't do this because You closed the DMs - لا يمكنني فعل ذلك بسبب إغلاقك للخاص**");
    }
};