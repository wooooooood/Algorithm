//https://programmers.co.kr/learn/courses/30/lessons/82612
function solution(price, money, count) {
  let total = 0;
  for(let i = 1;i<=count; i++) {
    total += price * i;
  }
  return total < money? 0 : total - money;
}

/*
다른 사람의 풀이
function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}
*/
