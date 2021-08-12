const Discord = require( 'discord.js' );
const bot = new Discord.Client();

bot.on( 'ready' , () => {
  console.log( `Logged in as ${bot.user.tag}!` );
});

bot.on( 'message', msg => {
    if ( msg.content === '!info' ) {
      msg.react( '775070954954162197' );
      msg.reply( 'this is the official Snap*!* Wiki Discord server. To learn about Snap*!* Wiki, please visit https://snapwiki.miraheze.org.' );
    }
    else if( msg.content === '!incident-history' ) {
      msg.reply( 'the wiki was down for about fourteen minutes on 24th May.' );
    }
    else if( msg.content === '!status' ) {
      msg.react( '✅' );
      msg.reply( 'live uptime statistics can be found here- https://snapwiki.github.io/SnapWikiUptime/.' );
    }
    else if( msg.content === '!help' ) {
      msg.react( 'ℹ️' );
      msg.reply( 'type !help for help with my commands, !incident-history for history of incidents in the past 30 days, !source for link to my source code and !info for information about this server. There are two other hidden commands, too. 😉' );
    }
    else if( msg.content === '!kill' ) {
      // Check the ID of the message sender. Only R4356th and GrahamSH are allowed to use this command.
      if ( msg.author.id === '648384681598779411' || '567320070951403531' ) {
        msg.reply( 'exiting Node.JS process.' ).then(
          console.log( 'Killing myself per administrator\'s command.' ));
          process.exit( 0 );
      }
      else {
        console.log( msg.author.id );
        msg.reply( 'you are not authorised to use this command. Please contact R4356th or GrahamSH (depending on who is around) if you want to end this process.' );
      }}
    else if( msg.content === '!source' ) {
      msg.react( '⚒️' );
      msg.reply( 'I am fully open source and licensed under the GNU General Public License Version 3.0! My source code can be found on GitHub- https://github.com/snapwiki/bot. I am hosted on Heroku.' );
    }
  });

bot.login( process.env.DISCORD_TOKEN );
