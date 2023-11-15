const { createServer } = require('http');

const threeSecondBlockingOperation = () => {
    const start = Date.now();
    while (Date.now() < start + 3000) {}
};

const server = createServer((req, res) => {
    if (req.url === '/fast-page') {
        res.end('this is fast page');
    } else if (req.url === '/slow-page') {
        threeSecondBlockingOperation();
        res.end('this is slow page');
    }
});

server.listen(3000, () => console.log('Server is running on port 3000'));