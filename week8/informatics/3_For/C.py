a = int(input())
b = int(input())

for i in range(a, b+1):
    c = i**(1/2)
    if c == int(c):
        print(i)