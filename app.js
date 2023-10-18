require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./route/router');
const PORT = process.env.PORT || 8003;



mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Database");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Port Running on ${PORT}`);
});
