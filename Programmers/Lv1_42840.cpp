//https://programmers.co.kr/learn/courses/30/lessons/42840
#include <string>
#include <vector>

using namespace std;
vector<int> first = {1, 2, 3, 4, 5};
vector<int> second = {2, 1, 2, 3, 2, 4, 2, 5};
vector<int> third = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};

vector<int> solution(vector<int> answers) {
    vector<int> answer = {0,0,0};
    int max = 0;
    vector<int> result;
    for(size_t i = 0;i<answers.size();i++){
        if (first[i%first.size()] == answers[i]){
            answer[0]++;
        }
        if (second[i%second.size()] == answers[i]){
            answer[1]++;
        }
        if (third[i%third.size()] == answers[i]){
            answer[2]++;
        }
        
        max = answer[0]>answer[1]? (answer[0]>answer[2]?answer[0]:answer[2]):(answer[1]>answer[2]?answer[1]:answer[2]);
    }
    
    for (size_t i = 1;i<4;i++){
        if (answer[i-1] == max) result.push_back(i);
    }
    
    return result;
}
