//https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript
//5 min
function solution(numbers) {
    var answer = [];
    for (let i = 0;i<numbers.length - 1; i++){
        for (let j = i+1; j<numbers.length; j++){
            answer.push(numbers[i]+numbers[j]);
        }
    }
    return answer.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a-b);
}

function OtherSolution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}

