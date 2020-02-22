//https://programmers.co.kr/learn/courses/30/lessons/12916
#include <string>
#include <iostream>
using namespace std;

bool solution(string s)
{
    int result = 0;
    for (const auto& alphabet: s){
        if (alphabet == 'p' || alphabet == 'P'){
            result++;
        }
        if (alphabet == 'y' || alphabet == 'Y'){
            result--;
        }
    }

    return result==0;
}
