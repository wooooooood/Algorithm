//initial solve
/**
 * @param {number[]} nums
 * @return {number}
 * O(n) Time, O(1) Space = Linear time, Constant space
 */
var majorityElement = function(nums) {
    let arr = {};
    for(let i = 0; i< nums.length; i++){
        if (arr.hasOwnProperty(nums[i])){
            arr[nums[i]] ++;
        } else {
            arr[[nums[i]]] = 1;
        }
    }

    return Object.keys(arr).find(x => arr[x] === Math.max(...Object.values(arr)));
};

//Boyer-Moore’s Voting Algorithm
//https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm
var majorityElement = function(nums) {
    // Initialize sol and cnt to store the solution and its frequency for respective iterations...
    let sol = 0, cnt = 0;
    // For every element i in the array...
    for(let i = 0; i < nums.length; i++ ) {
        // If cnt is equal to zero, update sol as sol = i
        if(cnt == 0){
            sol = nums[i];
            cnt = 1;
        }
        // If i is equal to candidate, increment cnt...
        else if(sol == nums[i]){
            cnt++;
        }
        // Otherwise, decrement cnt...
        else{
            cnt--;
        }
    }
    // Return & print the solution...
    return sol;
};
