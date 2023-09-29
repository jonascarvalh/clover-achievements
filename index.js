// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

// Load environment from .env
dotenv.config();
const TOKEN = process.env.DISCORD_TOKEN;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(TOKEN);