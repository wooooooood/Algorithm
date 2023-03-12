/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * nums를 정렬한 뒤 길이를 반환해야함 output이 나오는 방식은 이해가 안되긴함..
 */
var removeElement = function(nums, val) {
  let resultK = 0;
  for (let i = 0; i< nums.length; i++){
      if (nums[i] === val){
          nums.splice(i,1);
          i--;
      }
      else {
          resultK++;
      }
  }
  return resultK;
};

//마음에 들었던 solution
var removeElement2 = function(nums, val) {
  while(nums.indexOf(val) !== -1) {
      nums.splice(nums.indexOf(val), 1)
  }
  return nums.length;
};

//notice
//nums.length = 0; 를 하면 nums 배열이 리셋되네
