const {Worker} = require('worker_threads')

console.time('done after')
for(let i = 0; i < 4; i++){
    const worker = new Worker('./crypto/worker.js')
    worker.on('message',()=> console.timeLog('done after'))
}