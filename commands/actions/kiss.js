const Discord = require('discord.js');
const nekoslife = require('nekos.life');
const neko = new nekoslife();

module.exports.run = async (bot, message, transsv, nickcmds, db) => {
    message.delete()
        .catch(err => {
            console.log(err)
        });
    var nekoimg = await neko.sfw.kiss()
    if (!message.content.split(" ")[1]) {
        let embed = new Discord.RichEmbed()
            .setDescription(`${transsv.kiss.nope1} <@${message.author.id}>, ${transsv.kiss.nope2}`)
            .setColor(bot.color);
        message.channel.send(embed);
    }
    else {
        if (message.mentions.users.first()) {
            if (message.author.id != message.mentions.users.first().id) {
                if (message.mentions.users.first().id == bot.user.id) {
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${transsv.kiss.nope1} <@${message.author.id}>, ${transsv.kiss.nope4}`)
                        .setColor(bot.color);
                    message.channel.send(embed);
                }
                else if (message.mentions.users.first().id == bot.ownerid) {
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${transsv.kiss.nope3} <@${message.author.id}>, ${transsv.kiss.nope4}`)
                        .setColor(bot.color);
                    message.channel.send(embed);
                }
                else {
                    let embed = new Discord.RichEmbed()
                        .setDescription(`<@${message.author.id}> ${transsv.kiss.kissedto} <@${message.mentions.users.first().id}>`)
                        .setImage(nekoimg.url)
                        .setColor(bot.color);
                    message.channel.send(embed);
                }
            }
            else {
                let embed = new Discord.RichEmbed()
                    .setDescription(`${transsv.slap.automen} <@${message.author.id}>`)
                    .setColor(bot.color);
                message.channel.send(embed);
            }
        }
        else {
            if (Number.isInteger(Number(message.content.split(" ")[1])) && message.content.split(" ")[1].length == 18) {
                if (message.content.split(" ")[1] != message.author.id) {
                    bot.fetchUser(message.content.split(" ")[1])
                        .then(u => {
                            if (u.id == bot.user.id) {
                                let embed = new Discord.RichEmbed()
                                    .setDescription(`${transsv.kiss.nope1} <@${message.author.id}>, ${transsv.kiss.nope4}`)
                                    .setColor(bot.color);
                                message.channel.send(embed);
                            }
                            else if (u.id == bot.ownerid) {
                                let embed = new Discord.RichEmbed()
                                    .setDescription(`${transsv.kiss.nope3} <@${message.author.id}>, ${transsv.kiss.nope4}`)
                                    .setColor(bot.color);
                                message.channel.send(embed);
                            }
                            else {
                                let embed = new Discord.RichEmbed()
                                    .setDescription(`<@${message.author.id}> ${transsv.kiss.kissedto} <@${u.id}>`)
                                    .setImage(nekoimg.url)
                                    .setColor(bot.color);
                                message.channel.send(embed);
                            }
                        })
                        .catch(e => {
                            // console.log("Usuario no encontrado")
                            let embed = new Discord.RichEmbed()
                                .setDescription(transsv.nani)
                                .setColor(bot.color);
                            message.channel.send(embed)
                        })
                }
                else {
                    let embed = new Discord.RichEmbed()
                        .setDescription(`${transsv.kiss.autoid} <@${message.author.id}>`)
                        .setColor(bot.color);
                    message.channel.send(embed);
                }
            }
            else {
                let embed = new Discord.RichEmbed()
                    .setDescription(`<@${message.author.id}> ${transsv.kiss.kiss} **${message.content.split(" ").slice(1).join(" ")}**`)
                    .setImage(nekoimg.url)
                    .setColor(bot.color);
                message.channel.send(embed);
            }
        }
    }
}

module.exports.data = {
    module: "actions",
    name: "kiss"
}

module.exports.help = async (bot, message, transsv, nickcmds, db) => {
    let embed = new Discord.RichEmbed()
        .setTitle(transsv.kiss.help.title)
        .setDescription(transsv.slap.help.description)
        .addField(transsv.use, "```" + transsv.kiss.help.use + "```")
        .setFooter(transsv.helpfooter, message.author.displayAvatarURL)
        .setColor(bot.color);
    message.channel.send(embed)
}