//2018 KAKAO BLIND RECRUITMENT 3차 1번 https://tech.kakao.com/2017/11/14/kakao-blind-recruitment-round-3/
//30min
//https://programmers.co.kr/learn/courses/30/lessons/17687
function solution(n, t, m, p) {
  var totalString = "0";
  var result = "";
  const limit = m * (t - 1) + p;
  let i = 0;
  while (totalString.length < limit + 1) {
    i++;
    totalString += numberToN(i, n).toString();
  }

  for (let j = p - 1; j < limit; j += m) {
    result += totalString[j];
  }

  return result;
}

function numberToN(num, n) {
  return Number(num).toString(n).toUpperCase();
}

/*
다른사람의 풀이
solution(2, 4, 2, 1)
function solution(n, t, m, p) {
  var tubeT = Array.apply(null,Array(t)).map((a,i)=>i*m+p-1);  //0,2,4,8: 총 string에서 몇 번째(a번째) 숫자를 튜브가 말할지
  var line = '';
  var max = m*t + p;
  for (var i =0;line.length <= max; i++) {
      line += i.toString(n);
  }
  return tubeT.map(a=>line[a]).join('').toUpperCase();  //tubeT.map(a=>line[a])으로 line의 a번째 숫자를 추출
}
*/
