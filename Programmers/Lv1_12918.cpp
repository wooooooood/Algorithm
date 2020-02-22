//https://programmers.co.kr/learn/courses/30/lessons/12918
#include <string>
#include <vector>

using namespace std;

bool solution(string s) {
    bool answer = true;

    if (!(s.length() == 4 || s.length() == 6))
        answer = false;

    for (auto &ch: s){
        if (!isdigit(ch))
            answer = false;
    }
    
    return answer;
}