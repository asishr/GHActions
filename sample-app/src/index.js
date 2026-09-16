const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the GitHub Actions CI/CD sample app!' });
});

// Used by the CD workflow to verify a deployment succeeded
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', version: process.env.APP_VERSION || 'dev' });
});

/* istanbul ignore next */
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Sample app listening on port ${port}`);
  });
}

module.exports = app;
