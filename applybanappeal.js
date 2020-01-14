const Discord = require("discord.js");


    module.exports.run = async (bot, message, args) => {
      
      if(message.channel.id === ('625756142508703744')) return message.channel.send ('Hey can you use the correct channel?').then(m => {m.delete(120000)});
      
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()

  .setTitle("**__BCDOJRP Ban Appeal Application__**")
  .setFooter("Made by: A9 Developers")
  .setThumbnail("https://m.media-amazon.com/images/S/aplus-media/vc/dbc1c785-96ff-4e48-97bd-9671fb97648e._SL300__.png")
  .setTimestamp()
  .addField("Ban Appeal Application",
    "https://bcdojrp.net/forums/index.php?forums/ban-appeal.17/")

  message.channel.send(botembed);
}

module.exports.help = {
  name:"applybanappeal"
} 