//https://www.acmicpc.net/problem/11053 #DP #LIS
#include <iostream>
#include <vector>

using namespace std;

int main ()
{
  int n, input;
  vector <int> v;
  vector <int> flag;
  int max = 1;

  cin >> n;
  for (size_t i = 0; i < n; i++)
    {
      cin >> input;
      v.push_back (input);
      flag.push_back(1);
    }
    
    for (int i = 0; i<n;i++){
        for (int j = 0;j<i;j++){
            if (v[j]<v[i] && flag[i]<flag[j]+1){
                flag[i] = flag[j]+1;
            }
            max = max>flag[i]? max:flag[i];
        }
    }
    
    cout<<max;

  return 0;
}
//첫번째 실패 반례 : 1, 1, 1
