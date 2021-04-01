//https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript
function solution(x) {
    const sum = x.toString().split("").map(x => +x).reduce((acc, cur) => acc+cur)
    return x%sum === 0;
}

/* 다른 사람의 풀이
return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
*/
