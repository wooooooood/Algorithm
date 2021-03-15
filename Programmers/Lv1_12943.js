//https://programmers.co.kr/learn/courses/30/lessons/12943
function solution(num) {
    for(let answer = 0; answer<500; answer++){
        if (num === 1)
            return answer;
        
        if (num%2 === 0){
            num/=2;
        }
        else {
            num = num*3 + 1;
        }
    }
    return -1;
}

/*
다른 사람의 풀이
const solution = (num) => collatzGuessCount(num, 0);
const collatzGuessCount = (num, acc) => 
  (num === 1) ? ((acc > 500) ? -1 : acc) : collatzGuessCount(processCollatz(num), acc + 1);
const processCollatz = (num) => (num % 2 === 0) ? (num / 2) : (num * 3 + 1);
*/
