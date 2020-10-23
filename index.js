require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/product', productRouter);
app.use('/', userRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server starting on port ${port}`);
});