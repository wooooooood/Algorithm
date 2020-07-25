//https://programmers.co.kr/learn/courses/30/lessons/12899
const solution = (n) => {
    let answer = ''

    while(n>0){
        const remain = n%3
        n = parseInt(n/3)

        if (remain === 0){
            answer = '4' + answer
            n--
        }
        else{
            answer  = remain + answer
        }
    }

    return answer;
}

test('solution', () => {
    expect(solution(1)).toBe('1');
    expect(solution(2)).toBe('2');
    expect(solution(3)).toBe('4');
    expect(solution(4)).toBe('11');
    expect(solution(5)).toBe('12');
    expect(solution(6)).toBe('14');
    expect(solution(7)).toBe('21');
    expect(solution(8)).toBe('22');
    expect(solution(9)).toBe('24');
    expect(solution(10)).toBe('41');
})
