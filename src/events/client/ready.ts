import { BaseClient, logger } from '@projectdiscord/core';
import { EventInterface } from '@projectdiscord/shared';
import { ActivityType } from 'discord.js';

const readyEvent: EventInterface<'clientReady'> = {
	name: 'clientReady',
	options: { once: true, rest: false },
	execute(client: BaseClient) {
		logger.info(`[READY] Logged in as ${client.user?.tag}`);

		client.user?.setPresence({
			status: 'online',
			activities: [{ name: 'ProjectDiscord', type: ActivityType.Custom, state: "ProjectDiscord's new bot template!" }], // 0 = Playing
		});
	},
};

export default readyEvent;
