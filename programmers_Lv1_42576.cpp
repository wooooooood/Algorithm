//https://programmers.co.kr/learn/courses/30/lessons/42576
#include <iostream>
#include <vector>
#include <map>
using namespace std;

string solution(vector<string> participant, vector<string> completion) {
	map<string, int> participantFlag;
	map<string, int> completionFlag;
	for (auto const& x : participant) { participantFlag[x] = 0; }
	for (auto const& x : completion) { completionFlag[x] = 0; }

	for (size_t i = 0; i < participant.size(); i++)
		participantFlag[participant[i]]++;

	for (size_t i = 0; i < completion.size(); i++) 
		completionFlag[completion[i]]++;

	for (const auto& p : participantFlag)
		if ((completionFlag.count(p.first) == 0) || (p.second != completionFlag[p.first])) return p.first;
}
