const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Royal Staking API is running');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
