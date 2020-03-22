n = int(input())
score_list = {}
for _ in range(n):
    name, *line = input().split()
    score = list(map(float, line))
    score_list[name] = score
name1 = input()
avg = sum(score_list[name1])/len(score_list[name1])
print("{0:.2f}".format(avg))

