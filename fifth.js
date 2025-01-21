function isValid(s) {
    const stack = [];
    const matchingBrackets = {
        ')':'(',
        ']':'[',
        '}':'{'
    }

    for (let char of s) {
        if (char in matchingBrackets) {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));