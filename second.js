function twoSum(nums, target) {
    let result = [];

    nums.forEach((num, i) => {
        nums.forEach((otherNum, j) => {
            if (i !== j && num + otherNum === target) {
                result = [i, j];
            }
        });
    });
    return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
