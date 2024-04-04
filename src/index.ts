import Discord, { Events, GatewayIntentBits } from 'discord.js'
import 'dotenv/config'

const client = new Discord.Client({
    intents: 33539
});

client.on(Events.ClientReady, _client => {
    console.log(`${_client.user.tag} listo!`);
});

client.login(process.env.DISCORD_SECRET_KEY);

client.on(Events.MessageCreate, async message => {
    if (message.author.bot) return;

    const args = message.content.slice(1).split(' ')[0];

    try {
        const command = await import(`./commands/${args}`);
        command.default(message);
    }
    catch (error) {
        await message.reply({ content: `No es posible procesar el comando ${args}.` })
        console.error(error);
    }
});