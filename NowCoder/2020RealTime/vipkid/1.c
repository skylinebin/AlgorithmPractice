#include <iostream>
#include<bits/stdc++.h>
using namespace std;
int a[1999999]={0};
int y;
int ss =0 ;
void dfs(int n,int cnt,int pre)
{
if(n==0)
{
ss++;
printf("%d=",y);
for(int i=1;i<cnt;i++)
{
printf("%d+",a[i]);
}
printf("%d",a[cnt]);
if(ss%4==0)
printf("\n");
else
{
if(a[1]!=y)
printf(";");
}
}
for(int i=pre;i<=n;i++)
{
a[++cnt] = i;
dfs(n-i,cnt,i);
cnt--;
}
}
int main()
{
int cnt =0 ;
int n;
cin>>n;
y = n;
dfs(n,0,1);
return 0;
}