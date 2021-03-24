//https://programmers.co.kr/learn/courses/30/lessons/12948
function solution(phone_number) {
    return phone_number.split('').map((number, index) => index > phone_number.length - 5? number : '*').join('');
}

/* 다른 사람의 풀이
1. 정규식
return s.replace(/\d(?=\d{4})/g, "*");

2. slice에서 -를 사용
return "*".repeat(s.length - 4) + s.slice(-4);
*/
