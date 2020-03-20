def maximum(a, b, c, d):
    if (a >= b) & (a >= c) & (a >= d):
        return a
    elif (b >= a) & (b >= c) & (b >= d):
        return b
    elif (c >= a) & (c >= d) & (c >= b):
        return c
    return d


a, b, c, d = input().split()
print(maximum(a, b, c, d))