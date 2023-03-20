
// with for loop

var n1 = 0, n2 = 1, next_num, i;
var num = 10;
var fib = [];
for (i = 1; i <= num; i++) {
    fib.push(n1);
    next_num = n1 + n2;
    n1 = n2;
    n2 = next_num;
}
console.log(fib);

// with while loop
let fibonacci = [0, 1];
let i1 = 2;
while (i1 < 10) {
    fibonacci[i1] = fibonacci[i1 - 2] + fibonacci[i1 - 1];
    i1++;
}
console.log(fibonacci); 
