//https://programmers.co.kr/learn/courses/30/lessons/64061
#include <string>
#include <vector>
#include <stack>
using namespace std;

int solution(vector<vector<int>> board, vector<int> moves) {
	int answer = 0;
	stack<int> s;

	for (auto& move : moves) {
		for (auto& floor : board) {
			if (floor[move-1] != 0) {
				if (s.size() > 0 && (s.top() == floor[move-1])) {
					s.pop();
					answer+=2;
				}
				else {
					s.push(floor[move-1]);
				}

				floor[move-1] = 0;
				break;
			}
		}
	}

	return answer;
}
