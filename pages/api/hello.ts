// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Modbus from 'modbus-serial'

const client = new Modbus();
client.connectTCP('192.168.68.128', { port: 502 })
	.then(() => {
	console.log('connected');
	})
	.catch((e) => {
	console.log(e);
	});

async function readModbusData() {
  return client.readHoldingRegisters(0, 10)
    .then((d) => {
      return d.data;
    })
    .catch((err) => {
      console.error(`Error reading holding registers: ${err}`);
    });
}
	
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
	const data = await readModbusData();
	res.status(200).send(data);
}
