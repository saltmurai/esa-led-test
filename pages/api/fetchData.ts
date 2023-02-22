// fetch data from localhost:5000/esatech/data

import { NextApiRequest, NextApiResponse } from 'next'
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const fetchData = async (req: NextApiRequest, res: NextApiResponse) => {
	let json;
	try {
		json = await prisma.param.findMany({
			orderBy: { id: 'asc' }
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'error' });
	}

	res.status(200).json(json);
}

export default fetchData;