/**
 * https://leetcode.com/problems/length-of-last-word/description/
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  return (s.split(' ').filter(x => x.length > 0).map(x => x.length).at(-1));
};

//use trim
//https://leetcode.com/problems/length-of-last-word/solutions/2757379/js-99-with-explanation/?languageTags=javascript
var lengthOfLastWord2 = function(s) {
  let trimmedString = s.trim();
  
  return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
};

//나랑 비슷한데 더 나은거
//https://leetcode.com/problems/length-of-last-word/solutions/2936214/javascript-one-liner/?languageTags=javascript
var lengthOfLastWord3 = function(s) {
  return s.trim().split(" ").at(-1).length;
};

//runtime, memory 보긴해야겠네..