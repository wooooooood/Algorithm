//https://programmers.co.kr/learn/courses/30/lessons/42576
#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

string solution(vector<string> participant, vector<string> completion) {
	sort(participant.begin(), participant.end());
	sort(completion.begin(), completion.end());

	for (size_t i = 0; i < completion.size();i++) {
		if (participant[i] != completion[i]) return participant[i];
	}

	return participant.back();
}
