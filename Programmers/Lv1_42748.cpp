//https://programmers.co.kr/learn/courses/30/lessons/42748
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands) {
	vector<int> answers;

	for (auto& command : commands) {
		vector<int> answer = vector<int>(array.begin() + command[0] - 1, array.begin() + command[1]);
		sort(answer.begin(), answer.end());
		answers.push_back(answer[command[2] - 1]);
	}

	return answers;
}
