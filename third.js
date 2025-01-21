function romanToInt(line) {
    const romanNums = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let finalValue = 0;

    for (let char of line) {
        const currentValue = romanNums[char];
        const nextValue = romanNums[line[line.indexOf(char) + 1]];

        if (nextValue > currentValue) {
            finalValue -= currentValue;
        } else {
            finalValue += currentValue;
        }
    }
    return finalValue;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
