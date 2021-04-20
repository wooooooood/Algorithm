//https://programmers.co.kr/learn/courses/30/lessons/12933
function solution(n) {
    return parseInt(n.toString().split('').sort().reverse().join(''));
}

//다른 사람의 풀이: return +newArr;
