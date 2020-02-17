//https://programmers.co.kr/learn/courses/30/lessons/42862
//리팩토링 절실
#include <string>
#include <vector>

using namespace std;

int solution(int n, vector<int> lost, vector<int> reserve) {
    int answer = n;
    
    for(auto &stu: lost){
        for (int i = 0;i<reserve.size();i++){
            if (stu==reserve[i]){
                reserve[i] = -1;
                stu = -1;
                break;
            }
        }
    }
    
    for(auto &stu: lost){
        for (int i = 0;i<reserve.size();i++){
            if (stu == -1) break;
            if (stu-1 == reserve[i] || stu+1==reserve[i]){
                reserve[i] = -1;
                break;
            }
            if(i == reserve.size() - 1){
                answer--;
            }
        }
    }
    return answer;
}
