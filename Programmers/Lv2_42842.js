//https://programmers.co.kr/learn/courses/30/lessons/42842
const solution = (brown, yellow) => {
    for (let h = 1; h <= brown + yellow; h++) {
        for (let w = brown + yellow; w>=1;w--){
            if (h * w === brown + yellow && parseInt((w+h-2)*2) === brown){
                return [w, h];
            }
        }
    }
};

test('solution', () => {
    expect(solution(10, 2)).toEqual([4, 3]);
    expect(solution(8, 1)).toEqual([3, 3]);
    expect(solution(24, 24)).toEqual([8, 6]);
})