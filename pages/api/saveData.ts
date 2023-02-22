import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const saveData = (req: NextApiRequest, res: NextApiResponse) => {
	const data = req.body;
	data.forEach(async (d: any) => { 
		try {
			await prisma.param.update({
				where: {
					param: d.param
				},
				data: {
					min: d.min,
					max: d.max,
					correction: d.correction
				}
			})
		}
		catch (e) {
			console.error(e);
			res.status(500).json({ message: 'error' });
		}
	})
	res.status(200).json({ message: 'success' });
}

export default saveData;