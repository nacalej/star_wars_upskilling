const server = require('./src/server.js');
const PORT = 8003;

server.listen(PORT, () => {
    console.log(`Planets service listening on port ${PORT}`);
});