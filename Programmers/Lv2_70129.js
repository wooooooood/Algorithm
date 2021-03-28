//https://programmers.co.kr/learn/courses/30/lessons/70129?language=javascript#
function solution(s) {
  let removedZeroCount = 0;
  let triedResultCount = 0;
    
  do {
    if (s === "1")
      break;

    removedZeroCount += s.split("0").length - 1;
    s = s.split("0").join("").length.toString(2);
    triedResultCount++;
  } while (1);

  return [triedResultCount, removedZeroCount];
}

console.log(solution("110010101001"));

/* 
https://stackoverflow.com/questions/13340131/string-prototype-replaceall-not-working
JS에는 ReplaceAll이 없다? 원래는 없었나보다

다른 사람의 풀이: 정규식 사용
answer[0]++;
answer[1] += (s.match(/0/g)||[]).length;
s = s.replace(/0/g, '').length.toString(2);
*/
