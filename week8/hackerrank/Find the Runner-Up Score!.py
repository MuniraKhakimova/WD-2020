n = int(input())
a = list(set(map(int, input().split())))
a.sort()
print(a[-2])
