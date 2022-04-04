//https://programmers.co.kr/learn/courses/30/lessons/12926?language=javascript
function solution(s, n) {
  const big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const little = big.toLowerCase();
  return s
    .split("")
    .map((x) => {
      if (x === " ") return " ";
      if (big.includes(x)) {
        return big.charAt((big.indexOf(x) + n) % 26);
      }

      return little.charAt((little.indexOf(x) + n) % 26);
    })
    .join("");
}

console.log(solution("B", 4));
