function isPalindromeNumber(number) {
    if (number < 0) {
        return false;
    }
    const numberAsString = number.toString();

    function checkPalindrome(index) {
        if (index >= numberAsString.length / 2) {
            return true;
        }
        if (numberAsString[index] !== numberAsString[numberAsString.length - 1 - index]) {
            return false;
        }
        return checkPalindrome(index + 1);
    }

    return checkPalindrome(0);
}

console.log(isPalindromeNumber(121));
console.log(isPalindromeNumber(-121));
console.log(isPalindromeNumber(10));
