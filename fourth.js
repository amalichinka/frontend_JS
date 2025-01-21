const removeDuplicates = (nums) => {
    if (nums.length === 0) return 0;

    let uniqueIndex = 0;

    nums.forEach((num, index) => {
        if (index === 0 || num !== nums[uniqueIndex - 1]) {
            nums[uniqueIndex] = num;
            uniqueIndex++;
        }
    });
    return uniqueIndex;
};

let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1), nums1);

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2), nums2);