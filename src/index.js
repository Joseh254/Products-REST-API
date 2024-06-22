import express, { request, response } from 'express';
import products from './data.js';

const app = express();
// **************************************************************


app.listen(3000, () => {
  console.log("App running on port 3000...");
});