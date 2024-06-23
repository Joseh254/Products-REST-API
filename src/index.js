import express from 'express';
import productsRouter from './routes/products.route.js'

const app = express();
// **************************************************************
app.use('/products',productsRouter)
app.use(express.json());

app.listen(3000, () => {
  console.log("App running on port 3000...");
});