//https://programmers.co.kr/learn/courses/30/lessons/1845
function solution(nums) {
  const poketSet = [...new Set(nums)];
  if (nums.length / 2 >= poketSet.length) return poketSet.length;
  else return nums.length / 2;
}
