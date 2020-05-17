//https://programmers.co.kr/learn/courses/30/lessons/17677
const solution = (str1, str2) => {
    // 각각에 대해서 두개씩 자르기
    let arr1 = [];
    let arr2 = [];
    let sliced = '';
    const letters = /^[A-Z]{2}$/;
    for(let i = 0; i < str1.length - 1 ; i++){
        sliced = str1.toUpperCase().slice(i, i+2)
        if (sliced.match(letters)) {
            arr1.push(sliced)
        }
    }
    for(let i = 0; i < str2.length - 1 ; i++){
        sliced = str2.toUpperCase().slice(i, i+2)
        if (sliced.match(letters)) {
            arr2.push(sliced)
        }
    }

    let interLength = 0;
    let unionLength = 0;

    // 두개를 비교해서 교집합, 합집합 원소 개수 찾기
    //교집합 개수: 포문을 돈다 / 되면 필터도 해본다
    let biggerArr = arr1.length >= arr2.length ? arr1 : arr2
    let smallerArr = arr1.length >= arr2.length ? arr2 : arr1
    smallerArr.forEach((element) => {
        if(biggerArr.includes(element)) {
            let index = biggerArr.indexOf(element);
            biggerArr = biggerArr.slice(0, index).concat(biggerArr.slice(index+1));
            interLength += 1;
        }
    });
    
    //합집합 개수:  각각에서 INTER가 아닌 애들만 필터링 한 뒤에 합치고 INTER를 추가
    unionLength = arr1.length + arr2.length - interLength;
    if (interLength === 0 && unionLength === 0) {
        return 1 * 65536
    }
    //교집합 개수 / 합집합 개수를 리턴한다.
    return Math.floor(interLength / unionLength * 65536);
}

test('solution', () => {
    expect(solution('FRANCE', 'french')).toBe(16384);
    expect(solution('french', 'FRANCE')).toBe(16384);
    expect(solution('handshake', 'shake hands')).toBe(65536);
    expect(solution('shake hands', 'handshake')).toBe(65536);
    expect(solution('aa1+aa2', 'AAAA12')).toBe(43690);
    expect(solution('AAAA12', 'aa1+aa2')).toBe(43690);
    expect(solution('E=M*C^2', 'e=m*c^2')).toBe(65536);
    expect(solution('e=m*c^2', 'E=M*C^2')).toBe(65536);

})
