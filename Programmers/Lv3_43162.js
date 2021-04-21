//https://programmers.co.kr/learn/courses/30/lessons/43162
function solution(n, computers) {
    const visited = Array(n).fill(false);
    let answer = 0;
    for(let i = 0;i<n;i++){
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    return answer;
    
    function dfs(index){
        visited[index] = true;
        for(let i = 0;i<n;i++){
            if (index !== i && !visited[i] && computers[index][i] === 1)
                dfs(i);
        }
    }
}
