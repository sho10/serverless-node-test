import express from 'express';
import 'reflect-metadata';
import path from 'path';
// @ts-ignore
import { AuthController } from './features/index.ts'
import bodyParser from 'body-parser'
import { useExpressServer } from 'routing-controllers';

import { PrismaClient } from '@prisma/client'
// import { connectToDB } from './db'
const __dirname = path.resolve()
console.log(__dirname)
const app = express();
app.use(bodyParser.json())
export const prisma = new PrismaClient()

useExpressServer(app, {
    routePrefix: '/auth',
    classTransformer: true,
    controllers: [AuthController]
});

console.log("connected to application")

app.listen(3000, "0.0.0.0");

async function main() {
    // await connectToDB()
}

main()
    .then(async () => {
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })




