//https://programmers.co.kr/learn/courses/30/lessons/12934
function solution(n) {
    if (n === 1)
        return 4;
    
    for(let i = 2;i<=n/2; i++){
        if (i*i === n){
            return (i+1)*(i+1);
        }
    }
    
    return -1;
}

/*
테스트 케이스 : n = 1, answer = 4
*/
