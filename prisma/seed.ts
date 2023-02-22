import { PrismaClient } from "@prisma/client";
import {data} from "../lib/zustand";
const prisma = new PrismaClient();



async function main() {
	console.log(`Start seeding ...`);
	
	// drop all data in the database
	await prisma.$executeRawUnsafe('DELETE FROM "Param"');
	console.log("drop db")
	for (const p of data) {
		const param = await prisma.param.create({
			data: p,
		});
		console.log(`Created param with id: ${param.id}`);
	}
}

main().then(async () => {
	await prisma.$disconnect();
}).catch(async (e) => {
	console.error(e);
	await prisma.$disconnect();
	process.exit(1)
});

