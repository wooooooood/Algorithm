//https://programmers.co.kr/learn/courses/30/lessons/12911
#include <string>
#include <vector>
#include <bitset>

using namespace std;

int GetNumberOfOne(int n) {
    return bitset<20>(n).count();
}

int solution(int n) {
    int candidate = n + 1;
    int numOfOneInN = GetNumberOfOne(n);

    while (GetNumberOfOne(candidate) != numOfOneInN)
        candidate++;

    return candidate;
}
