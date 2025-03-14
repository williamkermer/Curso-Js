const nums1 = [1,2,3]
const nums2 = [4,5,6]
// const a3 = nums1.concat(nums2, [7,8,9], 'Will');
const a3 = [...nums1, ...nums2, ...[7, 8, 9], 'Will'];

console.log(a3);