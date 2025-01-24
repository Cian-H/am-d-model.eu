import { logger } from "$lib/server/logger.js";
import { redirect } from '@sveltejs/kit';

export function GET() {
    logger.debug("Entering '/repo/+server.js'.GET");
    throw redirect(302, "https://localhost/repo");
    logger.debug("Exiting '/repo/+server.js'.GET");
}
