/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let resultArr = [];
  nums.map((val, index) => {
    if (index === 0) resultArr.push(val);
    else{
      resultArr.push(resultArr[index-1]+val);
    }
  });

  return resultArr;
};