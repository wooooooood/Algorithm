//https://www.acmicpc.net/problem/1965 #DP #LIS
#include <iostream>
#include <vector>
using namespace std;

int main()
{
	int n, number;
	int max = 0;
	vector<int> items;
	vector<int> maxCountToCurrentPos;

	cin >> n;
	for (size_t i = 0; i < n; i++) {
		cin >> number;
		items.push_back(number);
	}

	for (size_t i = 0; i < n; i++) {
		maxCountToCurrentPos.push_back(1);
	}

	for (size_t i = 0; i < n; i++) {
		for (size_t j = 0; j < i; j++) {
			if (items[j] < items[i] && maxCountToCurrentPos[i] < maxCountToCurrentPos[j] + 1) {
				maxCountToCurrentPos[i] = maxCountToCurrentPos[j] + 1;
			}
			max = max > maxCountToCurrentPos[i] ? max : maxCountToCurrentPos[i];
		}
	}

	cout << max;

	return 0;
}
