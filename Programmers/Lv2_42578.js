//https://programmers.co.kr/learn/courses/30/lessons/42578
const solution = (clothes) => {
  let answer = 1;
  const clotheDictionary = {};

  clothes.forEach(item => {
    if (clotheDictionary.hasOwnProperty(item[1])) {
      clotheDictionary[item[1]]++;
    } else {
      clotheDictionary[item[1]] = 1;
    }
  });

  Object.keys(clotheDictionary).forEach(function(key) {
    answer *= clotheDictionary[key]+1
  });

  return answer - 1
}

test('solution', () => {
  expect(solution([['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face']])).toBe(3);
  expect(solution([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']])).toBe(5);
})
