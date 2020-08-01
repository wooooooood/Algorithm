//https://programmers.co.kr/learn/courses/30/lessons/42583
const solution = (bridge_length, weight, truck_weights) => {
  let queue = [];
  let truck_elapsed = [];
  let answer = 0;
  
  while (truck_weights.length > 0 || truck_elapsed.length > 0) {
    if (truck_elapsed[0] === bridge_length) {
      queue.shift();
      truck_elapsed.shift();
    }

    const sum = queue.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    if (sum + truck_weights[0] <= weight) {
      queue.push(truck_weights.shift());
      truck_elapsed.push(0);
    }

    answer++;
    truck_elapsed = truck_elapsed.map(item => item + 1);
  }

  return answer;
};

test('solution', () => {
  expect(solution(2, 10, [7, 4, 5, 6])).toEqual(8);
  expect(solution(100, 100, [10])).toEqual(101);
  expect(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toEqual(110);
})
