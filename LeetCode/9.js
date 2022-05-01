//https://leetcode.com/problems/palindrome-number/
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    
    const str = x.toString();
    const xLen = str.length;
    for(let i = 0; i<=xLen/2; i++){
        if (str[i] != str[xLen-i-1])
            return false;
    }
    
    return true;
};

//input을 뒤집어서 기존 input에서 빼서 계산하는 방식
//https://leetcode.com/problems/palindrome-number/discuss/1994406/JavaScript-Easy-Solution
