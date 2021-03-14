//https://programmers.co.kr/learn/courses/30/lessons/68935
function solution(n) {
    const nTo3 = n.toString(3);
    const reversed3 = String(nTo3).split("").reverse().map(Number).join('');
    return (Number.parseInt(reversed3, 3))
}

/*
다른 사람의 풀이:
return parseInt([...n.toString(3)].reverse().join(""), 3);
*/
