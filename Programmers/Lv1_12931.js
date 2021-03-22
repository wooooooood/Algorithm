//https://programmers.co.kr/learn/courses/30/lessons/12931
function solution(n)
{
  return n
      .toString()
      .split("")
      .map((item) => parseInt(item, 10))
      .reduce((acc, value) => acc + value);
}

/* 다른 사람의 풀이
return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
*/
