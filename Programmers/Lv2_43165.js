//https://programmers.co.kr/learn/courses/30/lessons/43165
function solution(numbers, target) {
    let answer = 0;
    dfs(0, 0);
    return answer;
    
    function dfs(count, sum){
        if (count === numbers.length){
            if (sum === target){
                answer++;
            }
        }
        else {
            dfs(count+1, sum+numbers[count]);
            dfs(count+1, sum-numbers[count]);
        }
    }
}

