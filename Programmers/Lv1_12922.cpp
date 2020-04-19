//https://programmers.co.kr/learn/courses/30/lessons/12922
#include <string>
#include <vector>

using namespace std;

string solution(int n) {
    string answer = "";
    int i = 0;
    while(i<n){
        if (i%2 == 0) answer+= "수";
        else answer+= "박";
        i++;
    }
    return answer;
}
