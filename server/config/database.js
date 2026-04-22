import pg from 'pg'
import dotenv from 'dotenv'

// Load the environment variables from the .env file
dotenv.config({ path: '../.env' })

const { Pool } = pg

const pool = new Pool({
  // Use the .env variable FIRST, but if it doesn't exist, use the fallback string
  host: process.env.PGHOST || 'your-fallback-host.render.com',
  port: process.env.PGPORT || 5432,
  user: process.env.PGUSER || 'your_db_username',
  password: process.env.PGPASSWORD || 'your_db_password',
  database: process.env.PGDATABASE || 'your_db_name',
  ssl: { 
      rejectUnauthorized: false 
  }
})

export default pool