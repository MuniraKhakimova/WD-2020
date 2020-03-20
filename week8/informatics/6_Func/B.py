def power(a=float, b=int):
    return a ** b


a, b = map(float, input().split())
print(power(a, b))
