#include "iostream"
#include "map"
using namespace std;
int main()
{
    int a[2] = {-1, -1};
    cout << a;
}
void twoSum(int *nums, int n, int s)
{
    map<int, int> a;
    for (int i = 0; i < n; i++)
    {
        if (a.count(s - nums[i]) > 0)
        {
            cout << "是";
            return;
        }
        a[nums[i]] = i;
    }
    cout << "否";
};