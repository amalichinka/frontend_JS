function removeDuplicates(arr) {
    let uniqueIndex = 0;
    if (arr.length === 0) {
        return 0;
    }
    arr.forEach((value, i) => {
        if (i > 0 && value !== arr[uniqueIndex]) {
            uniqueIndex++;
            arr[uniqueIndex] = value;
        }
    });
    arr.forEach((_, i) => {
        if (i > uniqueIndex) {
            arr[i] = '_';
        }
    });
    return uniqueIndex + 1;
}

let nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1), nums1);

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2), nums2);