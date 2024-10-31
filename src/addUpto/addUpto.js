function addNumbersUpto (n) {
    let sum = 0;
    for(i=0;i<=n;i++) {
        sum +=i
    }
    console.log("sum",sum);
}


var t1 = performance.now()
addNumbersUpto(1000000000)
var t2 = performance.now()
console.log(`execution took ${(t2-t1)/1000} seconds`)