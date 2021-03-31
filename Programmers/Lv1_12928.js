//https://programmers.co.kr/learn/courses/30/lessons/12928?language=javascript
function solution(n){
  return [...Array(n+1).fill(0)].reduce(function(accumulator, currentValue, currentIndex) {
    return accumulator + (n%currentIndex === 0 ? currentIndex : 0);
  }, 0);
}

/* 다른 사람의 풀이
return n<=a/2?b:solution(n,a+1,b+=n%a?0:a);
*/
