  
# Products REST API

This is a simple Products REST API built with Node.js, Express, and PostgreSQL.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/products-rest-api.git
    cd products-rest-api
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up PostgreSQL database:**
   - Ensure you have PostgreSQL installed and running.
   - Create a new database:
     ```sql
     CREATE DATABASE productsdb;
     ```
   - Execute the necessary SQL commands to set up your tables. You can use a script or manually create the `productsTable` with the required fields.

4. **Configure environment variables:**
   - Create a `.env` file in the root directory and add your database connection details and other sensitive information. Example:
     ```env
     DB_USER=your_db_user
     DB_PASSWORD=your_db_password
     DB_HOST=your_db_host
     DB_PORT=your_db_port
     DB_DATABASE=productsdb
     ```

## Configuration

Ensure your `database.configure.js` file is set up to use the environment variables:
```javascript
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
});

export default pool;

