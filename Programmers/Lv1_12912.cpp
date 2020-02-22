//https://programmers.co.kr/learn/courses/30/lessons/12912
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

long long solution(int a, int b) {
    return (double)(a+b)/2 * (abs(b-a)+1);
}
