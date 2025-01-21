function isValid(s) {
    const stack = [];

    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    [...s].forEach(char => {
        if (matchingBrackets[char]) {
            if (stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    });
    return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));