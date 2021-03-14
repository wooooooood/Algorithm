//https://programmers.co.kr/learn/courses/30/lessons/70128?language=javascript
function solution(a, b) {
    return a.map((value, index) => {
    return value * b[index];
  }).reduce((acc, currentValue) => {
    return acc + currentValue
  })
}

/*
처음에 reduce를 사용하려 했지만 실패함. 다른 사람의 풀이 첨부.
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
*/
