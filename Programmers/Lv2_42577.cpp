//https://programmers.co.kr/learn/courses/30/lessons/42577
#include <string>
#include <vector>
using namespace std;

bool solution(vector<string> phone_book) {
    for (size_t i = 0; i<phone_book.size();i++){
        for (size_t j = 0; j<phone_book.size(); j++){
            if (i==j) break;

            string longString = phone_book[i].length()>phone_book[j].length()? phone_book[i]:phone_book[j];
            string shortString = phone_book[i].length()<=phone_book[j].length()? phone_book[i]:phone_book[j];
            
            if (longString.substr(0,shortString.length()) == shortString){
                return false;    
            }
        }
    }
    
    return true;
}
