
#include <algorithm>
#include <iostream>
using namespace std;
int square[100][100];
int n = 0;

int CheckRow(int index) {
	int tmp = 0;
	int tmpRow[100];
	while (tmp < 100) {
		tmpRow[tmp] = square[index][tmp];
		tmp++;
	}

	sort(tmpRow, tmpRow + n, greater<int>());

	for (int i = 0; i < n - 1; i++) {
		if ((tmpRow[i] == tmpRow[i + 1]) || tmpRow[i+1] <1) return 1;
	}
	return 0;
}

int CheckCol(int index) {
	int tmp = 0;
	int tmpCol[100];
	while (tmp < 100) {
		tmpCol[tmp] = square[tmp][index];
		tmp++;
	}

	sort(tmpCol, tmpCol + n, greater<int>());

	for (int i = 0; i < n - 1; i++) {
		if (tmpCol[i] == tmpCol[i + 1] || tmpCol[i + 1] < 1) return 1;
	}
	return 0;
}

void solve() {
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			cin >> square[i][j];
		}
	}

	int sum = 0;
	int rowSum = 0;
	int colSum = 0;

	for (int i = 0; i < n; i++) {
		sum += square[i][i];
		rowSum += CheckRow(i);
		colSum += CheckCol(i);
	}

	cout << sum << " " << rowSum << " " << colSum;
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);

	int t, i = 1;
	cin >> t;
	while (t--) {
		cin >> n;
		cout << "Case #" << i << ": ";
		solve();
		cout << endl;
		++i;
	}
}