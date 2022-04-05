//https://programmers.co.kr/learn/courses/30/lessons/86051?language=javascript
function solution(numbers) {
  return numbers.reduce((previousValue, currentValue) => previousValue - currentValue, 45);
}
