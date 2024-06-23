  
# Products REST API

This is a simple Products REST API built with Node.js, Express, and PostgreSQL.

## Table of Contents
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)


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
```  
## USAGE  
Run the command below to start your server
```
npm start:watch

```  
Server should now be running on http://localhost:3000.  

# API Endpoints  
## Get All Products  
use URL: localhost:3000/products  
Method: GET in insomnia to get all products  
 

##  Create a Product
use URL: localhost:3000/products  
Method: POST and provide your data to create a product.  
Ensure to include everything in the fields else it will throw an error  

## Update a Product
use URL: localhost:3000/products/3  
Method: PATCH to update the product.  
choose any id of existing data in the table  

## Delete a Product
use URL: localhost:3000/products/3 
Method: DELETE to delete a product of your choice 

## get products with offer 
use URL: http://localhost:3000/products/offer/true  
Method: GET  to get products with offer  

## get products without offer  

use URL: http://localhost:3000/products/offer/false  
Method: GET  to get products without offer  

## Contributing
Fork the repository  
Create your feature branch (git checkout -b feature/AmazingFeature)  
Commit your changes (git commit -m 'Add some AmazingFeature')  
Push to the branch (git push origin feature/AmazingFeature)  
Open a pull request  

*By joseph Mbugua  &copy; all rights reserved*



