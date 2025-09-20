import { BaseClient, logger, getAllVersions } from '@projectdiscord/core';
import { EventInterface } from '@projectdiscord/shared';
import { ActivityType } from 'discord.js';

const readyEvent: EventInterface<'clientReady'> = {
	name: 'clientReady',
	options: { once: true, rest: false },
	execute(client: BaseClient) {
		const versions = getAllVersions();

		logger.info(`✅ Client ready as ${client.user?.tag}`);

		const formatted = Object.entries(versions)
			.map(([ws, v]) => `   • ${ws}: v${v}`)
			.join('\n');
		logger.info(`🔖 Workspace Versions:\n${formatted}`);

		client.user?.setPresence({
			status: 'online',
			activities: [
				{
					name: "ProjectDiscord's new bot template!",
					type: ActivityType.Custom,
					state: '⚡ Powered by ProjectDiscord',
				},
			],
		});
	},
};

export default readyEvent;
