def first_two(str):
    if len(str) >= 2:
        return str[:2]
    elif 2 > len(str) >= 1:
        return str
    else:
        return ""
