//https://www.acmicpc.net/problem/1260
#include <iostream>
#include <algorithm>
#include <queue>
#include <vector>
using namespace std;

bool adj[1001][1001];
int visited_dfs[1001];
int visited_bfs[1001];
queue<int> bfsQ;
int n, m, v, x, y;

void dfs_recursion(int node) {
	visited_dfs[node] = true;
	cout << node << " ";

	for (size_t i = 1; i <= n; i++) {
		if (adj[node][i] && !visited_dfs[i]) {
			dfs_recursion(i);
		}
	}
}

void bfs(int node) {
	visited_bfs[node] = true;
	cout << node << " ";
	bfsQ.push(node);
		
	while (!bfsQ.empty()) {
		int first = bfsQ.front();
		bfsQ.pop();

		for (size_t i = 1; i <= n; i++) {
			if (adj[first][i] && !visited_bfs[i]) {
				visited_bfs[i] = true;
				cout << i << " ";
				bfsQ.push(i);
			}
		}
	}
}

int main()
{
	cin >> n >> m >> v;

	while (m--) {
		cin >> x >> y;
		adj[x][y] = true;
		adj[y][x] = true;
	}

	dfs_recursion(v);
	cout << endl;
	bfs(v);

	return 0;
}
