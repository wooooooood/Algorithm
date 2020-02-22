//1182
#include <iostream>
#include <vector>
using namespace std;
vector<int> v;
int n, s, input, answer;
void dfs(int index, int sum, int numberOfSelectedElements) {

	//cout << "index: " << index << " sum: " << sum << " #selectedElements: " << numberOfSelectedElements << endl;
	if (index == n && numberOfSelectedElements == 0) return;

	if (index == n) {
		if (sum == s) {
			//cout << "---" << "index: " << index << " sum: " << sum << " #selectedElements: " << numberOfSelectedElements << endl;
			answer++;
		}

		return;
	}

	dfs(index + 1, sum + v.at(index), numberOfSelectedElements + 1);
	dfs(index + 1, sum, numberOfSelectedElements);
}

int solution(int s, vector<int> v) {
	dfs(0, 0, 0); //int 반환시 런타임 에러

	return answer;
}

int main()
{
	cin >> n >> s;

	for (int i = 0; i < n; i++) {
		cin >> input;
		v.push_back(input);
	}

	cout << solution(s, v);

	return 0;
}
