const express = require('express');
const userRoutes = require('./routes/UserRoutes');

const app = express();
const PORT = 3000;

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
