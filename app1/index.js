const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.status(200).json({info:"hello from app1"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})