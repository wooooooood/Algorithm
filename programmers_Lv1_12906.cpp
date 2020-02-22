//https://programmers.co.kr/learn/courses/30/lessons/12906
#include <vector>
#include <iostream>
using namespace std;

vector<int> solution(vector<int> arr) 
{
    vector<int> answer;
    
    for (size_t i = 0;i<arr.size()-1;i++){
        if (i == 0) answer.push_back(arr[i]);
        if (arr[i] != arr[i+1]) answer.push_back(arr[i+1]);
    }

    return answer;
}
