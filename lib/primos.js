// primos.js

export function esPrimo(n) {
    if (n<2) return false // 0, 1 y negativos no son primos

    for (let i=2; i<= Math.sqrt(n); i++) {
        if (n % i === 0 ) return false;
    }
    return true;
}