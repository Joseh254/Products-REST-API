import pkg from 'pg';
import { config } from 'dotenv';
const { Pool } = pkg;
config()
const pool = new Pool({
  user: process.env.PG_USER,
  password:  process.env.PG_PASSWORD,
  host:  process.env.PG_HOST,
  port:  process.env.PG_PORT,
  database:  process.env.PG_DATABASE
});

export default pool;