const romanToInt = (s) => {
    const romanNums = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};

    let total = 0;
    let lastValue = 0;

    [...s].forEach((char) => {
        const currentValue = romanNums[char];
        if (currentValue > lastValue) {
            total += currentValue - 2 * lastValue;
        } else {
            total += currentValue;
        }
        lastValue = currentValue;
    });
    return total;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
