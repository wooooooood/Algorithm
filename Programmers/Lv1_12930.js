//https://programmers.co.kr/learn/courses/30/lessons/12930
function solution(s) {
  const words = s.split(" ");
  return words.map((word) => {
    return [...word].map((char, index) => index%2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
  }).join(" ");
}

/* 다른 사람의 풀이
return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
*/
