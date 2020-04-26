//https://programmers.co.kr/learn/courses/30/lessons/42586
#include <string>
#include <vector>
#include <queue>

using namespace std;

vector<int> GetNeededDays(vector<int> progresses, vector<int> speeds){
    int days = progresses.size();
    vector<int> answer;
    for (int i = 0;i<days;i++){
        answer.push_back((100-progresses[i])/speeds[i]);
        if ((100-progresses[i])%speeds[i] != 0) answer[i]++;
    }
    
    return answer;
}

vector<int> solution(vector<int> progresses, vector<int> speeds) {
    vector<int> answer;
    vector<int> neededDays = GetNeededDays(progresses, speeds);
    
    queue<int> q;
    int subAnswer = 1;
    q.push(neededDays[0]);
    for (int i = 1;i<neededDays.size();i++){
        if (neededDays[i]>q.front()){
            answer.push_back(subAnswer);
            q = queue<int>();            
            q.push(neededDays[i]);
            subAnswer = 1;
        }
        else{
            subAnswer ++;
        }
        
        if (i+1==neededDays.size()){
            answer.push_back(subAnswer);
        }
    }
    return answer;
}

