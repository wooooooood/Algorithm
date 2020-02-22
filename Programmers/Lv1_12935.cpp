#include<iostream>
#include<algorithm>
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> arr) {
	vector<int>::iterator minValue = min_element(arr.begin(), arr.end());
	arr.erase(arr.begin() + distance(arr.begin(), minValue));

	if (arr.size() == 0){
		arr.push_back(-1);
	}

	return arr;
}
