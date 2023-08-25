const express = require('express')
const path = require('path');

const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
// TODO: make these env vars
const PORT = 3000;
const API_ENDPOINT = 'http://localhost:3001';


app.use('/api', createProxyMiddleware({
  target: API_ENDPOINT, // replace with your API endpoint
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // remove /api prefix before forwarding the request
  },
}));


// Serve static files from the React app
app.use(express.static(path.join(__dirname, './build')));

// The "catchall" handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});