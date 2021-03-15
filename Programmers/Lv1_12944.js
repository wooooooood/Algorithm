//https://programmers.co.kr/learn/courses/30/lessons/12944?language=javascript
function solution(arr) {
    return arr.reduce((acc, cur) => (acc += cur))/arr.length;
}

/*
다른 사람의 풀이: +=를 안써도 된다
return array.reduce((a, b) => a + b) / array.length;
*/
