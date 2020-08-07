const nums = [1, 20, -2, -6, -7, 3, 4, 5, 6];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i] > 6 ) {
        break;
    }
}
for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0){
        continue;
    }
}