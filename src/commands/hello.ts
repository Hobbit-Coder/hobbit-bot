import { Message } from "discord.js";

async function HelloCommand(message: Message<boolean>) {
    await message.reply({ content: `Hola, soy un bot en desarrollo para el discord del parche berrugo. El objetivo es poder reproducir canciones y responder a mensajes.` })
}

export default HelloCommand;