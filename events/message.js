module.exports = (bot, message) => {
    //verify commands, and execute them
    const prefix = '!'
    if (message.author.bot || message.channel.type == 'dm') return
    if (!message.content.toLowerCase().startsWith(prefix)) return

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const exec = bot.commands.get(command) || bot.aliases.get(command)
    if (!exec) return

    try {
        exec.run(bot, message, args)
    } catch (err) {
        console.log(`Erro no comando: ${command}`)
        console.log(err)
    }
}