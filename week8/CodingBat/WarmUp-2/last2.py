def last2(str):
    if len(str) < 2:
        return 0

    last = str[len(str) - 2:]
    count = 0

    for i in range(len(str) - 2):
        sub = str[i:i + 2]
        if sub == last:
            count = count + 1

    return count
