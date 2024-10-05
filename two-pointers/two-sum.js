/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let diffMap = {}
    for(let i = 0; i <= nums.length-1; i++){
        const diff = target - nums[i]
        if(diffMap.hasOwnProperty(diff))
            return [diffMap[diff], i]
        diffMap[nums[i]] = i
    }
};