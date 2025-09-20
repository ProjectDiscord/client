import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DiscordClient, loadCommands, loadEvents, logger } from '@projectdiscord/core';

// Resolve __dirname equivalent once
const __dirname = dirname(fileURLToPath(import.meta.url));
const basePath = path.resolve(__dirname, './');

export const client = new DiscordClient();

try {
	await Promise.all([loadEvents(client, basePath), loadCommands(client, basePath)]);

	await client.login(client.config.client.client_token);
	logger.info('✅ Client login successful');
} catch (err) {
	logger.error('❌ Failed to initialize client:', err);
	process.exit(1);
}
