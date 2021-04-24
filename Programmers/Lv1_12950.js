//https://programmers.co.kr/learn/courses/30/lessons/12950
function solution(arr1, arr2) {
    return arr1.map((item, index) =>{
        let newArr = [];
        for (let i = 0;i<item.length;i++){
            newArr.push(item[i] + arr2[index][i])
        }
        return newArr;
    });
}
/* 다른 사람의 풀이
return A.map((a,i) => a.map((b, j) => b + B[i][j]));
*/
