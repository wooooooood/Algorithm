//https://programmers.co.kr/learn/courses/30/lessons/12981
const solution = (n, words) => {
  let i;
  const wordsMemo = [words[0]]

  for (i = 1;i<words.length;i++){
      // 1. 앞에서 말한걸 또 말한 경우
      if (wordsMemo.includes(words[i])){
          break;
      }
      wordsMemo.push(words[i])
      
      // 2. 앞 단어 마지막 글자랑 매치가 안되는 경우
      if (words[i-1].charAt(words[i-1].length - 1) != words[i].charAt(0)){
          break;
      }

      // 3. 다 통과한 경우
      if (i === words.length - 1){
          return [0,0]
      }
  }

  return [i%n + 1, Math.floor(i/n) + 1]
}

test('solution', () => {
  expect(solution(3, [`tank`, `kick`, `know`, `wheel`, `land`, `dream`, `mother`, `robot`, `tank`])).toEqual([3,3]);
  expect(solution(5, [`hello`, `observe`, `effect`, `take`, `either`, `recognize`, `encourage`, `ensure`, `establish`, `hang`, `gather`, `refer`, `reference`, `estimate`, `executive`])).toEqual([0,0]);
  expect(solution(2, [`hello`, `one`, `even`, `never`, `now`, `world`, `draw`])).toEqual([1,3]);
})
  