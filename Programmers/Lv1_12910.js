//https://programmers.co.kr/learn/courses/30/lessons/12910
function solution(arr, divisor) {
  const answer = arr.filter((item) => item%divisor === 0).sort((a, b) =>  a - b);
  return answer.length === 0 ? [-1] : answer;
}

/* 다른 사람의 풀이
return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b); //sort를 나중에 하는 방법
*/
