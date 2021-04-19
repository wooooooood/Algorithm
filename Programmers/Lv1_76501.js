//https://programmers.co.kr/learn/courses/30/lessons/76501?language=javascript
function solution(absolutes, signs) {
  return absolutes.reduce((acc, current, index) => {
    if (signs[index]) {
      return acc + current;
    } else {
      return acc - current;
    }
  }, 0);
}

/* 다른 사람의 풀이
1. foreach
2. return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
*/
