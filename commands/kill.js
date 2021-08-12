exports.run = (client, message, args) => {
    // Check the ID of the message sender. Only R4356th and GrahamSH are allowed to use this command.
    if (message.author.id === '648384681598779411' || '567320070951403531') {
        message.reply('exiting Node.JS process.').then(
            console.log('Killing myself per administrator\'s command.'));
        process.exit(0);
    }
    else {
        console.log(msg.author.id);
        message.reply('you are not authorised to use this command. Please contact R4356th or GrahamSH (depending on who is around) if you want to end this process.');
    }
}

exports.config = {
    name: 'kill'
}