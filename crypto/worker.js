const {parentPort} = require('worker_threads')

const threeSecondBlockingOperation = () => {
    const start = Date.now()
    while(Date.now() < start + 3000){}
}
parentPort.postMessage(threeSecondBlockingOperation())
