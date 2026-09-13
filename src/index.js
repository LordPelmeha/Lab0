function leftRiemannSum(f, a, b, n) {
    const dx = (b - a) / n;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += f(a + i * dx);
    }
    return sum * dx;
}

const a = parseFloat(prompt("Enter a:"));
const b = parseFloat(prompt("Enter b:"));
const n = 1000;

const result = leftRiemannSum(x => x * Math.cos(x), a, b, n);
alert("Left Riemann sum of x*cos(x) from " + a + " to " + b + " (n=" + n + "): " + result);
