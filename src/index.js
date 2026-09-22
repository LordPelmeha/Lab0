function leftRiemannSum(f, a, b, n) {
    const dx = (b - a) / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += f(a + i * dx);
    }
    return sum * dx;
}

let a = parseFloat(prompt("Введите a:"));
let b = parseFloat(prompt("Введите b:"));
const n = 100000;
if (a > b) {
    [a, b] = [b, a]
}
const result = leftRiemannSum(x => x * Math.cos(x), a, b, n);
alert("Левая сумма римана x*cos(x) от " + a + " до " + b + " (n=" + n + "): " + result);
