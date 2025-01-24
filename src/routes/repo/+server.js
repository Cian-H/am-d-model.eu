import { redirect } from '@sveltejs/kit';

export function GET() {
    console.log("Entering '/repo/+server.js'.GET");
    throw redirect(302, "https://localhost/repo");
    console.log("Exiting '/repo/+server.js'.GET");
}
