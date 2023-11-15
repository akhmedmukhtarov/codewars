const fs = require('fs');
console.log('START');
setTimeout(() => {
    process.nextTick(()=> console.log('after set1'))
    console.log('setTimeout 1')   
}, 0);             /*A*/
setImmediate(() => console.log('setImmidiate'));              /*B*/
fs.readFile(__filename, () => {                               /*C*/
    setTimeout(() => console.log('readFile setTimeout'), 0);  /*D*/
    setImmediate(() => console.log('readFile setImmediate')); /*E*/
    process.nextTick(() => console.log('readFile Next Tick'));/*F*/
});
Promise.resolve().then(() => {                                /*G*/
    console.log('Promise');
    process.nextTick(() => console.log('Promise Next Tick')); /*H*/
});
Promise.resolve().then(() => {                                /*I*/
    console.log('Promise2');
    process.nextTick(() => console.log('Promise Next Tick')); /*J*/
});
process.nextTick(() => {                                      /*K*/    
    console.log('Next Tick');
});
setTimeout(() => {                                            /*L*/
    console.log('setTimeout 2');
}, 0);
console.log('END');

// let start = Date.now();

// async function loop3() {
//     console.time('3')
//     while ((Date.now() - start) < 3000) {
//         console.log('iteration'); //while the difference between Date.now() and start is less than 3 seconds
//     }
//     console.log('loop 3');
//     console.timeEnd('3')
// }

// async function loop5() {
//     console.time('5')
//     while ((Date.now() - start) < 5000) { //while the difference between Date.now() and start is less than 3 seconds
//     }
//     console.log('loop 5');
//     // console.log('Loop end '+num);
//     console.timeEnd('5')
// }

// setTimeout(()=>{
//     console.log('settimeout1');
// },1000)

// setTimeout(()=>{
//     console.log('settimeout2');
// },1000)

// setTimeout(()=>{
//     console.log('settimeout3');
// },1000)
// Promise.resolve().then(()=>{
//     loop5()
// })
// Promise.resolve().then(()=>{
//     loop3()
// })
