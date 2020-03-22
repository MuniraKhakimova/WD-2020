a = []
n = int(input())
for i in range(n):
    s = input().split()
    for j in range(1, len(s)):
        s[j] = int(s[j])

    if s[0] == "append":
        a.append(s[1])
    elif s[0] == "extend":
        a.extend(s[1:])
    elif s[0] == "insert":
        a.insert(s[1], s[2])
    elif s[0] == "remove":
        a.remove(s[1])
    elif s[0] == "pop":
        a.pop()
    elif s[0] == "index":
        print(a.index(s[1]))
    elif s[0] == "count":
        print(a.count(s[1]))
    elif s[0] == "sort":
        a.sort()
    elif s[0] == "reverse":
        a.reverse()
    elif s[0] == "print":
        print(a)


"""
12
insert 0 5
insert 1 10
insert 0 6
print
remove 6
append 9
append 1
sort
print
pop
reverse
print
"""






