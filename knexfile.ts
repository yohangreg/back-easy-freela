import type { Knex } from 'knex'
import * as dotenv from 'dotenv'
dotenv.config()

const config: Knex.Config = {
	client: 'pg',
	connection: {
		host: process.env.PGHOST,
		user: process.env.PGUSER,
		password: process.env.PGPASSWORD,
		database: process.env.PGDATABASE, 
		port: Number(process.env.PGPORT), 
	},
	migrations: {
		tableName: 'knex_migrations',
		directory: './src/database'
	},
	seeds: {
		directory: './src/seeds'
	}
}

export default config