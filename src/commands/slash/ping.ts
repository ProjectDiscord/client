import { SlashCommandInterface } from '@projectdiscord/shared';
import { DiscordClient } from '@projectdiscord/core';
import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

const command: SlashCommandInterface = {
	cooldown: 2,
	isDeveloperOnly: false,
	data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
	async execute(client: DiscordClient, interaction: ChatInputCommandInteraction) {
		await interaction.reply({ content: '🏓 Pong!', flags: ['Ephemeral'] });
	},
};

export default command;
