//https://programmers.co.kr/learn/courses/30/lessons/12909
function solution(s) {
  const len = s.length;
  let check = 0;
  for (let i = 0; i < len; i++) {
    const target = s[i];
    if (target === "(") {
      check += 1;
    } else {
      if (check === 0) return false;
      if (check > 0) {
        check -= 1;
      }
    }
  }

  return check === 0;
}

//자료구조는 스택이지만 17번 테케와 효율성2번에서 오류남
//스택을 쓰지 않고도 풀 수 있는 문제였음
