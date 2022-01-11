const root = document.querySelector('#root');
// function delay(ms: number){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(Math.floor(Math.random() * 10 % 2) === 0){
//                 resolve(console.log('성공'));                
//             }else{
//                 reject(console.log('실패'));
//             }
//         }, (ms));
//     })
// }
// delay(3000)
// .then((resolve) => {
//     console.log(resolve);
// })
// .catch((reject) => {
//     console.log(reject);
// });
// async function main() {
//     console.log('시작');
//     try{
//         const test = await delay(3000);
//         console.log('만세');        
//     }catch{
//         console.log('ㅜㅜ');
//     }
// }
// main();
function test(x, cb) {
    cb(x);
}
function callback(x, cb) {
    setTimeout(function() {
        console.log('Term');
        cb(x + x);
    }, 1000);
}
function callback2(x, cb) {
    setTimeout(function() {
        console.log('Term');
        cb(x + x);
    }, 1000);
}
test(1, function(res1) {
    console.log(res1);
    callback(res1, function(res2) {
        console.log(res2);
        callback2(res2, function(res) {
            console.log(res);
        });
    });
});
function calculate(a, b, cb) {
    setTimeout(()=>{
        cb(a + b);
    }, 0);
}
function result(sum) {
    console.log(sum);
}
const r = calculate(10, 20, result);
const z = r;

//# sourceMappingURL=index.f19fcfcb.js.map
