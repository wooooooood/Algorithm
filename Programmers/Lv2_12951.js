//https://programmers.co.kr/learn/courses/30/lessons/12951
function solution(s) {
    return s.toLowerCase().split(' ').map(word => (word === '')? '' : word[0].match(/[a-z]/i) ? word[0].toUpperCase() + word.slice(1) : word ).join(' ');
}
