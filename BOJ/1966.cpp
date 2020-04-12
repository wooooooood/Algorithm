//https://www.acmicpc.net/problem/1966
#include <string>
#include <queue>
#include <vector>
#include <iostream>
using namespace std;

int solution(vector<int> priorities, int location) {
	int answer = 0;
	priority_queue<int> pq;
	queue<pair<int, int>> q;

	for (int i = 0; i < priorities.size(); i++) {
		pq.push(priorities[i]);
		q.push(make_pair(i, priorities[i]));
	}

	while (q.size() > 0) {
		int qIndex = q.front().first;
		int qPriority = q.front().second;

		if (pq.top() == qPriority) {
			answer++;
			if (qIndex == location) break;

			pq.pop();
			q.pop();
		}
		else {
			q.push(make_pair(qIndex, qPriority));
			q.pop();
		}
	}

	return answer;
}

int main() {
	int testCase, n, m, item;
	vector<int> result;

	cin >> testCase;
	while (testCase--) {
		cin >> n >> m;
		vector<int> arr;
		for (int i = 0; i < n; i++) {
			cin >> item;
			arr.push_back(item);
		}
		result.push_back(solution(arr, m));
	}

	for (auto item : result) {
		cout << item << endl;
	}

	return 0;
}
