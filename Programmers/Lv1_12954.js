//https://programmers.co.kr/learn/courses/30/lessons/12954
function solution(x, n) {
    var answer = [];
    for (let i = 1;i<=n;i++){
        answer.push(x*i);
    }
    return answer;
}

/* 다른 사람의 풀이
1
return Array(n).fill(x).map((v, i) => (i + 1) * v)

2 keys() 메서드는 배열의 각 인덱스를 키 값으로 가지는 새로운 Array Iterator 객체를 반환
return [...Array(n).keys()].map(v => (v + 1) * x);
*/
