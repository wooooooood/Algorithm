//https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript
function solution(a, b) {
    const day = ["SUN", 'MON', "TUE", "WED", "THU", "FRI", "SAT", ]
    const index = new Date(`2016-${a}-${b}`).getDay();
    return day[index];
}
