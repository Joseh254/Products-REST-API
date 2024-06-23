import express from 'express';
import productsRouter from './routes/products.route.js'
import bodyParser from 'body-parser';

const app = express();
// **************************************************************
app.use(bodyParser.json());
// i used body parser since the response . "body was not automatically detected by vscode and this resulted to a bug in the project"
app.use('/products',productsRouter)



app.listen(3000, () => {
  console.log("App running on port 3000...");
});