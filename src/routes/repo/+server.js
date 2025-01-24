import { logger } from "$lib/server/logger.js";
import { redirect } from '@sveltejs/kit';

export function GET() {
    logger.info("Entering '/repo/+server.js'.GET");
    throw redirect(302, "https://localhost/repo");
    logger.info("Exiting '/repo/+server.js'.GET");
}
