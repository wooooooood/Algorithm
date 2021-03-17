//https://programmers.co.kr/learn/courses/30/lessons/12932?language=javascript
function solution(n) {
  return Array.from(String(n), Number).reverse();
}

/* 다른 사람의 풀이
문자풀이
return (n + '').split('').reverse().map(n => parseInt(n));

숫자풀이
var arr = [];
do {
    arr.push(n%10);
    n = Math.floor(n/10);
} while (n>0);
*/
