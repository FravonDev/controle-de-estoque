import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm";

// Mesmo definindo a porta como number no arquivo de env, ele vira string
// podemos resolver transformando em number ou undefined
const port = process.env.DB_PORT  as number | undefined

// configurar as informações do banco de dados do datasource
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
})